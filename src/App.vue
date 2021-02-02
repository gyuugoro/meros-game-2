<template>
  <v-app>
    <transition name="view" mode="out-in">
      <router-view />
    </transition>

    <v-snackbar v-model="$store.state.command">
      {{ $store.state.commandText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          text
          right
          color="green"
          @click="$store.state.command = false"
          v-bind="attrs"
          >閉じる</v-btn
        >
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
.view-enter-active,
.view-leave-active {
  transition: opacity 0.5s;
}

.view-enter,
.view-leave-to {
  opacity: 0;
}

.view-enter-to,
.view-leave {
  opacity: 1;
}
</style>