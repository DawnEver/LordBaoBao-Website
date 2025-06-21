import { computed, onMounted, ref } from 'vue';
import { useDisplay } from 'vuetify';

export default function useResponsiveFonts() {
  const { smAndDown} = useDisplay();
  const isWeChat = ref(false);

  onMounted(() => {
    const ua = navigator.userAgent.toLowerCase();
    isWeChat.value = ua.includes('micromessenger');
  });

  const titleClass = computed(() => {
      if (isWeChat.value) return 'text-h4'; // 微信端更小字体
      if (smAndDown.value) return 'text-h6'; // 移动端（小屏幕）
  return 'text-h2';// 电脑端（正常字体）
  });

  const itemTitleClass = computed(() => {
    if (isWeChat.value) return 'text-body-2';
    if (smAndDown.value) return 'text-body-2';
    return 'text-h5'; 
  });
  
  const cardTitleClass = computed(() => {
    if (smAndDown.value) return 'text-subtitle-3'; 
    if (smAndDown.value) return 'text-subtitle-3'; 
    return 'text-h4'; 
  });
  
  const cardTextClass = computed(() => {
    if (smAndDown.value) return 'text-body-2';
    return 'text-h6'; 
  });
  
  const cardActionClass = computed(() => {
    if (smAndDown.value) return 'text-body-2';
    return 'text-h6';
  });

  return {
    titleClass,
    itemTitleClass,
    cardTitleClass,
    cardTextClass,
    cardActionClass
  };
}