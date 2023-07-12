<template>
  <HelpHeader/>
  <div class="border-t pt-[21px] min-h-[65vh]">
    <div class="container mx-auto max-w-[1160px] sm:max-md:px-[5%]">

      <!-- Nav -->
      <nav class="flex items-center justify-between mb-[30px]">
        <ol class="flex items-center">
          <router-link to="/help"
                       class="font-inter text-[13px] text-[rgb(0,114,239)] hover:text-[rgb(24,81,180)] hover:underline">
            Signal Support
          </router-link>
          <li class="font-inter text-[#4e4e4e] text-[13px] font-light ml-1"> > Security</li>
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
      <div class="flex justify-end sm:max-md:justify-start">
        <div class="flex-[0_0_80%]">

          <!-- Header-->
          <header class="flex flex-wrap">
            <h1 class="text-[40px] leading-[44px] mb-[25px] font-extrabold flex-1">Security</h1>
            <p class="text-base basis-full mb-[30px]">This section contains common questions regarding safety and reliability of the technology in the apps.</p>
          </header>

          <!-- body -->
          <div class="flex flex-row flex-wrap">
            <div class="flex-[0_0_45%]">
              <h3 class="text-xl font-extrabold mb-[15px]">Security FAQ</h3>
              <ul>
                <li class="text-base py-[15px]">
                  <a class="text-[rgba(0,114,239,1)] hover:text-[rgba(24,81,180,1)] hover:underline" href="#">Is it private? Can I trust it?</a>
                </li>
                <li class="text-base py-[15px]">
                  <a class="text-[rgba(0,114,239,1)] hover:text-[rgba(24,81,180,1)] hover:underline" href="#">Does Signal send my number to my contacts?</a>
                </li>
                <li class="text-base py-[15px]">
                  <a class="text-[rgba(0,114,239,1)] hover:text-[rgba(24,81,180,1)] hover:underline" href="#">Supporting Older Operating Systems</a>
                </li>
                <li class="text-base py-[15px]">
                  <a class="text-[rgba(0,114,239,1)] hover:text-[rgba(24,81,180,1)] hover:underline" href="#">Signal Profiles and Message Requests</a>
                </li>
                <li class="text-base py-[15px]">
                  <a class="text-[rgba(0,114,239,1)] hover:text-[rgba(24,81,180,1)] hover:underline" href="#">What is a safety number and why do I see that it changed?</a>
                </li>
                <li class="text-base py-[15px]">
                  <a class="text-[rgba(0,114,239,1)] hover:text-[rgba(24,81,180,1)] hover:underline" href="#">How can I report a security vulnerability?</a>
                </li>
              </ul>
              <a class="text-base text-[rgba(0,114,239,1)] font-bold py-[15px] hover:text-[rgba(24,81,180,1)] hover:underline" href="#">See all 7 articles</a>
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

