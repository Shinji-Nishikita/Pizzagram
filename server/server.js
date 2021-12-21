// .envファイルを読み込む
require("dotenv").config();

// pathモジュール(ネイティブユーティリティモジュール)をインポート=>ファイルパスを操作するためのもの。
const path = require('path');

//expressを読み込む
const express = require("express");

//expressサーバーを作成する
const app = express();
const port = process.env.PORT || 4000;

//knexfileを読み込む
const config = require("../knexfile");
const knex = require("knex")(config[process.env.DB_ENV]);

//クライアント側から送信されたリクエストをreq.bodyで取得するためにJSONをパースするミドルウェアを使用する。
app.use(express.json());

// 静的ファイルの提供
app.use(express.static(path.resolve(__dirname, "..", "build")));

//データベースの"posts"テーブルから情報を取得する
//非同期通信(async-await)
app.get("/posts", async (req, res) => {
  const data = await knex.select().from("posts");
  res.send(data)
});

//データベースの"posts"テーブルに新規投稿を追加する
//非同期通信(async-await)
app.post("/posts", async (req, res) => {
  // console.log("req.bodyは", req.body);
  await knex("posts").insert([req.body]);
  res.send("added new post!");
})

//データベースの"comments"テーブルから情報を取得する
//非同期通信(async-await)
app.get("/comments/:id", async (req, res) => {
  const userId = Number(req.params.id);
  const data = await knex.select().from("comments").where("post_id", userId);
  res.send(data)
});

//データベースの"comments"テーブルに新規コメントを追加する
//非同期通信(async-await)
app.post("/comments", async (req, res) => {
  // console.log("req.bodyは", req.body);
  await knex("comments").insert([req.body]);
  res.send("added new comment!");
})

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
// });

//listenメソッドを実行して指定したポート番号でリクエストを待ち受ける
app.listen(port, () => {
    console.log(`express listening on port ${port}`)
})
