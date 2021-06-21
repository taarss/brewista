<template>
<div>
    <div class="flex">
        <svg class="backBtn ml-5" xmlns="http://www.w3.org/2000/svg" width="20.414" height="16.828" viewBox="0 0 20.414 16.828"><defs></defs><g transform="translate(1.414 1.414)"><path class="a" d="M10,19,3,12m0,0,7-7M3,12H21" transform="translate(-3 -5)"/></g></svg>
        <h3 class="w-full text-xl">Pick your coffee</h3>
    </div>
        <section class="mx-10 mt-16">
            <CoffeeCard class="mb-10" v-for="coffee in coffeCollective" :key="coffee.id" :data="coffee"></CoffeeCard>
        </section>
</div>
</template>
<script>
import CoffeeCard from '../coffeeCard.vue';
export default {
    components: { CoffeeCard },
    data(){
        return{
            coffeCollective: [
                {
                    id: 1,
                    name: 'KIENI ESPRESSO',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiamolestiae quas vel sint commodi',
                    process: 'Washed',
                    roastProfile: 'Medium',
                    varieties: 'Castilio, Caturra',
                    country: 'Guatermala',
                    img: 'header-coffeecollective-dark.png',
                    isDark: false,
                },
                {
                    id: 2,
                    name: 'KIENI',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiamolestiae quas vel sint commodi ',
                    process: 'Washed',
                    roastProfile: 'Medium',
                    varieties: 'Castilio, Caturra',
                    country: 'Guatermala',
                    img: 'header-coffeecollective.png',
                    isDark: true
                },
            ]
        };
    }
}
</script>
<style scoped>
.backBtn{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}
section{
    display: flex;
    flex-direction: column;
}
</style>