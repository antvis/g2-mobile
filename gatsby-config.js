const { repository } = require('./package.json');

module.exports = {
  plugins: [
    {
      resolve: '@antv/gatsby-theme-antv',
      options: {
        // eslint-disable-next-line quotes
        GATrackingId: `UA-148148901-6`,
        pathPrefix: '/f2'
      }
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: 'F2',
    description: 'The Grammar of Graphics in JavaScript',
    githubUrl: repository.url,
    navs: [
      {
        slug: 'docs/tutorial/getting-started',
        title: {
          zh: '使用教程',
          en: 'tutorial'
        }
      },
      {
        slug: 'docs/api',
        title: {
          zh: 'API 文档',
          en: 'API'
        }
      },
      {
        slug: 'examples',
        title: {
          zh: '图表演示',
          en: 'Examples'
        }
      }
    ],
    docs: [
      {
        slug: 'tutorial/manual',
        title: {
          zh: '教程',
          en: 'tutorial'
        },
        order: 1
      },
      {
        slug: 'api/chart-api',
        title: {
          zh: '图表实例',
          en: 'chart'
        },
        order: 1
      },
      {
        slug: 'api/graphic',
        title: {
          zh: '绘图',
          en: 'chart'
        },
        order: 5
      }
    ],
    examples: [
      {
        slug: 'examples/line',
        icon: 'line', // 图标名可以去 https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html 打开控制台查看图标类名
        title: {
          zh: '折线图',
          en: 'Line Charts'
        }
      },
      {
        slug: 'examples/pie',
        icon: 'pie', // 图标名可以去 https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html 打开控制台查看图标类名
        title: {
          zh: '饼图',
          en: 'Pie Charts'
        }
      }
    ],
    playground: {
      container: '<canvas id="container" />'
    }
  }
};