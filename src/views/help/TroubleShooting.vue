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
          <li class="font-inter text-[#4e4e4e] text-[13px] font-light ml-1"> > Troubleshooting</li>
        </ol>
        <div class="flex flex-wrap items-center">
          <input
              class="block w-full min-w-[300px] h-10 border-[#ddd] focus:ring-0 rounded-[30px] pl-10 pr-5 focus:ring-blue-400"
              type="text" :placeholder="$t('help.search')">
          <div class="absolute cursor-pointer ml-[0.6rem]">
            <MagnifyIcon :size="26" fillColor="#777"/>
          </div>
        </div>
      </nav>

      <!-- content  -->
      <div class="flex justify-end max-md:justify-start">
        <div class="flex-[0_0_80%]">

          <!-- Header-->
          <header class="flex flex-wrap">
            <h1 class="text-[40px] leading-[44px] mb-[25px] font-extrabold flex-1">Troubleshooting</h1>
          </header>

          <!-- body -->
          <div class="flex flex-row flex-wrap">
            <div class="flex-[0_0_45%]">
              <h3 class="text-xl font-extrabold mb-[15px]">Troubleshooting FAQ</h3>
              <ul>
                <li class="text-base py-[15px]">
                  <a class="text-[rgba(0,114,239,1)] hover:text-[rgba(24,81,180,1)] hover:underline" href="#">Disappearing Messages with a Linked Device</a>
                </li>
                <li class="text-base py-[15px]">
                  <a class="text-[rgba(0,114,239,1)] hover:text-[rgba(24,81,180,1)] hover:underline" href="#">Troubleshooting Video</a>
                </li>
                <li class="text-base py-[15px]">
                  <a class="text-[rgba(0,114,239,1)] hover:text-[rgba(24,81,180,1)] hover:underline" href="#">Troubleshooting graphics issues for Signal Desktop</a>
                </li>
                <li class="text-base py-[15px]">
                  <a class="text-[rgba(0,114,239,1)] hover:text-[rgba(24,81,180,1)] hover:underline" href="#">Delivery Issue</a>
                </li>
                <li class="text-base py-[15px]">
                  <a class="text-[rgba(0,114,239,1)] hover:text-[rgba(24,81,180,1)] hover:underline" href="#">Registration troubleshooting</a>
                </li>
                <li class="text-base py-[15px]">
                  <a class="text-[rgba(0,114,239,1)] hover:text-[rgba(24,81,180,1)] hover:underline" href="#">Troubleshooting Installs or Updates</a>
                </li>
              </ul>
              <a class="text-base text-[rgba(0,114,239,1)] font-bold py-[15px] hover:text-[rgba(24,81,180,1)] hover:underline" href="#">See all 22 articles</a>
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

