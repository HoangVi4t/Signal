<template>
  <HelpHeader/>
  <div class="border-t pt-[34px]">
    <div class="container mx-auto max-w-[1160px] px-[5%]">

      <!-- Nav -->
      <nav class="flex flex-wrap items-center justify-between mb-[30px]">
        <ol class="flex items-center mb-[15px]">
          <router-link to="/help"
                       class="font-inter text-[13px] text-[rgb(0,114,239)] hover:text-[rgb(24,81,180)] hover:underline">
            Signal Support
          </router-link>
          <li class="font-inter text-[#4e4e4e] text-[13px] font-light ml-1"> > Submit a request</li>
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

      <!-- H1 -->
      <h1 class="font-inter text-[40px] leading-[44px] font-extrabold mb-[27px]">Submit a request</h1>

      <!-- Form Submit -->
      <div class="max-w-[650px]">
        <form>
          <div class="flex flex-wrap items-center mb-[25px]">
            <label class="font-inter text-[13px] mb-[5px]">Your email address <span
                class="text-red-600">*</span></label>
            <input type="text" class="w-full h-10 border-1 border-[#ddd] rounded focus:ring-0 focus:ring-blue-400">
          </div>
          <div class="flex flex-wrap items-center mb-[25px]">
            <label class="font-inter text-[13px] mb-[5px]">Re-enter your email address <span
                class="text-red-600">*</span></label>
            <input type="text" class="w-full h-10 border-1 border-[#ddd] rounded focus:ring-0 focus:ring-blue-400">
          </div>
          <div class="flex flex-wrap items-center mb-[25px]">
            <label class="font-inter text-[13px] mb-[5px]">Tell us why you're reaching out <span
                class="text-red-600">*</span></label>
            <select id="countries"
                    class="font-inter h-10 border-1 border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-400 block w-full p-2.5 ">
              <option selected>-</option>
              <option value="US">Install or Update Help</option>
              <option value="CA">Registration Help</option>
              <option value="FR">Backups & Transfer Account</option>
              <option value="DE">Signal PIN</option>
              <option value="DE">Something's Not Working</option>
              <option value="FR">Donations & Badges</option>
              <option value="FR">Payments</option>
              <option value="FR">Feature Request</option>
              <option value="FR">How do I ... ?</option>
              <option value="FR">Feedback</option>
              <option value="FR">Chat Refreshed</option>
              <option value="FR">Other</option>
            </select>
          </div>
          <div class="flex flex-wrap items-center mb-[25px]">
            <label class="font-inter text-[13px] mb-[5px]">Description <span class="text-red-600">*</span></label>
            <select id="countries"
                    class="font-inter h-10 border-1 border-[#ddd] text-gray-900 text-sm rounded focus:ring-blue-400 block w-full p-2.5 ">
              <option selected>-</option>
              <option value="US">Signal Android</option>
              <option value="CA">Signal iOS</option>
              <option value="FR">Signal Desktop</option>
              <option value="DE">Signal Desktop & Signal Android</option>
              <option value="DE">Signal Desktop & Signal iOS</option>
              <option value="FR">My Platform or OS is not listed</option>
            </select>
          </div>
          <div class="flex flex-wrap items-center mb-[25px]">
            <label class="font-inter text-[13px] mb-[5px]">Description <span
                class="text-red-600">*</span></label>
            <textarea id="message" rows="4"
                      class="block p-2.5 w-full text-sm border-1 border-[#ddd] text-gray-900 rounded focus:ring-blue-400 focus:ring-blue-400">
            </textarea>
            <p class="font-inter text-[13px] my-[5px]">Write details about an issue or tell us feedback here.</p>
          </div>
          <div class="flex flex-wrap items-center mb-[25px]">
            <label class="font-inter text-[13px] mb-[5px]">Include a debug log link to troubleshoot issues </label>
            <input type="text" class="w-full h-10 border-1 border-[#ddd] rounded focus:ring-0 focus:ring-blue-400">
            <p class="font-inter text-[13px] my-[5px]">A debug log link begins with
              <a class="text-[rgb(0,114,239)] hover:text-[rgb(24,81,180)] hover:underline"
                 href="https://debuglogs.org/">https://debuglogs.org/</a>
              . Read more on the FAQ here:
            </p>
            <a class="font-inter text-[13px] text-[rgb(0,114,239)] hover:text-[rgb(24,81,180)] hover:underline"
               href="#">https://support.signal.org/hc/articles/360007318591</a>
          </div>
          <div class="flex items-center justify-center w-full">
            <label for="dropzone-file"
                   class="flex flex-col items-center justify-center w-full border-[1px] border-gray-300 h-[45px] rounded cursor-pointer ">
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <p class="font-inter text-[13px]">
                  <span class="text-[rgb(0,114,239)]" href="#">Add file</span> or drop files here
                </p>
              </div>
              <input id="dropzone-file" type="file"/>
            </label>
          </div>
          <div class="pt-[30x] mt-10">
            <button class="bg-[rgba(0,114,239,1)] border-none text-white rounded text-sm font-bold min-w-[190px] px-8 h-[38px]">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <HelpFooter/>
</template>

<script setup>
import HelpHeader from "./HelpHeader.vue";
import HelpFooter from "./HelpFooter.vue";
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue';

</script>

