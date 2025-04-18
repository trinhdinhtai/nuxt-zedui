<script setup lang="ts"></script>

<template>
  <div class="grid max-w-4xl gap-4">
    <ZAlert>
      <ZIcon name="i-lucide-circle-check" />
      <ZAlertTitle>Success! Your changes have been saved</ZAlertTitle>
      <ZAlertDescription>
        This is an alert with icon, title and description.
      </ZAlertDescription>
    </ZAlert>

    <ZAlert>
      <ZIcon name="i-lucide-bookmark-check" />
      <ZAlertDescription>
        This one has an icon and a description only. No title.
      </ZAlertDescription>
    </ZAlert>

    <ZAlert>
      <ZAlertDescription>
        This one has a description only. No title. No icon.
      </ZAlertDescription>
    </ZAlert>

    <ZAlert>
      <ZIcon name="i-lucide-popcorn" />
      <ZAlertTitle>Let's try one with icon and title.</ZAlertTitle>
    </ZAlert>

    <ZAlert>
      <ZIcon name="i-lucide-shield-check" />
      <ZAlertTitle>
        This is a very long alert title that demonstrates how the component
        handles extended text content and potentially wraps across multiple
        lines
      </ZAlertTitle>
    </ZAlert>

    <ZAlert>
      <ZIcon name="i-lucide-gift" />
      <ZAlertDescription>
        This is a very long alert description that demonstrates how the
        component handles extended text content and potentially wraps across
        multiple lines
      </ZAlertDescription>
    </ZAlert>

    <ZAlert>
      <ZIcon name="i-lucide-alert-circle" />
      <ZAlertTitle>
        This is an extremely long alert title that spans multiple lines to
        demonstrate how the component handles very lengthy headings while
        maintaining readability and proper text wrapping behavior
      </ZAlertTitle>
      <ZAlertDescription>
        This is an equally long description that contains detailed information
        about the alert. It shows how the component can accommodate extensive
        content while preserving proper spacing, alignment, and readability
        across different screen sizes and viewport widths. This helps ensure the
        user experience remains consistent regardless of the content length.
      </ZAlertDescription>
    </ZAlert>

    <ZAlert variant="destructive">
      <ZIcon name="i-lucide-alert-circle" />
      <ZAlertTitle>Something went wrong!</ZAlertTitle>
      <ZAlertDescription>
        Your session has expired. Please log in again.
      </ZAlertDescription>
    </ZAlert>

    <ZAlert variant="destructive">
      <ZIcon name="i-lucide-alert-circle" />
      <ZAlertTitle>Unable to process your payment.</ZAlertTitle>
      <ZAlertDescription>
        <p>Please verify your billing information and try again.</p>
        <ul class="list-inside list-disc text-sm">
          <li>Check your card details</li>
          <li>Ensure sufficient funds</li>
          <li>Verify billing address</li>
        </ul>
      </ZAlertDescription>
    </ZAlert>

    <ZAlert>
      <ZIcon name="i-lucide-check-circle" />
      <ZAlertTitle class="max-w-[calc(100%-4rem)] overflow-ellipsis">
        The selected emails have been marked as spam.
      </ZAlertTitle>
      <ZButton
        size="sm"
        variant="outline"
        class="absolute top-2.5 right-3 h-6 shadow-none"
      >
        Undo
      </ZButton>
    </ZAlert>

    <ZAlert
      class="border-amber-50 bg-amber-50 text-amber-900 dark:border-amber-950 dark:bg-amber-950 dark:text-amber-100"
    >
      <ZIcon name="i-lucide-check-circle" />
      <ZAlertTitle>Plot Twist: This Alert is Actually Amber!</ZAlertTitle>
      <ZAlertDescription>
        This one has custom colors for light and dark mode.
      </ZAlertDescription>
    </ZAlert>
  </div>
</template>
