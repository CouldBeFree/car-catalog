<template>
  <v-card @click="$emit('view-car', car._id)" class="hoverable">
    <v-img :src="car.image" height="250px" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
      <v-card-title class="d-flex justify-space-between">
        <span>{{ car.name }} {{ car.model }}</span>
        <span class="year">{{ car.year }}</span>
      </v-card-title>
    </v-img>
    <v-card-subtitle class="price text-center">${{ car.price }}</v-card-subtitle>
    <v-card-text class="details text-center">
      <v-row justify="center">
        <v-col cols="12" sm="6">
          <div><strong>Mileage:</strong> {{ car.mileage }} miles</div>
          <div><strong>Engine:</strong> {{ car.engine }}</div>
        </v-col>
      </v-row>
    </v-card-text>
    <v-chip-group class="d-flex justify-center">
      <v-chip v-for="label in car.labels" :key="label" class="ma-1">{{ label }}</v-chip>
    </v-chip-group>
  </v-card>
</template>

<script>
export default {
  name: 'CarCard',
  props: {
    car: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.v-card {
  margin: 20px;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
}
.v-card:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}
.year {
  font-size: 0.8em;
  color: #ccc;
}
.price {
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 10px;
}
.details {
  font-size: 0.9em;
  color: #444;
}
.text {
  font-size: 0.8em;
  color: #666;
}
</style>
