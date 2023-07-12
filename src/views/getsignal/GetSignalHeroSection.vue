<template>
  <div class="py-12 mx-auto mt-[84px] max-lg:mt-[48px] mb-[17.5rem] max-sm:mb-[23rem] lg:max-xl:mb-[18.5rem] sm:mb-[21.5rem] lg:max-xl:max-w-[996px]">
    <div class="md:max-lg:max-w-[896px] mx-auto xl:max-w-[1344px]">
      <div class="flex flex-wrap justify-center items-center text-center">
        <div class="w-6/12 max-sm:-w:full text-center">
          <h2 class="font-inter text-[40px] max-md:text-2xl leading-[44px] font-extrabold mb-8"> Signal pour mobile</h2>
        </div>
        <div class="w-6/12 max-md:w-full">
          <h2 class="font-inter text-[40px] max-md:text-2xl leading-[44px] font-extrabold mb-8"> Signal pour ordinateur</h2>
        </div>
      </div>

      <div class=" mx-auto xl:max-w-[1344px] md:max-lg:max-w-[900px]  mt-6">
        <div class="flex max-md:flex-wrap">
          <div class="w-6/12 max-md:w-full bg-[#9dbbf8] h-[300px] rounded-xl mx-3 max-md:mb-[186px]">
            <div class="flex justify-end items-center flex-col h-full">
              <img class="w-[360px] max-sm:w-[290px]" src="/images/download-mobile.png" alt="">
            </div>
            <div class="my-10  flex justify-center">
              <a href="https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms"
                 class="bg-[#2c6bed] border-none rounded-lg text-white font-semibold py-[7px] px-4 mr-[30px]">
                Android
              </a>
              <a href="https://apps.apple.com/us/app/signal-private-messenger/id874139669"
                 class="bg-[#2c6bed] border-none rounded-lg text-white font-semibold py-[7px] px-4 ml-[30px]">
                iPhone ou iPad
              </a>
            </div>
            <p class="text-center max-sm:mb-"> Ou visitez
              <a class="text-[#3273dc] cursor-pointer hover:underline"
                 href="https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms">signal.org/install</a>
              à partir de votre téléphone
            </p>
          </div>

          <div class="w-6/12 max-md:w-full bg-[#9dbbf8] h-[300px] rounded-xl mx-3">
            <div class="flex justify-end items-center flex-col h-full md:max-lg:px-3 ">
              <img class="w-[438px] max-sm:w-[300px]" src="/images/download-desktop-windows.png" alt="">
            </div>
            <div class="mt-10 mb-8  flex justify-center">
              <a href="https://updates.signal.org/desktop/signal-desktop-win-6.24.0.exe"
                 class="bg-[#2c6bed] border-none rounded-lg text-white font-semibold py-[7px] px-4 mr-[30px]">
                Télécharger pour Windows
              </a>
            </div>
            <div class="bg-[#f6f6f6] mt-4">
              <div class="text-sm fon-inter text-[#4a4a4a] py-5 px-6 mb-6 text-center">
                Afin d’utiliser l’appli Signal pour ordinateur, Signal doit d’abord être installée sur votre téléphone.
              </div>
            </div>
            <h3 class="mb-6 text-[28px] leading-8 font-extrabold text-center">Vous n’utilisez pas Windows ?</h3>
            <ul>
              <li class="text-center">
                <a class="text-[#3273dc] text-center cursor-pointer hover:underline"
                   href="https://updates.signal.org/desktop/signal-desktop-mac-universal-6.24.0.dmg">Signal pour Mac</a>
              </li>
              <li class="text-center">
                <a class="text-[#3273dc]  cursor-pointer hover:underline" href=""> Signal pour Linux –
                  distributions fondées sur Debian </a>
              </li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script setup>

</script>

