<script setup lang="ts">
import { z } from 'zod';
import { useForm, Field as FormField } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { toast } from 'vue-sonner';
import { format } from 'date-fns';
import { fromDate, getLocalTimeZone } from '@internationalized/date';

const items = [
  {
    id: 'recents',
    label: 'Recents',
  },
  {
    id: 'home',
    label: 'Home',
  },
  {
    id: 'applications',
    label: 'Applications',
  },
  {
    id: 'desktop',
    label: 'Desktop',
  },
  {
    id: 'downloads',
    label: 'Downloads',
  },
  {
    id: 'documents',
    label: 'Documents',
  },
] as const;

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  bio: z
    .string()
    .min(10, {
      message: 'Bio must be at least 10 characters.',
    })
    .max(160, {
      message: 'Bio must not be longer than 30 characters.',
    }),
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
  type: z.enum(['all', 'mentions', 'none'], {
    required_error: 'You need to select a notification type.',
  }),
  mobile: z.boolean().default(false).optional(),
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.',
  }),
  dob: z.date({
    required_error: 'A date of birth is required.',
  }),
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
});

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(FormSchema),
  initialValues: {
    username: '',
    items: ['recents', 'home'],
  },
});

const onSubmit = handleSubmit((data: z.infer<typeof FormSchema>) => {
  toast('You submitted the following values:', {
    description: h(
      'pre',
      { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
      h('code', { class: 'text-white' }, JSON.stringify(data, null, 2))
    ),
  });
});
</script>

<template>
  <form class="grid w-full max-w-sm gap-6" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="username">
      <ZFormItem>
        <ZFormLabel>Username</ZFormLabel>
        <ZFormControl>
          <ZInput placeholder="taitd" v-bind="componentField" />
        </ZFormControl>
        <ZFormDescription> This is your public display name. </ZFormDescription>
        <ZFormMessage />
      </ZFormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="email">
      <ZFormItem>
        <ZFormLabel>Email</ZFormLabel>
        <ZSelect
          :model-value="componentField.modelValue"
          @update:model-value="componentField['onUpdate:modelValue']"
        >
          <ZFormControl>
            <ZSelectTrigger>
              <ZSelectValue placeholder="Select a verified email to display" />
            </ZSelectTrigger>
          </ZFormControl>
          <ZSelectContent>
            <ZSelectItem value="m@example.com"> m@example.com </ZSelectItem>
            <ZSelectItem value="m@google.com"> m@google.com </ZSelectItem>
            <ZSelectItem value="m@support.com"> m@support.com </ZSelectItem>
          </ZSelectContent>
        </ZSelect>
        <ZFormDescription>
          You can manage email addresses in your email settings.
        </ZFormDescription>
        <ZFormMessage />
      </ZFormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="bio">
      <ZFormItem>
        <ZFormLabel>Bio</ZFormLabel>
        <ZFormControl>
          <ZTextarea
            placeholder="Tell us a little bit about yourself"
            class="resize-none"
            v-bind="componentField"
          />
        </ZFormControl>
        <ZFormDescription>
          You can <span>@mention</span> other users and organizations.
        </ZFormDescription>
        <ZFormMessage />
      </ZFormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="type">
      <ZFormItem class="flex flex-col gap-3">
        <ZFormLabel>Notify me about</ZFormLabel>
        <ZFormControl>
          <ZRadioGroup
            :model-value="componentField.modelValue"
            class="flex flex-col gap-3"
            @update:model-value="componentField['onUpdate:modelValue']"
          >
            <ZFormItem class="flex items-center gap-2">
              <ZFormControl>
                <ZRadioGroupItem value="all" />
              </ZFormControl>
              <ZFormLabel class="font-normal"> All new messages </ZFormLabel>
            </ZFormItem>
            <ZFormItem class="flex items-center gap-2">
              <ZFormControl>
                <ZRadioGroupItem value="mentions" />
              </ZFormControl>
              <ZFormLabel class="font-normal">
                Direct messages and mentions
              </ZFormLabel>
            </ZFormItem>
            <ZFormItem class="flex items-center gap-2">
              <ZFormControl>
                <ZRadioGroupItem value="none" />
              </ZFormControl>
              <ZFormLabel class="font-normal"> Nothing </ZFormLabel>
            </ZFormItem>
          </ZRadioGroup>
        </ZFormControl>
        <ZFormMessage />
      </ZFormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="mobile">
      <ZFormItem
        class="flex flex-row items-start gap-3 rounded-md border p-4 shadow-xs"
      >
        <ZFormControl>
          <ZCheckbox
            :model-value="componentField.modelValue"
            @update:model-value="componentField['onUpdate:modelValue']"
          />
        </ZFormControl>
        <div class="flex flex-col gap-1">
          <ZFormLabel class="leading-snug">
            Use different settings for my mobile devices
          </ZFormLabel>
          <ZFormDescription class="leading-snug">
            You can manage your mobile notifications in the mobile settings
            page.
          </ZFormDescription>
        </div>
      </ZFormItem>
    </FormField>

    <FormField v-slot="{ field }" name="items">
      <ZFormItem class="flex flex-col gap-4">
        <div>
          <ZFormLabel class="text-base"> Sidebar </ZFormLabel>
          <ZFormDescription>
            Select the items you want to display in the sidebar.
          </ZFormDescription>
        </div>
        <div class="flex flex-col gap-2">
          <ZFormField v-for="item in items" :key="item.id" name="items">
            <ZFormItem :key="item.id" class="flex items-start gap-3">
              <ZFormControl>
                <ZCheckbox
                  :model-value="field.value.includes(item.id)"
                  @update:model-value="(checked) => {
                    checked
                      ? field.onChange([...field.value, item.id])
                      : field.onChange(
                        field.value?.filter(
                          (value: any) => value !== item.id,
                        ),
                      )
                  }"
                />
              </ZFormControl>
              <ZFormLabel class="text-sm leading-tight font-normal">
                {{ item.label }}
              </ZFormLabel>
            </ZFormItem>
          </ZFormField>
        </div>
        <ZFormMessage />
      </ZFormItem>
    </FormField>

    <FormField v-slot="{ value, setValue }" name="dob">
      <ZFormItem class="flex flex-col">
        <ZFormLabel>Date of birth</ZFormLabel>
        <ZPopover>
          <ZPopoverTrigger as-child>
            <ZFormControl>
              <ZButton
                variant="outline"
                :class="`w-[240px] pl-3 text-left font-normal ${
                  !value && 'text-muted-foreground'
                }`"
              >
                <span>
                  {{ value ? format(value, 'PPP') : 'Pick a date' }}
                </span>
                <ZIcon
                  name="i-lucide-calendar"
                  class="ml-auto h-4 w-4 opacity-50"
                />
              </ZButton>
            </ZFormControl>
          </ZPopoverTrigger>
          <ZPopoverContent class="w-auto p-0" align="start">
            <ZCalendar
              mode="single"
              :max-value="fromDate(new Date(), getLocalTimeZone())"
              initial-focus
              :model-value="
                value ? fromDate(value, getLocalTimeZone()) : undefined
              "
              @update:model-value="
                (val) => setValue(val?.toDate(getLocalTimeZone()))
              "
            />
          </ZPopoverContent>
        </ZPopover>
        <ZFormDescription>
          Your date of birth is used to calculate your age.
        </ZFormDescription>
        <ZFormMessage />
      </ZFormItem>
    </FormField>

    <div>
      <h3 class="mb-4 text-lg font-medium">Email Notifications</h3>
      <div class="flex flex-col gap-4">
        <FormField v-slot="{ componentField }" name="marketing_emails">
          <ZFormItem
            class="flex flex-row items-start justify-between rounded-lg border p-4 shadow-xs"
          >
            <div class="flex flex-col gap-0.5">
              <ZFormLabel class="leading-normal"> Marketing emails </ZFormLabel>
              <ZFormDescription class="leading-snug">
                Receive emails about new products, features, and more.
              </ZFormDescription>
            </div>
            <ZFormControl>
              <ZSwitch
                :model-value="componentField.modelValue"
                @update:model-value="componentField['onUpdate:modelValue']"
              />
            </ZFormControl>
          </ZFormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="security_emails">
          <ZFormItem
            class="flex flex-row items-start justify-between rounded-lg border p-4 shadow-xs"
          >
            <div class="flex flex-col gap-0.5 opacity-60">
              <ZFormLabel class="leading-normal"> Security emails </ZFormLabel>
              <ZFormDescription class="leading-snug">
                Receive emails about your account security.
              </ZFormDescription>
            </div>
            <ZFormControl>
              <ZSwitch
                :model-value="componentField.modelValue"
                disabled
                aria-readonly
                @update:model-value="componentField['onUpdate:modelValue']"
              />
            </ZFormControl>
          </ZFormItem>
        </FormField>
      </div>
    </div>

    <ZButton type="submit"> Submit </ZButton>
  </form>
</template>
