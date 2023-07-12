<template>
  <div class="overflow-hidden">
    <!-- Section 1-->
    <div class="max-h-[680px] bg-[#9DBBF8] mt-[58px] max-lg:mt-[28px] mb-16">
      <div class="container mx-auto max-w-[1344px] flex flex-wrap justify-between grow shrink-0 px-6 pt-12">
        <div class="md:w-[40%] sm:w-full">
          <h1 class="md:text-6xl max-sm:text-[40px] font-extrabold mb-6 mt-[120px] max-lg:mt-0 font-inter">
            {{ $t("main.section1_heading") }}</h1>
          <p class="text-xl max-sm:text-base font-normal font-inter mb-6 ">{{ $t("main.section1_desc") }}</p>
          <router-link to="/get-signal" type="button"
                       class="text-xl font-semibold text-[#2C6BED] bg-white hover:text-[#1851B4] rounded-lg px-5 py-2.5 mr-2 mb-2 border-[#b5b5b5] ">
            {{ $t("main.section1_btn") }}
          </router-link>
        </div>

        <div class="shrink grow relative block lg:ml-8 sm:max-md:ml-32 max-lg:ml-5 sm:max-md:w-full">
          <img class="inline  rotate-[22.5deg] lg:w-[320px] max-sm:w-[152px] md:w-[218px] mt-12" src="/images/signal-iphone.png" alt="">
          <img class="inline absolute top-0 -ml-8 rotate-[22.5deg] lg:w-[300px] max-sm:w-[152px] md:w-[218px]"
               src="/images/signal-pixel.png" alt="">
        </div>
      </div>
    </div>

    <!-- Section 2-->
    <div class="py-12 max-md:pt-[60px] max-lg:pb-0 px-6 text-center">
      <div class="container mx-auto max-w-[1344px] flex justify-center items-center">
        <div>
          <h2 class="font-inter font-extrabold text-[40px] max-md:text-[28px] leading-[44px] max-md:leading-8 text-center mb-4">
            {{ $t('main.section2_heading') }}
          </h2>
          <p class="font-inter font-normal text-xl max-md:text-base">{{ $t('main.section2_desc') }}</p>
        </div>
      </div>
    </div>

    <!-- Section 3-->
    <div class="container mx-auto max-w-[1344px]  py-12 px-6">
      <div class="flex flex-wrap justify-between items-center sm:max-md:flex-col-reverse">
        <div class="w-4/12 max-md:w-1/2 max-md:w-full p-3">
          <h2 class="font-inter text-[40px] max-md:text-[28px] leading-[44px] max-md:leading-8 font-extrabold mb-8">
            {{ $t('main.section3_lottie_heading') }}
          </h2>
          <p class="font-inter text-xl max-md:text-base font-normal"> {{ $t('main.section3_lottie_desc') }}
          </p>
        </div>

        <div class="block w-[680px] shrink md:max-lg:w-1/2 sm:max-md:w-2/3 p-3">
          <div class="flex justify-end sm:max-md:justify-center">
            <Vue3Lottie class=" rounded-2xl" :animationData="encryption" :width="'100%'"
                        :backgroundColor="'#A5CAD5'" :speed="1"/>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 4-->
    <div class=" py-12 px-6 bg-[#F6F6F6]">
      <div class="flex flex-wrap container mx-auto max-w-[1344px] ">

        <div class=" w-full md:w-1/2 lg:w-1/2 p-[0.75rem]">
          <div class="bg-white rounded-2xl h-full p-[30px] drop-shadow-lg">
            <img class="w-[370px] mx-auto block" src="/images/Media-9.png" alt="">
            <h3 class="font-inter text-[#1b1b1b] text-[28px] leading-7 font-extrabold mt-[24px] mb-1 text-center">
              {{$t('main.section4_heading1')}}
            </h3>
            <p class="font-inter text-[#4a4a4a] text-base font-normal text-center">
              {{$t('main.section4_desc1')}}
            </p>
          </div>
        </div>

        <div class=" w-full md:w-1/2 lg:w-1/2 p-[0.75rem]">
          <div class="bg-white rounded-2xl h-full p-[30px] drop-shadow-lg">
            <img class="w-[370px] mx-auto block" src="/images/Calls-7.png" alt="">
            <h3 class="font-inter text-[#1b1b1b] text-[28px] leading-7 font-extrabold mt-[24px] mb-1 text-center">
              {{$t('main.section4_heading2')}}
            </h3>
            <p class="font-inter text-[#4a4a4a] text-base font-normal text-center">
              {{$t('main.section4_desc2')}}
            </p>
          </div>
        </div>

        <div class=" w-full md:w-1/2 lg:w-1/2 p-[0.75rem]">
          <div class="bg-white rounded-2xl h-full p-[30px] drop-shadow-lg">
            <img class="w-[370px] mx-auto block" src="/images/Stickers.png" alt="">
            <h3 class="font-inter text-[#1b1b1b] text-[28px] leading-7 font-extrabold mt-[24px] mb-1 text-center">
              {{$t('main.section4_heading3')}}
            </h3>
            <p class="font-inter text-[#4a4a4a] text-base font-normal text-center">
              {{$t('main.section4_desc3')}}
            </p>
          </div>
        </div>

        <div class=" w-full md:w-1/2 lg:w-1/2 p-[0.75rem]">
          <div class="bg-white rounded-2xl h-full p-[30px] drop-shadow-lg">
            <img class="w-[370px] mx-auto block" src="/images/Groups.png" alt="">
            <h3 class="font-inter text-[#1b1b1b] text-[28px] leading-7 font-extrabold mt-[24px] mb-1 text-center">
              {{$t('main.section4_heading4')}}
            </h3>
            <p class="font-inter text-[#4a4a4a] text-base font-normal text-center">
              {{$t('main.section4_desc4')}}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 5-->
    <div class="container mx-auto max-w-[1344px]  py-12 px-6">
      <div class="flex flex-wrap items-center max-md:flex-col-reverse ">
        <div class="xl:w-2/6 md:w-1/2 lg:w-1/2 p-[0.75rem]">
          <h2 class="font-inter text-[40px] max-md:text-[28px] leading-[44px] max-md:leading-8 font-extrabold mb-7">
            {{$t('main.section5_heading')}}
          </h2>
          <p class="font-inter text-xl max-md:text-base">
            {{$t('main.section5_desc')}}
          </p>
        </div>
        <div class="w-ful sm:max-md:w-3/4 md:w-1/2 lg:w-1/2 p-[0.75rem]">
          <img class="rounded-2xl xl:min-w-[680px]" src="/images/No-Ads.png" alt="">
        </div>
      </div>
    </div>

    <!-- Section 6-->
    <div class="container mx-auto max-w-[1344px] py-12 px-6">
      <div class="flex flex-wrap justify-center justify-end">
        <div class="w-full sm:max-md:w-3/4 md:w-1/2 lg:w-1/2 p-[0.75rem] xl:min-w-[680px] ">
          <img class="rounded-2xl" src="/images/Nonprofit.png" alt="">
        </div>
        <div class="xl:w-2/6 md:w-1/2 lg:w-1/2 p-[0.75rem]">
          <h2 class="font-inter text-[40px] max-md:text-[28px] leading-[44px] max-md:leading-8 font-extrabold mb-7">
            {{$t('main.section6_heading')}}
          </h2>
          <p class="font-inter text-xl max-md:text-base mb-8">
            {{$t('main.section6_desc')}}
          </p>
          <router-link to="/donate"
                       class="bg-white rounded-lg border-2 border-[#2c6bed] text-[#2c6bed] text-xl font-inter font-semibold px-5 py-[9px] hover:border-[#1851B4] hover:text-[#1851B4]">
            {{$t('main.section6_btn')}}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {Vue3Lottie} from 'vue3-lottie'
import encryption from '/src/assets/lotties/lf20_A7jNtn.json'

</script>

