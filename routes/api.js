__path = process.cwd()

var aexm = require('@lolikillers/aexm-api');
var express = require('express');
var db = require(__path + '/database/db');
try {
var lolkill = db.get("lolkill");
} catch (e) {
	console.log('')
}

var creator = ['Katashi Hana'];


keyapi = 'katashi'

var axios = require('axios');
var qs = require('qs');
var ytdl = require('ytdl-core');
var ytpl = require('ytpl');
var secure = require('ssl-express-www');
var cors = require('cors');
var scrapeYt = require("scrape-yt");
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var nhentai = require('nhentai-js');
var googles = require('google-it')
const NanaAPI = require('nana-api')
var ytrend = require('@freetube/yt-trending-scraper');
var cakone = require('1cak');
var { Primbon } = require('scrape-primbon')
var { spawn, exec } = require('child_process');
var primbon = new Primbon();
var router  = express.Router();
var TikTokScraper = require('tiktok-scraper');
const malScraper = require('mal-scraper') 
const usetube = require('usetube');
const feedid = require('feedid');

var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js')
var options = require(__path + '/lib/options.js');
var {
	Vokal,
	Base,
	Searchnabi,
    Gempa
} = require('./../lib');
var { options } = require('../lib/options.js');
var { zippy } = require('../lib/zippy.js');
var { mediafireDl } = require('../lib/mediafire.js');
var { doujindesu } = require('../lib/doujindesu.js');
var { sfiledl } = require('../lib/solidfiles.js');
var { jadwalSolat } = require('../lib/solat.js');
var { palingmurah,
         kompasnews,
         tribunnews,
         sfilesearch,
         muihalal,
         jalantikus} = require('../lib/testapi.js');
var { randomTiktok,
         tiktokHastag} = require('../lib/tiktok_search.js');
var {
    getLatest,
    getVideo
} = require('../lib/nekopoi.js');
var { Search, animeDetail, downloadEps } = require('../lib/mynime.js');
var { photofunSearch, photofunEffect, photofunUse } = require('../lib/photofunia.js');
var { dafontSearch, dafontDown} = require('../lib/dafont.js');
var neonime = require('../lib/neonime.js')
var { Search,
         getInfo,
         Getdownload} = require('../lib/otakudesu.js');
var { quotes,
         twitter,} = require('../lib/scrape.js');
var { joox,
         jooxdl} = require('../lib/joox.js');
var { wiki,
         cnn,
         artinama,
         kodepos,
         wallpapper,
         ghstalk,
         ramalanJodoh} = require('../lib/scrape21.js');
var { hentaivid,
         asupanfilm,
         asupanfilminfo,
         stickersearch,
         goredl,
         anime,
         manga,
         anoboys,
         anoboydl,
         film,
         searchgore,
         randomgore,
         drakor,
         mediafire,
         ghfollower,
         igstalk,
         ghfollower,
         zerochan,
         trendtwit,
         randomtt,
         devianart} = require('../lib/scrapper.js');
var savefrom = require("../lib/savefrom.js")
var toonme = require("../lib/toonme.js")

function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}

var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";

_ = require('lodash')
__path = process.cwd();

loghandler = {
    error: {
        status: false,
        code: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        maintanied_by: `${creator}`
    },
    notapikey: {
    	status: false,
    	code: 403,
    	message: 'Forbiden, Invalid apikey, hubungi saya di whatsapp untuk mendapatkan apikey anda',
    	maintanied_by: `${creator}`
    },
    noturl: {
    	status: false,
    	code: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	maintanied_by: `${creator}`,
    }
}

