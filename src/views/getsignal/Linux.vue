<template>
  <div class="py-12 px-6 mt-[84px] max-md:mt-[52px]">
    <div class="container mx-auto max-w-[1344px]">
      <div class="flex justify-center">
        <div class="w-6/12 max-md:w-full p-3">
          <h2 class="font-inter text-[40px] max-md:text-[28px] leading-[44px] max-md:leading-8 font-extrabold text-center mb-8">
            Signal for Debian-based Distros</h2>
          <div class="">
            <pre class="text-left bg-[#f5f5f5] text-[#4a4a4a] text-sm overflow-x-auto py-5 px-6">
              <code>
# NOTE: These instructions only work for 64-bit Debian-based
# Linux distributions such as Ubuntu, Mint etc.

# 1. Install our official public software signing key:
wget -O- https://updates.signal.org/desktop/apt/keys.asc | gpg --dearmor > signal-desktop-keyring.gpg
cat signal-desktop-keyring.gpg | sudo tee /usr/share/keyrings/signal-desktop-keyring.gpg > /dev/null

# 2. Add our repository to your list of repositories:
echo 'deb [arch=amd64 signed-by=/usr/share/keyrings/signal-desktop-keyring.gpg] https://updates.signal.org/desktop/apt xenial main' |\
  sudo tee /etc/apt/sources.list.d/signal-xenial.list

# 3. Update your package database and install Signal:
sudo apt update && sudo apt install signal-desktop
              </code>
            </pre>
          </div>
          <div class="bg-[#f6f6f6] mt-4">
            <div class="text-sm fon-inter text-[#4a4a4a] text-center py-5 px-6 mb-6">
              To use the Signal desktop app, Signal must first be installed on your phone.
            </div>
          </div>
          <h3 class="mb-6 text-[28px] leading-8 font-extrabold text-center">Not on Linux?</h3>
          <ul>
            <li class="text-center">
              <router-link to="/macos" class="text-[#3273dc] text-center cursor-pointer hover:underline"
                 href="https://updates.signal.org/desktop/signal-desktop-mac-universal-6.24.0.dmg">Signal for Mac</router-link>
            </li>
            <li class="text-center">
              <router-link to="/window" class="text-[#3273dc]  cursor-pointer hover:underline" href=""> Signal for Windows </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

