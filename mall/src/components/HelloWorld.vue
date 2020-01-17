<template>
  <div style="min-width:960px;background-color:#f4f4f4">
    <!-- 导航 -->
    <el-row class="bg_header" style="height:30px">
      <el-col :span="12" :offset="6" style="height:100%">
        <table
          cellpadding="0"
          cellspacing="0"
          border="0"
          width="100%"
          style="margin:0px auto;height:100%"
        >
          <tr>
            <td width="8%" algin="left"><el-link type="info">四川</el-link></td>
            <td width="auto"></td>
            <td width="50%" align="right">
              <el-link type="info">信息链接</el-link>
              <el-link type="info">请登录</el-link>
              <el-link type="info">我的订单</el-link>
              <el-link type="info">我的年货</el-link>
            </td>
          </tr>
        </table>
      </el-col>
    </el-row>
    <!-- header -->
    <el-row style="background: #fff;border-bottom: 1px solid #ddd;">
      <el-col :span="12" :offset="6">
        <el-col :span="4" class="box_start">
          <el-image
            style="width: 100px; height: 120px"
            :src="logo"
            fit="fit"
          ></el-image>
        </el-col>
        <el-col :span="16" class="box_center" style="height:120px">
          <el-col :span="14" :offset="2" style="margin-top:10px">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
            <ul>
              <li><el-link type="info">苹果</el-link></li>
              <li><el-link type="info">例子</el-link></li>
              <li><el-link type="info">股东哦个</el-link></li>
              <li><el-link type="info">哈乐乐</el-link></li>
              <li><el-link type="info">是非得失e</el-link></li>
            </ul>
          </el-col>
          <el-col :span="16">
            <ul class="box">
              <li>
                <router-link to="index">
                  {{ msg }}
                </router-link>
              </li>
              <li>
                <router-link to="index">
                  {{ msg }}
                </router-link>
              </li>
              <li>
                <router-link to="index">
                  {{ msg }}
                </router-link>
              </li>
              <li>
                <router-link to="index">
                  {{ msg }}
                </router-link>
              </li>
              <li>
                <router-link to="index">
                  {{ msg }}
                </router-link>
              </li>
            </ul>
          </el-col>
        </el-col>
        <el-col :span="4" class="box_end">
          <el-image
            style="width: 100px; height: 120px"
            :src="logo"
            fit="fit"
          ></el-image>
        </el-col>
      </el-col>
    </el-row>
    <!-- 轮播 -->
    <el-row class="bg_header" style="padding:10px 0px;min-height:470px">
      <el-col :span="12" :offset="6">
        <div @mouseleave="mouseLeave()" style="display:flex">
          <div class="xx" style="width:160px;height:470px;background: #fff;">
            <div
              v-for="(todo, index) in type_one"
              :key="index"
              class="text item"
              @mouseover="tag_hover(index)"
              style="margin-left:15px;margin-bottom:10px"
              :class="{ top_padding: index == 0 }"
            >
              <el-link
                :underline="false"
                href="https://element.eleme.io"
                target="_blank"
              >
                {{ todo.name }}</el-link
              >
            </div>
          </div>

          <div class="xx" style="width:590px">
            <el-carousel trigger="click" height="470px" v-show="img_active">
              <el-carousel-item v-for="item in 4" :key="item">
                <el-image
                  style="width: 590px; height: 470px"
                  :src="lunbo"
                  fit="fit"
                ></el-image>
              </el-carousel-item>
            </el-carousel>

            <div
              v-for="(data, index) in show_info_tag"
              :key="index"
              v-show="data.active"
            >
              {{ data.name }}
            </div>
          </div>
          <div class="xx" style="height:470px;width:160px;background: #fff;">
            <div
              v-for="(todo, index) in type_one"
              :key="index"
              class="text item"
              @mouseover="tag_hover(index)"
              style="margin-left:15px;margin-bottom:10px"
              :class="{ top_padding: index == 0 }"
            >
              <el-link
                :underline="false"
                href="https://element.eleme.io"
                target="_blank"
                shadow="hover"
              >
                {{ todo.name }}</el-link
              >
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 主要内容 -->
    <el-row class="bg_header">
      <el-col :span="12" :offset="6"  >
        <div v-for="i in 4" :key="i">
          <h1 style="text-align:center;margin:20px 0px">{{ i }} 水果</h1>
          <div style="display:flex;width:960px;height:504px">
          
               <div class=""  style="  display: flex;flex-wrap: wrap;
align-content: space-between;width:300px">
  <a style="padding-right: 15px"
              ><el-image
                style="height: 300px"
                :src="panner"
                fit="fit"
              ></el-image
            ></a>
              <a style="padding-right: 15px"
              ><el-image
                style="height: 200px"
                :src="food"
                fit="fit"
              ></el-image
            ></a>
               </div>
            <div class=""  style="  display: flex;flex-wrap: wrap;">
              <a  v-for="z in 8" :key="z" style="padding-right: 15px">
                <el-image
                  :src="food"
                  fit="fit"
                ></el-image>
              </a>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import logo from "./../assets/logo.png";
import lunbo from "./../assets/lunbo.png";
import food from "./../assets/food.png";
import panner from "./../assets/panner.png";
export default {
  name: "HelloWorld",
  data() {
    return {
      img_active: true,
      logo: logo,
      lunbo: lunbo,
      food: food,
      panner: panner,
      input: "",
      msg: "hlloo",
      type_one: [
        {
          name: "good"
        },
        {
          name: "good2"
        }
      ],
      show_info_tag: [
        { name: "goodss", active: false },
        { name: "good2", active: false }
      ]
    };
  },
  methods: {
    tag_hover: function(index) {
      let _this = this;
      _this.img_active = false;
      _this.show_info_tag.forEach(function(data) {
        data.active = false;
      });
      _this.show_info_tag[index].active = true;
    },
    mouseLeave: function() {
      let _this = this;
      _this.show_info_tag.forEach(function(data) {
        data.active = false;
      });
      _this.img_active = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.bg_header {
  background-color: #e3e4e5;
}

.box {
  display: flex;
  justify-content: space-between;
}
.box_around {
  display: flex;
  justify-content: space-around;
}
.box_start {
  display: flex;
  justify-content: flex-start;
}
.box_end {
  display: flex;
  justify-content: flex-end;
}
.box_center {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.top_padding {
  padding-top: 10px;
}
.xx {
  margin-right: 10px;
}

</style>
