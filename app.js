const express = require('express');
const utility = require('utility');
const superAgent = require('superAgent');
const cheerio = require('cheerio');

const app = express();

/*
 * md5
 */
// app.get('/', (req, res) => {
//   const { query: { q } } = req;
//   res.send(`${utility.md5(q)}${utility.sha1(q)}`);
// });

/*
 * 爬虫
 */
app.get('/', function (req, res, next) {
  // 用 superAgent 去抓取 https://cnodejs.org/ 的内容
  superAgent.get('https://cnodejs.org/')
    .end((err, sres) => {
      // 常规的错误处理
      if (err) {
        return next(err);
      }
      const $ = cheerio.load(sres.text);
      const items = [];
      $('#topic_list .topic_title').each(function (idx, element) {
        const $element = $(element);
        items.push({
          title: $element.attr('title'),
          href: $element.attr('href')
        });
      });

      $('#topic_list .user_avatar img').each(function (idx, element) {
        const $element = $(element);
        items[idx].author = $element.attr('title')
      });

      res.send(items);
    });
});

app.listen(3000, () => {
  console.log('app is listening at port 3000');
  console.log(process.env.NODE_ENV);
});
