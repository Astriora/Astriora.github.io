#  MaiBot
**🍔MaiCore 是一个基于大语言模型的可交互智能体**

- 💭 **智能对话系统**：基于 LLM 的自然语言交互，聊天时机控制。
- 🤔 **实时思维系统**：模拟人类思考过程。
- 🧠 **表达学习功能**：学习群友的说话风格和表达方式
- 💝 **情感表达系统**：情绪系统和表情包系统。
- 🔌 **强大插件系统**：提供API和事件系统，可编写强大插件。


## 使用脚本部署 MaiBot

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


wget -O maibot-install.sh https://raw.githubusercontent.com/Astriora/Antlia/refs/heads/main/Script/MaiBot/MaiBot-install.sh &&
bash maibot-install.sh


```


## 启动
```bash
source ~/.bashrc #第一次需要更新shell
```
```bash
maibot
```