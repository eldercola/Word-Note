<template>
  <div style="text-align: start">
    <div v-for="(word,index) in words" :key="index">
      <el-row type="flex" justify="start">
        <el-col :span="6" :offset="4">{{word.src}}</el-col>
      </el-row>
      <el-row type="flex" justify="start">
        <el-col :span="16" :offset="4">
          <el-divider class="drawer-divider"></el-divider>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "WordsList",
  props: {
    words: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
.drawer-divider {
  margin-top: 3%;
}
</style>