<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import * as locales from '@nuxt/ui/locale'
import type { SupportedLocale } from '@/app/i18n'
import AppHeader from '@/app/layout/AppHeader.vue'

const { locale } = useI18n()
</script>

<template>
  <UApp :locale="locales[locale as SupportedLocale]">
    <UContainer class="max-w-dvw">
      <AppHeader />
      <RouterView />
    </UContainer>
  </UApp>
</template>

<style scoped></style>
