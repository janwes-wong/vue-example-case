<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个插槽，用于填充(具名插槽) -->
    <slot name="first"></slot>
    <slot name="second"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["listData", "title"],
  data() {
    return {};
  },
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 400px;
  height: 500px;
}

h3 {
  text-align: center;
  background-color: orange;
}

img {
  width: 100%;
}

video {
  width: 100%;
}
</style>