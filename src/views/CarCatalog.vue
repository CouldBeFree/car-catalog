<template>
  <div>
    <FilterComponent :value="$route.query" @update="handleFilterChange" />
    <CardWrapper :cars="getCars" :isLoading="isLoading" @view-car="viewCar" />
    <v-pagination
        v-if="meta.pages > 1"
        :value="+$route.query?.page || 1"
        :length="meta.pages"
        @input="updateQuery"
        color="primary"
        class="mt-4"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CardWrapper from '../components/CardWrapper.vue';
import FilterComponent from '../components/FilterComponent.vue';

export default {
  name: 'CarCatalog',
  components: {
    CardWrapper,
    FilterComponent,
  },
  computed: {
    ...mapGetters(['getCars', 'isLoading', 'getMeta']),
    meta() {
      return this.getMeta;
    },
    carNames() {
      return this.getCars.map(car => car.name);
    },
  },
  methods: {
    ...mapActions(['fetchCars']),
    // eslint-disable-next-line no-unused-vars
    viewCar(id) {
      this.$router.push(`/car/${id}`);
    },
    fetchPage(query) {
      this.fetchCars(query);
    },
    updateQuery(page) {
      this.$router.push({ query: { ...this.$route.query, page } });
    },
    handleFilterChange({ type, value }) {
      console.log(type, value);
      if (!value && type === 'reset') {
        this.$router.push({ query: {} }).catch(err => {
          if (err.name !== 'NavigationDuplicated') {
            throw err;
          }
        });
        return;
      }
      let actualQuery = { ...this.$route.query };
      actualQuery[type] = value ? value : [];
      this.$router.push({ query: actualQuery }).catch(err => {
        if (err.name !== 'NavigationDuplicated') {
          throw err;
        }
      });
    },
  },
  watch: {
    '$route.query': {
      handler(query) {
        this.fetchPage({ ...query });
      },
      deep: true,
    },
  },
  mounted() {
    this.fetchCars(this.$route.query);
  },
};
</script>

<style scoped>
</style>
