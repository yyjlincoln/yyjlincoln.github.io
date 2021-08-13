<template>
  <div id="app">
    <p>We are redirecting you to our new website...</p>
    <p>Did not work? Click here:</p>
    <p><a href="https://yyjlincoln.com">https://yyjlincoln.com</a></p>

    <!-- <router-view /> -->
  </div>
</template>

<style>
</style>

<script>
import "tailwindcss/tailwind.css";

export default {
  name: "App",
  components: {},
  mounted() {
    window.location.href = "https://yyjlincoln.com";
  },
};
</script>
