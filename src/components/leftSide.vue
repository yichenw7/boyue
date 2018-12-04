<template>
  <div class="left">
    <div class="frame">
      <a class="portrait" href="javascript://">
        <img src="../images/1.jpg">
      </a>
      <h2>{{nname}}</h2>
      <a class="whitething" href="javascript://">文章</a>
      <a class="whitething" href="javascript://" @click="onClickMe">设置</a>
      <input class="whitething" placeholder="输入关键字" v-model="keyword">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  props: ["nname", "keyword"],
  methods: {
    onClickMe() {
      console.log(this.nname, this.keyword);
    }
  }
};
</script>

<style scoped lang="scss" type="text/css">
.left {
  float: left;
  width: 250px;
  height: 100%;
  background: #3d586c;
  .frame {
    padding-top: 50px;
    input:focus {
      outline: none !important;
    }
    h2 {
      color: #fff;
    }
    .portrait {
      display: block;
      width: 70px;
      height: 70px;
      border-radius: 35px;
      margin: 0 auto;
      overflow: hidden;
      & > img {
        width: 70px;
        height: 70px;
      }
    }
    .whitething {
      display: inline-block;
      width: 188px;
      height: 36px;
      line-height: 36px;
      border-radius: 18px;
      background: none;
      color: #fff;
      border: 1px solid #fff;
      font-size: 12px;
      text-align: left;
      padding-left: 20px;
      margin-top: 15px;
      text-decoration: none;
      &:hover {
        background: rgba($color: #ffffff, $alpha: 0.1);
        transition: all 0.3s linear;
      }
    }
    input {
      box-shadow: none;
    }
  }
}
</style>