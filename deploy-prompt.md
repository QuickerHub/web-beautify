# GitHub 自动化发布 Prompt

## 使用场景
当你需要将本地代码发布到GitHub仓库时，可以使用以下prompt来自动化执行Git操作。

## Prompt 模板

```
请帮我将代码发布到GitHub仓库 @https://github.com/[用户名]/[仓库名]

执行以下Git操作：
1. 初始化Git仓库
2. 添加所有文件到暂存区
3. 提交代码（使用规范的commit message格式）
4. 将分支重命名为main
5. 添加远程仓库
6. 推送到GitHub

请按照以下步骤执行：
```bash
git init
git add .
git commit -m "feat(initial): initial commit with [项目描述]"
git branch -M main
git remote add origin https://github.com/[用户名]/[仓库名].git
git push -u origin main
```

注意：
- 使用规范的commit message格式：`<type>(<scope>): <subject>`
- 确保所有文件都已准备好
- 检查README.md等文档是否完整
```

## 使用示例

### 示例1：新项目首次发布
```
请帮我将代码发布到GitHub仓库 @https://github.com/QuickerHub/web-beautify

执行以下Git操作：
1. 初始化Git仓库
2. 添加所有文件到暂存区
3. 提交代码（使用规范的commit message格式）
4. 将分支重命名为main
5. 添加远程仓库
6. 推送到GitHub

请按照以下步骤执行：
```bash
git init
git add .
git commit -m "feat(initial): initial commit with web beautify scripts"
git branch -M main
git remote add origin https://github.com/QuickerHub/web-beautify.git
git push -u origin main
```
```

### 示例2：更新现有项目
```
请帮我更新GitHub仓库 @https://github.com/[用户名]/[仓库名]

执行以下Git操作：
1. 添加所有修改的文件
2. 提交代码（使用规范的commit message格式）
3. 推送到GitHub

请按照以下步骤执行：
```bash
git add .
git commit -m "feat(scope): [具体更新内容]"
git push origin main
```
```

## Commit Message 规范

### 类型 (type)
- `feat`: 新功能
- `fix`: 修复bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

### 范围 (scope)
- `initial`: 初始化项目
- `ui`: 用户界面相关
- `api`: API相关
- `auth`: 认证相关
- `db`: 数据库相关

### 主题 (subject)
- 简短描述，不超过50个字符
- 使用祈使句，如"add"、"update"、"fix"

## 注意事项

1. **权限检查**: 确保你有GitHub仓库的写入权限
2. **文件准备**: 发布前检查所有文件是否完整
3. **文档更新**: 确保README.md等文档是最新的
4. **敏感信息**: 检查是否包含API密钥等敏感信息
5. **依赖文件**: 确保包含必要的配置文件（如.gitignore）

## 故障排除

### 常见问题
1. **权限错误**: 检查GitHub token或SSH密钥配置
2. **远程仓库已存在**: 使用 `git remote set-url origin [URL]` 更新
3. **分支冲突**: 使用 `git pull origin main` 先拉取最新代码

### 错误处理
```bash
# 如果远程仓库已存在
git remote remove origin
git remote add origin https://github.com/[用户名]/[仓库名].git

# 如果需要强制推送（谨慎使用）
git push -f origin main
```

## 自动化脚本版本

你也可以创建一个批处理脚本来自动化这个过程：

```bash
#!/bin/bash
# deploy.sh

REPO_URL="https://github.com/[用户名]/[仓库名].git"
COMMIT_MSG="feat(initial): initial commit"

git init
git add .
git commit -m "$COMMIT_MSG"
git branch -M main
git remote add origin "$REPO_URL"
git push -u origin main

echo "Deployment completed!"
```

使用方法：
```bash
chmod +x deploy.sh
./deploy.sh
```
