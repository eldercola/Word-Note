<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center" align="middle">
      <el-col :span="8">
        <el-tooltip content="您的翻译记录将被计入您的个人专属词库" placement="top">
          <el-button type="primary" icon="el-icon-menu" @click="openWordsDrawer">词库</el-button>
        </el-tooltip>
        <el-tooltip content="清空输入框" placement="top">
          <el-button type="primary" @click="clearInputWord">重置<i class="el-icon-delete el-icon--right"></i></el-button>
        </el-tooltip>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center" align="middle" style="margin-top: 1.5%">
      <el-col :span="8">
        <el-input placeholder="English to Chinese Only." v-model="input_word">
          <el-button slot="append" icon="el-icon-sort" @click="translate"></el-button>
        </el-input>
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg" justify="center" align="middle" style="margin-top: 2%">
      <el-col :span="8">
        <el-tabs type="border-card">
          <el-tab-pane label="百度">
            <p>{{result}}</p>
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
  </div>
</template>

<script>
// import $ from "jquery";
import md5 from "@/components/MD5";
// import ResultCard from "@/components/ResultCard";
export default {
  name: "search",
  components: {
    // ResultCard
  },
  data () {
    return {
      input_word: '',
      salt: (new Date).getTime(),
      from: 'en',
      to: 'zh',
      result: {}
    }
  },
  methods: {
    openWordsDrawer() {
      this.$parent.openDrawer();
    },
    clearInputWord() {
      this.input_word = ''
    },
    translate() {
      // 检验空串
      // 空串则不做任何处理
      if (this.input_word == '') return;
      // 非空才会有处理
      else {
        let that = this;
        let plainText = this.$appid + this.input_word + this.salt + this.$screte;
        let sign = md5.methods.MD5(plainText);
        this.$axios.get('/translate',{
          params: {
            q: this.input_word,
            appid: this.$appid,
            salt: this.salt,
            from: this.from,
            to: this.to,
            sign: sign
          }
        }).then(function (response){
          that.result = response.data.trans_result[0].dst;
          console.log(response.data);
        }).catch(function (error){
          console.log(error);
        })
        // 以下是jquery方法，但是成功回调后无法把数据更新到该Vue页面的数据中
        /*$.ajax({
          url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
          type: 'get',
          dataType: 'jsonp',
          data: {
            q: this.input_word,
            appid: this.$appid,
            salt: this.salt,
            from: this.from,
            to: this.to,
            sign: sign
          },
          success: function (data) {
            console.log(data);
          }
        });*/
      }
    }
  }
}
</script>

<style scoped>

</style>