---
layout: single
title: 更强的人工智能：GPT-4抢先用户测评
date: 2023-03-14
categories: []
---

注：这篇文章是2小时内快速写出来的，难免质量无法保证。

最新版本的GPT于今天（3月14日）发布了。看完了发布会后果断成为付费用户。
这篇文章的目的在于快速测评GPT-4的效果。在之前的文章《

<p align="center">
                          <img src="/assets/images/2023-03-14/1.png" alt="drawing"/>
                          <br/><em><strong>正襟危站的发布会的OpenAI创始人小哥Greg Brockman</strong></em>
                        </p>
**_任务1：复现图灵论文中的对话例子_**
<p align="center">
                          <img src="/assets/images/2023-03-14/2.png" alt="drawing"/>
                          <br/><em><strong>图灵论文中的对话例子</strong></em>
                        </p>
在之前的文章中，我是一个一个问题问的ChatGPT。模型也给出了比较令人满意的答案。


GPT-4的回答如下：



可以看出，即使我使用间接方法问问题，模型仍然可以“理解”我的问题并给出答案。对第一个考察点，模型正确地定位到图灵1950年发表的论文及其相关章节。对于第二个考察点，模型的回答喜忧参半。对于第2个问题，这次模型犯了一个上次没犯的低级错误:34957+70764=105721，而不是105621。不过在面对更复杂的第四个问题时，模型给出了更正确的回答。

**_任务2：带有不确定性的逻辑问题_**
在前一篇文章中，我问了一个稍微带有不确定性的逻辑问题：

约翰12岁，他有2个哥哥，亚当和亨利。亚当比约翰大2岁。亨利比他爸爸小25岁。问约翰的爸爸至少多少岁。

<p align="center">
                          <img src="/assets/images/2023-03-14/3.png" alt="drawing"/>
                          <br/><em><strong>GPT-4的答案更有条例</strong></em>
                        </p>
相比于GPT-3的答案，我们可以看出GPT-4更加有条理。至于结果，虽然不完全正确，但是思路已经基本对味了。里面唯一不严密的逻辑是它提出的第3条思路。我们并不能从问题里推导出亨利比亚当大。
无论如何，这个结果已经令人满意了。估计再多一轮对话它就可以修正这个错误了。
任务3：GPT-3没回答好的问题
在
<p align="center">
                          <img src="/assets/images/2023-03-14/4.png" alt="drawing"/>
                          <br/><em><strong>这次GPT没有自己搞二次创作了</strong></em>
                        </p>
虽然这个回答可以套用到金庸的大多数主角上，但看过倚天屠龙记的人应该对这个答案还是比较满意的。
<p align="center">
                          <img src="/assets/images/2023-03-14/5.png" alt="drawing"/>
                          <br/><em><strong>对于历史不太了解的人很难辨别这个答案的真伪</strong></em>
                        </p>
这个答案不容易辨别真伪。由于对历史的不了解，我花了十几分钟来判别里面的错误。这些错误可以归纳如下：



从这个任务中我们看出GPT虽然“原创”冲动减少了，但更加隐秘了。如果用户不具有质疑精神，估计就被糊弄过去了。
任务4：对话记忆
这个问题其实在ChatGPT的后续更新中就已经有所改进。这里只是验证一下。
<p align="center">
                          <img src="/assets/images/2023-03-14/6.png" alt="drawing"/>
                          <br/><em><strong>过关的对话记忆</strong></em>
                        </p>
其他方面的局限性以及改进
输入长度限制
之前的GPT-3的输入长度是2k token，大概就是不到两千字。其实这个长度已经很长了，不过其还是没法满足整篇文本的处理。
在演示中，Greg把整篇GPT-4的API文档作为输入，并且让模型根据这个API文档来生成对应的代码。有兴趣的读者可以看看这整个文档有多长（https://platform.openai.com/docs/api-reference/introduction）。从头到尾读一遍我要花一个多小时。此外，输入还包含了让GPT-4使用Discord bot API调用GPT-4 API生成代码。
也就是说
<p align="center">
                          <img src="/assets/images/2023-03-14/7.png" alt="drawing"/>
                          <br/><em><strong>在”阅读“了这个文档后，GPT-4给出了相应的代码。截图自GPT-4发布会</strong></em>
                        </p>
