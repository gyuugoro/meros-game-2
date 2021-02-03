<template>
  <v-container class="mx-auto my-auto">
    <v-form ref="textField">
      <v-text-field
        label="あなたのあだ名（例：しょーちゃん）"
        outlined
        autofocus
        append-icon="mdi-account-check"
        :rules="[rule]"
        color="green"
        @click:append="start"
        @keypress.enter.prevent
        @keypress.enter="start"
        v-model="name"
      ></v-text-field>
    </v-form>
  </v-container>
</template>

<script>
export default {
  computed: {
    name: {
      get() {
        return this.$store.state.name;
      },
      set(v) {
        this.$store.commit("changeName", v);
      },
    },
  },

  created() {
    this.name = "";
    this.$store.commit("changeFab", true);
  },

  methods: {
    start() {
      if (this.$refs.textField.validate()) {
        console.log("start");
        this.$router.push("/answer");
      }
    },
  },

  data() {
    return {
      rule: (v) => !!v || "ちゃんと入力しろ！",
    };
  },
};
</script>

<style scoped>
</style>