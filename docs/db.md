# DynamoDB 設計

- セッション毎に会話の履歴を保存する

|        | PrimaryKey                           |                   | Attributes |               |                                      |
| ------ | ------------------------------------ | ----------------- | ---------- | ------------- | ------------------------------------ |
|        | PK                                   | SK                |            |               |                                      |
| 属性名 | session_id                           | sent_at           | role       | message       | message_id                           |
| 型     | uuid                                 | number            | string     | string        | uuid                                 |
| 値例   | 1b32a5e9-234b-46c2-89a0-f3e027dbfd5c | 1677885697470(㎳) | user       | 1677885697470 | 18ed476a-b305-4b86-b298-180d4e838e46 |
