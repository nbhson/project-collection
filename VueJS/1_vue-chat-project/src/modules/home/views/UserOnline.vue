<template>
  <div>
    <v-card class="pa-3 rounded-xl user-online" elevation="0">
      <v-card-title>User Online</v-card-title>
      <v-card-text class="user-content">
        <div v-for="user in usersOnline" :key="user._id">
          <v-card class="pa-3 rounded-xl frame-card" elevation="0">
            <v-row class="frame-message justify-center">
              <v-col cols="3" class="d-flex justify-center align-center">
                <div class="avatar">
                  <img :src="user.avatar" alt="" width="50" height="50" class="rounded-circle" />
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
          <v-divider inset></v-divider>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useToast } from 'vue-toastification';
import { mapGetters, useStore } from 'vuex';
import { allUserOnline } from '../service/message-service';

export default defineComponent({
  name: 'UserOnlineComponent',
  computed: {
    ...mapGetters(['usersOnline', 'isUpdate']),
  },
  setup() {
    const store = useStore();
    const toast = useToast();
    let interval: number = 0;

    const usersOnl = () => {
      allUserOnline(store, toast);
    };

    return {
      store,
      usersOnl,
      interval,
    };
  },
  created() {
    this.interval = setInterval(() => {
      this.usersOnl();
    }, 5000);
  },
  watch: {
    isUpdate(newValue, oldValue) {
      if (!newValue) {
        clearInterval(this.interval);
      }
    },
  },
});
</script>

<style scoped>
.user-content {
  height: 570px;
  overflow-y: auto;
}
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
.user-online {
  height: 645px;
}
</style>
