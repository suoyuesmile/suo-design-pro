
# 自定义运行快捷键

1. 打开bash 或者 zsh 文件
```bash
vim ~/.zshrc"
```
在末尾添加
```bash
# yarn
alias yi="yarn init"
alias ya="yarn add"
alias yu="yarn ungrade"
alias yr="yarn remove"
alias ys="yarn serve"
alias yf="yarn feature"
```
2. 使用 `source` 命令使之生效
```bash
source ~/.zshrc
```
3. 进入项目目录，使用快捷方式
```sh
ys
```

