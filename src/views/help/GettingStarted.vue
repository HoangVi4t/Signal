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
          <li class="font-inter text-[#4e4e4e] text-[13px] font-light ml-1"> > Getting Started</li>
        </ol>
        <div class="flex items-center relative">
          <input
              class="block w-full min-w-[300px] h-10 border-[#ddd] focus:ring-0 rounded-[30px] pl-10 pr-5 focus:ring-blue-400"
              type="text" :placeholder="$t('help.search')">
          <div class="absolute cursor-pointer ml-[0.6rem]">
            <MagnifyIcon :size="26" fillColor="#777"/>
          </div>
        </div>
      </nav>

      <!-- content  -->
      <div class="flex flex-wrap justify-end max-md:justify-start">
        <div class="flex-[0_0_80%] max-md:flex-1">

          <!-- Header-->
          <header class="flex flex-wrap">
            <h1 class="text-[40px] leading-[44px] mb-[25px] font-extrabold flex-1">Getting Started</h1>
            <p class="text-base basis-full mb-[30px]">Understand the basics of Signal on Android, iOS, and Desktop.</p>
          </header>

          <!-- body -->
          <div class="flex flex-row flex-wrap">
            <div class="flex-[0_0_45%] max-md:flex-1">
              <h3 class="text-xl font-extrabold mb-[15px]">Getting Started with Signal Android, iOS or Desktop</h3>
              <ul>
                <li class="text-base py-[15px]">
                  <a class="text-[rgba(0,114,239,1)] hover:text-[rgba(24,81,180,1)] hover:underline" href="#">Installing Signal</a>
                </li>
                <li class="text-base py-[15px]">
                  <a class="text-[rgba(0,114,239,1)] hover:text-[rgba(24,81,180,1)] hover:underline" href="#">Find the Signal App Icon</a>
                </li>
                <li class="text-base py-[15px]">
                  <a class="text-[rgba(0,114,239,1)] hover:text-[rgba(24,81,180,1)] hover:underline" href="#">How do I ensure Signal is up to date?</a>
                </li>
                <li class="text-base py-[15px]">
                  <a class="text-[rgba(0,114,239,1)] hover:text-[rgba(24,81,180,1)] hover:underline" href="#">Register a phone number</a>
                </li>
                <li class="text-base py-[15px]">
                  <a class="text-[rgba(0,114,239,1)] hover:text-[rgba(24,81,180,1)] hover:underline" href="#">Re-registering using your Signal PIN</a>
                </li>
                <li class="text-base py-[15px]">
                  <a class="text-[rgba(0,114,239,1)] hover:text-[rgba(24,81,180,1)] hover:underline" href="#">Edit my Profile</a>
                </li>
              </ul>
              <a class="text-base text-[rgba(0,114,239,1)] font-bold py-[15px] hover:text-[rgba(24,81,180,1)] hover:underline" href="#">See all 49 articles</a>
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

