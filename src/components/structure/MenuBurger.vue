<template>
  <div class="shadow-gray-300 h-[52px] flex items-center z-30">
    <button
        @click="open = true"
        class="
            bg-transparent
            font-semibold
            py-1
            flex
            cursor-pointer
            "
    >
      <MenuIcon :class="{hidden : open === true}"/>
    </button>
    <button
        v-if="open === true"
        @click="open = false"
        class="
            bg-transparent
            font-semibold
            flex
            cursor-pointer
            "
    >
      <CloseIcon :class="{active : open === false}"/>
    </button>

    <div class="absolute" v-if="open === true">
      <div class="fixed top-[53px] w-full py-2 left-0 bg-white drop-shadow-xl py-[0,5rem] ">
        <ul>
          <router-link to="/get-signal">
            <li class="font-inter text-base py-2 px-3 cursor-pointer hover:text-[#2C6BED]">
              Get Signal
            </li>
          </router-link>
          <router-link to="/help">
            <li class="font-inter text-base py-2 px-3 cursor-pointer hover:text-[#2C6BED]">
              Help
            </li>
          </router-link>
          <router-link to="/blogs">
            <li class="font-inter text-base py-2 px-3 cursor-pointer hover:text-[#2C6BED]">
              Blog
            </li>
          </router-link>
          <router-link to="/developers">
            <li class="font-inter text-base py-2 px-3 cursor-pointer hover:text-[#2C6BED]">
              Developers
            </li>
          </router-link>
          <router-link to="/carrers">
            <li class="font-inter text-base py-2 px-3 cursor-pointer hover:text-[#2C6BED]">
              Careers
            </li>
          </router-link>
          <router-link to="/donate">
            <li class="font-inter text-base py-2 px-3 cursor-pointer hover:text-[#2C6BED]">
              Donate
            </li>
          </router-link>
          <li class="font-inter text-base py-2 px-3 cursor-pointer hover:text-[#2C6BED]">
            <a href="https://twitter.com/signalapp">
              <img class="w-5" src="/icons/twitter.png" alt="">
            </a>
          </li>
          <li class="font-inter text-base py-2 px-3 cursor-pointer hover:text-[#2C6BED]">
            <a href="https://instagram.com/signal_app/">
              <img class="w-5" src="/icons/instagram.png" alt="">
            </a>
          </li>
          <li class="font-inter text-base py-2 px-3 cursor-pointer hover:text-[#2C6BED] flex items-center">
            <img class="w-5" src="/icons/solid_globe.png" alt="">
            <span class="ml-1">English</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script setup>
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import CloseIcon from 'vue-material-design-icons/Close.vue';

import {ref} from "vue";

let open = ref(false)
</script>

<style scoped>
.hidden {
  display: none;
}

.active {
  display: block;
}
</style>

