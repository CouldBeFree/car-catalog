<template>
  <v-app>
    <v-app-bar app>
      <router-link to="/" class="no-decoration">
        <v-toolbar-title>Car catalog</v-toolbar-title>
      </router-link>
    </v-app-bar>

      <v-container>
        <router-view />
      </v-container>

    <v-footer app>
      <span>&copy; 2025</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.no-decoration {
  text-decoration: none;
  color: inherit;
}
</style>
