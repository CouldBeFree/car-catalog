<template>
  <v-container>
    <v-row>
      <v-col
          cols="12"
          sm="2"
          xs="12"
      >
        <v-select
            :value="transformStringToArray(value.name) || []"
            :items="nameItems"
            item-text="name"
            item-value="name"
            label="Select Car Name"
            multiple
            chips
            @change="$emit('update', { type: 'name', value: $event })"
        >
          <template v-slot:selection="{ item }">
            <v-chip
                :input-value="value.name"
                close
                @click="() => {}"
                @click:close="remove('name', item)"
            >
              {{item}}
            </v-chip>
          </template>
        </v-select>
      </v-col>
      <v-col
          cols="12"
          sm="2"
          xs="12"
        >
        <v-select
            :value="transformStringToArray(value.model) || []"
            :items="modelItems"
            item-text="model"
            item-value="model"
            label="Select Car Model"
            multiple
            chips
            @change="$emit('update', { type: 'model', value: $event })"
        >
          <template v-slot:selection="{ item }">
            <v-chip
                :input-value="value.model"
                close
                @click="() => {}"
                @click:close="remove('model', item)"
            >
              {{item}}
            </v-chip>
          </template>
        </v-select>
      </v-col>
      <v-col
          cols="12"
          sm="2"
          xs="12"
      >
        <v-select
            :value="+transformStringToArray(value.priceMin) || []"
            :items="priceOptions"
            item-text="price"
            item-value="price"
            label="Select Min Price"
            clearable
            @click:clear="() => {}"
            chips
            @change="$emit('update', { type: 'priceMin', value: $event })"
        ></v-select>
      </v-col>
      <v-col
          cols="12"
          sm="2"
          xs="12"
      >
        <v-select
            :value="+transformStringToArray(value.mileageMin) || []"
            :items="mileageOptions"
            item-text="mileage"
            item-value="mileage"
            clearable
            chips
            label="Select Min Mileage"
            @click:clear="() => {}"
            @change="$emit('update', { type: 'mileageMin', value: $event })"
        ></v-select>
      </v-col>
      <v-col
          cols="12"
          sm="2"
          style="display: flex;"
          align-self="center"
      >
        <v-btn
            :disabled="isButtonDisabled"
            @click="$emit('update', { type: 'reset', value: null })"
            color="primary">
          Reset
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { carNames, carModels, priceOptions, mileageOptions } from '../constants/index';

export default {
  name: 'FilterComponent',
  props: ['value'],
  data() {
    return {
      nameItems: carNames,
      modelItems: carModels,
      priceOptions: priceOptions,
      mileageOptions: mileageOptions,
    };
  },
  methods: {
    remove(type, item) {
      const currentValue = this.$props.value[type];
      if (Array.isArray(currentValue)) {
        const value = currentValue.filter(value => value !== item);
        this.$emit('update', { type, value });
        return;
      }
      if (typeof currentValue ===  'string') {
        this.$emit('update', { type, value: [] });
      }
    },
    transformStringToArray(value) {
      if (typeof value === 'string') {
        return [value];
      }
      return value;
    },
  },
  computed: {
    isButtonDisabled() {
      const objectLength = Object.values(this.$props.value).length;
      if (objectLength === 1 && 'page' in this.$props.value) {
        console.log(false);
        return true;
      }
      return !objectLength;
    }
  }
};
</script>

<style scoped>
.filter-row {
  display: flex;
  gap: 20px;
  padding: 0 20px 0 20px;
  flex-wrap: nowrap;
}
.v-select {
  margin: 20px 0;
  text-align: left; /* Align text to the left */
}
.v-select .v-input__control {
  justify-content: flex-start; /* Align checkbox and text to the left */
}
::v-deep .v-list-item__title {
  text-align: justify;
}
</style>
