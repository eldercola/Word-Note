<template>
  <el-drawer
      title="高频词库"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose">
    <WordsList :words="words"></WordsList>
  </el-drawer>
</template>

<script>
import WordsList from "@/components/WordsList";
export default {
  name: "WordsDrawer",
  components: {WordsList},
  props: {
    drawer: Boolean
  },
  data () {
    return {
      direction: 'ltr',
      words: [
        {
          src: 'hello'
        },
        {
          src: 'count'
        },
        {
          src: 'compose'
        },
        {
          src: 'confirm'
        }]
    }
  },
  methods: {
    handleClose() {
      this.$parent.setDrawer(false);
    }
  }
}
</script>

<style scoped>

</style>