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
          en: 'Tutorial'
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
          en: 'Tutorial'
        },
        order: 1
      },
      {
        slug: 'api/chart',
        title: {
          zh: '图表',
          en: 'Chart'
        },
        order: 1
      },
      {
        slug: 'api/g',
        title: {
          zh: '绘图',
          en: 'G'
        },
        order: 5
      }
    ],
    examples: [
      {
        slug: 'gallery',
        icon: 'gallery', // 图标名可以去 https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html 打开控制台查看图标类名
        title: {
          zh: 'Gallery',
          en: 'Gallery'
        }
      },
      {
        slug: 'line',
        icon: 'line', // 图标名可以去 https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html 打开控制台查看图标类名
        title: {
          zh: '折线图',
          en: 'Line Charts'
        }
      },
      {
        slug: 'area',
        icon: 'area', // 图标名可以去 https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html 打开控制台查看图标类名
        title: {
          zh: '面积图',
          en: 'Area Charts'
        }
      },
      {
        slug: 'column',
        icon: 'column', // 图标名可以去 https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html 打开控制台查看图标类名
        title: {
          zh: '柱状图',
          en: 'Column Charts'
        }
      },
      {
        slug: 'bar',
        icon: 'bar', // 图标名可以去 https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html 打开控制台查看图标类名
        title: {
          zh: '条形图',
          en: 'Bar Charts'
        }
      },
      {
        slug: 'pie',
        icon: 'pie', // 图标名可以去 https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html 打开控制台查看图标类名
        title: {
          zh: '饼图',
          en: 'Pie Charts'
        }
      },
      {
        slug: 'radar',
        icon: 'radar', // 图标名可以去 https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html 打开控制台查看图标类名
        title: {
          zh: '雷达图',
          en: 'Radar Charts'
        }
      },
      {
        slug: 'point',
        icon: 'point', // 图标名可以去 https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html 打开控制台查看图标类名
        title: {
          zh: '点图',
          en: 'Point Charts'
        }
      },
      {
        slug: 'candlestick',
        icon: 'candlestick', // 图标名可以去 https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html 打开控制台查看图标类名
        title: {
          zh: '蜡烛图',
          en: 'Candlestick Charts'
        }
      },
      {
        slug: 'relation',
        icon: 'relation', // 图标名可以去 https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html 打开控制台查看图标类名
        title: {
          zh: '关系图',
          en: 'Relation Charts'
        }
      },
      {
        slug: 'heatmap',
        icon: 'heatmap', // 图标名可以去 https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html 打开控制台查看图标类名
        title: {
          zh: '关系图',
          en: 'Heatmap Charts'
        }
      },
      {
        slug: 'other',
        icon: 'other',
        title: {
          zh: '其他图表',
          en: 'Other Chart'
        }
      }
    ],
    playground: {
      playgroundDidMount: 'window.initPlayground()',
      container: `
        <div class="mobile-container">
          <div class="mobile-header"></div>
          <div class="mobile-content">
            <canvas id="container"/>
          </div>
        </div>
      `
    }
  }
};