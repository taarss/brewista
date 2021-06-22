<template>
<div class="sm:flex flex-col items-center justify-center w-full">
    <img :src="'http://localhost:3080/images/'+img">
    <div class="textcontainer flex mt-16 mb-10">
        <span class="text-4xl font-bold text-black">{{ id }}</span>
        <h2 class=" ml-5 text-xl font-bold text-black">  {{ header }}</h2>
    </div>
    <p class="textcontainer">{{ text }}</p>
</div>

</template>
<style scoped>
    img{
        width: 100%;
        max-width: 600px;
        object-fit: cover;
        object-position: center;
        border-radius: 20px;
    }
    .textcontainer{
        max-width: 600px;
    }
</style>
<script>
export default {
    props: ['img', 'text', 'header', 'id']
}
</script>