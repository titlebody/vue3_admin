<script setup lang="ts">
import type {Component} from "vue";

interface Props {
  is?:Component|string
}

const Props=defineProps<Props>();
</script>

<template>
<component v-if="typeof Props.is==='object'" :is="Props.is"></component>
  <i :class="Props.is" v-else></i>
</template>

<style scoped>

</style>