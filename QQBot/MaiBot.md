#  MaiBot
**🍔MaiCore 是一个基于大语言模型的可交互智能体**

- 💭 **智能对话系统**：基于 LLM 的自然语言交互，聊天时机控制。
- 🤔 **实时思维系统**：模拟人类思考过程。
- 🧠 **表达学习功能**：学习群友的说话风格和表达方式
- 💝 **情感表达系统**：情绪系统和表情包系统。
- 🔌 **强大插件系统**：提供API和事件系统，可编写强大插件。


## 使用脚本部署 MaiBot

## 安装curl

::: code-group

```bash [apt]
sudo apt install curl
```

```bash [yum]
sudo yum install curl
```

```bash [dnf]
sudo dnf install curl
```

```bash [pacman]
sudo pacman -S curl
```

```bash [zypper]
sudo zypper install curl
```

:::

## 下载脚本 & 部署

::: code-group

```bash [方法一]
curl -sSL https://raw.githubusercontent.com/Astriora/Antlia/refs/heads/main/Script/MaiBot/MaiBot-install.sh | bash
```

```bash [方法二]
wget -O maibot-install.sh https://raw.githubusercontent.com/Astriora/Antlia/refs/heads/main/Script/MaiBot/MaiBot-install.sh && bash Antlia.sh
```

:::

## 启动
```bash
source ~/.bashrc #第一次需要更新shell
```
```bash
maibot
```