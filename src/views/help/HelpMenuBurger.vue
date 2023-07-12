<template>
  <div class="shadow-gray-300 h-[52px] flex items-center z-10">
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

    <div v-if="open === true">
      <div class="fixed top-[71px] absolute w-full py-2 left-0 bg-white drop-shadow-xl py-[0,5rem] shadow-[0_0_4px_0_rgba(0,0,0,0.15),0_4px_10px_0_rgba(0,0,0,0.1)]">
        <ul>
          <li class="font-inter text-base py-2 px-3 cursor-pointer hover:text-[#2C6BED]">
            <router-link to="/main">Signal.org</router-link>
          </li>
          <li class="font-inter text-base py-2 px-3 cursor-pointer hover:text-[#2C6BED]">
            <router-link to="/donate">Donate</router-link>
          </li>
          <li class="font-inter text-base py-2 px-3 cursor-pointer hover:text-[#2C6BED]">
            <router-link to="/help/contact">Contact Us</router-link>
          </li>
          <li class="font-inter text-base py-2 px-3 cursor-pointer hover:text-[#2C6BED] flex items-center">
            <LanguageSwitcher/>
            <ChevronDownIcon/>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script setup>
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import CloseIcon from 'vue-material-design-icons/Close.vue';
import ChevronDownIcon from 'vue-material-design-icons/ChevronDown.vue';
import LanguageSwitcher from "../../components/LanguageSwitcher.vue";
import {ref} from "vue";

let open = ref(false)
</script>

<style scoped>
.hidden{
  display: none;
}

.active{
  display: block;
}
</style>

