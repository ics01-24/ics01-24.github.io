# CS 学习资源

> 本文在22秋刘助教的基础上进行了更新，感谢刘助教的贡献。

- 一个很好的国外名校 CS 课程整理网站： <https://csdiy.wiki>
- 中文技术文档教学网站： [菜鸟教程](https://www.runoob.com/)

## CS 入门

- 系统层面：Computer Systems: A Programmer's Perspective（CSAPP）
  - 推荐阅读教材，选做实验（实验可以在 [官网](http://csapp.cs.cmu.edu/3e/labs.html) 点击每个实验的 Self-Study Handout 和 Writeup 等下载，答案可以在 Github 搜索 CSAPP）
- 软件编程层面：CS61A
  - 课程主页： <https://inst.eecs.berkeley.edu/~cs61a/>, 可以选择历史学期听课，如 <https://inst.eecs.berkeley.edu/~cs61a/su20> 对应 20 年暑期学期
  - 推荐看网课，完成作业实验（视频，作业，实验都在课程主页上有）

## CS 相关必学的一些工具

> 这里的很多工具并不仅对计科专业来说比较重要，对于大数据或是人工智能专业的同学来说，以下这些在以后的课程或是工作中也会经常用到。

- Linux
  - 你可能以前只使用过电脑自带的 Windows 或是 Mac 系统，但在接下来的大学学习中，你会逐渐接触到 Linux 系统，不妨先学习一下 Linux 的基本操作，这样在以后的学习中就不会因为不会使用 Linux 而束手无策了。
  - [学校 Vlab 虚拟机平台](https://vlab.ustc.edu.cn/) 为大家提供了一个开箱即用的虚拟机，同时也提供了详细的 [使用文档](https://vlab.ustc.edu.cn/docs/)，可以先从这里开始学习。建议除去网络登录外，尝试 [通过公钥来SSH登录虚拟机](https://vlab.ustc.edu.cn/docs/login/ssh/#pubkey) 的步骤。同时可以自行进一步探索，在本地 VSCode 里尝试安装 Remote - SSH 插件，通过 VSCode 远程连接到 Vlab 虚拟机。
  - 学会登录Linux后，可以参考学校Linux User Group提供的Linux 101 入门教程来学习使用Linux：<https://101.ustclug.org/>
- Git
  - Git 是一个版本控制系统，借助 Git 可以方便地管理代码，同时也可以方便地和他人协作。
  - 可以参考 Git Book 来学习：<https://git-scm.com/book/zh/v2>
  - 也可以参考可视化的 Git：<https://marklodato.github.io/visual-git-guide/index-zh-cn.html>
- GDB
  - GDB 是GNU Debugger的缩写，是一个强大的调试工具，可以帮助我们在程序出错时快速定位错误。
  - VSCode 下的图形化 GDB的配置参考 [vscode配置](./vscode.html) 即可。
  - 命令行下的 GDB 使用介绍：<https://beej.us/guide/bggdb/>