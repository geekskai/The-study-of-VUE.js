<template>
  <div id="app" class="container">
    <i-header></i-header>
    <router-view/>
    <float-box></float-box>
    <i-footer></i-footer>
  </div>
</template>

<script>
import "./assets/css/index.css";
import "./assets/less/index.less";
import IFooter from "#/layout/iFooter";
import IHeader from "#/layout/iHeader";
import FloatBox from "#/layout/floatBox";
export default {
  name: "app",
  components: { IHeader, IHeader, FloatBox }
};
</script>

<style>
</style>
