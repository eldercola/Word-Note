<template>
  <el-row type="flex" class="row-bg" justify="center" align="middle" style="margin-top: 2%">
    <el-col :span="8">
      <el-tabs type="border-card">
        <el-tab-pane label="百度">
          <p>{{midResult}}</p>
          <span><p>翻译结果不准确? <el-button type="text">增加翻译结果</el-button></p></span>
        </el-tab-pane>
        <el-tab-pane label="有道" :disabled="true">
          有道翻译
        </el-tab-pane>
        <el-tab-pane label="Google" :disabled="true">
          谷歌
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "ResultCard",
  data() {
    return {
      midResult: {}
    }
  },
  props: {
    result: Object,
    default() {
      return {}
    }
  },
  watch: {
    result(){
      console.log(this.result);
      this.midResult = this.result
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>