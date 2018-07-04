var store = [{
        "title": "Abusing JSONP to grab user credentials",
        "excerpt":"I find that a company implements cross-domain authentication using JSONP and cookies.There is the login flow: GET /api/cross/getsign?callback=test HTTP/1.1Host: portal.domain.comReferer: http://www.otherdomain.comHTTP/1.1 200 OKtest(crossToken)POST /api/cross/getsign HTTP/1.1Host: www.otherdomain.comcrossToken=[crossToken]HTTP/1.1 200 OKset-cookie: session=xxxxxxxxxxxxxxxxxxxxxxxThe company prevents the JSONP injection via referer check. some common referer check byapss tricks: notdomian.com domain.com.evil.com evil.com/domain.com send a blank refererFortunately,...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/2018/07/04/abusing-jsonp-to-grab-user-credentials.html",
        "teaser":null}]
