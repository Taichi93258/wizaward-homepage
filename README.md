# WizAward-HomePage

## 概要
本プロジェクトはWizAward社の公式ホームページであり、企業紹介、サービス案内、お問い合わせ機能などを含んでいます。

## セットアップ

### 環境変数

ローカル開発では `.env.local.example` をコピーして `.env.local` を作成し、各種環境変数を設定してください（Gitには含まれません）。

```bash
cp .env.local.example .env.local
```

- `NEXT_PUBLIC_MICROCMS_DOMAIN`: microCMSで設定したドメイン
- `MICROCMS_API_KEY`: microCMSのAPIキー
- `NEXT_PUBLIC_FORMSPREE_FORM_ID`: FormspreeのフォームID

### 開発サーバー起動

```bash
npm install
npm run dev
```

### 本番環境

本番環境では、ホスティングサービス（例: Vercel）の管理画面から上記の環境変数を登録してください。
