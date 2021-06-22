<template>
      <router-link to="/feed">
        <svg
            class="activeIcon ml-5 mt-10"
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
    <div class="mt-16 flex flex-col w-full justify-center items-center">
      <p :show="!!error" title="An error occurred">{{ error }}</p>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">E-Mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <p
          v-if="!formIsValid"
        >Please enter a valid email and password (must be at least 6 characters long).</p>
        <button class="m-5">{{ submitButtonCaption }}</button>
        <button class="m-5" type="button" mode="flat" @click="switchAuthMode">{{ switchModeButtonCaption }}</button>
      </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null,
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === 'login') {
        return 'Login';
      } else {
        return 'Signup';
      }
    },
    switchModeButtonCaption() {
      if (this.mode === 'login') {
        return 'Signup instead';
      } else {
        return 'Login instead';
      }
    },
  },
  methods: {
    getAuth(){
      return this.$store.getters.userIsAuthenticated
    },
    async submitForm() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      const actionPayload = {
        email: this.email,
        password: this.password,
      };
      try {
        if (this.mode === 'login') {
          await this.$store.dispatch('login', actionPayload);
        } else {
          await this.$store.dispatch('signup', actionPayload);
        }
      } catch (err) {
        this.error = err.message || 'Failed to authenticate, try later.';
      }
      this.isLoading = false;
      if(this.getAuth()){
        this.$router.push({ name: 'mainPage'})
      }
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
input{
  max-width: 400px;
}
form {
  margin: 1rem;
  padding: 1rem;
}
.form-control {
  margin: 0.5rem 0;
}
label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}
input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}
input:focus,
textarea:focus {
  border-color: #000000;
  background-color: #faf6ff;
  outline: none;
}
</style>