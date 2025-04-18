<script setup lang="ts">
import { toast } from 'vue-sonner';
import { ref } from 'vue';
import { CheckCircle2, AlertCircle, Info, XCircle } from 'lucide-vue-next';

const title = ref('Notification Title');
const description = ref('This is a description of the notification.');
const position = ref('bottom-right');

function showDefault() {
  toast(title.value);
}

function showWithDescription() {
  toast(title.value, {
    description: description.value,
  });
}

function showSuccess() {
  toast.success(title.value, {
    description: description.value,
  });
}

function showError() {
  toast.error(title.value, {
    description: description.value,
  });
}

function showInfo() {
  toast.info(title.value, {
    description: description.value,
  });
}

function showWarning() {
  toast.warning(title.value, {
    description: description.value,
  });
}

function showWithAction() {
  toast(title.value, {
    description: description.value,
    action: {
      label: 'Undo',
      onClick: () => {
        toast.success('Action undone!');
      },
    },
  });
}

interface UserData {
  name: string;
}

function showWithPromise() {
  const promise = new Promise<UserData>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve({ name: 'John Doe' });
      } else {
        reject(new Error('Failed to load data'));
      }
    }, 2000);
  });

  toast.promise(promise, {
    loading: 'Loading data...',
    success: (data: UserData) => `Successfully loaded ${data.name}`,
    error: (err: Error) => `${err.message}`,
  });
}
</script>

<template>
  <div class="flex flex-col gap-8">
    <!-- Add ZToaster component with position -->
    <ZToaster :position="position" />

    <!-- Basic Toasts -->
    <div class="flex flex-wrap gap-2">
      <ZButton variant="outline" @click="showDefault">Default</ZButton>
      <ZButton variant="outline" @click="showWithDescription">
        With Description
      </ZButton>
    </div>

    <!-- Toast Types -->
    <div class="flex flex-wrap gap-2">
      <ZButton variant="default" @click="showSuccess">
        <CheckCircle2 class="mr-2 size-4" />
        Success
      </ZButton>
      <ZButton variant="destructive" @click="showError">
        <XCircle class="mr-2 size-4" />
        Error
      </ZButton>
      <ZButton variant="outline" @click="showInfo">
        <Info class="mr-2 size-4" />
        Info
      </ZButton>
      <ZButton variant="outline" @click="showWarning">
        <AlertCircle class="mr-2 size-4" />
        Warning
      </ZButton>
    </div>

    <!-- Advanced Toasts -->
    <div class="flex flex-wrap gap-2">
      <ZButton variant="outline" @click="showWithAction"> With Action </ZButton>
      <ZButton variant="outline" @click="showWithPromise">
        With Promise
      </ZButton>
    </div>
  </div>
</template>
