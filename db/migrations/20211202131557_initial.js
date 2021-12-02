exports.up = function (knex) {
  return knex.schema.createTable("posts", (table) => {
    table.increments("id");
    table.string("user").notNullable();
    table.timestamp("posted_at").defaultTo(knex.fn.now());
    table.string("photo_url", 255).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("posts");
};

// exports.upは作成するテーブルの情報。
// exports.downはダウングレードする際の処理
// 2=>postsというテーブルを作成する
// 3=>テーブルに"id"カラムを付与
// 4=>テーブルに"user"というカラムを付与(notNullableを用いて空の値が入るのをNGとする)
// 5=>テーブルに"posted_at"というタイムスタンプカラムを付与(デフォルトは現在時刻=knex.fn.now())
// 6=>テーブルに"photo_url"カラムを付与(最大255文字まで/notNullableを用いて空の値が入るのをNGとする)
