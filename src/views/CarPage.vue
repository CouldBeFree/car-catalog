<template>
  <div>
    <v-row justify="start" class="pt-6">
      <v-col cols="12" align="start" v-if="car">
        <v-btn @click="$router.back()" color="primary">Go Back</v-btn>
      </v-col>
    </v-row>
    <v-row justify="start" align="start">
      <v-col cols="12" md="4">
        <v-card class="elevation-2 square-card" v-if="car">
          <v-img :src="car.image" height="300px" class="image-overlay"></v-img>
        </v-card>
        <v-skeleton-loader v-else type="image" height="300px"></v-skeleton-loader> 
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="elevation-2 square-card" v-if="car" style="height: 300px;"> 
          <v-card-text class="text-center">
            <p class="headline">{{ car.name }} {{ car.model }}</p>
            <p class="description no-margin">{{ car.year }} - {{ car.color }}</p>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="description">Engine: {{ car.engine }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="description">Price: ${{ car.price }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="description">Mileage: {{ car.mileage }} miles</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
        <v-skeleton-loader v-else type="card" :height="300"></v-skeleton-loader> 
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'CarPage',
  computed: {
    carId() {
      return this.$route.params.id;
    },
    ...mapGetters(['getCar', 'isLoading']),
    car() {
      return this.getCar;
    },
  },
  methods: {
    ...mapActions(['fetchCarById']),
    ...mapMutations(['setCar']),
  },
  mounted() {
    this.fetchCarById(this.carId);
  },
  beforeDestroy() {
    this.setCar(null);
  }
};
</script>

<style scoped>
.v-card {
  margin-top: 20px;
  overflow: hidden; /* Make card square */
}

.image-overlay {
  position: relative;
  height: 300px; /* Adjust height to make image square */
}

.text-center {
  text-align: center;
}

.headline {
  font-weight: bold;
  font-size: 1.5rem;
  color: black;
}

.description {
  font-size: 1rem;
  color: black;
}

.no-margin {
  margin-bottom: 0; /* Remove margin bottom */
}
</style>
