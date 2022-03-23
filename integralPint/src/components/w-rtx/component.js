/**
 * 不知道component.js要定义什么字段？http://v.oa.com/xy/docs/devtools/start-component.html#%E6%B7%BB%E5%8A%A0%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6
 * 不知道propsSchema如何定义？http://lyonlv-maj.pages.oa.com/?app=data-schema-demo#
 * ！！！强烈强烈！！！建议参考组件开发demo，由浅入深理解组件开发：https://git.woa.com/open-wuji/xy-comps-demo
 */
module.exports = {
  name: '测试rtx组件',                     // 组件的中文名
  propsSchema: {                          // 组件的Schema配置
    type: 'object',
    fields: [
      {
        id: 'disabled',
        title: '禁用',
        type: 'boolean',
        required: false,
      },
      {
        id: 'fieldCName',
        title: '字段外显名',
        type: 'string',
        default: '',
      },
    ],
  },
  owner: '***',                           // 组件的作者
  display: 'block',                       // 组件的布局形态: block、inline
  category: 'local_hmr',                  // 组件的分组名(UIcore左侧面板的组件列表)
  visible: true,                          // 是否显示在左侧组件面板：true、false
  slots: [],
  icon: 'icon地址',                        // 左侧组件面板的组件icon：有效的http地址
  framework: 'vue',
};

