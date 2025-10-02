# uv
uv 是一个 轻量级的 ``Python`` 工具依赖管理器，类似于 Conda、Mamba，但更轻、更快。
**核心功能**是：
* 管理 Python 版本
* 创建和管理虚拟环境
* 安装依赖包
* 支持快速切换不同环境


## 安装uv---使用软件包管理器或者脚本安装

 ::: code-group
 
  ```bash [archLinux相关发行版]
  sudo pacman -S uv
  ```

   ```bash [方法一使用脚本部署]
   curl -sSL https://raw.githubusercontent.com/Astriora/Antlia/refs/heads/main/Script/UV/uv_install.sh -o uv_install-unofficial.sh
   bash uv_install-unofficial.sh --GITHUB-URL "" #可以填写github代理连接
   #如 bash uv_install-unofficial.sh --GITHUB-URL "https://ghfast.top" 后面必须有 /
   source ~/.bashrc
   rm uv_install-unofficial.sh
   
   ```

 ```bash [方法二使用官方脚本部署]
    curl -LsSf https://astral.sh/uv/install.sh -o uv_install-official.sh  
    sh uv_install-official.sh
    source ~/.bashrc
    rm uv-install-official.sh
 ```
  :::