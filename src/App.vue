<script setup>
import BlogList from "@/components/BlogList.vue";
import Pagination from "@/components/Pagination.vue";
</script>

<template>
  <section class="p-3 py-20 md:py-24 md:p-10">
    <div class="text-center mx-auto lg:w-[49.125rem] space-y-4">
      <p class="text-center text-sm text-[#7F56D9]">Our Blog</p>
      <h1 class="text-[#101828] text-3xl md:text-5xl font-bold">
        Stories and interviews
      </h1>
      <p class="md:w-[90%] mx-auto text-[#667085] text-md md:text-xl">
        Subscribe to learn about new product features, the latest in technology,
        solutions, and updates.
      </p>

      <div class="md:w-[30.875rem] mx-auto">
        <div class="flex gap-4 flex-wrap justify-center">
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your email"
            class="border rounded-md w-full md:w-[22.5rem] h-[3rem] px-3 focus:outline-none"
          />
          <button
            class="p-3 rounded-md bg-[#7F56D9] text-white text-sm w-full md:w-[7.375rem] order-1 md:order-none"
          >
            Subscribe
          </button>
          <p class="text-left text-sm text-[#667085] mt-[-10px] mr-auto">
            We care about your data in our
            <span class="underline">prkivacy policy</span>
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="container w-full mx-auto space-y-4 p-3">
    <h3 class="font-bold text-xl md:text-2xl">Recent blog posts</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 justify-center gap-5">
      <div class="space-y-4">
        <img
          src="/src/assets/images/blog-posts/first.png"
          alt=""
          class="h-[12.5rem] lg:h-[14.25rem] lg:w-full"
        />
        <p class="text-[#6941C6] text-sm">Olivia Rhye • 20 Jan 2022</p>
        <div class="flex justify-between">
          <h3 class="font-bold text-lg lg:text-2xl">UX review presentations</h3>
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
        <p class="text-sm md:text-base text-[#667085]">
          How do you create compelling presentations that wow your colleagues
          and impress your managers?
        </p>
        <div class="flex gap-3">
          <p class="bg-[#F9F5FF] text-[#6941C6] rounded-full text-xs px-2 py-1">
            Design
          </p>
          <p class="bg-[#EEF4FF] text-[#3538CD] rounded-full text-xs px-2 py-1">
            Research
          </p>
          <p class="bg-[#FDF2FA] text-[#C11574] rounded-full text-xs px-2 py-1 block md:hidden lg:block">
            Presentation
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:col-span-2 lg:col-span-1 gap-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-0 lg:gap-3">
          <img
            src="/src/assets/images/blog-posts/second.png"
            alt=""
            class="h-[12.5rem] w-full"
          />
          <div class="space-y-4">
            <p class="text-[#6941C6] text-sm">Phoenix Baker • 19 Jan 2022</p>
            <div class="flex justify-between items-center">
              <h3 class="font-bold text-lg">Migrating to Linear 101</h3>
              <svg
                width="24"
                height="28"
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="block lg:hidden"
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
            <p class="text-sm md:text-base text-[#667085]">
              Linear helps streamline software projects, sprints, tasks, and bug
              tracking. Here’s how to get...
            </p>
            <div class="flex gap-3">
              <p
                class="bg-[#F0F9FF] text-[#026AA2] rounded-full text-xs px-2 py-1"
              >
                Design
              </p>
              <p
                class="bg-[#FDF2FA] text-[#C11574] rounded-full text-xs px-2 py-1"
              >
                Research
              </p>
              <p
                class="bg-[#FDF2FA] text-[#C11574] rounded-full text-xs px-2 py-1 block md:hidden"
              >
                Presentation
              </p>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-0 lg:gap-3">
          <img
            src="/src/assets/images/blog-posts/third.png"
            alt=""
            class="h-[12.5rem] w-full"
          />
          <div class="space-y-4">
            <p class="text-[#6941C6] text-sm">Lana Steiner • 18 Jan 2022</p>
            <div class="flex justify-between items-center">
              <h3 class="font-bold text-lg">Building your API Stack</h3>
              <svg
                width="24"
                height="28"
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="block lg:hidden"
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
            <p class="text-sm md:text-base text-[#667085]">
              The rise of RESTful APIs has been met by a rise in tools for
              creating, testing, and manag...
            </p>
            <div class="flex gap-3">
              <p
                class="bg-[#F0F9FF] text-[#026AA2] rounded-full text-xs px-2 py-1"
              >
                Design
              </p>
              <p
                class="bg-[#FDF2FA] text-[#C11574] rounded-full text-xs px-2 py-1"
              >
                Research
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <BlogList />
  <Pagination />
</template>

<style scoped></style>
