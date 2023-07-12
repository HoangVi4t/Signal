<template>
  <div>
    <TopNavigation/>
    <router-view></router-view>
    <FooterSection/>
  </div>
</template>

<script setup>
import TopNavigation from "../components/structure/TopNavigation.vue";
import FooterSection from "../components/structure/FooterSection.vue";
</script>

