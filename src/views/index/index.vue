<template>
    <div class="index" style="padding:20px;">
      <h2>基础工程</h2>
      <ol>
        <li>引入ivew+vue+vuex+jquery+axios，可按需删减</li>
        <li>完善了打包配置</li>
        <li>处理了全局相关配置</li>
        <li>封装了请求和拦截处理</li>
      </ol>
      <ul>
        <li v-for="item in listData">
          <img v-bind:src="item.url" alt="">
          <p>{{item.desc}}</p>
        </li>
      </ul>
    </div>
</template>
<script>
    import api from "../../libs/api";
    export default {
        mounted(){
          this.getImage(1);
          window.addEventListener('scroll', this.handleScroll)
        },
        data(){
          return {
            listData:[],
            page:1
          }
        },
        methods: {
          handleScroll: function(e){
            if(document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight){
              this.getImage(this.page++);
            }
          },
          getImage: function(page){
              let _this = this;
              api.getMeizi(page)
              .then(function(res){
                  _this.listData = _this.listData.concat(res.results);
              })
              .catch(function(res){
                console.log(res);
              });
          }
        }
    };
</script>
<style scoped lang="less">
  .index{
    background: #eee;
  }
  .index li{
    img{
      max-width: 100%;
    }
  }
  ul{
    -moz-column-count:4; /* Firefox */
      -webkit-column-count:4; /* Safari 和 Chrome */
      column-count:4;
      -moz-column-gap: 1em;
    -webkit-column-gap: 1em;
    column-gap: 1em;
    margin-top: 10px;
    li{
      padding: 1em;
      margin: 0 0 1em 0;
      -moz-page-break-inside: avoid;
      -webkit-column-break-inside: avoid;
      break-inside: avoid;
      background: #fff;
    }
  }
</style>
