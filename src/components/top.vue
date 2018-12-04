<template>
  <div class="submitart" id="submitart">
    <textarea placeholder="输入文章" maxlength="250" v-model="newArticle"></textarea>
    <a href="javascirpt://" @click="addNew"  @keyup.13="addNew">发布</a>
  </div>
</template>

<script>
import Store from "../store.js";

export default {
  name: "submitart",
  data() {
    return {
      newArticle: "",
      article: "",
      lists: Store.fetch()
    };
  },
  props: [],
  watch: {
    lists: {
      handler: function(lists) {
        Store.save(lists);
      },
      deep: true
    }
  },
  methods: {
    addNew: function() {
      this.lists.push({
        article: this.newArticle
      });
      this.$emit("listenToMyBoy", this.lists);
      alert(this.lists);
      this.newArticle = "";
    }
  }
};
</script>

<style scoped lang="scss" type="text/css">
input {
  display: inline-block;
  border-radius: 25px;
  border: none;
  outline: none;
  padding-left: 30px;
  box-shadow: rgb(52, 120, 223) 0px 0px 10px;
}

.submitart {
  text-align: left;
  textarea {
    width: 450px;
    height: 70px;
    padding: 25px;
    border-radius: 10px;
    outline: none !important;
    resize: none;
    border: none;
    &:focus {
      box-shadow: #d7d7ce 0 0 25px;
      transition: all 0.2s linear;
    }
  }
  & > a {
    display: inline-block;
    vertical-align: top;
    text-decoration: none;
    text-align: center;
    width: 60px;
    height: 120px;
    line-height: 120px;
    margin-left: 15px;
    border-radius: 10px;
    border: none;
    font-size: 12px;
    color: #ffffff;
    background: #3d586c;
    letter-spacing: 3px;
    &:hover {
      box-shadow: #d7d7ce 0 0 25px;
      transition: all 0.2s linear;
    }
    &:active {
      color: #8e8e8e;
      background: #344b5c;
      transition: background 0.2s linear;
    }
  }
}
</style>