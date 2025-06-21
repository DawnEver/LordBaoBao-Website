<template>
    <v-card>
        <v-toolbar color="primary">
            <v-toolbar-title>
                <img src="https://oss.hi-motor.site/web/logo/hi-motor_white.svg" alt="logo" width="60"/>
            </v-toolbar-title>
            <v-spacer />

            <v-btn @click="toggleLanguage">
                <v-icon>mdi-translate</v-icon>
            </v-btn>
            <v-btn @click="toggleTheme">
                <v-icon>mdi-theme-light-dark</v-icon>
            </v-btn>
        </v-toolbar>
    </v-card>
</template>

<script setup lang="ts">
import useResponsiveFonts from '@/composables/useResponsiveFonts';
const { titleClass,
    itemTitleClass,
    cardTitleClass,
    cardTextClass,
    cardActionClass} = useResponsiveFonts();

import { useI18n } from 'vue-i18n' // 多语言
const { locale } = useI18n() // t方法取出，t('code')使用

function toggleLanguage() {
    const currentLanguage = locale.value;
    const nextLanguage = currentLanguage === "en" ? "zhHans" : "en";
    locale.value = nextLanguage;
    if (nextLanguage === "en") {
        document.title = "Mingyang Bao | @Lord BaoBao"
    } else {
        document.title = "包铭阳 | @Lord包包"
    }
}
import { useTheme } from 'vuetify'

const theme = useTheme()
function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
// https://juejin.cn/post/7057779411524780062
// svg颜色
</script>