<p align="center">
                          <img src="/assets/images/2023-03-14/8.png" alt="drawing"/>
                          <br/><em><strong>由于模型训练时是使用的旧版Discord bot API，因此生成的代码没法运行。截图自GPT-4发布会</strong></em>
                        </p>
<p align="center">
                          <img src="/assets/images/2023-03-14/9.png" alt="drawing"/>
                          <br/><em><strong>截图自GPT-4发布会</strong></em>
                        </p>
直接把这个错误扔回给GPT-4，经过几个回合的问答，最后GPT-4给出了正确的可运行代码。
<p align="center">
                          <img src="/assets/images/2023-03-14/10.png" alt="drawing"/>
                          <br/><em><strong>截图自GPT-4发布会</strong></em>
                        </p>
整个过程中，Greg没有手写一行代码。

未来程序员的键盘
模型信息处理的形式
之前就放出风说GPT-4是多模态模型，即它可以处理文本以及图片信息。不过稍微令人失望的是，原本我以为可以输出图片，结果模型只是可以接受图片作为输入。
不过，从演示的用例来看，仅仅是图片输入也足够强大了。在发布会的例子中，我们可以看到模型不仅具备理解图片内容的能力，还能对图片做出评价。
<p align="center">
                          <img src="/assets/images/2023-03-14/11.png" alt="drawing"/>
                          <br/><em><strong>截图自GPT-4发布会</strong></em>
                        </p>
<p align="center">
                          <img src="/assets/images/2023-03-14/12.png" alt="drawing"/>
                          <br/><em><strong>这个图片有趣的地方是松鼠可以像摄影师一样手持相机对橡果拍照。这种事情只有人类才可以做到，我们并不期望松鼠可以像人类一样拍照而不仅仅是把橡果吃掉。</strong></em>
                        </p>
可以看出，GPT-4回答足够惊艳，就如同我们看到松鼠可以使用相机拍照般的惊艳。因为它不仅理解了图片中的内容，还对图片中的内容做了进一步的推理（比较现实中的松鼠的能力）。
如果说第一个例子只是有趣，那么第二个例子就是生产力的表现了。在演示中，Greg在笔记本上面手画了一个网页的设计。
<p align="center">
                          <img src="/assets/images/2023-03-14/13.png" alt="drawing"/>
                          <br/><em><strong>截图自GPT-4发布会</strong></em>
                        </p>
然后他拍照把这个设计发给GPT-4让它生成对应的网页代码。
<p align="center">
                          <img src="/assets/images/2023-03-14/14.png" alt="drawing"/>
                          <br/><em><strong>截图自GPT-4发布会</strong></em>
                        </p>
<p align="center">
                          <img src="/assets/images/2023-03-14/15.png" alt="drawing"/>
                          <br/><em><strong>GPT的回复中包含的HTML代码：截图自GPT-4发布会</strong></em>
                        </p>
<p align="center">
                          <img src="/assets/images/2023-03-14/16.png" alt="drawing"/>
                          <br/><em><strong>根据代码实时生成的网页（下半部分）：截图自GPT-4发布会</strong></em>
                        </p>
对于一个没有编程能力但有创意的人，我们可以依靠GPT-4来创造一个互联网产品的潜力。

此时生无可恋的码工
总结
GPT-4的演示总体来说是惊艳的。不过我们期待更多，比如模型对实时性问题的处理，以及模型与外部系统的互动等。
正如在前一篇文章中说的，

<p align="center">
                          <img src="/assets/images/2023-03-14/17.png" alt="drawing"/>
                          <br/><em><strong></strong></em>
                        </p>












相关文章：
[关于GPT，人工智能，以及人的一些思考](http://mp.weixin.qq.com/s?__biz=MzI4NzYzMTYyOQ==&mid=2247484243&idx=1&sn=335e1e8985de7632732d354e083dd704&chksm=ebcbf331dcbc7a27a265aec504c675e174bbce62b189f3f48e9e339f6f37f89e5ebadfa6508c&scene=21#wechat_redirect)
[让我们来做一个流浪地球中的MOSS](http://mp.weixin.qq.com/s?__biz=MzI4NzYzMTYyOQ==&mid=2247484269&idx=1&sn=1c6eb1468b715565ef9aed8e2ec50173&chksm=ebcbf30fdcbc7a196bd63d31aef5998de1b315f3b3a84716cfbacd7f08de4072ef74bf0dfb1b&scene=21#wechat_redirect)