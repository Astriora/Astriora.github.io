# NapCat
NapCat 是基于 TypeScript 构建的 Bot 框架，通过相应的启动器或者框架，主动调用 QQ Node 模块提供给客户端的接口，实现 Bot 的功能。

## 使用脚本部署 NapCat

## 安装wget

::: code-group

```bash [apt]
sudo apt install wget
```

```bash [yum]
sudo yum install wget
```

```bash [dnf]
sudo dnf install wget
```

```bash [pacman]
sudo pacman -S wget
```

```bash [zypper]
sudo zypper install wget
```
:::


## 下载脚本 & 部署

```bash
bash -c '
[ -f napcat-install.sh ] && rm -f napcat-install.sh &&
wget -O napcat-install.sh https://raw.githubusercontent.com/Astriora/Antlia/refs/heads/main/Script/NapCat/install.sh &&
bash napcat-install.sh
'

```