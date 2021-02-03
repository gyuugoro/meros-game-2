<template>
  <div class="base">
    <h1 class="main">情報</h1>
    <p class="main" v-for="text in $store.state.infos" :key="text.name">
      {{ text.name }} ・・・ {{ text.character }} ・・・ {{ text.level }}
      <br />
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