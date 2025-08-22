# Quicker Markdown Renderer

在 Quicker 动作版本页面中自动渲染 Markdown 内容，提升阅读体验。

## 🚀 快速安装

**推荐方式：一键安装**
- [![安装此脚本](https://img.shields.io/badge/Greasy_Fork-安装此脚本-green.svg)](https://greasyfork.org/zh-CN/scripts/546744-quicker-markdown-renderer)

点击上方按钮即可一键安装，无需手动配置！

## 功能特性

- 自动检测表格中的 markdown 内容
- 支持常见的 markdown 语法：
  - **粗体** (`**text**`)
  - *斜体* (`*text*`)
  - `行内代码` (`` `code` ``)
  - [链接](url) (`[text](url)`)
  - 列表 (`- item` 或 `1. item`)
  - 标题 (`# Header`)
  - 代码块 (``` ``` ```)
  - 表格 (`| col1 | col2 |`)
  - 引用 (`> quote`)

## 使用方法

1. 安装脚本后，访问任意 Quicker Action Versions 页面
   - 例如：https://getquicker.net/Share/Actions/Versions?code=9ec53d43-5539-4571-6886-08d8c752bfcb

2. 脚本会自动运行并处理表格中的 markdown 内容

3. 打开浏览器开发者工具 (F12) 查看控制台输出，确认脚本运行状态

## 📸 效果预览

### 渲染前后对比

#### 原始状态（未安装插件）

![原始状态 - 未安装插件](./simple.png)

**特点：**
- 表格中的 Markdown 语法以纯文本形式显示
- `**粗体**`、`*斜体*`、`[链接](url)` 等语法未被解析
- 代码块、列表等格式混乱
- 阅读体验较差，难以快速理解内容结构

#### 安装插件后

![安装插件后 - 已渲染](rendered.png)

**改进效果：**
- ✅ **粗体文本** 正确显示为加粗效果
- ✅ *斜体文本* 正确显示为斜体效果
- ✅ `行内代码` 正确显示为代码格式
- ✅ [链接文本](url) 正确显示为可点击链接
- ✅ 列表项正确显示为有序/无序列表
- ✅ 标题层级正确显示
- ✅ 代码块正确格式化
- ✅ 引用块正确显示

### 🎯 主要改进点

#### 1. 文本格式化
- **原始**: `**重要更新**` → **渲染后**: **重要更新**
- **原始**: `*注意事项*` → **渲染后**: *注意事项*

#### 2. 代码显示
- **原始**: `` `console.log()` `` → **渲染后**: `console.log()`
- **原始**: ``` ``` ``` → **渲染后**: 格式化的代码块

#### 3. 链接处理
- **原始**: `[查看详情](https://example.com)` → **渲染后**: [查看详情](https://example.com)

#### 4. 列表结构
- **原始**: `- 功能1\n- 功能2` → **渲染后**: 正确的无序列表
- **原始**: `1. 步骤1\n2. 步骤2` → **渲染后**: 正确的有序列表

#### 5. 标题层级
- **原始**: `# 主标题\n## 子标题` → **渲染后**: 正确的标题层级显示

### 🚀 使用体验提升

#### 安装前
- 需要手动解析 Markdown 语法
- 阅读效率低
- 容易遗漏重要信息
- 视觉层次不清晰

#### 安装后
- 自动渲染，无需手动操作
- 阅读效率大幅提升
- 重要信息一目了然
- 清晰的视觉层次结构

## 手动安装（备选方案）

如果你更喜欢手动安装，请按以下步骤操作：

### 1. 安装 Tampermonkey 浏览器扩展
- Chrome: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- Firefox: [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)

### 2. 打开 Tampermonkey 编辑器
- 在浏览器地址栏输入：
```
chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo/options.html#nav=new-user-script+editor
```

### 3. 复制脚本内容
- 下载 `quicker-markdown-renderer.user.js` 文件
- 复制全部内容到编辑器

### 4. 保存脚本
- 按 Ctrl+S 保存
- 或者点击编辑器右上角的保存按钮

## 故障排除

1. **脚本不工作**
   - 检查 Tampermonkey 是否已启用
   - 确认脚本已正确安装
   - 查看浏览器控制台是否有错误信息

2. **Markdown 没有渲染**
   - 确认内容包含 markdown 语法
   - 检查控制台输出，查看是否检测到 markdown 内容

3. **页面样式问题**
   - 脚本会添加基本样式，但可能需要根据具体页面调整

## 自定义

如果需要修改脚本行为，可以编辑以下部分：

- `@match` 规则：修改匹配的网址
- `renderMarkdown` 函数：调整 markdown 渲染选项
- `processTable` 函数：修改表格处理逻辑
- CSS 样式：调整渲染后的样式

## 技术细节

- 使用 [marked.js](https://marked.js.org/) 库进行 markdown 解析
- 支持 GitHub Flavored Markdown (GFM)
- 自动检测常见的 markdown 模式
- 防止重复处理已渲染的内容

## 开源协议

本项目采用 **CC BY-NC 4.0** 协议。

### 📋 协议特点

**✅ 允许：**
- 分享和分发
- 修改和改编
- 个人使用
- 教育目的

**📝 要求：**
- 署名（必须注明原作者）
- 提供许可证链接
- 标明修改内容

**❌ 禁止：**
- 商业使用
- 营利性应用
- 商业软件集成

CC BY-NC 4.0 是一个广为人知的知识共享协议，允许自由使用但禁止商业用途。

## 反馈与支持

- 问题反馈：[Greasy Fork 反馈页面](https://greasyfork.org/zh-CN/scripts/546744-quicker-markdown-renderer/feedback)
- 项目地址：[GitHub 仓库](https://github.com/QuickerHub/quicker-markdown-renderer)
- 协议详情：[LICENSE](LICENSE)

---

**推荐安装方式**: [一键安装到 Greasy Fork](https://greasyfork.org/zh-CN/scripts/546744-quicker-markdown-renderer)
