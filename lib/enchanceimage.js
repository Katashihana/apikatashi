var request = require("request")
var fs = require("fs")
// keyori = "871027c9-d1db-4a42-b434-3a0427857e38"
userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0"
blackBox = (function() { // this function was exposed to the end user through one of their linked files... 
	for (var p = [], n = 0; 64 > n;)
		p[n] = 0 | (4294967296 * Math.sin(++n % Math.PI));
	return function(t) {
		var u,
			x,
			B,
			D = [(u = 1732584193), (x = 4023233417), ~u, ~x],
			E = [],
			y = unescape(encodeURI(t)) + "\u0080",
			v = y.length;
		t = (--v / 4 + 2) | 15;
		for (E[--t] = 8 * v; ~v;)
			E[v >> 2] |= y.charCodeAt(v) << (8 * v--);
		for (n = y = 0; n < t; n += 16) {
			for (
				v = D; 64 > y; v = [
					(B = v[3]),
					u +
					(((B =
								v[0] + [
									(u & x) | (~u & B),
									(B & u) | (~B & x),
									u ^ x ^ B,
									x ^ (u | ~B),
								][(v = y >> 4)] +
								p[y] +
								~~E[
									n | ([y, 5 * y + 1, 3 * y + 5, 7 * y][v] & 15)
								]) <<
							(v = [
								7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10,
								15, 21,
							][4 * v + (y++ % 4)])) |
						(B >>> -v)),
					u,
					x,
				]
			)
				(u = v[1] | 0), (x = v[2]);
			for (y = 4; y;) D[--y] += v[y];
		}
		for (t = ""; 32 > y;)
			t += ((D[y >> 3] >> (4 * (1 ^ y++))) & 15).toString(16);
		return t.split("").reverse().join("");
	};
})();
rand = Math.round(1e11 * Math.random()) + ""; // this is the salt they use
trialkey = "tryit-" + rand + "-" + blackBox(userAgent + blackBox(userAgent + blackBox(userAgent + rand)));

console.log(trialkey)
async function enchance(url) {
	return new Promise(async (resolve, reject) => {
		var a = await request.post({
				headers: {
					'Api-Key': trialkey,
					'User-Agent': userAgent
				},
				url: 'https://api.deepai.org/api/waifu2x',
			},
			function(err, response, body) {
				if (err) {
					return resolve(err)
				}
				var response = JSON.parse(body)
				resolve(response)
			})
		var form = a.form()
		//form.append("image", fs.readFileSync("./src/gambar/q.jpg"),{"filename": "adit.jpg","Content-Type": "image/jpeg"})

		form.append("image", url)
	})
}



async function enchancei(imeg) {
	return new Promise(async (resolve, reject) => {
		var a = await request.post({
				headers: {
					'Api-Key': trialkey,
					'User-Agent': userAgent
				},
				url: 'https://api.deepai.org/api/waifu2x',
			},
			function(err, response, body) {
				var response = JSON.parse(body)
				resolve(response)
			})
		var form = a.form()
		form.append("image", imeg, {
			"filename": `${Math.floor(Math.random() * 10000)}.jpg`,
			"Content-Type": "image/jpeg"
		})

		//form.append("image",url)
	})
}

/** Example
 *
 * a = await enchance("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJKgZma6P2WhNqYdHg60FfMeMXNdZE93jYKbtQr7mGaTyI6vdgDTw4t_Q&s=10") 
 * console.log(a)
 *
 **/
module.exports = {
	enchance,
	enchancei
}