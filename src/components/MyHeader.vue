<script setup lang="ts">
import {ref} from "vue";
import {useAuthStore} from "@/services/auth.service.ts";

const dropdownOpen = ref(false);
const authStore = useAuthStore();

function logout() {
  authStore.removeTokenData();
  dropdownOpen.value = !dropdownOpen.value
}


</script>
<template>
  <header class="flex items-center justify-between px-6 py-4 bg-white border-b-4 ">
    <div class="container mx-auto flex justify-between">
      <div class="items-center">
        <div class="flex items-center">

          <svg
              class="w-12 h-12"
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z"
                fill="#4C51BF"
                stroke="#4C51BF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z"
                fill="white"
            />
          </svg>

          <span class="mx-2 text-2xl font-semibold">My-webSite</span>
        </div>
      </div>

      <div class="flex items-center">
        <div>
          <router-link v-show="authStore.isTokenEmpty" to="/about"
                       class="w-full px-4 py-2 text-sm text-center text-white bg-indigo-600 rounded-md focus:outline-none hover:bg-indigo-500">
            login
          </router-link>

          <button v-if="!authStore.isTokenEmpty"
                  class="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none"
                  @click="dropdownOpen = !dropdownOpen">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-200 -100 748 812"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
          </button>

          <div v-if="!authStore.isTokenEmpty"
               v-show="dropdownOpen"
               class="fixed inset-0 z-10 w-full h-full"
               @click="dropdownOpen = false"
          />

          <transition
              enter-active-class="transition duration-150 ease-out transform"
              enter-from-class="scale-95 opacity-0"
              enter-to-class="scale-100 opacity-100"
              leave-active-class="transition duration-150 ease-in transform"
              leave-from-class="scale-100 opacity-100"
              leave-to-class="scale-95 opacity-0">
            <div v-show="dropdownOpen"
                 class="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl">
              <button @click="logout"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white w-full"
              >
                Log out
              </button>
            </div>
          </transition>
        </div>

      </div>
    </div>
    <div class="flex items-center justify-center">

    </div>

    <div class="flex items-center">


    </div>
  </header>
</template>
