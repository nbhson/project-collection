<template>
  <transition :appear="true" enter-active-class="animate__animated animate__zoomIn">
    <v-row class="d-flex justify-center">
      <v-col cols="10" sm="8" md="6" lg="4">
        <v-card class="pa-7 rounded-xl" elevation="0">
          <v-card-title>
            <div class="text-h4">Sign up</div>
          </v-card-title>
          <v-card-subtitle class="mb-5">Create new account to join with us</v-card-subtitle>
          <v-app id="inspire">
            <v-form ref="form" @submit.prevent="submit" lazy-validation v-model="isValidForm">
              <v-card-text>
                <v-text-field
                  v-model="data.email"
                  :rules="emailRules"
                  label="E-mail"
                  variant="outlined"
                  clearable
                  clear-icon="mdi-delete"
                  color="primary"
                  autocomplete="off"
                  type="email"
                  shaped
                ></v-text-field>

                <v-text-field
                  v-model="data.password"
                  :rules="passwordRules"
                  :append-icon="showInputPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showInputPassword ? 'text' : 'password'"
                  label="Password"
                  hint="At least 6 characters"
                  counter
                  @click:append="showInputPassword = !showInputPassword"
                  variant="outlined"
                  clearable
                  clear-icon="mdi-delete"
                  color="primary"
                  autocomplete="off"
                ></v-text-field>

                <v-text-field
                  v-model="data.name"
                  :rules="nameRules"
                  label="Name"
                  counter
                  variant="outlined"
                  clearable
                  clear-icon="mdi-delete"
                  color="primary"
                  autocomplete="off"
                  hint="At least 4 characters"
                ></v-text-field>

                <v-text-field
                  v-model="data.phone"
                  :rules="phoneRules"
                  label="Phone"
                  variant="outlined"
                  clearable
                  clear-icon="mdi-delete"
                  color="primary"
                  autocomplete="off"
                ></v-text-field>

                <v-card-actions>
                  <v-row>
                    <v-col class="pl-0 pr-0" cols="12" sm="12" md="12" lg="12" v-if="formLoading">
                      <v-progress-circular indeterminate color="primary"></v-progress-circular>
                      <span class="ml-3">We are processing your request!</span>
                    </v-col>

                    <v-col class="pl-0 pr-0" cols="12" sm="12" md="12" lg="12" v-if="errMsg !== ''">
                      <v-alert type="error">
                        <strong>{{ errMsg }}</strong>
                      </v-alert>
                    </v-col>

                    <v-col class="pl-0 pr-0" cols="12" sm="12" md="12" lg="12">
                      <v-btn
                        type="submit"
                        color="dark"
                        size="large"
                        flat
                        block
                        variant="contained-text"
                      >
                        Sign Up
                      </v-btn>
                    </v-col>

                    <v-col class="pl-0 pr-0 d-flex justify-end" cols="12" sm="12" md="12" lg="12">
                      Already registered
                      <router-link to="/sign-in" class="primary ml-1">Sign in?</router-link>
                    </v-col>
                  </v-row>
                </v-card-actions>
              </v-card-text>
            </v-form>
          </v-app>
        </v-card>
      </v-col>
    </v-row>
  </transition>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { mapGetters } from 'vuex';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import mitt from 'mitt';
import {
  signUp,
  emailRules,
  passwordRules,
  nameRules,
  phoneRules,
} from './service/sign-up-service';

export default defineComponent({
  name: 'RegisterComponent',
  watch: {
    // 'data.email'() {
    //   (this.$refs['form'] as any).validate();
    // },
  },
  computed: {
    ...mapGetters(['formLoading', 'errMsg']),
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const toast = useToast();

    let isValidForm = true;

    let data = reactive({
      email: '',
      password: '',
      name: '',
      phone: '',
    });

    const submit = () => {
      if (isValidForm) {
        signUp(data, store, router, toast);
      }
    };

    return {
      isValidForm,
      data,
      submit,
    };
  },
  data() {
    return {
      showInputPassword: false,
      emailRules,
      passwordRules,
      nameRules,
      phoneRules,
    };
  },
});
</script>
