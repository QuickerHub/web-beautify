# Quicker Markdown Renderer

在 Quicker 动作版本页面中自动渲染 Markdown 内容，提升阅读体验。

## 功能特性

🎯 **自动检测和渲染** - 自动识别表格中的 Markdown 内容并进行渲染
📝 **全面支持** - 支持常见 Markdown 语法：
- **粗体** (`**text**`) 和 *斜体* (`*text*`)
- `行内代码` (`` `code` ``)
- [链接](url) (`[text](url)`)
- 列表项 (`- item` 或 `1. item`)
- 标题 (`# Header`)
- 代码块 (``` ``` ```)
- 引用 (`> quote`)

🔄 **动态监听** - 实时监测页面变化，自动处理新加载的内容
🛡️ **安全可靠** - 不影响原有页面功能，包含完善的错误处理
🎨 **视觉优化** - 优化渲染后的样式，提升阅读体验

## 使用方法

1. 安装脚本后，访问 Quicker 动作版本页面
2. 脚本会自动检测并渲染表格中的 Markdown 内容
3. 无需任何手动操作，开箱即用

## 适用页面

- `https://getquicker.net/Share/Actions/Versions?code=*`

## 技术说明

- 使用 marked.js 库进行专业级 Markdown 解析
- 智能检测 Markdown 模式，避免误渲染
- 支持 GitHub Flavored Markdown (GFM)
- 包含完整的错误处理和日志记录

如有问题或建议，请在反馈页面留言。
