 <!-- 组件的结构 -->
 <template>
    <div class="app">
        <!-- 标题 -->
        <h2 class="title">Vue路由测试</h2>
        <!-- 导航区 -->
        <div class="nav">
            <!-- replace属性，点击后不保留历史记录 -->
            <RouterLink replace to="/home" active-class="btn">首页</RouterLink>
            <RouterLink to="/news" active-class="btn">新闻</RouterLink>
            <RouterLink to="/about" active-class="btn">关于</RouterLink>
        </div>
         <!-- 展示区 -->
        <div class="content">
            <RouterView></RouterView>
        </div>
    </div>
</template>   

 <!-- 组件的逻辑 -->
 <script setup lang="ts" name="App">
</script>

<style scoped>
    .app {
        width: 100%;
        height: 100%;
        background-color: #f0f0f0;
        padding: 20px;
        border-radius: 10px;
    }
    .title {
        text-align: center;
    }
    .nav {
        display: flex;
        justify-content: center;
        align-items: center;
        /* 间隔 */
        gap: 50px;
    }
    .content {
        margin: 10px 0;
        text-align: left;
        /* 方框包围 */
        border: 5px solid #000;
    }
    /* 按钮样式 */
    .btn {
        margin: 10px 0;
        text-align: center;
        /* 方框包围 */
        border: 5px solid #000;
    }
</style>