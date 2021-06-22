<template>
<div>
    <div class="flex items-center mb-10">
        <router-link :to="collectiveId ? '/create' : '/feed'">
            <svg class="backBtn ml-5" xmlns="http://www.w3.org/2000/svg" width="20.414" height="16.828" viewBox="0 0 20.414 16.828"><defs></defs><g transform="translate(1.414 1.414)"><path class="a" d="M10,19,3,12m0,0,7-7M3,12H21" transform="translate(-3 -5)"/></g></svg>
        </router-link>
        <h3 v-if="!collectiveId" class="w-full text-xl">Pick your coffee</h3>
        <h3 v-else class="w-full text-xl text-left ml-10">Combine with method</h3>
    </div>
        <section class="mx-5 mt-16" v-if="!collectiveId">
            <CoffeeCard class="mb-10" v-for="coffee in coffeCollective" :key="coffee.id" :data="coffee"></CoffeeCard>
        </section>
        <section class="mx-10"  v-if="collectiveId">
                <CoffeeType v-for="coffeeType in coffeeTypes" @click="addCoffee(coffeeType.id)" :key="coffeeType.name" :data="coffeeType"></CoffeeType>
        </section>
</div>
</template>
<script>
import CoffeeCard from '../coffeeCard.vue';
import CoffeeType from '../coffeeBrewType.vue';
export default {
    props: ['collectiveId'],
    components: { CoffeeCard, CoffeeType },
    methods: {
        addCoffee(methodId){
            let currentCollective = this.coffeCollective.find(e => e.id == this.collectiveId);
            let currentTypes = this.coffeeTypes.find(e => e.id == methodId);
            let newId = Date.now();
            console.log(currentTypes.name);
            fetch('https://vue-http-demo-f20d8-default-rtdb.europe-west1.firebasedatabase.app/brews.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amountOfBeans: currentTypes.weight,
                    amountOfWater: currentTypes.water,
                    bean: currentCollective.name,
                    beanManufactor: 'idk',
                    beanType: currentTypes.beanType,
                    brewTime: currentTypes.time,
                    brewType: currentTypes.name,
                    id: newId,
                    img: '538gm3mc.png',
                    steps: [{
                        header: 'This is a header',
                        id: 1,
                        img: 'ncl4omsr.png',
                        text: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis"'
                    },
                    {
                        header: 'This is a header',
                        id: 2,
                        img: 'ncl4omsr.png',
                        text: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis"'
                    },
                    {
                        header: 'This is a header',
                        id: 3,
                        img: 'ncl4omsr.png',
                        text: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis"'
                    },
                    ]
                }
            )}).then((res) => res.json())
  .then((data) => {
      console.log(data);
      this.$router.push({ name: 'step', params: { brewId: newId, stepId: 1 } });
  })
  .catch((err) => console.log(err));
        }
    },
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
            ],
            coffeeTypes: [
                {
                    id: 1,
                    name: 'French Press',
                    weight: '33',
                    water: '500ml',
                    beanType: 'Coarse',
                    time: '4 min'
                },
                {
                    id: 2,
                    name: 'Cold Infusion',
                    weight: '33',
                    water: '500ml',
                    beanType: 'Coarse',
                    time: '2 timer'
                },
                {
                    id: 3,
                    name: 'Chemex',
                    weight: '33',
                    water: '500ml',
                    beanType: 'Coarse',
                    time: '4 min'
                },
                {
                    id: 4,
                    name: 'Kalita Wave',
                    weight: '33',
                    water: '500ml',
                    beanType: 'Coarse',
                    time: '4 min'
                },
            ],
            
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