var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------Apriliya-Putri-Fatmawati'+'LOLI--KILLERS';
        
 
 async function cekApiKey(api) {
 	ap = await lolkill.findOne({apikey:api})
 return ap;
 }
 
 router.get('/addapikey', (req, res, next) => {
    var apikey = req.query.apikey,
        apikeyInput  = req.query.apikeyInput,
        email = req.query.email;

    if (!apikey) return res.sendFile(__path + '/docs/403.html')
    if (!(apikeyInput && email)) return res.json(loghandler.notAddApiKey)
    if (apikey != `${keyapi}`) return res.json(loghandler.invalidKey)

    try {
        lolkill.insert({
            apikey: apikeyInput,
            email: email
        })
        .then(() => {
              res.json({
                  status: true,
                  creator: `${creator}`,
                  result: 'berhasil menambah data, status : ' + status + ', apikey : ' + apikeyInput + ', email : ' + email + ', nomor_hp : ' + nomorhp + ', name :  ' + name + ', age : ' + age + ', country : ' + country + ', exp : ' + exp
              })
        })
    } catch (e) {
        console.log(e)
        res.sendFile(__path + '/docs/503.html')
    }
})

router.get('/cekapikey', async (req, res, next) => {
	var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.sendFile(__path + '/docs/403.html')
	a = await cekApiKey(apikeyInput)
	if (a) {
	json = JSON.stringify({
		status: true,
		creator: creator,
		result: {
            status:a.status,
			id: a._id,
			apikey: a.apikey,
			more_info: {
				email: a.email,
				nomor_hp: a.nomor_hp,
				name: a.name,
				age: a.age,
				country: a.country,
				exp:a.exp,
			},
		},
		message: `jangan lupa follow ${creator}`
	})
} else {
	json = JSON.stringify({
		status: false
	})
}
res.send(JSON.parse(json))
})

///Photooxy Fitur

router.get('/pxy_text_on_cup', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_3d_summer', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_3d_nature', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_wolf_metal', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_wood_heart', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_flower_heart', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/text-inside-the-flower-heart-369.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_wooden_board', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_tiktok_effect', async (req, res, next) => {
             var text = req.query.text;
             var text2 = req.query.text2;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!text2) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_text_love', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_double_heart', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/love-text-effect-372.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_coffee_cup', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_under_grass', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_text_on_cup2', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_romantic_text', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_text_burn_paper', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_shadow_text', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_naruto', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_2=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_grafity_text', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/banner-cover/graffiti-text-cover-222.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_petterns', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/bevel-text-between-royal-patterns-166.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

///Islam Fitur

