<template>
  <div>
    <!--Header Help-->
    <div class="flex justify-between items-center container max-w-[1160px] mx-auto h-[95px] md:max-lg:px-[20px] sm:max-md:h-[71px] sm:max-md:px-[26px] ">
      <router-link to="/help" class="flex items-center cursor-pointer " >
        <img class="w-[50px]" src="/images/singal.png" alt="">
        <span class="font-inter text-[#1b1b1b] text-[28px] font-bold ml-[10px]">Signal Support</span>
      </router-link>

      <div class="flex items-center sm:max-md:hidden ">
        <ul class="flex items-center">
          <router-link to="/main" class="font-inter text-base hover:text-[#188DF3] cursor-pointer py-2 pr-5">Signal.org</router-link>
          <router-link to="/donate" class="font-inter text-base hover:text-[#188DF3] cursor-pointer py-2 pr-5">{{ $t('help.donate') }}</router-link>
          <router-link to="/help/contact" class="font-inter text-base hover:text-[#188DF3] cursor-pointer py-2 pr-5">{{$t('help.contact')}}</router-link>
          <li class="flex items-center font-inter text-base  cursor-pointer py-2 pr-5 ">
            <LanguageSwitcher/>
            <ChevronDownIcon/>
          </li>
        </ul>
      </div>

      <HelpMenuBurger class="md:hidden"/>
    </div>
  </div>
</template>

<script setup>
import LanguageSwitcher from "../../components/LanguageSwitcher.vue";
import ChevronDownIcon from 'vue-material-design-icons/ChevronDown.vue';
import HelpMenuBurger from "./HelpMenuBurger.vue";
</script>

