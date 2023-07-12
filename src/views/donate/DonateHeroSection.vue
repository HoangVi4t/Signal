<template>
  <div class="mt-[83px]  max-lg:mt-[48px]">
    <div class="py-12 px-6">
      <div class="container mx-auto 2xl:max-w-[1344px]">
        <div class="flex flex-wrap justify-center ">
          <!-- Section 1 -->
          <div class="w-full p-3">
            <h1 class="font-inter text-[#363636] font-extrabold text-[32px] text-center mb-6">Donate to Signal</h1>
            <div class="flex justify-center items-center">
              <p class="font-inter text-[#3273dc] hover:text-[#1851B4] text-base cursor-pointer hover:underline">
                Or donate with cryptocurrency
              </p>
              <ChevronDoubleRightIcon fillColor="#3273dc" :size="18"/>
            </div>
          </div>

          <!-- Section 2 -->
          <div class="flex flex-wrap justify-center border-b-2 border-[#f5f5f5] pb-[30px]">
            <div class="flex justify-center p-3 sm:max-md:w-full">
              <iframe src="https://donorbox.org/embed/signal" name="donorbox" allowpaymentrequest="allowpaymentrequest"
                      seamless="seamless" frameborder="0" scrolling="no" height="0" width="0"
                      style="max-width: 500px; min-width: 250px; max-height:none!important">
              </iframe>
            </div>
            <div class="w-5/12 max-lg:w-full p-3 ml-28 max-md:ml-0">
              <p class="font-inter text-xl max-md:text-base">The team at Signal is committed to the mission of developing open
                source
                privacy technology that
                protects free expression and enables secure global communication. Your contribution fuels this cause. No
                ads. No trackers. No kidding.
              </p>
              <p class="font-inter text-xl max-md:text-base mt-5">
                Your donation helps pay for the development, servers, and bandwidth of an app used by millions around
                the world for private and instantaneous communication.
              </p>
              <p class="font-inter text-xl max-md:text-base mt-5">If you provide an email, you will receive an email confirmation for
                your tax records. Signal Technology Foundation is an independent nonprofit charity and tax-exempt under
                section 501c3 of the Internal Revenue Code. Our Federal Tax ID Number is 82-4506840.
              </p>
              <p class="font-inter text-xl max-md:text-base mt-5">Note: Signal is unable to offer badges if you donate here as opposed to
                using Google Pay or Apple Pay inside the Signal app.
              </p>
            </div>
          </div>

          <!-- Section 3-->
          <div class="flex max-md:flex-col-reverse items-center justify-center pt-8">
            <div class="p-3">
              <iframe frameborder="0" width="300" height="600" scrolling="no"
                      src="https://tgbwidget.com/?charityID=824506840">
              </iframe>
            </div>
            <div class="w-5/12 max-lg:w-full p-3 ml-28 max-md:ml-0 p-3">
              <h4 class="font-inter text-xl text-[#363636] font-extrabold">Donate Cryptocurrency</h4>
              <p class="font-inter text-xl max-md:text-base mt-5">
                Cryptocurrency donations to Signal are processed through
                <a class="text-[#3273dc] cursor-pointer hover:underline"
                   href="https://www.thegivingblock.com/why-donate-bitcoin">The Giving Block</a>
              </p>
              <p class="font-inter text-xl max-md:text-base mt-5">
                If you want to receive a tax deduction in the US for the fair market value of your cryptocurrency
                donation, you can optionally provide an email address to receive a tax receipt. The Giving Block also
                supports anonymous donations.
              </p>
            </div>
          </div>

          <!-- Section 4-->
          <div class="pt-[5.7rem] pb-[1.6rem] px-6">
            <ul class=" flex justify-center p-3">
              <li class="font-inter text-base text-[#3273dc] cursor-pointer hover:underline">Donor FAQs</li>
              <li class="font-inter text-base text-[#3273dc] cursor-pointer hover:underline border-s-[1px] border-[#999] ms-2 ps-2">
                Donor Privacy Policy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ChevronDoubleRightIcon from 'vue-material-design-icons/ChevronDoubleRight.vue';
</script>
