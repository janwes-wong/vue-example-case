<template>
  <div class="main">
    <Category title="美食">
      <img
        slot="first"
        src="https://pic.5tu.cn/uploads/allimg/1908/pic_5tu_big_201907211746446958.jpg"
        alt=""
      />
      <a slot="second" href="https://www.baidu.com">更多美食</a>
    </Category>

    <Category title="游戏">
      <ul slot="first">
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>

      <div class="secondCla" slot="second">
        <a href="https://www.baidu.com">单机游戏</a>
        <a href="https://www.baidu.com">网络游戏</a>
      </div>
    </Category>

    <Category title="电影">
      <video
        slot="first"
        controls
        src="https://vodpub1.v.news.cn/original/20230412/72f5939b98124a94b2495e3af269752e.mp4"
      ></video>

      <div class="secondCla" slot="second">
        <a href="https://www.baidu.com">经典</a>
        <a href="https://www.baidu.com">热门</a>
        <a href="https://www.baidu.com">推荐</a>
      </div>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: [
        "澳洲鲍鱼",
        "澳洲龙虾",
        "波士顿龙虾",
        "罗氏虾",
        "牛排",
        "北京烤鸭",
        "宫保鸡丁",
      ],
      games: [
        "红色警戒",
        "大话西游",
        "穿越火线",
        "CS",
        "地下城",
        "魂斗罗",
        "跑跑卡丁车",
      ],
      films: [
        "肖申克的救赎",
        "阿甘正传",
        "拯救大兵瑞恩",
        "上甘岭",
        "纵横四海",
        "霸王别姬",
        "英雄本色",
      ],
    };
  },
};
</script>

<style>
.main,
.secondCla {
  display: flex;
  justify-content: space-around;
}
</style>
