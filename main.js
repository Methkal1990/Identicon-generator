new Vue({
  el: "#app",
  data: {
    textInput: "",
  },
  computed: {
    identicon() {
      return jdenticon.toSvg(this.textInput, 200);
    },
  },
});
