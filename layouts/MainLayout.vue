<template>
  <div id="MainLayout" class="w-full fixed z-50">
    <div id="TopMenu" class="w-full bg-[#fafafa] border-b md:block hidden">
      <ul
          class="flex items-center justify-end text-xs text-[#333333] font-light px-2 h-10 bg-[#fafafa] max-w-[1200px]">
        <li class="cursor-pointer border-r border-r-gray-400 px-3 hover:text-[#ff4646]">
          Sell on Aliexpress
        </li>
        <li class="cursor-pointer border-r border-r-gray-400 px-3 hover:text-[#ff4646]">
          Cookie preferences
        </li>
        <li class="cursor-pointer border-r border-r-gray-400 px-3 hover:text-[#ff4646]">
          Help
        </li>
        <li class="cursor-pointer border-r border-r-gray-400 px-3 hover:text-[#ff4646]">
          Buyer Protection
        </li>
        <li class="cursor-pointer border-r border-r-gray-400 px-3 hover:text-[#ff4646]">
          <Icon name="ic:sharp-install-mobile" size="17"/>
          App
        </li>
        <li
            @mouseenter="isAccountMenu = true"
            @mouseleave="isAccountMenu = false"
            class="relative flex items-center px-2.5 hover:text-[#ff4646] h-full cursor-pointer"
            :class="isAccountMenu ? 'z-40 bg-white border shadow-[0_15px_100px_40px_rgba(0,0,0,0.3)]' :
            'border border-[#fafafa]'"
        >
          <Icon name="ph:user-thin" size="17"/>
          Account
          <Icon name="mdi:chevron-down" size="15" class="ml-5"/>
          <div id="AccountMenu" v-if="isAccountMenu"
               class="absolute bg-white w-[215px] text-[#333333] z-40 top-[38px] -left-[100px] border border-b">
            <div v-if="true">
              <div class="font-semibold text-[15px] my-4 px-3"> Welcome to AliExpress</div>
              <div class="flex items-center gap-1 px-3 mb-3">
                <NuxtLink to="/auth"
                          class="text-center bg-[#ff4646] w-full text-[16px] rounded-sm text-white font-semibold p-2">
                  Login / Register
                </NuxtLink>
              </div>
            </div>
            <div class="border-b"></div>
            <ul class="bg-white">
              <li
                  @click="navigateTo('/orders')"
                  class="text-[13px] py-2 px-4 w-full hover:bg-gray-200">
                Orders
              </li>
              <li
                  v-if="true"
                  class="text-[13px] py-2 px-4 w-full hover:bg-gray-200">
                Sign out
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const isAccountMenu = ref(false)
</script>

