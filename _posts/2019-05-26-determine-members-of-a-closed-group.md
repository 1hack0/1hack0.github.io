---
layout: single
title:  "价值$5000美金的Facebook封闭小组成员列表泄漏漏洞"
---

根据<https://www.facebook.com/help/220336891328465>所写，只有当前成员可以看到封闭小组的成员列表。

![](https://1hack0.github.io/asset/images/determine-members-of-a-closed-group-1.png)

### 漏洞原因
当我在测试Facebook小组功能的时候，发现了一个GraphQL API请求可以用来绕过这个隐私设置。大致的请求如下：
```
HTTP POST

https://graph.facebook.com/graphql/

query_id = 2433256830023894

query_params = {"4":UserID,"11":GroupID}
```
其中UserID代表了用户的ID号，GroupID代表了目标小组的ID号。

1) 当UserID是小组成员的时候，响应结果中的adder_profile字段会返回添加该用户的管理员信息。

![](https://1hack0.github.io/asset/images/determine-members-of-a-closed-group-2.png)

2) 当UserID不是该小组成员的时候，响应结果中的adder_profile字段会返回null。

![](https://1hack0.github.io/asset/images/determine-members-of-a-closed-group-3.png)

通过这个特征可以判断该用户是不是该封闭小组成员。

### PoC视频
<iframe width="560" height="315" src="https://www.youtube.com/embed/3nl27UnIGMU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 漏洞影响
该漏洞可用于确定封闭小组的成员。

### 漏洞上报进程
- 2019.05.01 向Facebook安全团队上报漏洞
- 2019.05.04 Facebook证实漏洞问题存在并转交给产品团队
- 2019.05.18 Facebook修复漏洞
- 2018.05.19 Facebook向我发放$5,000美金的赏金

![](https://1hack0.github.io/asset/images/determine-members-of-a-closed-group-4.png)
