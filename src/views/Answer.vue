<template>
  <v-container fluid fill-height class="p-0" style="padding: 0px">
    <TImage />
    <TText v-show="isText" />
    <TInfo />
    <v-fab-transition>
      <!-- <v-btn color="green" dark fab bottom right elevation="0" fixed to="/"
        ><v-icon>mdi-home</v-icon></v-btn
      > -->
    </v-fab-transition>
  </v-container>
</template>

<script>
import TText from "../components/TText";
import TImage from "../components/TImage";
import TInfo from "../components/TInfo";

export default {
  components: {
    TText,
    TImage,
    TInfo,
  },
  data() {
    return {
      isText: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isText = true;
    }, 500);
  },
  created() {
    this.$store.commit("changeFab", false);
  },
};
</script>

<style scoped>
</style>