<template>
  <section class="container w-full mx-auto space-y-4 p-3 mt-10">
    <div class="container mx-auto md:px-4">
      <h1 class="text-2xl font-semibold mb-6">All Blog Posts</h1>
      <div class="grid gap-10 md:gap-5 lg:gap-10 md:grid-cols-3">
        <BlogCard
          v-for="(
            { image, author, date, title, content, category }, index
          ) in blogs"
          :key="index"
          :image="image"
          :author="author"
          :date="date"
          :title="title"
          :content="content"
          :category="category"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import BlogCard from "./BlogCard.vue";

const blogs = [
  {
    image: "/src/assets/images/all-posts/first.png",
    author: "Alec Whitten",
    date: "• 17 Jan 2022",
    title: "Bill Walsh leadership lessons",
    content:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    category: ["leadership", "management"],
  },
  {
    image: "/src/assets/images/all-posts/second.png",
    author: "Demi Wilkinson",
    date: "• 16 Jan 2022",
    title: "PM mental models",
    content:
      "Mental models are simple expressions of complex processes or relationships.",
    category: ["research", "product", "frameworks"],
  },
  {
    image: "/src/assets/images/all-posts/third.png",
    author: "Candice Wu",
    date: "• 15 Jan 2022",
    title: "What is Wireframing?",
    content:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    category: ["design", "research"],
  },
  {
    image: "/src/assets/images/all-posts/fourth.png",
    author: "Natali Craig",
    date: "• 14 Jan 2022",
    title: "How collaboration makes us better designers",
    content:
      "Collaboration can make our teams stronger, and our individual designs better.",
    category: ["design", "research"],
  },
  {
    image: "/src/assets/images/all-posts/fifth.png",
    author: "Drew Cano",
    date: "• 13 Jan 2022",
    title: "Our top 10 Javascript frameworks to use",
    content:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    category: ["Software Development", "tools", "SaaS"],
  },
  {
    image: "/src/assets/images/all-posts/sixth.png",
    author: "Orlando Diggs",
    date: "• 12 Jan 2022",
    title: "Podcast: Creating a better CX Community",
    content:
      "Starting a community doesn’t need to be complicated, but how do you get started?",
    category: ["podcast", "customer service"],
  },
];
</script>
