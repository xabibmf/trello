# DB設計

## users table

+ userテーブルはdeviseを利用する。

|Column|Type|Options|
|:--|:-:|:--|
|name|string|null: false|
|initial|string|null: false|
|self_introduction|text|-|

### Association

+ has_many :boards

## boards table

|Column|Type|Options|
|:--|:-:|:--|
|manager|string|null: false|
|name|string|null: false|
|color|string|null: false|

### Association

+ has_many :lists
+ belongs_to :user

## lists table

|Column|Type|Options|
|:--|:-:|:--|
|name|string|null: false|
|board_id|integer|null: false, foreign_key: true|
|position|integer|-|

### Association

+ has_many :cards
+ belongs_to :board

## cards table

|Column|Type|Options|
|:--|:-:|:--|
|name|string|null: false|
|details|text|-|
|list_id|string|null: false, foreign_key: true|
|position|integer|-|
|deadline|date|-|

### Association

+ has_many :activities
+ belongs_to :list

## activities table

|Column|Type|Options|
|:--|:-:|:--|
|memo|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|card_id|integer|null: false, foreign_key: true|

### Association

+ belongs_to :cards
