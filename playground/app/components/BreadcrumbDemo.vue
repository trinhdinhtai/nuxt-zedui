<script setup lang="ts"></script>

<template>
  <div class="">
    <ZBreadcrumb>
      <ZBreadcrumbList>
        <ZBreadcrumbItem>
          <ZBreadcrumbLink href="/"> Home </ZBreadcrumbLink>
        </ZBreadcrumbItem>

        <ZBreadcrumbSeparator />

        <ZBreadcrumbItem>
          <ZDropdownMenu>
            <ZDropdownMenuTrigger class="flex items-center gap-1">
              <ZBreadcrumbEllipsis class="h-4 w-4" />
              <span class="sr-only">Toggle menu</span>
            </ZDropdownMenuTrigger>
            <ZDropdownMenuContent align="start">
              <ZDropdownMenuItem>Documentation</ZDropdownMenuItem>
              <ZDropdownMenuItem>Themes</ZDropdownMenuItem>
              <ZDropdownMenuItem>GitHub</ZDropdownMenuItem>
            </ZDropdownMenuContent>
          </ZDropdownMenu>
        </ZBreadcrumbItem>

        <ZBreadcrumbSeparator />

        <ZBreadcrumbItem>
          <ZBreadcrumbLink href="/components"> Components </ZBreadcrumbLink>
        </ZBreadcrumbItem>

        <ZBreadcrumbSeparator />

        <ZBreadcrumbItem>
          <ZBreadcrumbLink href="/components/breadcrumb">
            Breadcrumb
          </ZBreadcrumbLink>
        </ZBreadcrumbItem>
      </ZBreadcrumbList>
    </ZBreadcrumb>
  </div>
</template>
