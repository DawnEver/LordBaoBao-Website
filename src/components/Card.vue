<template>
    <v-container class="d-flex justify-center">
        <v-card elevated class="mx-auto pa-8" width="80%" style="opacity: 0.9;">
            <v-card-text>
            <p v-html="markdown.render(readmeTxt)"></p>
            </v-card-text>
        </v-card>
    </v-container>
</template>


<script setup lang="ts">

import markdownIt from 'markdown-it';

const markdown = new markdownIt({
    html: true,
    xhtmlOut: true,
    breaks: true,
    linkify: true,
    typographer: true
})

import { ref, onMounted } from 'vue';

import { watch, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const readmeTxt = ref(locale.value === 'en' ? 'Loading README from https://github.com/DawnEver' : '正在从 https://github.com/DawnEver 加载 README...');

const readmeUrl = computed(() => {
    return locale.value === 'en'
        ? 'https://raw.githubusercontent.com/DawnEver/DawnEver/refs/heads/master/README-en.md'
        : 'https://raw.githubusercontent.com/DawnEver/DawnEver/refs/heads/master/README.md';
});

const fetchReadme = async () => {
    const res = await fetch(readmeUrl.value);
    if (!res.ok) {
        if (locale.value === 'zhHans') {
            readmeTxt.value = '无法获取 README，请检查网络连接或稍后再试。';
        }
        else {
            readmeTxt.value = 'Error fetching README, please check your network connection or try again later.';
        }
        return;
    }
    else if (locale.value === 'zhHans') {
        const text = await res.text();
        readmeTxt.value = text.split('\n').slice(2).join('\n');
        return;
    }
    readmeTxt.value = await res.text();
};

onMounted(fetchReadme);

watch(locale, fetchReadme);
</script>