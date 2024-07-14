addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const html = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>导航页</title>
  <meta name="description" content="一个现代和科技风格的导航页面，包含各种实用链接。">
  <meta name="keywords" content="导航页, 搜索引擎, 个人网站, 新大陆, 网盘, 邮箱, 工具, 开发">
  <meta name="author" content="你的名字">
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
      color: #fff;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
    }
    .container {
      max-width: 1200px;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
      padding: 30px;
      margin: 20px;
    }
    .category {
      margin-bottom: 30px;
    }
    .category h2 {
      color: #e0e0e0;
      font-size: 1.8em;
      border-bottom: 2px solid #ccc;
      padding-bottom: 10px;
      margin-bottom: 20px;
    }
    .links {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
    .link {
      background-color: rgba(255, 255, 255, 0.2);
      padding: 15px;
      border-radius: 10px;
      text-decoration: none;
      color: #fff;
      transition: background-color 0.3s, transform 0.3s;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2em;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      flex: 1 1 calc(25% - 20px);
      box-sizing: border-box;
    }
    .link:hover {
      background-color: rgba(255, 255, 255, 0.3);
      transform: translateY(-5px);
    }
    @media (max-width: 768px) {
      .link {
        font-size: 1em;
        flex: 1 1 calc(33.33% - 20px); /* 三个链接一行 */
      }
    }
    @media (max-width: 480px) {
      .link {
        font-size: 1em;
        flex: 1 1 calc(33.33% - 20px); /* 三个链接一行 */
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1 style="text-align: center;">导航页</h1>
  </div>
  <script>
    const links = [
      {
        name: "搜索引擎",
        bigFly: [
          { name: "百度", url: "https://www.baidu.com/" },
          { name: "Google", url: "https://go.186404.xyz/" }
        ]
      },
      {
        name: "个人网站",
        bigFly: [
          { name: "博客", url: "https://b.186404.xyz/" },
          { name: "短链系统", url: "https://d.186404.xyz/" },
          { name: "dynv6", url: "https://dynv6.com/" },
          { name: "cloudns", url: "https://www.cloudns.net/" },
          { name: "一个朋友", url: "https://ygpy.net/" },
          { name: "cloudflare", url: "https://cloudflare.com" }
        ]
      },
      {
        name: "新大陆",
        bigFly: [
          { name: "谷歌笔记", url: "https://notebooklm.google/" },
          { name: "YouTube", url: "https://www.youtube.com/" },
          { name: "ACFUN", url: "http://www.acfun.cn/index.html" },
          { name: "临时邮箱", url: "https://email.ml/" },
          { name: "A姐", url: "https://www.ahhhhfs.com/" },
          { name: "us.kg", url: "https://nic.us.kg/" },
          { name: "Z-Library", url: "https://zh.go-to-library.sk/" }
        ]
      },
      {
        name: "网盘",
        bigFly: [
          { name: "蓝奏云", url: "https://up.woozooo.com/" },
          { name: "阿里云盘", url: "https://www.alipan.com/" },
          { name: "迅雷云盘", url: "https://pan.xunlei.com/" },
          { name: "OneDrive", url: "https://onedrive.live.com/" },
          { name: "夸克网盘", url: "https://pan.quark.cn/" },
          { name: "百度网盘", url: "https://pan.baidu.com/" }
        ]
      },
      {
        name: "邮箱",
        bigFly: [
          { name: "Gmail", url: "https://mail.google.com/mail/u/0/#inbox" },
          { name: "网易邮箱", url: "https://mail.163.com/" },
          { name: "outlook", url: "https://outlook.live.com" },
          { name: "QQ邮箱", url: "https://mail.qq.com/" }
        ]
      },
      {
        name: "工具",
        bigFly: [
          { name: "Miku工具", url: "https://tools.miku.ac/" },
          { name: "spaceship域名", url: "https://www.spaceship.com/zh/" },
          { name: "IP查询", url: "https://ip.sb/" },
          { name: "谷歌翻译", url: "https://translate.google.cn/?hl=zh-CN" },
          { name: "傻豆包", url: "https://www.doubao.com/chat/" },
          { name: "傻元宝", url: "https://yuanbao.tencent.com/" },
          { name: "阿里矢量图标", url: "https://www.iconfont.cn/" },
          { name: "ChatGPT", url: "https://chatgpt.com" }
        ]
      },
      {
        name: "开发",
        bigFly: [
          { name: "site域名转发", url: "https://www.site.ac/" },
          { name: "Github", url: "https://github.com/" },
          { name: "Codepen", url: "https://codepen.io/" },
          { name: "吾爱破解", url: "https://www.52pojie.cn/" },
          { name: "SF思否", url: "https://segmentfault.com/" },
          { name: "CdnJs", url: "https://cdnjs.com/" },
          { name: "Font A.", url: "https://fontawesome.com/icons?d=gallery&m=free" },
          { name: "MSDN下载", url: "https://msdn.itellyou.cn/" },
          { name: "C. flare", url: "https://dash.cloudflare.com/" },
          { name: "Vercel", url: "https://vercel.com/" },
          { name: "Swiper", url: "https://www.swiper.com.cn/" }
        ]
      }
    ];

    document.addEventListener('DOMContentLoaded', () => {
      const container = document.querySelector('.container');

      links.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');

        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category.name;
        categoryDiv.appendChild(categoryTitle);

        const linksDiv = document.createElement('div');
        linksDiv.classList.add('links');

        category.bigFly.forEach(link => {
          const linkElement = document.createElement('a');
          linkElement.classList.add('link');
          linkElement.href = link.url;
          linkElement.textContent = link.name;
          linkElement.target = "_blank"; // 在新标签页中打开链接
          linksDiv.appendChild(linkElement);
        });

        categoryDiv.appendChild(linksDiv);
        container.appendChild(categoryDiv);
      });
    });
  </script>
</body>
</html>
  `;

  return new Response(html, {
    headers: { 'content-type': 'text/html;charset=UTF-8' },
  })
}
