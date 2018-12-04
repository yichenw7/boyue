<template>
  <div id="app">
    <!--<input v-model="newItem" @keyup.13="addNew" id="input">
    <div class="frame">
      <a v-for="(list,index) in lists" :key="index" class="article" href="javascript://">
        <p class="title">{{ list.work }}</p>
        <p
          class="content"
        >{{ list.work }}{{ list.work }}{{ list.work }}{{ list.work }}{{ list.work }}{{ list.work }}{{ list.work }}</p>
      </a>
    </div>-->

    <input v-model="newItem" @keyup.13="addNew" id="input">
    <p v-for="(list,index) in lists" :key="index" :class="[{finished: list.isFinished},{unfinished: !list.isFinished}]" @click="clickChange(list)">
      {{ list.work }}
    </p>
    <p>child-tell-me:{{ childWords }}</p>
    <component-a msgfroma='haveasong' v-on:child-tell-me="listenToMyBoy"></component-a>
  </div>
</template>

<script>
import ComponentA from "./components/conponentA";

export default {
  name: "app",
  components: { ComponentA },
  data() {
    return {
      newItem: "输入回车",
      work: "标题",
      content: "this a long long long content",
      lists: Store.fetch()
    };
  },
  watch: {
    lists: {
      handler: function(lists) {
        Store.save(lists);
      },
      deep: true
    }
  },
  methods: {
    clickChange: function(list) {
      list.isFinished = !list.isFinished;
    },

    addNew: function() {
      console.log(this.newItem);
      this.lists.push({
        work: this.newItem,
        isFinished: false
      });
      this.newItem = "";
    },
    listenToMyBoy: function() {}
  }
};
</script>

<style lang="scss" scoped="" type="text/css">
html {
  background-color: #d5d5d5;
  padding: 0 20px;
}
a {
  color: #666666;
  text-decoration: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1200px;
  margin: 60px auto;
  .frame {
    width: 1200px;
    height: auto;
    &:before,
    &:after {
      content: " "; // 1
      display: table; // 2
    }

    &:after {
      clear: both;
    }
    .article {
      float: left;
      display: block;
      width: 30%;
      height: 200px;
      border-radius: 5px;
      padding: 20px;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
      }
      p {
        word-break: break-all;
      }
    }
  }
}

.finished {
  color: #67f39c;
}
.unfinished {
  color: #c69dea;
}
#input {
  display: inline-block;
  margin: 20px auto;
  width: 500px;
  height: 50px;
  border-radius: 25px;
  border: none;
  outline:none;
  padding-left: 30px;
  box-shadow: rgb(52, 120, 223) 0px 0px 10px;
  &:hover{
    border: none;
  }
}
</style>
