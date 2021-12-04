// .envファイルを読み込む
require("dotenv").config();

//expressを読み込む
const express = require("express");

//expressサーバーを作成する
const app = express();
const port = process.env.PORT || 3000;

//knexfileを読み込む
const config = require("../knexfile");
const knex = require("knex")(config[process.env.DB_ENV]);

//クライアント側から送信されたリクエストをreq.bodyで取得するためにJSONをパースするミドルウェアを使用する。
app.use(express.json());

//データベースの"posts"テーブルから情報を取得する
//非同期通信(async-await)
app.get("/posts", async (req, res) => {
    const data = await knex.select().from("posts");
    res.send(data)
});

//listenメソッドを実行して指定したポート番号でリクエストを待ち受ける
app.listen(port, () => {
    console.log(`express listening on port ${port}`)
})
