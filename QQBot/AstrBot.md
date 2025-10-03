# AstrBot

AstrBot 致力于成为一个开源的一站式 Agentic 聊天机器人平台及开发框架。通过它，你能够在多种消息平台上部署和开发一个支持大语言模型（LLM）的聊天机器人。

- 大模型对话。支持接入多种大模型服务。支持多模态、工具调用、MCP、原生知识库、人设等功能。
多消息平台支持。支持接入 QQ、企业微信、微信公众号、飞书、Telegram、钉钉、Discord、KOOK 等平台。支持速率限制、白名单、百度内容审核。
- Agent。完善适配的 Agentic 能力。支持多轮工具调用、内置沙盒代码执行器、网页搜索等功能。
插件扩展。深度优化的插件机制，支持开发插件扩展功能，社区插件生态丰富。
WebUI。可视化配置和管理机器人，功能齐全。

## 使用脚本部署 Astrbot

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
[ -f astrbot-install.sh ] && rm -f astrbot-install.sh &&
wget -O astrbot-install.sh https://github.com/Astriora/Antlia/raw/refs/heads/main/Script/AstrBot/Antlia.sh &&
bash astrbot-install.sh
'

```


## 使用脚本启动

```bash
./start.sh
```
## --分割线--


## 通过源码部署 AstrBot

## 安装git

::: code-group

```bash [apt]
sudo apt install git
```

```bash [yum]
sudo yum install git
```

```bash [dnf]
sudo dnf install git
```

```bash [pacman]
sudo pacman -S git
```

```bash [zypper]
sudo zypper install git
```

:::



## 下载/克隆仓库

如果你的电脑上安装了 `git`，你可以通过以下命令来下载源码：

```bash
git clone --depth 1 https://github.com/AstrBotDevs/AstrBot.git
cd AstrBot
```

## 安装依赖并运行

::: details 使用 `uv` 管理依赖

 1. [安装uv](/Python/uv)
 2. 在终端执行(AstrBot 目录下)
 > 提示 在国内网络同步依赖在下载`cpython`的时候很慢 而且镜像源没有用 请耐心等待哦
 ```bash
 uv sync --index-url https://mirrors.ustc.edu.cn/pypi/simple/

 uv run main.py
 ```
:::




::: details Python 内置 venv 安装依赖

在 AstrBot 源码目录下，使用终端运行以下命令：



```bash
python3 -m venv ./venv
```

> 也可能是 `python` 而不是 `python3`
 
以上步骤会创建一个虚拟环境并激活（以免打乱您设备本地的 Python 环境）。

接下来，通过以下命令安装依赖文件，这可能需要花费一些时间：

执行：

```bash
source venv/bin/activate
python -m pip install -r requirements.txt -i https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple
python main.py
```

:::


## 完成

如果一切顺利，你会看到 AstrBot 启动

如果没有报错，你会看到一条日志显示类似 `🌈 管理面板已启动，可访问` 并附带了几条链接。打开其中一个链接即可访问 AstrBot 管理面板。链接是 `http://localhost:6185`。

> [!TIP]
> 如果你正在服务器上部署 AstrBot，需要将 `localhost` 替换为你的服务器 IP 地址。
>
> 默认用户名和密码是 `astrbot` 和 `astrbot`。 
>
> 如果你在访问的时候提示连接已拒绝
>
> 需要开放6185端口 
>
> 一些大厂的服务器有网络防火墙 (rainyun没有) 需要在管理面板开放 
>
> 常见是ufw的 `sudo ufw allow 6185/tcp` 

