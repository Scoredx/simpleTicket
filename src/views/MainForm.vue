<template>
  <div class="home">
    <MainForm msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainForm from "@/components/MainForm/MainForm.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    MainForm,
  },
});
</script>
