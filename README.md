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

## 效果预览

查看渲染前后的对比效果：[效果预览](preview.md)

## 手动安装（备选方案）

如果你更喜欢手动安装，请按以下步骤操作：

### 1. 安装 Tampermonkey 浏览器扩展
- Chrome: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- Firefox: [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)

### 2. 打开 Tampermonkey 编辑器
- 在浏览器地址栏输入：`chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo/options.html#nav=new-user-script+editor`

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

## 反馈与支持

- 问题反馈：[Greasy Fork 反馈页面](https://greasyfork.org/zh-CN/scripts/546744-quicker-markdown-renderer/feedback)
- 项目地址：[GitHub 仓库](https://github.com/your-username/quicker-markdown-renderer)

---

**推荐安装方式**: [一键安装到 Greasy Fork](https://greasyfork.org/zh-CN/scripts/546744-quicker-markdown-renderer)
