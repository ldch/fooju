<template>
  <div>
    <mt-tabbar fixed="true">
      <mt-tab-item id="外卖" class="item">
        <img slot="icon" src="../assets/firstFoot/sy.png">
        <p>首页</p>
      </mt-tab-item>
      <mt-tab-item id="订单" class="item">
        <img slot="icon" src="../assets/firstFoot/gj.png">
        <p>工具</p>
      </mt-tab-item>
      <mt-tab-item id="发现" class="item">
        <img slot="icon" src="../assets/firstFoot/xi.png">
        <p>看房</p>
      </mt-tab-item>
      <mt-tab-item id="我的" class="item">
        <img slot="icon" src="../assets/firstFoot/wd.png">
        <p>我的</p>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .mint-tabbar{
    height: 150px;
    margin-top: 5px;
  }
  .mint-tabbar p{
    font-size:40px;
    margin-top: 50px;
  }
  .item{
    height: 50px;
    width: 50px;
  }
  .item img{
    width: 70px;
    height: 70px;
    display: block;
    margin-top: 15px;
    margin-left: -20px;
  }
</style>
