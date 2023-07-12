<template>
  <div class="w-full bg-[#3C3744] text-gray-100 pt-12 px-6 pb-24">
    <div
        class="
                container
                mx-auto
                max-w-[1344px]
                h-full
                flex
                flex-wrap
                justify-between
                items-start
                text-sm
                max-md:flex-col-reverse
                max-md:gap-4
   "
    >
      <div class="w-2/5 ">
        <div class=" font-inter text-base text-[#E9E9E9]">
          © 2013–2023 Signal, a 501c3 nonprofit.<br>
          Signal is a registered trademark in the United States and other countries.<br>
          <br>
          For media inquiries, contact <span class="  hover:underline cursor-pointer">press@signal.org</span>
        </div>
      </div>

      <div>
        <div class="mb-3 font-inter text-[#E9E9E9]  font-semibold text-base">
          Our company
        </div>
        <ul class="font-inter text-[#E9E9E9] text-base">
          <router-link to="/donate">
            <li class="hover:underline cursor-pointer">Donate</li>
          </router-link>
          <router-link to="/careers">
            <li class="hover:underline cursor-pointer">Careers</li>
          </router-link>
          <router-link to="/blogs">
            <li class="hover:underline cursor-pointer">Blog</li>
          </router-link>
          <router-link to="/policy">
            <li class="hover:underline cursor-pointer">Terms & Privacy Policy</li>
          </router-link>
        </ul>
      </div>

      <div>
        <div class="mb-3 font-inter text-[#E9E9E9]  font-semibold text-base">
          Download
        </div>
        <ul class="font-inter text-[#E9E9E9] text-base">
          <router-link to="/android">
            <li class="hover:underline cursor-pointer">Android</li>
          </router-link>
          <router-link to="/iphone">
            <li class="hover:underline cursor-pointer">iPhone & iPad</li>
          </router-link>
          <router-link to="/window">
            <li class="hover:underline cursor-pointer">Windows</li>
          </router-link>
          <router-link to="/macos">
            <li class="hover:underline cursor-pointer">Mac</li>
          </router-link>
          <router-link to="/linux">
            <li class="hover:underline cursor-pointer">Linux</li>
          </router-link>
        </ul>
      </div>

      <div>
        <div class="mb-3 font-inter text-[#E9E9E9]  font-semibold text-base">
          Social
        </div>
        <ul class="font-inter text-[#E9E9E9] text-base">
          <li class="hover:underline cursor-pointer">
            <a href="https://github.com/signalapp">GitHub</a>
          </li>
          <li class="hover:underline cursor-pointer">
            <a href="https://twitter.com/signalapp">Twitter</a>
          </li>
          <li class="hover:underline cursor-pointer">
            <a href="https://www.instagram.com/signal_app/">Instagram</a>
          </li>
        </ul>
      </div>

      <div>
        <div class="mb-3 font-inter text-[#E9E9E9]  font-semibold text-base">
          Help
        </div>
        <ul class="font-inter text-[#E9E9E9] text-base">
          <li class="hover:underline cursor-pointer">
            <router-link to="/help">Support Center</router-link>
          </li>
          <li class="hover:underline cursor-pointer">
            <a href="https://community.signalusers.org/">Community</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

