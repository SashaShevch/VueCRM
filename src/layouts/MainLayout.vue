<template>
  <div class="app-main-layout">
    <Navbar @togleSidebar="isSidebarOpen = !isSidebarOpen" />
    <Sidebar v-model="isSidebarOpen" />
    <main class="app-content" :class="{ full: !isSidebarOpen }">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <a class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">add</i>
      </a>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar.vue";
import Sidebar from "@/components/app/Sidebar.vue";

export default {
  name: "main-layout",
  data: () => ({
    isSidebarOpen: true,
  }),
  components: {
    Navbar,
    Sidebar,
  },
};
</script>
