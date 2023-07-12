<template>
  <div>
    <!-- Section 1-->
    <div class="">
      <div class="max-sm:mb-[60px] sm:mb-[60px] bg-[#9DBBF8] h-[300px] px-5 text-center w-full">
        <form class="relative top-[50%] -translate-y-2/4 container max-w-[610px] mx-auto ">
          <h1 class="text-[40px] font-extrabold leading-[44px] mb-7">{{ $t('help.hcwh') }}</h1>
          <div class="flex items-center">
            <input
                class="block w-full border-none border-transparent focus:ring-0 rounded-[30px] pl-10 pr-5 focus:ring focus:ring-blue-400"
                type="text" :placeholder="$t('help.search')">
            <div class="absolute cursor-pointer ml-[0.6rem]">
              <MagnifyIcon :size="26" fillColor="#777"/>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- Section 2-->
    <div class="container mx-auto 2xl:max-w-[1160px] md:mb-[60px]">
      <div class="md:mb-[60px]">
        <div>
          <ul class="flex flex-wrap justify-start gap-[40px]">
            <router-link to="/getting-started" class="max-md:mx-[15px] lg:mb-[30px] flex justify-center flex-[1_0_340px] md:max-lg:w-2/4">
              <div class="h-full py-5 px-[30px] shadow-[0px_4px_12px_rgba(0,0,0,0.12),0px_0px_2px_rgba(0,0,0,0.08)]  border-1 rounded-2 bg-white rounded-lg border-2 border-white w-full text-center cursor-pointer hover:border-[#9dbbf8] ">
                <h4 class="text-lg font-extrabold">{{ $t('help.start') }}</h4>
                <p class=" text-lg">{{$t('help.start_desc')}}</p>
              </div>
            </router-link>
            <router-link to="/features" class="max-md:mx-[15px] lg:mb-[30px] flex justify-center flex-[1_0_340px] md:max-lg:w-2/4">
              <div class="h-full py-5 px-[30px] shadow-[0px_4px_12px_rgba(0,0,0,0.12),0px_0px_2px_rgba(0,0,0,0.08)]  border-1 rounded-2 bg-white rounded-lg border-2 border-white w-full text-center cursor-pointer hover:border-[#9dbbf8]">
                <h4 class="text-lg font-extrabold">{{ $t('help.features')}}</h4>
                <p class=" text-lg">{{ $t('help.features_desc')}}</p>
              </div>
            </router-link>
            <router-link to="/security" class="max-md:mx-[15px] lg:mb-[30px] flex justify-center flex-[1_0_340px]">
              <div class="h-full py-5 px-[30px] shadow-[0px_4px_12px_rgba(0,0,0,0.12),0px_0px_2px_rgba(0,0,0,0.08)]  border-1 rounded-2 bg-white rounded-lg border-2 border-white w-full text-center cursor-pointer hover:border-[#9dbbf8]">
                <h4 class="text-lg font-extrabold">{{ $t('help.security') }}</h4>
                <p class=" text-lg">{{$t('help.security_desc')}}</p>
              </div>
            </router-link>
            <router-link to="/troubleshooting" class="max-md:mx-[15px] lg:mb-[30px] flex justify-center flex-[1_0_340px]">
              <div class="h-full py-5 px-[30px] shadow-[0px_4px_12px_rgba(0,0,0,0.12),0px_0px_2px_rgba(0,0,0,0.08)]  border-1 rounded-2 bg-white rounded-lg border-2 border-white w-full text-center cursor-pointer hover:border-[#9dbbf8]">
                <h4 class="text-lg font-extrabold">{{ $t('help.troubleshooting') }}</h4>
              </div>
            </router-link>
            <router-link to="/general" class="max-md:mx-[15px] lg:mb-[30px] flex justify-center flex-[1_0_340px]">
              <div class="h-full py-5 px-[30px] shadow-[0px_4px_12px_rgba(0,0,0,0.12),0px_0px_2px_rgba(0,0,0,0.08)]  border-1 rounded-2 bg-white rounded-lg border-2 border-white w-full text-center cursor-pointer hover:border-[#9dbbf8]">
                <h4 class="text-lg font-extrabold">{{$t('help.general')}}</h4>
              </div>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue';
</script>

