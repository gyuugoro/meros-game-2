<template>
  <v-container
    fluid
    fill-height
    class="bg"
    style="padding: 0px"
    :class="character"
  ></v-container>
</template>

<script>
export default {
  computed: {
    character() {
      return this.$store.state.character;
    },
  },
};
</script>

<style scoped>
.bg {
  background-position: center;
  background-size: cover;
  filter: blur(2px);
  width: 100vw;
  height: 100vh;
}

.ゼウス {
  background-image: url("./../assets/ゼウス.jpeg");
}

.セリヌンティウス {
  background-image: url("./../assets/セリヌンティウス.jpg");
}

.ディオニス {
  background-image: url("./../assets/ディオニス.jpg");
}

.フィロストラトス {
  background-image: url("./../assets/フィロストラトス.jpg");
}

.メロス {
  background-image: url("./../assets/メロス.jpg");
}

.メロスに揺さぶられた老爺 {
  background-image: url("./../assets/メロスに揺さぶられた老爺.jpeg");
}

.メロスに緋のマントを捧げた少女 {
  background-image: url("./../assets/メロスに緋のマントを捧げた少女.jpg");
}

.メロスに蹴とばされた犬 {
  background-image: url("./../assets/メロスに蹴とばされた犬.jpg");
}

.メロスの妹 {
  background-image: url("./../assets/メロスの妹.jpg");
}

.メロスの妹の結婚相手 {
  background-image: url("./../assets/メロスの妹の結婚相手.jpg");
}

.メロスの羊 {
  background-image: url("./../assets/メロスの羊.jpg");
}

.太宰治 {
  background-image: url("./../assets/太宰治.jpeg");
}

.山賊 {
  background-image: url("./../assets/山賊.jpg");
}

.永遠の裏切者、地上で最も不名誉の人種 {
  background-image: url("./../assets/永遠の裏切者、地上で最も不名誉の人種.jpeg");
}

.王に殺された賢臣のアレキス {
  background-image: url("./../assets/賢臣のアレキス.jpg");
}
</style>