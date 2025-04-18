<script setup lang="ts"></script>

<template>
  <div class="grid w-full max-w-xl gap-4">
    <ZAccordion type="single" collapsible class="w-full">
      <ZAccordionItem value="item-1">
        <ZAccordionTrigger>Is it accessible?</ZAccordionTrigger>
        <ZAccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </ZAccordionContent>
      </ZAccordionItem>
      <ZAccordionItem value="item-2">
        <ZAccordionTrigger>Is it styled?</ZAccordionTrigger>
        <ZAccordionContent>
          Yes. It comes with default styles that matches the other components'
          aesthetic.
        </ZAccordionContent>
      </ZAccordionItem>

      <ZAccordionItem value="item-3">
        <ZAccordionTrigger>Is it animated?</ZAccordionTrigger>
        <ZAccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </ZAccordionContent>
      </ZAccordionItem>
    </ZAccordion>
  </div>
</template>
