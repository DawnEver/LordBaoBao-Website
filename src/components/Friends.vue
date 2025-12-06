<template>
  <v-container  class="d-flex justify-center">
    <v-card elevated class="mx-auto pa-4" width="80%" style="opacity: 0.9;">
        <v-card-title  :class="`${cardTextClass} font-weight-black`" align="center">
      {{ $t("morefriends") }}
        </v-card-title>

        <v-row>
            <v-col v-for="(friend, i) in friends" :key="i" cols="12" sm="10" md="8" lg="6" xl="5">
            <v-card class="friend-box pa-4 d-flex align-center" flat>
                <img :src="friend.figPath" width="80" height="80" alt="avatar" style="border-radius: 50%; object-fit: cover; margin-right: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); border: 2px solid #eee;" />
                <div style="flex: 1; min-width: 0;">
                <div :class="`font-weight-bold ${itemTitleClass}`" style="font-size: 1.25rem; margin-bottom: 4px; display: flex; align-items: center;">
                    <a v-if="friend.link" :href="friend.link" target="_blank" style="text-decoration:none; color:inherit; font-weight: bold;">
                    {{ friend.name }}
                    <v-icon size="x-small" style="margin-left: 4px;">mdi-open-in-new</v-icon>
                    </a>
                    <span v-else>{{ friend.name }}</span>
                </div>
                <div :class="cardTextClass" style="color: #555; font-size: 1rem;">
                    {{ friend.content || $t('noDescription') }}
                </div>
                </div>
            </v-card>
            </v-col>
        </v-row>

    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

import useResponsiveFonts from '@/composables/useResponsiveFonts';
const { titleClass, itemTitleClass, cardTitleClass, cardTextClass, cardActionClass } = useResponsiveFonts()

import { useI18n } from 'vue-i18n'
const { locale } = useI18n();

const friends = computed(() => {
  const lang = locale.value;
  if (lang === "zhHans") {
    return [
      {
        name: '卢舒愉',
        figPath: 'https://lushuyu.site/resource/icon.jpg',
        content: 'NUS 计算机博士生,卢仙',
        link: 'https://lushuyu.site',
      },
      {
        name: 'Henry',
        figPath: 'https://evanescence0515.github.io/img/my_icon.jpg',
        content: 'NJU 医学博士生',
        link: 'https://evanescence0515.github.io/',
      },
      
    ]
  } else {
    return [
      {
        name: 'Lu Shuyu',
        figPath: 'https://lushuyu.site/resource/icon.jpg',
        content: 'NUS CS PhD Student',
        link: 'https://lushuyu.site',
        },
        {
        name: 'Henry',
        figPath: 'https://evanescence0515.github.io/img/my_icon.jpg',
        content: 'NJU Medicine PhD Student',
        link: 'https://evanescence0515.github.io/',
      },

    ]
  }
});

</script>
