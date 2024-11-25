<template>
  <div class="space-y-3">
    <img :src="image" alt="" class="h-[12.5rem] lg:h-[15rem] w-full" />
    <div class="space-y-3">
      <h2 class="text-[#6941C6] text-sm mb-2">{{ author }} {{ date }}</h2>
      <div class="flex justify-between items-center">
        <h3 class="text-lg font-bold text-gray-800">{{ title }}</h3>
        <svg
          width="24"
          height="28"
          viewBox="0 0 24 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 21L17 11M17 11H7M17 11V21"
            stroke="#101828"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <p class="text-sm md:text-base text-[#667085] mb-4">{{ content }}</p>
    </div>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="(tag, index) in category"
        :key="index"
        :class="getTagClasses(tag)"
        class="text-xs px-2 py-1 rounded-full capitalize"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: Array,
    required: true,
  },
});

const getTagClasses = (tag) => {
  const tagStyles = {
    leadership: "bg-[#F9F5FF] text-[#6941C6]",
    design: "bg-[#F9F5FF] text-[#6941C6]",
    podcast: "bg-[#F9F5FF] text-[#6941C6]",
    research: "bg-[#EEF4FF] text-[#3538CD]",
    "Software Development": "bg-[#ECFDF3] text-[#027A48]",
    product: "bg-[#F0F9FF] text-[#026AA2]",
    SaaS: "bg-[#FDF2FA] text-[#C11574]",
    tools: "bg-[#FDF2FA] text-[#C11574]",
    "customer service": "bg-[#F8F9FC] text-[#363F72]",
    "management": "bg-[#F8F9FC] text-[#363F72]",
    "frameworks": "bg-[#FFF6ED] text-[#C4320A]",
  };

  return tagStyles[tag] 
};
</script>
