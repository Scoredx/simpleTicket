<template>
  <div class="home">
    <AdminPage msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AdminPage from "@/components/AdminPage/AdminPage.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    AdminPage,
  },
});
</script>
