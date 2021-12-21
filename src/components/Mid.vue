<template>
  <div class="mid">
    <Logo></Logo>
    <search></search>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import search from "@/components/search";

export default {
  name: "Mid",
  components: {
    Logo,
    search
  },
  methods: {
    openDrawer() {
      this.$parent.setDrawer(true);
    }
  }
}
</script>

<style scoped>
.mid {
  text-align: center;
  border-radius: 20px;
  width: 100%;
  height: 350px;
  position: absolute;
  left: 50%;
  top: 35%;
  transform: translate(-50%,-50%);
}
</style>