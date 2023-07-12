<template>
  <HelpHeader/>
  <div class="border-t pt-[21px] min-h-[65vh]">
    <div class="container mx-auto max-w-[1160px] max-md:px-[5%]">

      <!-- Nav -->
      <nav class="flex flex-wrap items-center justify-between mb-[30px]">
        <ol class="flex items-center mb-[15px]">
          <router-link to="/help"
                       class="font-inter text-[13px] text-[rgb(0,114,239)] hover:text-[rgb(24,81,180)] hover:underline">
            Signal Support
          </router-link>
          <li class="font-inter text-[#4e4e4e] text-[13px] font-light ml-1"> > Features</li>
        </ol>
        <div class="flex items-center">
          <input
              class="block w-full min-w-[300px] h-10 border-[#ddd] focus:ring-0 rounded-[30px] pl-10 pr-5 focus:ring-blue-400"
              type="text" :placeholder="$t('help.search')">
          <div class="absolute cursor-pointer ml-[0.6rem]">
            <MagnifyIcon :size="26" fillColor="#777"/>
          </div>
        </div>
      </nav>

      <!-- content  -->
      <div class="flex flex-wrap justify-end sm:max-md:justify-start">
        <div class="flex-[0_0_80%]  max-md:flex-1">

          <!-- Header-->
          <header class="flex flex-wrap">
            <h1 class="text-[40px] leading-[44px] mb-[25px] font-extrabold flex-1">Features</h1>
            <p class="text-base basis-full mb-[30px]">Explore rich features of private messaging.</p>
          </header>

          <!-- body -->
          <div class="flex flex-row flex-wrap">
            <div class="flex-[0_0_45%]  max-md:flex-1">
              <h3 class="text-xl font-extrabold mb-[15px]">Signal Messenger Features</h3>
              <ul>
                <li class="text-base py-[15px]">
                  <a class="text-[rgba(0,114,239,1)] hover:text-[rgba(24,81,180,1)] hover:underline" href="#">Calling options - Switch camera, microphone, or view</a>
                </li>
                <li class="text-base py-[15px]">
                  <a class="text-[rgba(0,114,239,1)] hover:text-[rgba(24,81,180,1)] hover:underline" href="#">Screen Sharing with Signal Desktop Calls</a>
                </li>
                <li class="text-base py-[15px]">
                  <a class="text-[rgba(0,114,239,1)] hover:text-[rgba(24,81,180,1)] hover:underline" href="#">Schedule a Message on Signal Android</a>
                </li>
                <li class="text-base py-[15px]">
                  <a class="text-[rgba(0,114,239,1)] hover:text-[rgba(24,81,180,1)] hover:underline" href="#">Stories</a>
                </li>
                <li class="text-base py-[15px]">
                  <a class="text-[rgba(0,114,239,1)] hover:text-[rgba(24,81,180,1)] hover:underline" href="#">Chat Colors, Wallpaper, and Themes</a>
                </li>
                <li class="text-base py-[15px]">
                  <a class="text-[rgba(0,114,239,1)] hover:text-[rgba(24,81,180,1)] hover:underline" href="#">Set and manage disappearing messages</a>
                </li>
              </ul>
              <a class="text-base text-[rgba(0,114,239,1)] font-bold py-[15px] hover:text-[rgba(24,81,180,1)] hover:underline" href="#">See all 11 articles</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <HelpFooter/>
</template>

<script setup>

import HelpHeader from "./HelpHeader.vue";
import HelpFooter from "./HelpFooter.vue";
</script>

