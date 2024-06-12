<script setup lang="ts">
import {theme,setTheme,loadTheme} from "@/components/common/f_theme";
loadTheme()



</script>

<template>
<div>
  <span  v-if="theme===''" title="黑夜模式"><icon-moon-fill @click="setTheme('dark')"/></span>
  <span v-else title="白天模式"><icon-sun-fill @click="setTheme('')" /></span>
</div>
</template>

<style scoped>

</style>