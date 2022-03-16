const axios = require("axios")

function savefrom(url) {
	return new Promise(async (resolve, reject) => {
		try {
			const instance = axios.create({
				baseURL: 'https://worker-as.sf-tools.com',
				headers: {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.82 Safari/537.36"
				}
			});

			const a = await instance({
				method: "POST",
				url: "/savefrom.php",
				data: new URLSearchParams(Object.entries({
					"sf_url": url,
					"sf_submit": "",
					"new": "2",
					"lang": "id",
					"app": "",
					"country": "id",
					"os": "Linux",
					"browser": "Chrome",
					"channel": "download",
					"sf-nomad": 1
				}))
			})


			var b = a.data.replace(/\/\js\-response\\\//gi, '').replace(/eval\(a\)/gi, 'return a').replace(/\[\]\["filter"\]\["constructor"\]\(b\)\.call\(a\);/gi, `
        if (b.includes('showResult')) {
          result = b;
          return;
        } else []['filter']['constructor'](b).call(a);`) +
				'module.exports = result;';


			var g = eval(b)
			var err = g.match(/window.parent.sf.result.show\((.*)\)/)?.pop().replace(`,false,true,false,false`, "")
			if (err == "undefined") console.log({
				msg: "process downloading success"
			})
			if (err) return resolve({
				error: "can't fetch metadata"
			})
			try {
				var y = g.match(/\({(.*)}\)/)[0].replace(/(\(|\))/g, '');
			} catch (e) {
				y = g.match(/window.parent.sf.videoResult.showRows\((.*)\)/)?.pop()?.replace(`,"instagram.com"`, '')
			}
			let z = JSON.parse(y)
			resolve(z)
		} catch (e) {
			return resolve({
				status: e.response.status,
				msg: e.response.statusText
			})
		}
	})
}


module.exports = savefrom;