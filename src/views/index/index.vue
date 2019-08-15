<template>
    <div>
        <el-container>
            <el-header>
               <banner class="animated lightSpeedIn"></banner>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer></el-footer>
        </el-container>
    </div>
</template>
<script>
import banner from '../../components/banner'
import product from '../../views/product/product'
import news from '../../views/news/news'
export default {
  name: 'index',
  components:{
    banner,
    product,
    news
  }
}
</script>
<style lang="" scoped>
  .el-main{
    padding:0px;
  }
</style>