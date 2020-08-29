# インストール

Firebase Functionsに必要なライブラリをインストールして下さい。

```
cd functions
yarn
```

実行環境環境は下記です。

```
node version v10.18.0
yarn version 1.17.3
firebase-tools 8.7.0
```

# Firebaseエミュレーターで起動する

### 認証情報の設定

下記リンク先を参考に、**サービスアカウントファイル**を取得してください。

> https://firebase.google.com/docs/admin/setup?hl=ja


サービスアカウントファイルのパスを`GOOGLE_APPLICATION_CREDENTIALS`としてエクスポートしてください。

```
export GOOGLE_APPLICATION_CREDENTIALS="path/to/google-service-account.json"
```

### 関数のビルド

下記コマンドにより、Firebase Functionsをビルドしてください。

> Typescriptで書かれた関数をJavascriptに変換します。

```
cd functions
yarn build
```

### Firebaseエミュレーター起動

ルートディレクトリで下記コマンドを実行してください。

```
 yarn serve
```

### Firebaseエミュレーター上で関数を実行

下記コマンドにて、`Firebase Functions`のシェルを起動してください。

```
cd functions
yarn shell
```

シェル内で呼び出したい関数を実行できます。

```
firebase > FUNCTION_NAME({ key: "value" })
```

# Firebase Functionsのデプロイ

下記コマンドにて`Firebase Functions`をFirebaseプロジェクトへデプロイできます。

```
cd functions
yarn deploy
```
