<template>
  <div class="container">
    {{ boxName }}
    <a-button @click="onOtherPage">
      跳转按钮，可直接使用antd组件
    </a-button>
    <a-button @click="callFuncTest">
      调用云函数测试
    </a-button>
  </div>
</template>

<script>
/**
 * 页面内调用云函数
 * @wuji/func 是cli工具定义的一个webpack模块别名，不需要npm包安装，直接使用则可
 */
import { callFunc } from '@wuji/func';

export default {
  /**
   * 外部注入到页面的上下文，可获取用户信息、当前环境等信息
   * 如无该需求，可删除inject代码
   * 上下文内变量参考：http://v.oa.com/xy/docs/guide/stringinterop.html
   */
  inject: {
    wContext: {
      from: 'wContext',
      default: null,
    },
  },

  data() {
    return {
      boxName: 'container',
    };
  },

  methods: {
    /**
     * 其他页面为单页，可用全局$route控制跳转
     */
    onOtherPage() {
      this.$router.push({
        // 其他页面定义的路径
        path: '/xxxx',
      });
    },

    /**
     * 调用云函数
     */
    callFuncTest() {
      callFunc('get_data', {
        // params 参考 axios 传参方式
        params: {
          test: 'helloworld',
        },
      }).then((res) => {
        console.log(res.data);
      });
    },

  },

};
</script>

<style scoped lang="scss">
.container {
  background: red;
}
</style>
