<template>
  <v-card style="width: 600px" flat v-if="initialized">
    <v-card-title class="pb-0">
      <v-tabs v-model="tab" class="justify-center d-flex">
        <v-tab>Directions</v-tab>
        <v-tab>Indications</v-tab>
        <v-tab>Edit</v-tab>
        <v-tab>Data</v-tab>
        <v-tab>Shapes</v-tab>
        <v-tab>Universal</v-tab>
      </v-tabs>
    </v-card-title>
    <v-divider class="mx-4" />
    <v-card-text>
      <v-tabs-items v-model="tab">
        <v-tab-item
          :key="idx"
          v-for="(v, k, idx) in iconDict"
          :style="{ height: height + 'px' }"
          class="overflow-auto py-2"
        >
          <v-row class="mx-2" no-gutters>
            <v-col cols="1" v-for="(i, idx) in v" :key="idx">
              <v-btn
                icon
                @click="$emit('input', i)"
                :color="(value === i && 'primary') || ''"
                :style="{ backgroundColor: value === i ? '#f2f3f8' : '' }"
              >
                <v-icon>{{ i }}</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </v-card-text>
  </v-card>
</template>
<script>
import Direction from "./icons/direction";
import Indications from "./icons/indication";
import Editing from "./icons/editing";
import Data from "./icons/data";
import Shape from "./icons/shape";
import Common from "./icons/common";

export default {
  props: ["value", "contentHeight"],
  data() {
    return {
      tab: null,
      initialized: false
    };
  },
  mounted() {
    // Old rules, give Vuetify a moment
    setTimeout(() => (this.initialized = true), 10);
  },
  computed: {
    iconDict() {
      return {
        direction: Direction.map((i) => this.decodeIcon(i)),
        indication: Indications.map((i) => this.decodeIcon(i)),
        editing: Editing.map((i) => this.decodeIcon(i)),
        data: Data.map((i) => this.decodeIcon(i)),
        shape: Shape.map((i) => this.decodeIcon(i)),
        common: Common.map((i) => this.decodeIcon(i))
      };
    },
    height() {
      return this.contentHeight || 300;
    }
  },
  methods: {
    /**
     * mdiHomeOutline -> mdi-home-outline
     */
    decodeIcon(icon) {
      const result = [];
      let lastIndex = 0;
      icon.split("").forEach((i, idx) => {
        if (i.match(/[A-Z]/g)) {
          result.push(icon.slice(lastIndex, idx));
          lastIndex = idx;
        }
      });
      result.push(icon.slice(lastIndex));

      return result.join("-").toLowerCase();
    }
  }
};
</script>
