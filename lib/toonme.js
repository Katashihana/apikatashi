var fs = require("fs")
var former = require("form-data")
var axios = require("axios")
const parseString = require('xml2js').parseString;
async function xml2json(xml) {
	return new Promise((resolve, reject) => {
		parseString(xml, (err, json) => {
			if (err) {
				reject(err);
			} else {
				resolve(json);
			}
		});
	});
}


async function geturl(imeg) {
	return new Promise(async (resolve, reject) => {
		var form = new former()
		form.append("file", imeg, {
			filename: `${Math.floor(Math.random() * 10000)}.jpg`
		})

		var a = await axios.request("https://upload.toonme-com.photo-cdn.net/api/files/create", {
			method: "POST",
			data: form,
			headers: {
				"Host": "upload.toonme-com.photo-cdn.net",
				"origin": "https://toonme.com",
				"x-locale": "id-ID",
				"user-agent": "Mozilla/5.0 (X11; Linux x86_64; Flow) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/359.0.0.288 Safari/537.36",
				"x-client-token": "b:d:36a550f1ff227ff4eb561480597abfef",
				"accept": "application/json, text/plain, */*",
				"x-requested-with": "XMLHttpRequest",
				"referer": "https://toonme.com/create",
				"accept-language": "id-ID,id;q=0.9,en-GB;q=0.8,en;q=0.7,en-US;q=0.6",
				...form.getHeaders()
			}
		})
		resolve({
			url: a.data.url
		})
	})
}


async function toonme(imeg, filter) {
	return new Promise(async (resolve, reject) => {

		var a = await geturl(imeg)
		var uuid = {
			tipe1: "5570",
			tipe2: "6611",
			tipe3: "6671"
		} [filter]
		if (!uuid) return reject({
			msg: "filter tersebut tidak di temukan, yang ada hanya: 1. tipe1, 2. tipe2, 3. tipe3"
		})
		var text = {
			"data": `<image_process_call><lang>id</lang><methods_list><method order="1"><name>collage</name><params>template_name=${uuid}</params></method></methods_list><image_url order="1">${a.url}</image_url><abort_methods_chain_on_error>1</abort_methods_chain_on_error><abort_attempts_on_error>1</abort_attempts_on_error></image_process_call>`,
			"addtask": 1,
			"cn": "toonme",
			"cv": "1645609901",
			"rv": 1
		}
		//console.log(a.data)
		var b = await axios.request("https://sign-wf3p-toonme-com.photo-cdn.net/api/photolab/sign", {
			method: "POST",
			data: text,
			headers: {
				"Host": "sign-wf3p-toonme-com.photo-cdn.net",
				"x-locale": "id-ID",
				"origin": "https://toonme.com",
				"user-agent": "Mozilla/5.0 (X11; Linux x86_64; Flow) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/359.0.0.288 Safari/537.36",
				"x-client-token": "b:d:36a550f1ff227ff4eb561480597abfef",
				"accept": "application/json, text/plain, */*",
				"x-requested-with": "XMLHttpRequest",
				"content-type": "application/json;charset=UTF-8",
				"referer": "https://toonme.com/processing",
				"accept-language": "id-ID,id;q=0.9,en-GB;q=0.8,en;q=0.7,en-US;q=0.6"
			}
		})


		const {
			image_process_response: result
		} = await xml2json(b.data.data);
		var interVal = setInterval(async function() {
			var c = await axios.request(`https://opeapi-toonme-com.photo-cdn.net/getresult?request_id=${result.request_id[0]}&r=0.6752088370067117`, {
				method: "POST",
				headers: {
					"Host": "opeapi-toonme-com.photo-cdn.net",
					"accept": "application/json, text/plain, */*",
					"origin": "https://toonme.com",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64; Flow) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/359.0.0.288 Safari/537.36",
					"referer": "https://toonme.com/processing",
					"accept-language": "id-ID,id;q=0.9,en-GB;q=0.8,en;q=0.7,en-US;q=0.6"
				}
			})
			const {
				image_process_response: result2
			} = await xml2json(c.data);
			console.log(result2)
			if (result2.status[0] === 'Error') {
				clearInterval(interVal);
				resolve({
					status: "error",
					msg: "try another filter or change your image",
					data: result2
				})
			}
			if (result2.status[0] === 'OK') {
				clearInterval(interVal);
				var url = result2.result_url[0]
				resolve({
					status: "true",
					url: url
				})
			}

		}, 2000)

	})
}

/* usage
 *
 * a = await toonme(fs.readFileSync("./src/gambar/deddy.jpg"),"tipe1")
 * return a
 *
 **/
module.exports = toonme;

/** Other Filter Id
 *
 * female: { 4462, 4252, 5277, 6032 }
 * male: { 5570c, 5671, 5672, 4014 }
 *
 **/