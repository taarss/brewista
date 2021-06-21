<template>
<div class="mx-10 stepwrapper ">
    <stepCard v-if="this.isLoading" :header="this.steps[0].header" :id="this.steps.id"  :img="this.steps.img" :text="this.steps.text"></stepCard>
    <div class="flex items-center w-4/5 justify-between navWrap px-10 py-5">
        
        <router-link :to="this.stepId < 2 ? '/feed' : '/steps/' + stepMinus">
            <svg class="activeIcon" xmlns="http://www.w3.org/2000/svg" width="20.414" height="16.828" viewBox="0 0 20.414 16.828"><defs></defs><path class="a" d="M10,19,3,12m0,0,7-7M3,12H21" transform="translate(-1.586 -3.586)"/></svg>
        </router-link>
        <div class="flex w-2/6 justify-between">
        <router-link v-for="step in this.steps" :key="step.id" :to="'/steps/' + this.brewId + '/'+ step.id"><svg :class="step.id == this.stepId ? 'activeIcon' : 'icon'" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"><defs></defs><g class="a"><circle class="b" cx="4" cy="4" r="4"/><circle class="c" cx="4" cy="4" r="3.5"/></g></svg></router-link>
        </div>
        <router-link :to="this.stepId ==  dataLength ? '/feed' : '/steps/' + stepPlus">
            <svg class="activeIcon" xmlns="http://www.w3.org/2000/svg" width="20.414" height="16.828" viewBox="0 0 20.414 16.828"><defs></defs><path class="a" d="M14,5l7,7m0,0-7,7m7-7H3" transform="translate(-2 -3.586)"/></svg>
        </router-link>
    </div>
</div>
</template>
<style>
    .stepwrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 90vh;
        justify-content: space-between;
    }
    .icon{
        stroke: black;
        fill: transparent;
    }
    .activeIcon{
        stroke: black;
        fill: black;
    }
    .navWrap{
        background-color: #FFF782;
        border-radius: 30px;
    }
</style>
<script>
import stepCard from '../stepsCard.vue';
export default {

    created(){
        fetch('https://vue-http-demo-f20d8-default-rtdb.europe-west1.firebasedatabase.app/brews.json').then(function(response) {
        if(response.ok){
          return response.json();
        }
        
      }).then((data) => {
        console.log(data);
        this.steps = data;
      });
        this.isLoading = false;

    },
    data(){
        return{
            steps: null,
            isLoading: true,
        }
    },
    props: ['brewId','stepId'],
    components: { stepCard },
    computed: {
        stepMinus() {
            return this.brewId + "/" + (this.stepId - 1);
        },
        stepPlus(){
            console.log();
            let test = this.stepId;
            test++
            return this.brewId + "/" + test;
        },
        test(){
            return this.stepId - 1;
        },
        dataLength(){
            return this.steps.length;
        }
    },
    
}
</script>
