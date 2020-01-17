<template>
  <div class="container">
    <div class="header">
      <div class="item">
        <div
          class="left"
          style="line-height:30px;padding-left:15px;color: #999;"
        >
          四川
        </div>
        <div class="right" style="line-height:30px">
          <ul>
            <li
              v-for="i in list_head"
              :key="i"
              style="padding-left: 7px;
    padding-right: 7px;"
            >
              <a href="" style="color: #999;">{{ i }} </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="search">
      <div class="item clear">
        <div class="left search_left">
          <img :src="right_logo" width="190" height="120" alt="" />
        </div>
        <div class="left search_center">
          <div class="search_center_top">
            <div class="search_center_top_in">
              <div class="search_center_top_in_center">
                <div style="height: 50px;display: flex;align-items: center;">
                  <input
                    type="text"
                    style="width: 70%;height: 41px;border:2px solid red"
                  />
                  <button
                    type="submit"
                    style="height: 45px;width:10%;border:1px solid red;color:#fff;background-color:red"
                  >
                    搜索
                  </button>
                </div>

                <ul class="search_ul">
                  <li v-for="i in list_search" :key="i">
                    <a href=""> {{ i }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="search_center_bottom">
            <ul class="ul_nav">
              <li v-for="i in list_nav" :key="i">
                <a href="">{{ i }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="left search_right">
          <img :src="right_logo_png" width="190" height="120" alt="" />
        </div>
      </div>
    </div>
    <div class="lunbo" :style="note">
      <div class="item clear" @mouseleave="show_img()">
        <div class="left lunbo_left">
          <ul>
            <li
              class="li_cz"
              :data-id="i"
              @mouseenter="show_type($event)"
              v-for="i in 5"
              :key="i"
            >
              <a href="">果蔬{{ i }}</a>
              <span>/</span>
              <a href="">果蔬</a>
              <span>/</span>
              <a href="">果蔬</a>
              <span>/</span>
              <a href="">果蔬</a>
            </li>
          </ul>
        </div>
        <div class="left lunbo_center" style="">
          <div v-show="active == 0">
            <img :src="banner" alt="" width="590" height="480" />
            <!-- <dl
              style="    position: relative;padding-left: 80px;"
              v-for="x in 5"
              :key="x"
            >
              <dt style="overflow: hidden;position: absolute;left: 0;top: 6px;width: 70px;text-align: right;font-weight: 700;white-space: nowrap;text-overflow: ellipsis;">
                国际{{ x }} >
              </dt>
              <dd style="overflow: hidden;*zoom: 1;padding: 5px 0;">
                <a
                  href=""
                  v-for="z in 25"
                  :key="z"
                  style="    float: left;margin: 3px 0;padding: 0 7px;height: 16px;line-height: 16px;white-space: nowrap;"
                  >国际{{ z }}</a
                >
              </dd>
            </dl> -->
            <!-- <table style="width:100%">
              <tbody>
                <tr>
                  <td width="15%" align="right" style="padding-right:15px;">
                    国际 >
                  </td>
                  <td width="85%" align="left">
                    <ul>
                      <li
                        v-for="i in 25"
                        :key="i"
                        style="margin-right:12px;height:16px;line-height:16px"
                        class="left"
                      >
                        <a href="">国际{{ i }}</a>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table> -->
          </div>

          <div
            style="overflow: hidden;*zoom: 1;padding: 10px 0 0 20px;"
            v-for="i in 5"
            :key="i"
            v-show="active == i"
            v-bind:class="{ change_bg: active == i }"
          >
            <dl class="dl_center" v-for="z in 4" :key="z">
                <dt>国际{{ i }} ></dt>
                <dd>
                  <a href="" v-for="z in 15" :key="z">国际{{ z }}</a>
                </dd>
            </dl>
          </div>
        </div>
        <div class="left lunbo_right" style="margin-right:10px">
          <div
            style="display: flex; flex-direction: column; justify-content: space-between; align-items: center; height:100%"
          >
            <a href="" style="display:block">
              <img :src="right_logo" width="190" height="150" alt=""
            /></a>
            <a href="" style="display:block">
              <img :src="right_logo" width="190" height="150" alt=""
            /></a>
            <a href="" style="display:block">
              <img :src="right_logo" width="190" height="150" alt=""
            /></a>
          </div>
        </div>
        <div class="left lunbo_right">
          <div
            style="display: flex; flex-direction: column; justify-content: space-between; align-items: center; height:100%"
          >
            <a href="" style="display:block">
              <img :src="right_logo" width="190" height="150" alt=""
            /></a>
            <a href="" style="display:block">
              <img :src="right_logo" width="190" height="150" alt=""
            /></a>
            <a href="" style="display:block">
              <img :src="right_logo" width="190" height="150" alt=""
            /></a>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="item">
        <h1 class="item_title">水果</h1>
        <div class="content_row_new">
          <div class="content_col_new " v-for="i in 14" :key="i">
            <div
              class="content_item_new"
              v-bind:class="{ content_item_new_bg: i < 3 }"
            >
              <div class="text_center">
                <img
                  :src="big_v"
                  v-if="i < 3"
                  alt=""
                  width="290"
                  height="370"
                />
                <img :src="small_v" v-else alt="" width="290" height="180" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <h1 class="item_title">饮料</h1>
        <div class="content_row_new">
          <div class="content_col_new " v-for="i in 16" :key="i">
            <div class="content_item_new">
              <div class="text_center">
                <img :src="small_v" alt="" width="290" height="180" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import left_logo from "./../assets/left_logo.jpg";
import banner from "./../assets/banner.png";
import big_v from "./../assets/big_v.png";
import small_v from "./../assets/small_v.png";
// import right_logo from "./../assets/right_logo.jpg";
import right_logo_gif from "./../assets/right_logo.gif";
import right_logo_png from "./../assets/right_logo.png";
// import back_image from "./../assets/back_image.png";

export default {
  name: "App",
  data() {
    return {
      note: {
        backgroundImage: "url(" + require("./../assets/back_image.png") + ")",
        backgroundRepeat: "no-repeat"
        // backgroundSize: "25px auto",
        // marginTop: "5px",
      },
      active: 0,
      // left_logo: left_logo,
      banner: banner,
      big_v: big_v,
      small_v: small_v,
      right_logo: right_logo_gif,
      right_logo_png: right_logo_png,
      // back_image: back_image,
      list_nav: [
        "秒杀",
        "优惠券",
        "PLUS会员",
        "品牌闪购",
        "拍卖",
        "京东家电",
        "京东超市",
        "京东生鲜",
        "京东国际",
        "京东金融"
      ],
      list_search: [
        "企业年货节",
        "买一赠一",
        "1元空调",
        "年货5折",
        "美妆护肤",
        "品质家具",
        "年货节",
        "新年焕新",
        "家装建材"
      ],
      list_head: [
        "你好，请登录",
        "免费注册",
        "我的订单",
        "我的京东",
        "京东会员",
        "企业采购客户服务网站导航",
        "手机京东"
      ]
    };
  },
  methods: {
    show_img: function() {
      this.active = 0;
    },
    show_type: function(e) {
      // e.currentTarget.style["backgroundColor"] = "yellow";
      this.active = e.currentTarget.dataset.id;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

ul {
  list-style-type: none;
}

li {
  display: inline;
  list-style-type: none;
  /* padding-left: 10px; */
}
a {
  color: #333;
}
a:hover{
  color: #e1251b;
}
.container {
  /* position: relative; */
  width: 100%;
  min-width: 960px;
  /* height: 100%; */
  background-color: #f4f4f4;
}

.header {
  /* background-color: aqua; */
  /* position: absolute; */
  width: 100%;
  height: 30px;
  background-color: rgba(223, 219, 223, 0.767);
}

.search {
  /* background-color: black; */
  /* position: absolute; */
  /* top: 30px; */
  width: 100%;
  height: 140px;
  margin-bottom: 10px;
  padding-bottom: 5px;
  background: #fff;
  border-bottom: 1px solid #ddd;
}

.lunbo {
  /* background-color: blue; */
  /* position: absolute; */
  /* top: 200px; */
  width: 100%;
  height: 480px;
}

.content {
  /* background-color: yellow; */
  /* position: absolute; */
  /* top: 500px; */
  width: 100%;
  /* height: 800px; */
}

.item {
  margin: 0 auto;
  width: 1190px;
  height: 100%;
  /* background-color: coral; */
}

.left {
  float: left;
}

.right {
  float: right;
}

.search_left {
  width: 17.5%;
  height: 100%;
  padding: 10px 0px;
  /* background-color: aqua; */
}

.search_center {
  overflow: hidden;
  width: 65%;
  height: 100%;
  /* background-color: blue; */
}

.search_right {
  height: 100%;
  width: 17.5%;
  padding: 10px 0px;
  /* background-color: yellow; */
}
.lunbo_left {
  width: 190px;
  height: 100%;
  background: #fff;
  margin-right: 10px;
  /* background-color: rgb(49, 216, 33); */
}
.lunbo_left > ul {
  padding: 10px 0px;
}
.lunbo_left > ul > li {
  padding-left: 18px;
}

.lunbo_center {
  width: 590px;
  height: 100%;
  background: #fff;
  overflow: hidden;
  margin-right: 10px;
  /* background-color: rgb(20, 221, 177); */
}
.lunbo_right {
  height: 100%;
  width: 190px;
  background: #fff;
  /* background-color: rgb(127, 98, 223); */
}
.clear {
  clear: both;
}

.search_center_top {
  height: 75%;
  /* width: 80%; */
  /* background-color: violet; */
  margin: 5px auto;
  padding-left: 20px;
}

.search_center_bottom {
  position: relative;
  height: 25%;
  width: 100%;
  /* background-color: red; */
}

.search_center_top_in {
  position: relative;
  width: 100%;
  height: 100%;
}

.search_center_top_in_center {
  position: absolute;
  left: 50%;
  top: 50%;
  display: block;
  width: 100%;
  height: 80px;
  /* background: yellow; */
  transform: translateX(-50%) translateY(-50%);
}

.ul_nav {
  position: absolute;
  height: 50px;
  line-height: 50px;
  bottom: 0px;
}
.ul_nav > li {
  color: black;
  font-size: 15px;
  height: 40px;
  line-height: px;
  padding-left: 20px;
}
.ul_nav > li:first-child > a:nth-child(1) {
  font-weight: 700;
  color: #e1251b;
}
.li_cz {
  /* display: block; */
  display: flex;
  height: 25px;
  line-height: 25px;
}
.li_cz:hover {
  background-color: #d9d9d9;
}
.li_cz > a:hover {
  color: #e1251b;
}

.content_col {
  display: block;
  float: left;
  width: 25%;
  padding: 0 5px;
  margin-bottom: 5px;
  box-sizing: border-box;
}

.content_row_new {
  display: block;
  margin-right: -10px;
  height: 760px;
}

.content_col_new {
  display: block;
  float: left;
  width: 290px;
  margin: 0 10px 10px 0px;
  box-sizing: border-box;
}

.content_item_new {
  position: relative;
  width: 100%;
  height: 180px;
  /* background: rgb(173, 41, 81); */
}

.content_item_new_bg {
  height: 370px;
}

.content_item {
  position: relative;
  width: 100%;
  height: 300px;
  /* background: rgb(173, 41, 81); */
}

.content_row {
  display: block;
  margin-left: -5px;
  margin-right: -5px;
  height: 605px;
}

.content_item > div {
  position: absolute;
  margin-bottom: 4px;
  height: 148px;
  width: 100%;
  /* background-color: rgb(27, 194, 91); */
}

.content_item > div:last-child {
  top: 152px;
}

.item_title {
  text-align: center;
  padding: 20px 0px;
  height: 45px;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  line-height: 45px;
}

.text_center {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 100%;
  text-align: center;
}
.change_bg {
  /* background-color: yellow; */
}
.search_ul > li > a {
  color: #999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 10px;
}
.search_ul > li:first-child > a:first-child {
  font-weight: 700;
  color: #e1251b;
}
dl.dl_center {
  position: relative;
  padding-left: 80px;
}
dl.dl_center > dt {
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 6px;
  width: 70px;
  text-align: right;
  font-weight: 700;
  white-space: nowrap;
  text-overflow: ellipsis;
}
dl.dl_center > dd {
  overflow: hidden;
  *zoom: 1;
  padding: 5px 0;
}
dl.dl_center > dd > a {
  float: left;
  margin: 3px 0;
  padding: 0 7px;
  height: 16px;
  line-height: 16px;
  white-space: nowrap;
}
dl.dl_center > dd > a:hover {
  color: #e1251b;
}
</style>
