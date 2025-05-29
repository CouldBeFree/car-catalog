import Vuex from 'vuex';
import api from '../api/cars';
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cars: [],
    car: null,
    loading: false,
    meta: {},
  },
  getters: {
    getCars: (state) => state.cars,
    getCar: (state) => state.car,
    isLoading: (state) => state.loading,
    getMeta: (state) => state.meta,
  },
  mutations: {
    setCars(state, cars) {
      state.cars = cars;
    },
    setCar(state, car) {
      state.car = car;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setMeta(state, meta) {
      state.meta = meta;
    },
  },
  actions: {
    async fetchCars({ commit }, query) {
      commit('setLoading', true);
      try {
        const { data: { data: cars, meta } } = await api.getCars(query);
        commit('setCars', cars);
        commit('setMeta', meta);
      } catch (error) {
        console.error('Error fetching cars:', error);
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchCarById({ commit }, id) {
      commit('setLoading', true);
      try {
        const response = await api.getCarById(id);
        commit('setCar', response.data);
      } catch (error) {
        console.error('Error fetching car:', error);
      } finally {
        commit('setLoading', false);
      }
    },
  },
});
