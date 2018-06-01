<!--  -->
<template>
  <div >
<ul>
  <li v-for="item in list">{{item.name}}-------->{{item.price}}</li>
</ul>
<button @click="add"></button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list:[{name:'张三',price:'234'},{name:'李四',price:'342'}]
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {add(){
    console.log(this.list)
  }}
}

</script>
<style lang='scss' scoped>
</style>