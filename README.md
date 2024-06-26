# Next.js TailwindCSS Turborepo Starter Kit

[![Turborepo](https://img.shields.io/badge/built%20with-Turborepo-cc00ff.svg)](https://turborepo.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15-blueviolet.svg)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC.svg)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-007ACC.svg)](https://www.typescriptlang.org/)

次世代のウェブアプリケーション開発のための、高性能かつスケーラブルなモノレポスターターキット。

![Demo Screenshot](https://via.placeholder.com/800x400?text=Demo+Screenshot)

## 🚀 特徴

- **⚡ 超高速ビルド**: Turborepo によるタスクのキャッシングと並列実行
- **🎭 App Router**: Next.js 15 で App Router を使用
- **📦 モノレポ構造**: 効率的なコード共有と依存関係管理- **🔄 HMR**: turbopack による高速な開発サイクルを実現するホットモジュールリプレイスメント

## 📂 プロジェクト構造

```
.
├── apps
│   └── web  　　# メインの Next.js アプリケーション
└── packages
    └── ui      # 共有 UI コンポーネント
```

## 🛠 技術スタック

- **Turborepo**: モノレポ管理とビルド最適化
- **Next.js 15**: React フレームワーク（App Router 採用）
- **TailwindCSS 3**: ユーティリティファーストの CSS フレームワーク
- **TypeScript 5**: 静的型付けによるコード品質向上
- **pnpm**: 高速で効率的なパッケージマネージャー
- **ESLint**: コード品質とスタイルの一貫性を保証
- **Prettier**: コードフォーマッター

## 🚀 始め方

1. **リポジトリのクローン:**

   ```bash
   git clone https://github.com/Ryopo18/my-turborepo
   cd my-turborepo
   ```

2. **依存関係のインストール:**

   ```bash
   pnpm install
   ```

3. **環境変数の設定:**

   ```bash
   cp .env.example .env.local
   ```

   `.env.local` ファイルを編集し、必要な環境変数を設定してください。

4. **開発サーバーの起動:**

   ```bash
   pnpm run dev
   ```

5. ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

## 📜 利用可能なスクリプト

- `pnpm run dev`: 開発モードですべてのアプリとパッケージを実行
- `pnpm run build`: すべてのアプリとパッケージをビルド
- `pnpm run lint`: すべてのアプリとパッケージにリントを実行
- `pnpm run test`: すべてのテストを実行
- `pnpm run clean`: すべてのビルド出力とキャッシュをクリア

## 🎨 UI コンポーネントのカスタマイズ

1. `packages/ui/components` ディレクトリに新しいコンポーネントを追加します。
2. `packages/ui/index.ts` ファイルで新しいコンポーネントをエクスポートします。
3. `apps/web` 内で新しいコンポーネントを以下のようにインポートして使用します：

```typescript
import { NewComponent } from "@repo/ui";
```

## 📄 ライセンス

このプロジェクトは [MIT ライセンス](LICENSE) の下で公開されています。

## 📮 サポート

質問や問題がある場合は、[GitHub Issues](https://github.com/Ryopo18/my-turborepo/issues) を開いてください。

---

🌟 このプロジェクトが気に入ったら、ぜひスターを付けてください！

Made with ❤️ by [Ryopo18](https://github.com/Ryopo18)
