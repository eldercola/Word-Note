<template>
  <div id="app">
    <Nav></Nav>
    <Mid></Mid>
<!--    <el-drawer
        title="高频词库"
        :visible.sync="drawer"
        :direction="direction">
      <span>我来啦!</span>
    </el-drawer>-->
    <WordsDrawer :drawer="drawer"></WordsDrawer>
  </div>
</template>

<script>
import Mid from "@/components/Mid";
import Nav from "@/components/Nav";
import WordsDrawer from "@/components/WordsDrawer";

export default {
  name: 'App',
  components: {
    WordsDrawer,
    Mid,
    Nav
  },
  data () {
    return {
      drawer: false,
    }
  },
  methods: {
    setDrawer(open) {
      this.drawer = open;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
