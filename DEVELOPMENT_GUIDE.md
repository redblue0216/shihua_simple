# 独立开发流程指南

本文档记录了如何一个人独立完成 `shihua_simple` 项目的完整开发流程，涵盖环境配置、源码编写、文档编写和最终测试。

---

## 目录

1. [环境准备](#一环境准备)
2. [项目初始化](#二项目初始化)
3. [项目结构说明](#三项目结构说明)
4. [数据层设计](#四数据层设计)
5. [组件开发](#五组件开发)
6. [样式设计](#六样式设计)
7. [构建与测试](#七构建与测试)
8. [一键构建脚本](#八一键构建脚本)
9. [README 编写](#九readme-编写)
10. [最终验证清单](#十最终验证清单)
11. [单人开发建议](#十一单人开发建议)

---

## 一、环境准备

### 1.1 安装 Node.js

#### 方式一：使用 nvm（推荐，方便切换版本）

```bash
# 安装 nvm（如果还没有）
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# 安装并启用 Node.js 20 LTS 或更高版本
nvm install 20
nvm use 20
nvm alias default 20

# 验证
node -v   # v20.x.x
npm -v    # 10.x.x
```

#### 方式二：使用 Homebrew（适合 macOS 用户）

如果你已经在 macOS 上安装了 [Homebrew](https://brew.sh/)，可以直接通过 brew 安装 Node.js：

```bash
# 安装 Node.js 最新 LTS 版本
brew install node@20

# 或者安装当前最新版本
brew install node

# 验证
node -v
npm -v
```

> 如果安装的是 `node@20`，可能需要手动链接到 PATH：
> ```bash
> echo 'export PATH="/opt/homebrew/opt/node@20/bin:$PATH"' >> ~/.zshrc
> source ~/.zshrc
> ```

> 本项目使用 Node v24 + npm v11，但 LTS 版本（Node 20/22）也完全够用。

### 1.2 安装全局 TypeScript

```bash
npm install -g typescript
tsc -v    # 确认是 7.x
```

### 1.3 准备编辑器

推荐 **VS Code**，安装以下插件：

- ESLint
- Tailwind CSS IntelliSense
- TypeScript Importer

> **本步骤涉及文件**：无项目文件变更，仅在本地开发环境中安装全局工具和编辑器插件。

---

## 二、项目初始化

### 2.1 创建 Vite 项目

```bash
cd /Users/shihua/tulip/workspace/shihua_simple/Demo
npm create vite@latest shihua_simple -- --template react-ts
cd shihua_simple
npm install
```

### 2.2 安装 Tailwind CSS v4

```bash
npm install -D tailwindcss @tailwindcss/vite
```

### 2.3 配置 Vite

编辑 `vite.config.ts`：

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### 2.4 配置 CSS

清空或重写 `src/index.css`：

```css
@import 'tailwindcss';
```

> 完成以上步骤后，先运行 `npm run dev`，确认页面能正常打开且无报错。

### 2.5 本步骤产出文件

| 操作 | 产生或修改的文件/文件夹 |
|------|------------------------|
| 创建 Vite 项目 | 整个 `shihua_simple/` 项目目录，包括 `package.json`、`package-lock.json`、`index.html`、`vite.config.ts`、`tsconfig.json`、`tsconfig.app.json`、`tsconfig.node.json`、`.gitignore`、`.oxlintrc.json`、`src/`、`public/` 等 |
| 安装依赖 | `node_modules/`、`package-lock.json` |
| 配置 Vite | `vite.config.ts` |
| 配置 CSS | `src/index.css` |

> 其中 `node_modules/` 和 `package-lock.json` 由 `npm install` 生成/更新。

---

## 三、项目结构说明

下面是本项目的完整目录结构，以及每个文件/文件夹的作用：

```
shihua_simple/
├── public/                          # 静态资源目录
│   └── favicon.svg                  # 网站图标
├── src/                             # 源码目录
│   ├── components/                  # React 组件
│   │   ├── Header.tsx              # 页面顶部：标题、简介、原站链接
│   │   ├── ProjectList.tsx         # 项目列表容器：控制整体布局和统计
│   │   ├── ProjectItem.tsx         # 单个项目卡片：展示一段项目描述
│   │   ├── Footer.tsx              # 页面底部：邮箱联系、更新时间
│   │   └── SegmentRenderer.tsx     # 文本/链接混合渲染器
│   ├── data/                        # 数据层
│   │   └── projects.ts             # 项目数据 + TypeScript 类型定义
│   ├── App.tsx                      # 根组件，组装 Header / ProjectList / Footer
│   ├── main.tsx                     # 应用入口，挂载 React 到 DOM
│   └── index.css                    # Tailwind CSS 入口和全局样式
├── .gitignore                       # Git 忽略规则
├── .oxlintrc.json                   # Oxlint 代码检查配置
├── index.html                       # HTML 模板，Vite 构建时使用
├── package.json                     # 项目依赖和 npm 脚本
├── package-lock.json                # 依赖版本锁定文件
├── README.md                        # 项目说明文档（简介、技术栈、构建方式）
├── DEVELOPMENT_GUIDE.md             # 本文件：独立开发流程指南
├── vite.config.ts                   # Vite 配置文件
├── tsconfig.json                    # TypeScript 项目引用配置
├── tsconfig.app.json                # 应用代码的 TypeScript 配置
├── tsconfig.node.json               # Node 环境（Vite 配置）的 TypeScript 配置
├── node_modules/                    # 依赖包目录（运行 npm install 后生成）
└── dist/                            # 生产构建输出目录（运行 npm run build 后生成）
```

### 各目录/文件详细说明

| 路径 | 作用 |
|------|------|
| `public/` | 不参与构建打包的静态资源，构建时直接复制到 `dist/` |
| `public/favicon.svg` | 浏览器标签页图标 |
| `src/components/` | 所有可复用的 React 组件，按功能拆分 |
| `src/components/Header.tsx` | 渲染页面头部，包含标题、副标题、原站链接 |
| `src/components/ProjectList.tsx` | 读取项目数据，循环渲染 `ProjectItem` |
| `src/components/ProjectItem.tsx` | 渲染单个项目卡片，带序号和悬停效果 |
| `src/components/Footer.tsx` | 渲染页脚联系信息和更新时间 |
| `src/components/SegmentRenderer.tsx` | 将 `TextSegment` 和 `LinkSegment` 混合渲染为 JSX |
| `src/data/projects.ts` | 存放从个人内容源提取的项目数据，并导出类型定义 |
| `src/App.tsx` | 根组件，组合所有子组件，控制页面整体结构 |
| `src/main.tsx` | React 应用入口，创建根节点并渲染 `App` |
| `src/index.css` | 引入 Tailwind CSS，定义全局字体和基础样式 |
| `.gitignore` | 告诉 Git 忽略哪些文件（如 `node_modules/`、`dist/`） |
| `.oxlintrc.json` | Oxlint 的配置文件，定义代码检查规则 |
| `index.html` | 单页应用的 HTML 模板，包含根节点 `#root` |
| `package.json` | 声明项目元信息、依赖包、npm 脚本 |
| `package-lock.json` | 锁定依赖的确切版本，保证团队协作环境一致 |
| `README.md` | 面向使用者的项目说明文档 |
| `DEVELOPMENT_GUIDE.md` | 面向开发者的流程指南（即本文档） |
| `vite.config.ts` | 配置 Vite 插件（React + Tailwind CSS） |
| `tsconfig.json` | TypeScript 复合项目配置，引用 app 和 node 两个配置 |
| `tsconfig.app.json` | 应用源码的编译选项 |
| `tsconfig.node.json` | Vite 配置文件的编译选项 |
| `node_modules/` | 运行 `npm install` 后生成的依赖包目录，通常被 `.gitignore` 忽略 |
| `dist/` | 运行 `npm run build` 后生成的生产构建产物目录，通常被 `.gitignore` 忽略 |

---

## 四、数据层设计

单人开发时，建议**先把内容结构化，再写 UI 组件**。

### 4.1 分析原站

打开你的个人主页或项目列表页面，把每个项目段落复制下来，观察规律：

- 每个项目是一段话
- 段落中混有纯文本和超链接
- 有些项目包含多个链接

### 4.2 定义 TypeScript 类型

创建 `src/data/projects.ts`：

```ts
export interface TextSegment {
  type: 'text'
  content: string
}

export interface LinkSegment {
  type: 'link'
  content: string
  href: string
}

export type Segment = TextSegment | LinkSegment

export interface Project {
  id: string
  segments: Segment[]
}
```

### 4.3 填充数据

把每个项目段落拆成 `segments` 数组。例如：

```ts
{
  id: 'portfolio',
  segments: [
    { type: 'link', content: 'Portfolio Website', href: 'https://github.com/shihua/portfolio' },
    { type: 'text', content: ': a responsive personal portfolio built with ' },
    { type: 'link', content: 'React', href: 'https://react.dev/' },
    { type: 'text', content: ' and ' },
    { type: 'link', content: 'Tailwind CSS', href: 'https://tailwindcss.com/' },
    { type: 'text', content: '.' },
  ],
}
```

> 小技巧：先写 2-3 条数据跑通，再全部填充，避免一次性写错太多。

### 4.4 本步骤产出文件

| 文件 | 作用 |
|------|------|
| `src/data/projects.ts` | 定义 `Segment`、`Project` 等 TypeScript 类型，并存放从个人内容源提取的所有项目数据 |

---

## 五、组件开发

按**从底向上**的顺序开发组件。

### 5.1 最小组件：SegmentRenderer

先实现能把 `Segment[]` 渲染成 JSX 的组件：

```tsx
import type { Segment } from '../data/projects'

export function SegmentRenderer({ segments }: { segments: Segment[] }) {
  return segments.map((seg, i) =>
    seg.type === 'link' ? (
      <a key={i} href={seg.href} target="_blank" rel="noopener noreferrer">
        {seg.content}
      </a>
    ) : (
      <span key={i}>{seg.content}</span>
    )
  )
}
```

### 5.2 业务组件

逐个创建以下组件：

- `Header.tsx` — 标题和简介
- `ProjectItem.tsx` — 单个项目卡片
- `ProjectList.tsx` — 循环渲染 ProjectItem
- `Footer.tsx` — 联系方式和更新时间

### 5.3 根组件组装

编辑 `src/App.tsx`：

```tsx
import { Header } from './components/Header'
import { ProjectList } from './components/ProjectList'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <ProjectList />
      <Footer />
    </div>
  )
}

export default App
```

### 5.4 本步骤产出文件

| 文件/文件夹 | 作用 |
|-------------|------|
| `src/components/SegmentRenderer.tsx` | 渲染混合文本与链接片段 |
| `src/components/Header.tsx` | 页面顶部组件 |
| `src/components/ProjectItem.tsx` | 单个项目卡片组件 |
| `src/components/ProjectList.tsx` | 项目列表容器组件 |
| `src/components/Footer.tsx` | 页脚组件 |
| `src/App.tsx` | 根组件，组合以上所有子组件 |

---

## 六、样式设计

### 6.1 确定设计方向

对于你的个人主页或项目列表的现代化版本，可以考虑：

- 浅色/深色双主题
- 卡片式项目列表
- 清晰的层级和间距
- 微妙的 hover 动效

### 6.2 应用 Tailwind 类

例如：

```tsx
<article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
```

### 6.3 测试响应式

在浏览器中按 `Cmd + Option + I`（Mac）打开 DevTools，切换不同设备尺寸检查布局。

### 6.4 测试深色模式

在 DevTools 中切换 `prefers-color-scheme: dark`，或使用系统深色模式测试。

### 6.5 本步骤涉及文件

| 文件 | 修改内容 |
|------|----------|
| `src/index.css` | 引入 Tailwind CSS，定义全局字体、滚动行为等 |
| `src/components/*.tsx` | 各组件中的 `className` 属性，应用 Tailwind utility class |
| `src/App.tsx` | 根容器背景色、深色模式适配等 |

---

## 七、构建与测试

### 7.1 类型检查

```bash
npx tsc --noEmit
```

### 7.2 生产构建

```bash
npm run build
```

### 7.3 本地预览

```bash
npm run preview
```

浏览器打开 http://localhost:4173/ 检查构建产物。

### 7.4 检查产物

```bash
ls -la dist/
```

确认存在 `index.html` 和 `assets/` 目录。

### 7.5 本步骤产出文件

| 文件/文件夹 | 作用 |
|-------------|------|
| `dist/` | 生产构建输出目录，包含 `index.html` 和 `assets/`（JS/CSS/静态资源） |
| `dist/index.html` | 构建后的入口 HTML |
| `dist/assets/` | 构建后的 JS、CSS 等资源文件 |

---

## 八、一键构建脚本

编辑 `package.json`，在 `scripts` 中添加：

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "build:prod": "npm ci && npm run build",
    "preview": "vite preview"
  }
}
```

> `build:prod` 适合在干净环境（如 CI）中使用。本地开发用 `npm run build` 即可。

### 8.2 本步骤涉及文件

| 文件 | 修改内容 |
|------|----------|
| `package.json` | 新增 `build:prod` 脚本 |

---

## 九、README 编写

README 至少包含以下三部分：

### 9.1 简介

```md
# Shihua Simple

shihua's personal project landing page, built with React, TypeScript, and Tailwind CSS.
```

### 9.2 技术列表

```md
## Tech Stack

- React 19
- TypeScript 7
- Tailwind CSS 4
- Vite 8
```

### 9.3 如何构建

由于要在 Markdown 中展示 Markdown 代码，外层使用 `~~~md` 包裹内层代码块：

~~~md
## Build

```bash
npm install
npm run dev      # 开发
npm run build    # 生产构建
npm run preview  # 预览生产构建
```
~~~

### 9.4 本步骤产出文件

| 文件 | 作用 |
|------|------|
| `README.md` | 面向使用者的项目说明文档，包含简介、技术栈、构建方式 |

> 另外，你在阅读的本文件 `DEVELOPMENT_GUIDE.md` 也属于项目文档，记录独立开发的完整流程和项目结构说明。

---

## 十、最终验证清单

提交或发布前，逐项确认：

| 检查项 | 命令/操作 |
|--------|-----------|
| 依赖安装正常 | `npm install` |
| 开发服务器正常 | `npm run dev` |
| TypeScript 无错 | `npx tsc --noEmit` |
| 生产构建成功 | `npm run build` |
| 产物预览正常 | `npm run preview` |
| README 完整 | 手动检查 |
| 无未使用文件 | 删除模板自带资源 |

---

## 十一、单人开发建议

1. **先数据，后 UI**：把内容结构化后，组件会自然拆分。
2. **小步快跑**：不要一次性写完全部页面，先让第一个项目卡片正常显示。
3. **频繁构建**：每完成一个组件就 `npm run build` 一次，早发现错误。
4. **版本锁定**：`package-lock.json` 要提交到仓库，保证环境一致。
5. **不要纠结完美**：先跑通，再优化样式和动画。

---


