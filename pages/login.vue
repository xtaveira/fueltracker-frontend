<template>
  <div class="login-container">
    <h1>Login</h1>
    <button @click="loginWithGoogle" class="google-login-btn">
      Login with Google
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    loginWithGoogle() {
      window.location.href = "http://localhost:3001/auth/google";
    },
  },
};
</script>

<style lang="scss">
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.google-login-btn {
  background-color: #dd4b39;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 0.24rem;
  cursor: pointer;
  margin-top: 20px;
}

.google-login-btn:hover {
  background-color: #c53727;
}
</style>
