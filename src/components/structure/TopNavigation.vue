<template>
  <div class="fixed top-0 left-0 right-0 z-30 bg-white border-b-[1px] border-[#ebeaeb] ">
    <div
        class=" w-full mx-auto 2xl:max-w-[1344px] md:max-lg:max-w-[940px] lg:max-xl:max-w-[996px] xl:max-2xl:max-w-[1320px]  max-lg:px-[18px] flex justify-between items-center py-4 max-lg:py-0">
      <router-link to="/main" class="w-[150px] cursor-pointer">
        <img class="max-lg:h-[30px]" src="/images/logo_signal.png" alt="">
      </router-link>
      <div class="flex items-center max-lg:hidden">
        <ul class="flex items-center">
          <router-link to="/get-signal" class="text-[#1b1b1b] text-base font-inter cursor-pointer flex justify-center items-center px-[0.75rem] py-[0.5rem] hover:text-[#2C6BED]">
            Get Signal
          </router-link>
          <router-link to="/help" class="text-[#1b1b1b] text-base font-inter cursor-pointer flex justify-center items-center px-[0.75rem] py-[0.5rem] hover:text-[#2C6BED]">
            Help
          </router-link>
          <router-link to="/blogs" class="text-[#1b1b1b] text-base font-inter cursor-pointer flex justify-center items-center px-[0.75rem] py-[0.5rem] hover:text-[#2C6BED]">
            Blog
          </router-link>
          <router-link to="/developers" class="text-[#1b1b1b] text-base font-inter  cursor-pointer flex justify-center items-center px-[0.75rem] py-[0.5rem] hover:text-[#2C6BED]">
            Developers
          </router-link>
          <router-link to="/careers" class="text-[#1b1b1b] text-base font-inter  cursor-pointer flex justify-center items-center px-[0.75rem] py-[0.5rem] hover:text-[#2C6BED]">
            Careers
          </router-link>
          <router-link to="/donate" class="text-[#1b1b1b] text-base font-inter  cursor-pointer flex justify-center items-center px-[0.75rem] py-[0.5rem] hover:text-[#2C6BED]">
            Donate
          </router-link>
          <li class="text-[#1b1b1b] text-base font-inter  cursor-pointer flex justify-center items-center px-[0.75rem] py-[0.5rem] hover:text-[#2C6BED]">
            <a href="https://twitter.com/signalapp">
              <img class="w-5" src="/icons/twitter.png" alt="">
            </a>
          </li>
          <li class="text-[#1b1b1b] text-base font-inter  cursor-pointer flex justify-center items-center px-[0.75rem] py-[0.5rem] hover:text-[#2C6BED]">
            <a href="https://instagram.com/signal_app/">
              <img class="w-5" src="/icons/instagram.png" alt="">
            </a>
          </li>
          <li class="text-[#1b1b1b] text-base font-inter  cursor-pointer flex justify-center items-center px-[0.75rem] py-[0.5rem] hover:text-[#2C6BED]">
            <img class="w-5 mr-1" src="/icons/solid_globe.png" alt="">
            <LanguageSwitcher></LanguageSwitcher>
          </li>
        </ul>
      </div>

      <!-- Menu Mobile-->
      <MenuBurger class="lg:hidden "/>
    </div>
  </div>
</template>

<script setup>
import LanguageSwitcher from "../LanguageSwitcher.vue";
import MenuBurger from "./MenuBurger.vue";
</script>
