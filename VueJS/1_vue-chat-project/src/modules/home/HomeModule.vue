<template>
  <v-container class="mt-15">
    <v-row class="d-flex justify-center">
      <v-col cols="7" sm="7" md="7" lg="7">
        <transition :appear="true" enter-active-class="animate__animated animate__backInLeft">
          <frame-chat></frame-chat>
        </transition>
      </v-col>
      <v-col cols="5" sm="5" md="5" lg="5">
        <v-row>
          <v-col cols="12" sm="12" md="12" lg="12">
            <transition :appear="true" enter-active-class="animate__animated animate__backInRight">
              <user-info></user-info>
            </transition>
          </v-col>
          <v-col cols="12" sm="12" md="12" lg="12">
            <transition :appear="true" enter-active-class="animate__animated animate__backInRight">
              <user-online></user-online>
            </transition>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import ChatComponent from './views/Chat.vue';
import UserInfoComponent from './views/UserInfo.vue';
import UserOnlineComponent from './views/UserOnline.vue';

export default defineComponent({
  name: 'HomeModule',
  computed: {
    ...mapGetters(['jwt', 'authentication', 'user']),
  },
  components: {
    'frame-chat': ChatComponent,
    'user-info': UserInfoComponent,
    'user-online': UserOnlineComponent,
  },
});
</script>
