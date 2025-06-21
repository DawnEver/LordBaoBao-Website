<template>
  <div class="background">
    <img :src="imgSrc" class="bg-img" />
  </div>
  <div class="front">
    <ToolBar />
    <Card />
    <Footer />
  </div>
</template>

<style>

.background,.front {
  width: 100%;
  height: 115%;
  position: absolute;
}

.background {
  z-index: -1;
  overflow: hidden;
}

.front {
  z-index: 1;
  position: absolute;
}
.bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}


</style>

<script setup lang="ts">
import ToolBar from '@/components/ToolBar.vue';
import Card from '@/components/Card.vue';
import Footer from '@/components/Footer.vue';
import { ref, onMounted } from 'vue';

const imgSrc = ref('');

onMounted(async () => {
  try {
    const res = await fetch('https://picsum.photos/1920/1080');
    imgSrc.value = res.url;
  } catch (e) {
     const res = await fetch('https://bing.biturl.top/?resolution=1920&format=image');
  }
});


</script>