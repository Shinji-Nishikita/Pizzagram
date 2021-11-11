//expressを読み込む
const express = require("express");
const port = 3000;

//expressサーバーを作成する
const app = express();

//クライアント側から送信されたリクエストをreq.bodyで取得するためにJSONをパースするミドルウェアを使用する。
app.use(express.json());

//リクエストを受信できるかテスト
app.get("/test", (req, res) => {
    res.send("Yeah!");
})

//listenメソッドを実行して指定したポート番号でリクエストを待ち受ける
app.listen(port, () => {
    console.log(`express listening on port ${port}`)
})
