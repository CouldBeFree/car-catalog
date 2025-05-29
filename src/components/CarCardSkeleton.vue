<template>
  <div>
    <v-row>
      <v-col v-for="n in count" :key="n" cols="12" sm="6" md="4">
        <v-skeleton-loader type="card" class="ma-2" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'CarCardSkeleton',
  props: {
    count: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style scoped>
.v-skeleton-loader {
  height: 250px;
}
</style>
