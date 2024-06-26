# @repo/ui

このパッケージは、プロジェクト全体で使用する共通のUIコンポーネントを提供します。Tailwind CSSを使用してスタイリングされています。

## インストール

このパッケージはプロジェクトのモノレポの一部であり、通常は以下のように `package.json` に追加されています：

```json
{
  "dependencies": {
    "@repo/ui": "workspace:*"
  }
}
```

## 使用方法

コンポーネントは以下のようにインポートして使用できます：

```jsx
import { Button } from "@repo/ui";

function MyComponent() {
  return <Button variant="primary">Click me</Button>;
}
```

## Tailwind CSS の設定

このパッケージのコンポーネントを正しく表示するには、プロジェクトの Tailwind CSS 設定を更新する必要があります。

1. プロジェクトの `tailwind.config.js` ファイルを開きます。
2. `content` 配列に以下のパスを追加します：

```javascript
module.exports = {
  content: [
    // ... 他のパス
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  // ... 他の設定
};
```

3. プロジェクトのエントリーポイント（例：`_app.tsx` や `layout.tsx`）で、このパッケージのスタイルをインポートします：

```javascript
import "@repo/ui/dist/styles.css";
```

## カスタマイズ

コンポーネントのスタイルをカスタマイズする場合は、Tailwind CSS のクラスを上書きするか、テーマ設定を変更してください。

例：

```jsx
<Button className="bg-custom-color">Custom Button</Button>
```