router.get('/jadwal_solat2', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	jadwalSolat(q)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
             	status: `Success`,
             	result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/alquran_audio', async (req, res, next) => {
	var surah = req.query.surah;
	var ayat = req.query.ayat;
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://api.quran.sutanlab.id/surah/${surah}/${ayat}`))
        .then(response => response.json())
        .then(data => {
        var alquran = data;
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	data: alquran.data
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/jadwal_sholat', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	//if (!url) return res.json(loghandler.noturl)
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (isNaN(q)) return res.sendFile(__path + '/docs/406.html')
	//if (!apikey) return res.json(loghandler.notapikey)
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	//if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.sholat(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/surah', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	//if (!url) return res.json(loghandler.noturl)
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (isNaN(q)) return res.sendFile(__path + '/docs/406.html')
	//if (!apikey) return res.json(loghandler.notapikey)
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	//if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.surah(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

///Downloader Fitur

router.get('/play_mp3', async (req, res, next) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://api.akuari.my.id/downloader/play2?query=${q}`))
        .then(response => response.json())
        .then(data => {
        var play3 = data;
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	result: play3.mp3
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/play_mp4', async (req, res, next) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://api.akuari.my.id/downloader/play2?query=${q}`))
        .then(response => response.json())
        .then(data => {
        var play3 = data;
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	result: play3.mp4
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/facebook_downloader', async (req, res, next) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://sekha.tech/api/downloader/facebook?url=${url}&apikey=apirey`))
        .then(response => response.json())
        .then(data => {
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	result
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/facebook_downloader2', async (req, res, next) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://sekha.tech/api/downloader/facebook2?url=${url}&apikey=apirey`))
        .then(response => response.json())
        .then(data => {
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	result
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/dafont_download', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	dafontDown(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/all_sosmed_downloader', async (req, res, next) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       savefrom(url)
        .then(data => {
             res.json({
             	message: `Ok`,
             	status: `Success`,
                 creator: `Katashi Hana`,
             	result: data
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/joox', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	joox(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})


router.get('/fbdownloader', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	//if (!url) return res.json(loghandler.noturl)
	if (!url) return res.sendFile(__path + '/docs/406.html')
	//if (!apikey) return res.json(loghandler.notapikey)
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	//if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.fbdown(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/igstalk', async(req, res, reject) => {
	var username = req.query.username;
	var apikey = req.query.apikey
	
	if (!username) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.igstalk(username)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/igstory', async(req, res, reject) => {
	var username = req.query.username;
	var apikey = req.query.apikey
	
	if (!username) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.igstory(username)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/igdownloader', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.igdl(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/pinterest', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.igdl(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/wallpaper_search', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.chara(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/ytmp3', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.youtube(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/find', async (req, res, next) => {
	    var apikey = req.query.apikey
    if (!apikey) return res.sendFile(__path + '/docs/403.html')
    if (apikey != `${keyapi}`) return res.sendFile(__path + '/api/403.html')
    try {
        lolkill.find()
            .then(result => {
                res.json({
                    status: true,
                    creator: `${creator}`,
                    result
                })
        })
    } catch (e) {
        console.log(e)
        res.sendFile(__path + '/docs/503.html')
    }
})

router.get('/tiktokdownloader', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.ttdownloader(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/twitter_Downloader', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	twitter(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/playstore', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.playstore(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/wattpadsearch', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.wattpad(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/zippyshare', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	zippy(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/solidfiles_downloader', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	sfiledl(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/mediafire', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	mediafire(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

///Game Fitur

router.get('/caklontong', async (req, res, next) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/LoliKillers/Arnz-Database/master/game/caklontong.json`))
        .then(response => response.json())
        .then(data => {
        var lontong = data;
        var result = lontong[Math.floor(Math.random() * lontong.length)];
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	result
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/tebak_lagu', async (req, res, next) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       axios.get('https://api.wibusoft.com/api/permainan/tebak-lagu', {
	responseType: 'json',
	headers: {
		'accept': 'application/json'
	}
}).then((res) => {
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	rest: res.data.result
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/tebakchara', async (req, res, next) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/Kotzyy/Database/main/tebakchara.json`))
        .then(response => response.json())
        .then(data => {
        var tebakchara = data;
        var result = tebakchara[Math.floor(Math.random() * tebakchara.length)];
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	result
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/tebakkata', async (req, res, next) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/Kotzyy/Database/main/tebakkata.json`))
        .then(response => response.json())
        .then(data => {
        var susunkata = data;
        var result = susunkata[Math.floor(Math.random() * susunkata.length)];
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	result
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/susunkata', async (req, res, next) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/Kotzyy/Database/main/susunkata.json`))
        .then(response => response.json())
        .then(data => {
        var susunkata = data;
        var result = susunkata[Math.floor(Math.random() * susunkata.length)];
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	result
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/tebakgambar', async(req, res, reject) => {
	var apikey = req.query.apikey;
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.tebakgambar()
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

///Anime & Nsfw Fitur

router.get('/pornhub_downloader', async (req, res, next) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://kocakz.herokuapp.com/api/media/pornhub/detail?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var lontong = data;
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	result: data.res.download_urls
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/pornhub_search', async (req, res, next) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://kocakz.herokuapp.com/api/media/pornhub/detail?url=${q}`))
        .then(response => response.json())
        .then(data => {
        var lontong = data;
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	res: data.res
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/pornhub_detail', async (req, res, next) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://kocakz.herokuapp.com/api/media/pornhub/search?query=${url}`))
        .then(response => response.json())
        .then(data => {
        var lontong = data;
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	res: data.res
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/nhentai_tag', async (req, res, next) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://yui-api.herokuapp.com/api/nhtag?tag=${q}&page=1`))
        .then(response => response.json())
        .then(data => {
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	result: data
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/nhentai_home', async (req, res, next) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://yui-api.herokuapp.com/api/nhhome?page=1`))
        .then(response => response.json())
        .then(data => {
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	result: data
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/nhentai_search', async (req, res, next) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://yui-api.herokuapp.com/api/nhsearch?query=${q}&page=1`))
        .then(response => response.json())
        .then(data => {
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	result: data
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/nhentai_detail', async (req, res, next) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://yui-api.herokuapp.com/api/nhdetail?code=${q}`))
        .then(response => response.json())
        .then(data => {
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	result: data
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/nhentai_artist', async (req, res, next) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://yui-api.herokuapp.com/api/nhartist?artist=${q}&page=1`))
        .then(response => response.json())
        .then(data => {
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	result: data
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/neonime_ongoing', async(req, res, reject) => {
	var apikey = req.query.apikey;
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	neonime.onGoing()
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/hentai_video', async(req, res, reject) => {
	var apikey = req.query.apikey
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	hentaivid()
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/random_gore', async(req, res, reject) => {
	var apikey = req.query.apikey
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	randomgore()
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/anoboys', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	anoboys(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/komiku_search', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.komiku(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/otaku_search', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.otakudesu(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/otaku_ongoing', async(req, res, reject) => {
	var apikey = req.query.apikey;
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.ongoing()
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/gore_download', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	goredl(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/planet_anime', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	anime(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})


router.get('/planet_anime/mangga', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	manga(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})


router.get('/anoboys_downloader', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	anoboydl(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/mynime_downloader', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	downloadEps(url)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            creator: `Katashi Hana`,
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/mynime_search', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	Search(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/mynime_detail', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	animeDetail(url)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            creator: `Katashi Hana`,
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/anime_news', async(req, res, reject) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	const nbNews = 40
	malScraper.getNewsNoDetails(nbNews)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            creator: `Katashi Hana`,
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/anime_season_news2', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	const year = `${q}`
    const season = 'winter'
	malScraper.getSeason(year, season)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            creator: `Katashi Hana`,
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/anime_season_news3', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	const year = `${q}`
    const season = 'spring'
	malScraper.getSeason(year, season)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            creator: `Katashi Hana`,
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/anime_season_news4', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	const year = `${q}`
    const season = 'summer'
	malScraper.getSeason(year, season)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            creator: `Katashi Hana`,
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/anime_season_news', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	const year = `${q}`
    const season = 'fall'
	malScraper.getSeason(year, season)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            creator: `Katashi Hana`,
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/anime_search_news', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	malScraper.getResultsFromSearch(q)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            creator: `Katashi Hana`,
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

///Other & News Fitur

router.get('/jadwal_bioskop', async(req, res, next) => {
var apikey = req.query.apikey

	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
const { default: Axios } = require('axios')
const cheerio = require('cheerio')

Axios.get('https://jadwalnonton.com/now-playing')
.then(({ data }) => {
     const $ = cheerio.load(data)
     let title = []
     let url = []
     let img = []
 	$('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a').get().map((rest) => {
         url.push($(rest).attr('href'))
         })
         $('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
        	title.push($(rest).attr('alt'))
         })
         $('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
        	img.push($(rest).attr('src'))
         })
     let result = []
     for (let i = 0; i < url.length; i++) {
          result.push({
               	url: url[i],
               	title: title[i],
               	img: img[i]
          })
     }
     res.json({
     creator:  `${creator}`,
     status: true,
     result: result
     })
})
.catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
} 

router.get('/attp', async (req, res, next) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       axios.get('https://api.wibusoft.com/api/textmaker/attp?text=${q}, {
	responseType: 'arraybuffer',
	headers: {
		'accept': 'application/json'
	}
}).then((res) => {
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	rest: res.data
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/ttp', async (req, res, next) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       axios.get('https://api.wibusoft.com/api/textmaker/ttp?text=${q}, {
	responseType: 'arraybuffer',
	headers: {
		'accept': 'application/json'
	}
}).then((res) => {
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	rest: res.data
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/image_to_anime', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	var baper = await fetch(url).then(v => v.buffer())
	toonme(baper, 'tipe1')
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/image_to_anime2', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	var baper = await fetch(url).then(v => v.buffer())
	toonme(baper, 'tipe2')
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/image_to_anime3', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	var baper = await fetch(url).then(v => v.buffer())
	toonme(baper, 'tipe3')
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/lirik', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.lirik(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/linkwa', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.linkwa(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/kodepos', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	kodepos(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/film_lk21', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	film(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/wiki', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	wiki(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})


router.get('/cnn', async(req, res, reject) => {
	var apikey = req.query.apikey
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	cnn()
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/bmkg_gempa', async(req, res, reject) => {
	var apikey = req.query.apikey
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	Gempa()
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/kompasnews', async(req, res, reject) => {
	var apikey = req.query.apikey
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	kompasnews()
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/nulis', async (req, res, next) => {
	var text = req.query.text;
	var apikey = req.query.apikey
            
    if (!text) return res.sendFile(__path + '/docs/406.html')
    if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

   try {
	   var fontPath = __path + '/lib/font/Zahraaa.ttf'
           var inputPath = __path + '/lib/kertas/nulis.jpg'
           var outputPath = __path + '/tmp/hasil.jpg'
           const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
			const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
      spawn('convert', [
      inputPath,
									'-font',
									fontPath,
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'2',
									'-annotate',
									'+128+129',
									fixHeight,
            outputPath
         ])
         .on('error', () => console.log('Error Nulis'))
         .on('exit', () =>
         {
	         res.sendFile(outputPath)
        })
   } catch (e) {
      console.log(e);
	 res.json(loghandler.erorr)
   }
})

router.get('/nulis_2', async (req, res, next) => {
	var text = req.query.text;
	var apikey = req.query.apikey
            
    if (!text) return res.sendFile(__path + '/docs/406.html')
    if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

   try {
   	var fontPath = __path + '/lib/font/Zahraaa.ttf'
       var inputPath = __path + '/lib/kertas/magernulis1.jpg'
        var outputPath = __path + '/tmp/hasil21.jpg'
	   const panjangKalimat4 = text.replace(/(\S+\s*){1,10}/g, '$&\n')
            const panjangBaris4 = panjangKalimat4.split('\n').slice(0, 33).join('\n')
            var months = ['- 1 -', '- 2 -', '- 3 -', '- 4 -', '- 5 -', '- 6 -', '- 7 -', '- 8 -', '- 9 -', '- 10 -', '- 11 -', '- 12 -'];
            var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
            var date = new Date();
            var day = date.getDate();
            var month = date.getMonth();
            var thisDay = date.getDay(),
                thisDay = myDays[thisDay];
            var yy = date.getYear();
            var year = (yy < 1000) ? yy + 1900 : yy;
            const waktu = (day + ' ' + months[month] + ' ' + year)
            const hari = (thisDay)
      spawn('convert', [
                inputPath,
                '-font',
                fontPath,
                '-size',
                '980x1280',
                '-pointsize',
                '20',
                '-interline-spacing',
                '1',
                '-annotate',
                '+806+78',
                hari,
                '-font',
                './font/Zahraaa.ttf',
                '-size',
                '1024x784',
                '-pointsize',
                '18',
                '-interline-spacing',
                '1',
                '-annotate',
                '+806+102',
                waktu,
                '-font',
                './font/Zahraaa.ttf',
                '-size',
                '1024x784',
                '-pointsize',
                '20',
                '-interline-spacing',
                '-7.5',
                '-annotate',
                '+344+142',
                panjangBaris4,
                outputPath
  ])
  .on('error', () => console.log('Error Nulis2'))
  .on('exit', () => {

	          res.sendFile(outputPath)
        })
   } catch (e) {
      console.log(e);
	 res.json(loghandler.erorr)
           }
})

router.get('/nulis_3', async (req, res, next) => {
	var nama = req.query.nama;
	var kelas = req.query.kelas;
	var text = req.query.text;
	var apikey = req.query.apikey
            
    if (!nama) return res.sendFile(__path + '/docs/406.html')
    if (!kelas) return res.sendFile(__path + '/docs/406.html')
    if (!text) return res.sendFile(__path + '/docs/406.html')
    if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

   try {
   	var fontPath = __path + '/lib/font/Zahraaa.ttf'
       var inputPath = __path + '/lib/kertas/magernulis1.jpg'
        var outputPath = __path + '/tmp/hasil3.jpg'
	    const panjangKalimat7 = text.replace(/(\S+\s*){1,10}/g, '$&\n')
                const panjangNama = nama.replace(/(\S+\s*){1,10}/g, '$&\n')
                const panjangKelas = kelas.replace(/(\S+\s*){1,10}/g, '$&\n')
                const panjangBaris7 = panjangKalimat7.split('\n').slice(0, 30).join('\n')
                const panjangBarisNama = panjangNama.split('\n').slice(0, 30).join('\n')
                const panjangBarisKelas = panjangKelas.split('\n').slice(0, 30).join('\n')
                var months = ['- 1 -', '- 2 -', '- 3 -', '- 4 -', '- 5 -', '- 6 -', '- 7 -', '- 8 -', '- 9 -', '- 10 -', '- 11 -', '- 12 -'];
                var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
                var date = new Date();
                var day = date.getDate();
                var month = date.getMonth();
                var thisDay = date.getDay(),
                    thisDay = myDays[thisDay];
                var yy = date.getYear();
                var year = (yy < 1000) ? yy + 1900 : yy;
                const waktu4 = (day + ' ' + months[month] + ' ' + year)
                const hari4 = (thisDay)
      spawn('convert', [
                    inputPath,
                    '-font',
                    fontPath,
                    '-size',
                    '980x1280',
                    '-pointsize',
                    '20',
                    '-interline-spacing',
                    '1',
                    '-annotate',
                    '+806+78',
                    hari4,
                    '-font',
                    './font/Zahraaa.ttf',
                    '-size',
                    '1024x784',
                    '-pointsize',
                    '18',
                    '-interline-spacing',
                    '1',
                    '-annotate',
                    '+806+102',
                    waktu4,
                    '-font',
                    './font/Zahraaa.ttf',
                    '-size',
                    '1024x784',
                    '-pointsize',
                    '18',
                    '-interline-spacing',
                    '1',
                    '-annotate',
                    '+360+100',
                    panjangBarisNama,
                    '-font',
                    './font/Zahraaa.ttf',
                    '-size',
                    '1024x784',
                    '-pointsize',
                    '18',
                    '-interline-spacing',
                    '1',
                    '-annotate',
                    '+360+120',
                    panjangBarisKelas, 
                    '-font',
                    './font/Zahraaa.ttf',
                    '-size',
                    '1024x784',
                    '-pointsize',
                    '20',
                    '-interline-spacing',
                    '-7.5',
                    '-annotate',
                    '+344+142',
                    panjangBaris7,
                    outputPath
  ])
  .on('error', () => console.log('Error Nulis2'))
  .on('exit', () => {

	          res.sendFile(outputPath)
        })
   } catch (e) {
      console.log(e);
	 res.json(loghandler.erorr)
           }
})
         
router.get('/tribunnews', async(req, res, reject) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	tribunnews()
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/covid', async(req, res, reject) => {
	var apikey = req.query.apikey;
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.covid()
	.then(data => {
		var data = data;
		res.json({
			data
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

/// Media & Search Fitur

router.get('/onecak', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	cakone.Search(q)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/igstalk', async(req, res, reject) => {
	var username = req.query.username;
             var apikey = req.query.apikey
   
	if (!username) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	igstalk(username)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/ghfollower', async(req, res, reject) => {
	var username = req.query.username;
             var apikey = req.query.apikey
   
	if (!username) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	ghfollower(username)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/zerochan', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	zerochan(q)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/trendtwit', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	trendtwit(q)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/randomtt', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	randomtt(q)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})
       
router.get('/yt_search', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	usetube.searchVideo(q)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/yt_stalk', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	usetube.searchChannel(q)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/emojimix', async (req, res, next) => {
	var emoji1 = req.query.emoji1;
	var emoji2 = req.query.emoji2;
	var apikey = req.query.apikey
	
	if (!emoji1) return res.sendFile(__path + '/docs/406.html')
	if (!emoji2) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${emoji1}_${emoji2}`))
        .then(response => response.json())
        .then(data => {
        var emojimix = data;
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	result: emojimix.results
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/emojimix_download', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	var result = (await axios.get(`${url}`)).data
	data = await getBuffer(result)
	await fs.writeFileSync(__path +'/tmp/mix.png', data)
    await res.sendFile(__path +'/tmp/mix.png')
    await sleep(3000)
    await fs.unlinkSync(__path + '/tmp/mix.png')
		})

router.get('/pinterest_stalk', async (req, res, next) => {
             var username = req.query.username;
             var apikey = req.query.apikey
   
	if (!username) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://api.pinterest.com/v3/pidgets/users/${username}/pins/`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
 				result: {
 					location: `${result.data.user.location}`,
 					about: `${result.data.user.about}`,
 					username: `${result.data.user.full_name}`,
 					image_url: `${result.data.user.image_small_url}`,
 					pin_count: `${result.data.user.pin_count}`,
 					follower_count: `${result.data.user.follower_count}`,
 					profile_url: `${result.data.user.profile_url}`
 				},
 				message: `${result.status}`,
 				endpoint: `${result.endpoint_name}`,
 				status: `${result.status}`,
 				maintanied_by: `${creator}`
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/sticker_search', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	stickersearch(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/google_search', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	googles({'query' : `${q}`, limit: 20, disableConsole: true })
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/dogpile_image', async(req, res, next) => {
    var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
    try {
        var options = {
            url: `http://results.dogpile.com/serp?qc=images&q=${q}`,
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        }
        request(options, function(error, response, responseBody) {
            if (error) return

            $ = cheerio.load(responseBody)
            var links = $(".image a.link")
            var cari = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))
            if (!cari.length) return
            var hasil = cari[Math.floor(Math.random() * cari.length)]
        res.json({
              status: true,
              code: 200,
              creator: `${creator}`,
              result: hasil
            })
        })
    } catch (e) {
                         res.sendFile(__path + '/docs/503.html')}
  }
})

router.get('/search_dogpile', async(req, res, next) => {
    var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
    try {
        var options = {
            url: `https://results.dogpile.com/serp?qc=web&q=${q}`,
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        }
        request(options, function(error, response, responseBody) {
            if (error) return

            $ = cheerio.load(responseBody)
            var links = $(".web-bing__result span.web-bing__url")
            var title = $(".web-bing__result a.target")
            var decs = $(".web-bing__result span.web-bing__description")
        res.json({
              link: links,
              title: title,
              decs: decs
            })
        })
    } catch (e) {
                         res.sendFile(__path + '/docs/503.html')}
  }
})

router.get('/sfilesearch', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	sfilesearch(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/drakor', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	drakor(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/tiktok_hashtag', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	tiktokHastag(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/tiktok_random', async(req, res, reject) => {
	var apikey = req.query.apikey
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	randomTiktok()
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/dafont_search', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	dafontSearch(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})
        
/// Fun Fitur

router.get('/kill_slime', async (req, res, next) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	pp = randomNomor(75)
   emas = randomNomor(15)
   dm = randomNomor(3)
   besi = randomNomor(50)
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	result: [
                             {
                                pertama: `Tunggu! sedang melawan..`,
                                kedua : `Berhasil Melawan 1`,
                                ketiga: `Berhasil Melawan 5`,
                                keempat: `Selesai quest slime! 💸`,
                                last: `Mission Slime Completed ✅*\n\n*Kamu Mendapatkan :*\nEmas :${emas} 🪙\nUang : ${pp} 💸\nBesi : ${besi} ⛓️\nBerlian : ${dm} 💎`
                                }
                              ]
             })
})

router.get('/kill_goblin', async (req, res, next) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	pp = randomNomor(75)
   emas = randomNomor(15)
   dm = randomNomor(3)
   besi = randomNomor(50)
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	result: [
                             {
                                pertama: `Tunggu! sedang melawan..`,
                                kedua : `Berhasil Melawan 1`,
                                ketiga: `Berhasil Melawan 5`,
                                keempat: `Selesai quest goblin! 💸`,
                                last: `Mission Goblin Completed ✅*\n\n*Kamu Mendapatkan :*\nEmas :${emas} 🪙\nUang : ${pp} 💸\nBesi : ${besi} ⛓️\nBerlian : ${dm} 💎`
                                }
                              ]
             })
})

router.get('/kill_devil', async (req, res, next) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	pp = randomNomor(75)
   emas = randomNomor(15)
   dm = randomNomor(3)
   besi = randomNomor(50)
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	result: [
                             {
                                pertama: `Tunggu! sedang melawan..`,
                                kedua : `Berhasil Melawan 1`,
                                ketiga: `Berhasil Melawan 5`,
                                keempat: `Tidak Aku Lengah!`,
                                kelima: `Aku Di Bantu Oleh Team!`,
                                keenam: `Selesai quest devil! 💸`,
                                last: `Mission Devil Completed ✅*\n\n*Kamu Mendapatkan :*\nEmas :${emas} 🪙\nUang : ${pp} 💸\nBesi : ${besi} ⛓️\nBerlian : ${dm} 💎`
                                }
                              ]
             })
})

router.get('/simsimi', async (req, res, next) => {
             var query = req.query.query;
			 var apikey = req.query.apikey

    if (!apikey) return res.sendFile(__path + '/docs/403.html')
    if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	if (!query) return res.sendFile(__path + '/docs/406.html')
       fetch(encodeURI(`https://api.simsimi.net/v1/?text=${query}&lang=id&cf=true`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	maintanied_by: `${creator}`,
             	result: {
             		query: `${query}`,
             		answer: `${data.messages[0].response}`
             	},
             	note: `Jangan di spam ya om, siminya, kasihan ntar nangis :(`
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/artinama', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	artinama(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/zodiak', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	primbon.zodiak(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/nomor_hoki', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	primbon.nomer_hoki(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/shio', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	primbon.shio(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/masa_subur', async(req, res, reject) => {
	var tgl = req.query.tgl;
	var bln = req.query.bln;
	var thn = req.query.thn;
	var siklus = req.query.siklus;
	var apikey = req.query.apikey
	
	if (!tgl) return res.sendFile(__path + '/docs/406.html')
	if (!bln) return res.sendFile(__path + '/docs/406.html')
	if (!thn) return res.sendFile(__path + '/docs/406.html')
	if (!siklus) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	primbon.masa_subur(tgl, bln, thn, siklus)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/arti_kartu_tarot', async(req, res, reject) => {
	var tgl = req.query.tgl;
	var bln = req.query.bln;
	var thn = req.query.thn;
	var apikey = req.query.apikey
	
	if (!tgl) return res.sendFile(__path + '/docs/406.html')
	if (!bln) return res.sendFile(__path + '/docs/406.html')
	if (!thn) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	primbon.arti_kartu_tarot(tgl, bln, thn)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/ramalan_nasib', async(req, res, reject) => {
	var tgl = req.query.tgl;
	var bln = req.query.bln;
	var thn = req.query.thn;
	var apikey = req.query.apikey
	
	if (!tgl) return res.sendFile(__path + '/docs/406.html')
	if (!bln) return res.sendFile(__path + '/docs/406.html')
	if (!thn) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	primbon.arti_kartu_tarot(tgl, bln, thn)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/kecocokan_nama_pasangan', async(req, res, reject) => {
	var namalaki = req.query.namalaki;
	var namaperem = req.query.namaperem;
	var apikey = req.query.apikey
	
	if (!namalaki) return res.sendFile(__path + '/docs/406.html')
	if (!namaperem) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	primbon.kecocokan_nama_pasangan(namalaki, namaperem)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

///Random Image

router.get('/onepiece', async (req, res, next) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       axios.get('https://api.wibusoft.com/api/subreddit/OnePiece', {
	responseType: 'json',
	headers: {
		'accept': 'application/json'
	}
}).then((res) => {
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	rest: res.data.result
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/cats', async (req, res, next) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       axios.get('https://api.wibusoft.com/api/subreddit/cats', {
	responseType: 'json',
	headers: {
		'accept': 'application/json'
	}
}).then((res) => {
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	rest: res.data.result
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/cats', async (req, res, next) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       axios.get('https://api.wibusoft.com/api/subreddit/cats', {
	responseType: 'json',
	headers: {
		'accept': 'application/json'
	}
}).then((res) => {
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	rest: res.data.result
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})
        
        
module.exports = router
