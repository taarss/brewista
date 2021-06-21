<template>
<div>
    <img :src="'http://localhost:3080/images/'+img">
    <div class="flex mt-16 mb-10">
        <span class="text-4xl font-bold text-black">{{ id }}</span>
        <h2 class=" ml-5 text-xl font-bold text-black">  {{ header }}</h2>
    </div>
    <p>{{ text }}</p>
</div>

</template>
<style scoped>
    img{
        width: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 20px;
    }
</style>
<script>
export default {
    props: ['img', 'text', 'header', 'id']
}
</script>