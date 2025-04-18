<script setup lang="ts"></script>

<template>
  <ZAlertDialog>
    <ZAlertDialogTrigger as-child>
      <ZButton variant="outline"> Show Dialog </ZButton>
    </ZAlertDialogTrigger>
    <ZAlertDialogContent>
      <ZAlertDialogHeader>
        <ZAlertDialogTitle>Are you absolutely sure?</ZAlertDialogTitle>
        <ZAlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </ZAlertDialogDescription>
      </ZAlertDialogHeader>
      <ZAlertDialogFooter>
        <ZAlertDialogCancel>Cancel</ZAlertDialogCancel>
        <ZAlertDialogAction>Continue</ZAlertDialogAction>
      </ZAlertDialogFooter>
    </ZAlertDialogContent>
  </ZAlertDialog>
</template>
