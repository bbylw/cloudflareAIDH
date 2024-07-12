addEventListener('fetch'， event => {
  event.respondWith(handleRequest(event.request));
});

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
      { name: "音乐磁场", url: "https://www.hifini.com/" }
    ]
  },
  {
    name: "网盘",
    bigFly: [
      { name: "蓝奏云", url: "https://up.woozooo.com/" },
      { name: "阿里云盘", url: "https://www.alipan.com/" },
      { name: "迅雷云盘", url: "https://pan.xunlei.com/" },
      { name: "OneDrive", url: "" },
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
      { name: "Base64", url: "https://5iux.cn/base64/" },
      { name: "站长Ping", url: "https://www.itdog.cn/ping" },
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

async function handleRequest(request) {
  const html = generateHTML(links);
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html;charset=UTF-8',
    },
  });
}

function generateHTML(links) {
  let html = `
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>导航页</title>
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
          display: grid;
          grid-template-columns: repeat(4, 1fr);
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
        }
        .link:hover {
          background-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-5px);
        }
        @media (max-width: 768px) {
          .links {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .links {
            grid-template-columns: 1fr;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1 style="text-align: center;">导航页</h1>
  `;

  links.forEach(category => {
    html += `
      <div class="category">
        <h2>${category.name}</h2>
        <div class="links">
    `;
    category.bigFly.forEach(link => {
      html += `
        <a class="link" href="${link.url}" target="_blank">${link.name}</a>
      `;
    });
    html += `
        </div>
      </div>
    `;
  });

  html += `
      </div>
    </body>
    </html>
  `;

  return html;
}
