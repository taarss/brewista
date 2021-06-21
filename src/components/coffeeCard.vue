<template>
    <div class="wrapper w-full">
        <img class="w-full" :src="'http://localhost:3080/images/' + data.img" >
        <div class="pb-14 rounded-b-2xl px-8 pt-8 text-left" :class="data.isDark ? 'light' : 'dark'">
            <h2 class="text-left font-semibold mb-3" :class="data.isDark ? 'lightHeader' : 'darkHeader'">{{ data.name }}</h2>
            <p class="text-left text-sm" :class="data.isDark ? 'lightDes' : 'darkDes'">{{ data.description }}</p>
            <div class="detailWrapper">
                <div>
                    <p class="text-sm" :class="data.isDark ? 'lightDes' : 'darkDes'">PROCESS</p>
                    <p class="text-sm" :class="data.isDark ? 'lightHeader' : 'darkHeader'">{{ data.process }}</p>
                </div>
                <div>
                    <p class="text-sm" :class="data.isDark ? 'lightDes' : 'darkDes'">ROAST PROFILE</p>
                    <p class="text-sm" :class="data.isDark ? 'lightHeader' : 'darkHeader'">{{ data.roastProfile }}</p>
                </div>
                <div>
                    <p class="text-sm" :class="data.isDark ? 'lightDes' : 'darkDes'">VARIETIES</p>
                    <p class="text-sm" :class="data.isDark ? 'lightHeader' : 'darkHeader'">{{ data.process }}</p>
                </div>
                <div>
                    <p class="text-sm" :class="data.isDark ? 'lightDes' : 'darkDes'">COUNTRY</p>
                    <p class="text-sm" :class="data.isDark ? 'lightHeader' : 'darkHeader'">{{ data.country }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["data"],

}
</script>
<style scoped>
    .detailWrapper{
        margin-top: 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .detailWrapper div{
        width: 40%;
    }
    .wrapper{
        border-radius: 20px;
    }
    .darkDes{
        color: #E2E2E2;
    }
    .lightDes{
        color: #707070;
    }

    .dark{
        background-color: #2F4442;
    }
    .light{
        background-color: #CDCBBF;
    }
    .lightHeader{
        color: #000000;
    }
    .darkHeader{
        color: #5D78BD;
    }
    img{
        object-fit: cover;
        object-position: center;
        max-height: 100px;
    }
    
</style>