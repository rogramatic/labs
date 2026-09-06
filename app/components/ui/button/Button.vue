<script setup lang="ts">
import type { HTMLAttributes, PropType } from "vue"
import type { ButtonVariants } from "."
import { Primitive } from "reka-ui"
import { cn } from "@/lib/utils"
import { buttonVariants } from "."

const props = defineProps({
  as: {
    type: [String, Object] as PropType<string | object>,
    default: "button",
  },

  asChild: {
    type: Boolean,
    default: false,
  },

  variant: {
    type: String as PropType<ButtonVariants["variant"]>,
    default: "default",
  },

  size: {
    type: String as PropType<ButtonVariants["size"]>,
    default: "default",
  },

  class: {
    type: [String, Array, Object] as PropType<HTMLAttributes["class"]>,
    default: undefined,
  },
})
</script>

<template>
  <Primitive
    data-slot="button"
    :as="props.as"
    :as-child="props.asChild"
    :class="cn(
      buttonVariants({
        variant: props.variant,
        size: props.size,
      }),
      props.class
    )"
  >
    <slot />
  </Primitive>
</template>