<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { setLocale, type SupportedLocale } from '@/app/i18n'

const { locale } = useI18n()
const options: Array<{ value: SupportedLocale; label: string }> = [
  { value: 'en', label: '🇺🇸 English' },
  { value: 'ro', label: '🇷🇴 Română' },
  { value: 'de', label: '🇩🇪 Deutsch' },
]
</script>

<template>
  <USelect
    :model-value="locale as SupportedLocale"
    :items="options"
    @update:model-value="
      (value) => {
        $i18n.locale = value
        setLocale(value)
      }
    "
  />
</template>

<style scoped></style>
