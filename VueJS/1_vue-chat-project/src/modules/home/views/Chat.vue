<template>
  <v-card class="pa-0 rounded-xl frame-card" elevation="0">
    <v-row class="frame-message mt-5 pl-5 pr-5">
      <v-col cols="12" class="scroll" id="container">
        <div v-for="data in msg" :key="data._id" class="mb-10">
          <transition
            :appear="true"
            enter-active-class="animate__animated animate__backInRight"
            leave-active-class="animate__animated animate__backInLeft"
          >
            <v-row>
              <v-col cols="1" class="pa-0" v-if="data.user._id !== user._id">
                <img
                  v-if="data.user.avatar !== ''"
                  :src="data.user.avatar"
                  alt=""
                  width="50"
                  height="50"
                  class="rounded-circle"
                />
                <v-icon v-else icon="mdi-account-circle" size="50"></v-icon>
              </v-col>
              <v-col :cols="data.user._id === user._id ? 12 : 11">
                <v-row :class="data.user._id === user._id ? 'justify-end' : ''">
                  <span
                    style="position: relative"
                    :class="{
                      ownerMsg: data.user._id === user._id,
                      guestMsg: data.user._id !== user._id,
                      'pa-3': true,
                      'rounded-xl': true,
                    }"
                  >
                    {{ data.content }}
                    <span
                      v-if="data.user._id !== user._id"
                      class="text-caption"
                      style="position: absolute; top: -20px; left: 6px; color: gray"
                    >
                      {{ data.user.name }}
                      {{ timestampToHour(data.date) }}
                    </span>
                    <span
                      v-else
                      class="text-caption"
                      style="position: absolute; top: -20px; right: 6px; color: gray"
                    >
                      {{ timestampToHour(data.date) }}
                    </span>
                  </span>
                </v-row>
              </v-col>
            </v-row>
          </transition>
        </div>
      </v-col>
    </v-row>
    <form @submit.prevent="submit">
      <v-row class="frame-form align-stretch pl-5 pr-5">
        <v-col cols="11" sm="11" md="11" lg="11">
          <input type="text" class="rounded-pill" placeholder="Type a message..." />
        </v-col>
        <v-col cols="1" sm="1" md="1" lg="1" class="d-flex align-center justify-center">
          <v-btn type="submit" icon="mdi-send" color="primary"> </v-btn>
        </v-col>
      </v-row>
    </form>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, useStore } from 'vuex';
import { useToast } from 'vue-toastification';
import type { Message } from '../../../api/model/Message';
import { allMessage } from '../service/message-service';

export default defineComponent({
  name: 'ChatComponent',
  setup() {
    const store = useStore();
    const toast = useToast();

    let dataMsg: Array<Message> = [];
    const submit = () => {};

    return {
      toast,
      dataMsg,
      store,
      submit,
    };
  },
  created() {
    allMessage(this.store, this.toast, this.scrollToEnd);
  },
  mounted() {
    this.scrollToEnd();
  },
  methods: {
    scrollToEnd() {
      var container: Element = document.querySelector('#container')!;
      var scrollHeight: number = container.scrollHeight;
      container.scrollTop = scrollHeight;
    },
    timestampToHour(timestamp: number) {
      return new Date(timestamp).toLocaleTimeString('vi-VN');
    },
  },
  computed: {
    ...mapGetters(['user', 'msg']),
  },
});
</script>

<style scoped>
.frame-card {
  height: 750px;
}
.frame-message {
  height: 650px;
}
.frame-form {
}

.ownerMsg {
  background: #4f46e5;
  color: #fff;
  max-width: 350px;
}
.guestMsg {
  background: var(--ds-surface-alt, #f1f5f9);
  color: var(--ds-text, #0f172a);
  max-width: 350px;
}
.frame-form input {
  background: var(--ds-surface-alt, #f1f5f9);
  border: 1px solid var(--ds-border, #e2e8f0);
  outline: none;
  width: 100%;
  height: 52px;
  padding: 0 16px;
  color: var(--ds-text, #0f172a);
  transition: border-color var(--ds-transition, 180ms ease),
              box-shadow var(--ds-transition, 180ms ease);
}
.frame-form input:focus {
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);
}

.scroll {
  max-height: 626px !important;
  overflow-y: auto;
}
</style>
