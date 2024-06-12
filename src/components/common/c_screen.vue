<script setup lang="ts">
import {ref} from "vue";

const isFullscreen=ref(false)
//全屏
function full() {
  let ele=document.documentElement
  if (ele.requestFullscreen) {
    ele.requestFullscreen();
  } else if (ele.mozRequestFullScreen) {
    ele.mozRequestFullScreen();
  } else if (ele.webkitRequestFullscreen) {
    ele.webkitRequestFullscreen();
  } else if (ele.msRequestFullscreen) {
    ele.msRequestFullscreen();
  }
  isFullscreen.value = true;
}

//退出全屏
function exitFullScreen(){
  if(document.exitFullScreen) {
    document.exitFullScreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if(document.msExitFullscreen) {
    document.msExitFullscreen();
  }
  isFullscreen.value = false
}

//是否是全屏


</script>

<template>
  <span title="全屏" v-if="!isFullscreen"><icon-fullscreen @click="full"/></span>
  <span title="退出全屏" v-else><icon-fullscreen-exit  @click="exitFullScreen"/></span>
</template>

<style scoped>

</style>