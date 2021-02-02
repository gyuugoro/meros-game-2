<template>
  <div class="base">
    <h1 class="main">情報</h1>
    <p class="main" v-for="(text, i) in $store.state.infos" :key="i">
      {{ text.name }} ・・・ {{ text.character }} <br />
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  text-align: center;
  color: #4caf50;
  margin-top: 25px;
  margin-bottom: 0px;
}

.base {
  width: 100vw;
  height: 100vh;
}
</style>