var axios = require("axios")
var fetch = require("node-fetch")
var cheerio = require("cheerio")
var FormData = require("form-data")
const {
	fromBuffer
} = require('file-type')
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
//var type = ["jpg","png","bmp","gif","tif","webp","heic","pdf","jpeg","tiff","heif"]
const isUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpg|png|bmp|gif|tif|webp|heic|pdf|jpeg|tiff|heif)/

async function imgurl(url) {
	var a = await axios.request("https://imgbb.com/upload", {
		method: "GET",
		headers: {
			"User-Agent": "Mozilla/5.0 (X11; Linux x86_64; Flow) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/359.0.0.288 Safari/537.36"
		}
	})
	var cookie = a.headers['set-cookie'][0].split(";")[0]
	var token = cheerio.load(a.data)("input[name='auth_token']").attr("value")

	var form = new FormData()
	form.append("auth_token", token)
	form.append("action", "upload")
	form.append("type", "url")
	form.append("expiration", "PT1H")
	form.append("timestamp", Date.now().toString())
	form.append("source", url)
	try {
		var b = await axios.request("https://imgbb.com/json", {
			method: "POST",
			data: form,
			headers: {
				"User-Agent": "Mozilla/5.0 (X11; Linux x86_64; Flow) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/359.0.0.288 Safari/537.36",
				cookie: cookie,
				...form.getHeaders()
			}
		})

		return ({
			status: b.data.status_code,
			success: b.data.success,
			expiration: b.data.image.expiration,
			image: {
				name: b.data.image.name,
				extension: b.data.image.extension,
				width: b.data.image.width,
				height: b.data.image.height,
				size: b.data.image.size_formatted,
				url: b.data.image.url,
				url_viewer: b.data.image.url_viewer,
				delete_url: b.data.image.delete_url
			}
		})

	} catch (e) {
		if (e.response) {
			return ({
				status: "gagal",
				msg: "internal server error",
				data: e.response.data
			})
		} else {
			console.log({
				imgbb: "error",
				e
			})
			return ({
				status: "gagal",
				msg: "internal server error"
			})
		}
	}
}


async function imgfile(file) {
	const {
		ext
	} = await fromBuffer(file) || {}

	var a = await axios.request("https://imgbb.com/upload", {
		method: "GET",
		headers: {
			"User-Agent": "Mozilla/5.0 (X11; Linux x86_64; Flow) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/359.0.0.288 Safari/537.36"
		}
	})
	var cookie = a.headers['set-cookie'][0].split(";")[0]
	var token = cheerio.load(a.data)("input[name='auth_token']").attr("value")

	var form = new FormData()
	form.append("auth_token", token)
	form.append("action", "upload")
	form.append("type", "file")
	form.append("expiration", "PT1H")
	form.append("timestamp", Date.now().toString())
	form.append("source", file, {
		filename: getRandom("." + ext)
	})
	try {
		var b = await axios.request("https://imgbb.com/json", {
			method: "POST",
			data: form,
			headers: {
				"User-Agent": "Mozilla/5.0 (X11; Linux x86_64; Flow) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/359.0.0.288 Safari/537.36",
				cookie: cookie,
				...form.getHeaders()
			}
		})

		return ({
			status: b.data.status_code,
			success: b.data.success,
			expiration: b.data.image.expiration,
			image: {
				name: b.data.image.name,
				extension: b.data.image.extension,
				width: b.data.image.width,
				height: b.data.image.height,
				size: b.data.image.size_formatted,
				url: b.data.image.url,
				url_viewer: b.data.image.url_viewer,
				delete_url: b.data.image.delete_url
			}
		})

	} catch (e) {
		if (e.response) {
			return ({
				status: "gagal",
				msg: "internal server error",
				data: e.response.data
			})
		} else {
			console.log({
				imgbb: "error",
				e
			})
			return ({
				status: "gagal",
				msg: "internal server error"
			})
		}
	}
}

async function imgfile2(file) {
	const {
		ext
	} = await fromBuffer(file) || {}

	var a = await axios.request("https://imgbb.com/upload", {
		method: "GET",
		headers: {
			"User-Agent": "Mozilla/5.0 (X11; Linux x86_64; Flow) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/359.0.0.288 Safari/537.36"
		}
	})
	var cookie = a.headers['set-cookie'][0].split(";")[0]
	var token = cheerio.load(a.data)("input[name='auth_token']").attr("value")

	var form = new FormData()
	form.append("auth_token", token)
	form.append("action", "upload")
	form.append("type", "file")
	form.append("expiration", "PT1H")
	form.append("timestamp", Date.now().toString())
	form.append("source", file, {
		filename: getRandom("." + ext)
	})
	try {
		b = await axios.request("https://imgbb.com/json", {
			method: "POST",
			data: form,
			headers: {
				"User-Agent": "Mozilla/5.0 (X11; Linux x86_64; Flow) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/359.0.0.288 Safari/537.36",
				cookie: cookie,
				...form.getHeaders()
			}
		})

		return ({
			status: b.data.status_code,
			success: b.data.success,
			expiration: b.data.image.expiration,
			image: {
				name: b.data.image.name,
				extension: b.data.image.extension,
				width: b.data.image.width,
				height: b.data.image.height,
				size: b.data.image.size_formatted,
				url: b.data.image.url,
				url_viewer: b.data.image.url_viewer,
				delete_url: b.data.image.delete_url
			}
		})

	} catch (e) {
		if (e.response) {
			return ({
				status: "gagal",
				msg: "internal server error",
				data: e.response.data
			})
		} else {
			console.log({
				imgbb: "error",
				e
			})
			return ({
				status: "gagal",
				msg: "internal server error"
			})
		}
	}
}
module.exports = {
	imgurl,
	imgfile,
	imgfile2
}