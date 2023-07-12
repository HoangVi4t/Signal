<template>
  <div>
    <!-- Section 1-->
    <div class="bg-[#f6f6f6] mb-10 lg:mt-[5.15rem] md:max-lg:mt-[3.25rem] sm:max-md:mt-[3.25rem]">
      <div class="container mx-auto 2xl:max-w-[1344px] ">
        <div class="flex flex-wrap items-center">
          <div class="w-6/12 p-3 sm:max-md:w-full">
            <h1 class="font-inter text-[58px] sm:max-md:text-[40px] font-extrabold leading-[64px] mb-4">Technical information</h1>
            <p class="font-inter text-xl sm:max-md:text-base font-normal leading-7"> Specifications and software libraries for
              developers</p>
          </div>
          <div class="w-6/12 sm:max-md:w-full p-3">
            <img src="/images/header-developers.png" alt="">
          </div>
        </div>
      </div>
    </div>

    <!-- Section 2-->
    <div class="py-12 px-6">
      <div class="container mx-auto 2xl:max-w-[1344px]">
        <div class="flex flex-wrap items-center">
          <div class="w-6/12 sm:max-md:w-full p-3">
            <h2 class="font-inter text-[40px] sm:max-md:text-[28px] font-extrabold leading-[64px] mb-6">Specifications</h2>
            <p class="font-inter text-xl sm:max-md:text-base leading-7"> Encryption in messaging environments integrates many ideas which
              often need to be composed separately in
              different applications. We make an effort to break out ideas into independent specifications so that they
              can be integrated as appropriate for different projects.
            </p>
          </div>
          <div class="flex flex-wrap">
            <div class="w-6/12 sm:max-md:w-full p-3">
              <p class="font-inter text-[#3273dc] text-base font-semibold mb-4 cursor-pointer">XEdDSA and VXEdDSA</p>
              <p class="font-inter text-base font-normal mb-[30px]"> This document describes how to create and verify
                EdDSA-compatible signatures using public key and private key formats initially defined for
                the X25519 and X448 elliptic curve Diffie-Hellman functions. This document also describes "VXEdDSA"
                which extends XEdDSA to make it a verifiable
                random function, or VRF.
              </p>
              <p class="font-inter text-[#3273dc] text-base font-semibold mb-4 cursor-pointer">X3DH</p>
              <p class="font-inter text-base font-normal mb-[30px]"> This document describes the "X3DH" (or "Extended
                Triple Diffie-Hellman") key agreement protocol. X3DH establishes a shared secret key between two parties
                who mutually authenticate each other based
                on public keys. X3DH provides forward secrecy and cryptographic deniability .
              </p>
            </div>

            <div class="w-6/12 sm:max-md:w-full p-3">
              <p class="font-inter text-[#3273dc] text-base font-semibold mb-4 cursor-pointer">Double Ratchet</p>
              <p class="font-inter text-base font-normal mb-[30px]"> This document describes the Double Ratchet
                algorithm, which is used by two parties to exchange encrypted messages based on a shared secret key.
                The parties derive new keys for every Double Ratchet message so that earlier keys cannot be calculated
                from later ones. The parties also send
                Diffie-Hellman public values attached to their messages. The results of Diffie-Hellman calculations are
                mixed into the derived keys so that later
                keys cannot be calculated from earlier ones. These properties give some protection to earlier or later
                encrypted messages in case of a compromise
                of a party's keys.
              </p>
              <p class="font-inter text-[#3273dc] text-base font-semibold mb-4 cursor-pointer">Sesame</p>
              <p class="font-inter text-base font-normal mb-[30px]"> This document describes the Sesame algorithm for
                managing message encryption sessions in an asynchronous and multi-device setting.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 3-->
    <div class="py-12 px-6">
      <div class="container mx-auto 2xl:max-w-[1344px]">
        <div class="flex flex-wrap items-center">
          <div class="w-6/12 sm:max-md:w-full p-3">
            <h2 class="font-inter text-[40px] font-extrabold leading-[64px] mb-6">Software libraries</h2>
            <a class="font-inter text-[#3273dc] text-base font-semibold mb-4 cursor-pointer" href="https://github.com/signalapp/libsignal">Signal Protocol library</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

