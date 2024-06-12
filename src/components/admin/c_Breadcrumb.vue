<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute();



</script>

<template>
  <a-breadcrumb>
    <template  v-for="item in route.matched" :key="item.name">
      <a-breadcrumb-item>{{item.meta?.title}}</a-breadcrumb-item>
    </template>
  </a-breadcrumb>
</template>

<style scoped>

</style>