<template>
  <div class="mx-10 stepwrapper ">
    <stepCard
      v-if="!this.isLoading"
      :header="this.currentStep.header"
      :id="this.currentStep.id"
      :img="this.currentStep.img"
      :text="this.currentStep.text"
    ></stepCard>
    <div class="flex items-center w-4/5 justify-between navWrap px-10 py-5">
      <router-link :to="this.stepId < 2 ? '/feed' : '/steps/' + stepMinus">
        <svg
          class="activeIcon"
          xmlns="http://www.w3.org/2000/svg"
          width="20.414"
          height="16.828"
          viewBox="0 0 20.414 16.828"
        >
          <defs></defs>
          <path
            class="a"
            d="M10,19,3,12m0,0,7-7M3,12H21"
            transform="translate(-1.586 -3.586)"
          />
        </svg>
      </router-link>
      <div class="flex w-2/6 justify-between">
        <router-link
          v-for="step in this.steps"
          :key="step.id"
          :to="'/steps/' + this.brewId + '/' + step.id"
          ><svg
            :class="step.id == this.stepId ? 'activeIcon' : 'icon'"
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
          >
            <defs></defs>
            <g class="a">
              <circle class="b" cx="4" cy="4" r="4" />
              <circle class="c" cx="4" cy="4" r="3.5" />
            </g></svg
        ></router-link>
      </div>
      <router-link :to="this.stepId == dataLength ? '/feed' : '/steps/' + stepPlus">
        <svg
          class="activeIcon"
          xmlns="http://www.w3.org/2000/svg"
          width="20.414"
          height="16.828"
          viewBox="0 0 20.414 16.828"
        >
          <defs></defs>
          <path
            class="a"
            d="M14,5l7,7m0,0-7,7m7-7H3"
            transform="translate(-2 -3.586)"
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>
<style>
.stepwrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  justify-content: space-between;
}
.icon {
  stroke: black;
  fill: transparent;
}
.activeIcon {
  stroke: black;
  fill: black;
}
.navWrap {
  background-color: #fff782;
  border-radius: 30px;
}
</style>
<script>
import stepCard from "../stepsCard.vue";
export default {
  created() {
    this.loadData()
  },
  data() {
    return {
      steps: [],
      currentStep: [],
      isLoading: true,
    };
  },
  methods: {
    loadData() {
      fetch(
        "https://vue-http-demo-f20d8-default-rtdb.europe-west1.firebasedatabase.app/brews.json"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          Object.entries(data).forEach((num) => {
            if (num.find((e) => e.id == this.brewId)) {
              this.steps = num[1].steps;
              console.log(this.steps);
              this.currentStep = num[1].steps.find((e) => e.id == this.stepId);
            }
          });
        });
      this.isLoading = false;
    },
  },
  watch: {
    stepId() {
        this.loadData()
    },
  },
  props: ["brewId", "stepId"],
  components: { stepCard },
  computed: {
    stepMinus() {
      return this.brewId + "/" + (this.stepId - 1);
    },
    stepPlus() {
      console.log();
      let test = this.stepId;
      test++;
      return this.brewId + "/" + test;
    },
    test() {
      return this.stepId - 1;
    },
    dataLength() {
      return this.steps.length;
    },
  },
};
</script>
