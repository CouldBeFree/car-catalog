<template>
  <div>
    <v-row v-if="!isLoading && cars.length > 0">
      <v-col v-for="car in cars" :key="car.id" xs="12" sm="6" md="4">
        <CarCard :car="car" @view-car="$emit('view-car', $event)" />
      </v-col>
    </v-row>
    <v-row v-else-if="!isLoading && cars.length === 0">
      <v-col cols="12" class="text-center">
        <p class="headline">No cars found to match your search criteria.</p>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <CarCardSkeleton :count="12" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CarCard from './CarCard.vue';
import CarCardSkeleton from './CarCardSkeleton.vue';

export default {
  name: 'CardWrapper',
  components: {
    CarCard,
    CarCardSkeleton,
  },
  props: {
    cars: {
      type: Array,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>
