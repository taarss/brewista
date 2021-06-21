<template>
<div class="flex mb-14 justify-between">

  <h1 class="w-2/3 text-left text-3xl">It's a Great <span class="font-bold">Day for Coffee</span></h1>
  <router-link to="/create">
    <button class="rounded-full  bg-black text-white">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-17 w-17"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
        </svg>
    </button>
  </router-link>
</div>
</template>
<style scoped>
button {
  width: 70px;
}
</style>
