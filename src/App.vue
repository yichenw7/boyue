<template>
  <div id="app">
    <left nname="Micro" keyword="everything is ok"></left>
    <div class="right">
      <right-top article></right-top>
      <div class="articleline">
        <div
          class="art-ap"
          v-for="(list,index) in lists"
          :key="index"
          v-on:listenToMyBoy="mySonMessage"
        >
          <h2>
            <a href="javascript://">{{todayTime}}</a>
          </h2>
          <p>{{list.article}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Store from "./store.js";
import Left from "./components/leftSide";
import RightTop from "./components/top";

export default {
  name: "app",
  components: { Left, RightTop },
  data() {
    return {
      todayTime: "7月7日",
      lists: Store.fetch()
    };
  },
  watch: {
    listswatch: {
      //深度监听，可监听到对象、数组的变化
      handler(newLists, lists) {
        this.lists = newLists;
      },
      deep: true
    }
  },
  methods: {
    function() {
      console.log(todayTime);
    },
    mySonMessage: function(data) {
      newLists = data;
    }
  }
};
</script>

<style lang="scss" scoped="" type="text/css">
a {
  color: #666666;
  text-decoration: none;
}

input {
  display: inline-block;
  border-radius: 25px;
  border: none;
  outline: none;
  padding-left: 30px;
  box-shadow: rgb(52, 120, 223) 0px 0px 10px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f0f6f8;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .right {
    float: left;
    padding: 40px 60px 0;
    overflow: hidden;
    .articleline {
      width: 700px;
      max-height: 720px;
      margin-top: 40px;
      overflow-y: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      .art-ap {
        width: 540px;
        min-height: 150px;
        padding: 10px 20px 20px;
        margin-bottom: 15px;
        border-top: 10px solid #344b5c;
        border-radius: 15px;
        background: #ffffff;
        text-align: left;
        box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.04);
        & > h2 {
          & > a {
            text-align: left;
            color: #1c2021;
            &:hover {
              color: #3594c4;
              transition: all 0.1s linear;
            }
          }
        }
        & > p {
          font-size: 12px;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
