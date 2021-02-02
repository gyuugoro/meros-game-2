<template>
  <transition name="view" mode="out-in">
    <span class="text" v-show="isShow"
      >{{ $store.state.name }}は{{ $store.state.character }}。 <br />
      レア度は {{ $store.state.level }} 。</span
    >
  </transition>
</template>

<script>
export default {
  created() {
    window.addEventListener("scroll", this.scroll);
  },
  methods: {
    scroll() {
      if (window.scrollY <= 100) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
  },
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
.text {
  position: fixed;
  text-align: center;
  text-shadow: 0px 0px 5px white;
  font-size: 50px;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

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