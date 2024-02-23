<template>
  <div class="flex h-screen font-roboto">
    <div class="flex-1 flex flex-col overflow-hidden">
      <my-header/>
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50">
        <div class="container mx-auto px-6 py-8">


          <article class="text-wrap ...">
            <h3>Token information's in store: </h3>
            <div v-show="authStore.isTokenEmpty">
              <p>no-token-please-login</p>
            </div>
            <div>
              <p>{{authStore?.getTokenData?.access_token}}</p>
            </div>
          </article>


        </div>
      </main>
    </div>
  </div>

</template>
<script setup lang="ts">
import MyHeader from "@/components/MyHeader.vue";
import {useAuthStore} from "@/services/auth.service.ts";
const authStore = useAuthStore();

</script>