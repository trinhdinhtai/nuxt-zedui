<script setup lang="ts"></script>

<template>
  <div
    class="flex w-full flex-wrap items-start gap-8 lg:*:data-[slot=card]:basis-1/4 flex-col 2xl:flex-row"
  >
    <ZCard class="w-full max-w-sm">
      <ZCardHeader>
        <ZCardTitle>Login to your account</ZCardTitle>
        <ZCardDescription>
          Enter your email below to login to your account
        </ZCardDescription>
      </ZCardHeader>
      <ZCardContent>
        <form>
          <div class="flex flex-col gap-6">
            <div class="grid gap-2">
              <ZLabel html-for="email">Email</ZLabel>
              <ZInput
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div class="grid gap-2">
              <div class="flex items-center">
                <ZLabel html-for="password">Password</ZLabel>
                <a
                  href="#"
                  class="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <ZInput id="password" type="password" required />
            </div>
          </div>
        </form>
      </ZCardContent>
      <ZCardFooter class="flex-col gap-2">
        <ZButton type="submit" class="w-full"> Login </ZButton>
        <ZButton variant="outline" class="w-full"> Login with Google </ZButton>
        <div class="mt-4 text-center text-sm">
          Don't have an account?
          <a href="#" class="underline underline-offset-4"> Sign up </a>
        </div>
      </ZCardFooter>
    </ZCard>
    <ZCard>
      <ZCardHeader>
        <ZCardTitle>Meeting Notes</ZCardTitle>
        <ZCardDescription>
          Transcript from the meeting with the client.
        </ZCardDescription>
      </ZCardHeader>
      <ZCardContent class="text-sm">
        <p>
          Client requested dashboard redesign with focus on mobile
          responsiveness.
        </p>
        <ol class="mt-4 flex list-decimal flex-col gap-2 pl-6">
          <li>New analytics widgets for daily/weekly metrics</li>
          <li>Simplified navigation menu</li>
          <li>Dark mode support</li>
          <li>Timeline: 6 weeks</li>
          <li>Follow-up meeting scheduled for next Tuesday</li>
        </ol>
      </ZCardContent>
      <ZCardFooter>
        <div
          class="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale"
        >
          <ZAvatar>
            <ZAvatarImage
              src="https://github.com/trinhdinhtai.png"
              alt="@trinhdinhtai"
            />
            <ZAvatarFallback>TĐ</ZAvatarFallback>
          </ZAvatar>
          <ZAvatar>
            <ZAvatarImage src="https://github.com/leerob.png" alt="@leerob" />
            <ZAvatarFallback>LR</ZAvatarFallback>
          </ZAvatar>
          <ZAvatar>
            <ZAvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <ZAvatarFallback>ER</ZAvatarFallback>
          </ZAvatar>
        </div>
      </ZCardFooter>
    </ZCard>
    <ZCard>
      <ZCardHeader>
        <ZCardTitle>Is this an image?</ZCardTitle>
        <ZCardDescription>This is a card with an image.</ZCardDescription>
      </ZCardHeader>
      <ZCardContent class="px-0">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          class="aspect-video object-cover"
          width="500"
          height="500"
        />
      </ZCardContent>
      <ZCardFooter class="flex items-center gap-2">
        <ZBadge variant="outline"> <ZIcon name="i-lucide-bed" /> 4 </ZBadge>
        <ZBadge variant="outline"> <ZIcon name="i-lucide-bath" /> 2 </ZBadge>
        <ZBadge variant="outline">
          <ZIcon name="i-lucide-land-plot" /> 350m²
        </ZBadge>
        <div class="ml-auto font-medium tabular-nums">$135,000</div>
      </ZCardFooter>
    </ZCard>
    <div
      class="flex w-full flex-wrap items-start gap-8 md:*:data-[slot=card]:basis-1/4"
    >
      <ZCard>
        <ZCardContent class="text-sm"> Content Only </ZCardContent>
      </ZCard>
      <ZCard>
        <ZCardHeader>
          <ZCardTitle>Header Only</ZCardTitle>
          <ZCardDescription>
            This is a card with a header and a description.
          </ZCardDescription>
        </ZCardHeader>
      </ZCard>
      <ZCard>
        <ZCardHeader>
          <ZCardTitle>Header and Content</ZCardTitle>
          <CardDescription>
            This is a card with a header and a content.
          </CardDescription>
        </ZCardHeader>
        <ZCardContent class="text-sm"> Content </ZCardContent>
      </ZCard>
      <ZCard>
        <ZCardFooter class="text-sm"> Footer Only </ZCardFooter>
      </ZCard>
      <ZCard>
        <ZCardHeader>
          <ZCardTitle>Header + Footer</ZCardTitle>
          <ZCardDescription>
            This is a card with a header and a footer.
          </ZCardDescription>
        </ZCardHeader>
        <ZCardFooter class="text-sm"> Footer </ZCardFooter>
      </ZCard>
      <ZCard>
        <ZCardContent class="text-sm"> Content </ZCardContent>
        <ZCardFooter class="text-sm"> Footer </ZCardFooter>
      </ZCard>
      <ZCard>
        <ZCardHeader>
          <ZCardTitle>Header + Footer</ZCardTitle>
          <ZCardDescription>
            This is a card with a header and a footer.
          </ZCardDescription>
        </ZCardHeader>
        <ZCardContent class="text-sm"> Content </ZCardContent>
        <ZCardFooter class="text-sm"> Footer </ZCardFooter>
      </ZCard>
    </div>
  </div>
</template>
