<template>
  <div>
    <v-card class="pa-3 rounded-xl frame-card" elevation="0">
      <v-row class="frame-message justify-center">
        <v-col cols="3" class="d-flex justify-center align-center">
          <div class="avatar">
            <img :src="user.avatar" alt="" width="50" class="rounded-circle" />
            <div class="rounded-circle badge"></div>
          </div>
        </v-col>
        <v-col cols="9">
          <v-row>
            <v-col cols="12" class="text-h6 pb-0">{{ user.name }}</v-col>
            <v-col cols="12" class="text-subtitle-1 pt-0">{{ user.email }}</v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'UserInfoComponent',
  computed: {
    ...mapGetters(['user']),
  },
});
</script>

<style scoped>
.avatar {
  position: relative;
}
.badge {
  position: absolute;
  right: 0;
  bottom: 7px;
  width: 10px;
  height: 10px;
  background-color: #0be881;
}
</style>
