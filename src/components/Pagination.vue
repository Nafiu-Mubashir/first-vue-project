<template>
  <div class="flex justify-between items-center w-[90%] mx-auto p-4 border-t mt-10">
    <button class="flex items-center gap-1">
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.8334 10.5H4.16669M4.16669 10.5L10 16.3334M4.16669 10.5L10 4.66669"
          stroke="#667085"
          stroke-width="1.67"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span class="hidden md:block text-[#667085] text-sm"> Previous </span>
    </button>

    <div class="hidden md:block">
      <div class="flex items-center gap-2">
        <span class="bg-[#F9F5FF] w-[2.5rem] h-[2.5rem] flex justify-center items-center text-[#7F56D9] rounded-md">1</span>
        <span class="w-[2.5rem] h-[2.5rem] flex justify-center items-center text-[#7F56D9] rounded-md">2</span>
        <span class="w-[2.5rem] h-[2.5rem] flex justify-center items-center text-[#7F56D9] rounded-md">3</span>
        <span class="w-[2.5rem] h-[2.5rem] flex justify-center items-center text-[#7F56D9] rounded-md">...</span>
        <span class="w-[2.5rem] h-[2.5rem] flex justify-center items-center text-[#7F56D9] rounded-md">8</span>
        <span class="w-[2.5rem] h-[2.5rem] flex justify-center items-center text-[#7F56D9] rounded-md">9</span>
        <span class="w-[2.5rem] h-[2.5rem] flex justify-center items-center text-[#7F56D9] rounded-md">10</span>
      </div>
    </div>
    <span class="block md:hidden text-[#344054] text-sm">Page 1 of 10</span>

    <button class="flex items-center gap-1">
      <span class="hidden md:block text-[#667085] text-sm"> Next </span>
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.16669 10.5H15.8334M15.8334 10.5L10 4.66669M15.8334 10.5L10 16.3334"
          stroke="#667085"
          stroke-width="1.67"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<script setup></script>
