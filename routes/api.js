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
const fs = require('fs')
const facebook2 = require('fb-video-downloader')
const text2img = require('text2image')
const caliph = require('caliph-api')

var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js')
var options = require(__path + '/lib/options.js');
var {
	Vokal,
	Base,
	Searchnabi,
    Gempa
} = require('./../lib');
const { getBuffer } = require('../lib/function')
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
         jalantikus } = require('../lib/testapi.js');
var { randomTiktok,
         tiktokHastag } = require('../lib/tiktok_search.js');
var {
    getLatest,
    getVideo
} = require('../lib/nekopoi.js');
var { Search, animeDetail, downloadEps } = require('../lib/mynime.js');
var { dafontSearch, dafontDown} = require('../lib/dafont.js');
var neonime = require('../lib/neonime.js')
var { Search,
         getInfo,
         Getdownload } = require('../lib/otakudesu.js');
var { quotes,
         twitter } = require('../lib/scrape.js');
var { joox,
         jooxdl } = require('../lib/joox.js');
var { wiki,
         cnn,
         artinama,
         kodepos,
         wallpapper,
         ghstalk,
         ramalanJodoh } = require('../lib/scrape21.js');
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
         devianart } = require('../lib/scrapper.js');
var toonme = require("../lib/toonme.js")
var { job,
         textmakervid,
         wikisearch } = require('../lib/index10.js');
var { Shoope,
         GSMArena,
         photoManipulation,
         FilmApik23,
         infoFilm123} = require('../lib/index3.js');
var { quotesAnime, 
         aiovideodl, 
         umma, 
         ringtone, 
         styletext } = require('../lib/a1.js');
var { asmaul,
         igtv,
         UserAgent,
         hoax,
         emoji } = require('../lib/a2.js');
var { fandom,
         topAnime,
         topManga } = require('../lib/anime.js');
var { ytDonlodMp3,
  ytDonlodMp4,
  ytPlayMp3,
  ytPlayMp4,
  ytSearch } = require('../lib/utils/yt.js');
var { getUrlTiny,
         savefrom,
         charaCheck,
         chara,
         brainlydetail,
         brainly,
         brainly2,
         wattpad,
         random_detail,
         asahotak,
         family100,
         siapakah,
         tekateki,
         RandomCerpen,
         herodetails,
         herolist,
         rexdl,
         rexdldown,
         merdekanews,
         metronews,
         listsurah,
         surah,
         tafsir,
         telesticker,
         jadwaltv,
         photofunSearch,
         alphacoders,
         wallpaperflare,
         convertSticker,
         creatememe,
         wamods,
         amino,
         layarkaca,
         gempaterkini,
         cuacaterkini,
         datamasjid,
         bioskopcomingsoon } = require('../lib/katashiapi.js');
var { fetchJson, getBase64, kyun, createExif } = require('../lib/fetch')

const santet = [
'Nama : DilaPye Colmek\nFoto : -\nVideo : 1\nSize : 90 MB\nDurasi : 5 Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1We9TeG1whjz2bmNCrahctK1-Hiy3BtWN/view \n PASSWORD FILE : AA18+#29',
'Nama : Missluttyv SMA\nFoto : -\nVideo : 3\nSize : 74 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1TodhXRAHt6MHMqS2-3DYmCQoIFe7yuI-/view \nPASSWORD FILE : AA18+#21',
'Nama : Arce\nFoto : 114\nVideo : 16\bSize : 64 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1SwXbmd2sXnYSNYmn_tdCiaBsHHXjYvQM/view \nPASSWORD FILE : AA18+#6',
'Nama : Annisa\nFoto : 71\nVideo : 2\nSize : 48 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1St_Pb9xNZnrSX_fPfaarno6Bpjc3ArUx/view\nPASSWORD FILE : AA18+#5',
'Nama : Annisa\nFoto : 71\nVideo : 2\nSize : 48 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1St_Pb9xNZnrSX_fPfaarno6Bpjc3ArUx/view\nPASSWORD FILE : AA18+#5',
'Nama : 038493040494_0[Ws_Gloia]\nFoto : 19\nVideo : 1\nSize : 379 MB\nDurasi : 8 Menit\nKualitas : HD++\nRate : ⭐⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1Y0ALFotYLT2F8kKjgxMZ_BFJ6vWKalck/view\nPASSWORD FILE : AA18+#30',
'Nama : ASD - Ria Bali\nFoto : -\nVideo : 1\nSize : 165 MB\nDurasi : 45 Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1T84UWWj1oJlDAMXd-snZr6gP4Yt61P6P/view\nPASSWORD FILE : AA18+#7',
'Nama : Nanad Apr\nFoto : 18\nVideo : 23\nSize : 357 MB\nDurasi : - Menit\nKualitas : -\nRate : ⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1YO0rvEgbx6Qsrtfm6tTOlvHI7OE5V42p/view\nPASSWORD FILE : AA18+#32',
'Nama : lily kawai onlyfans\nFoto : 50\nVideo : 7\nSize : 237 MB\nDurasi : - Menit\nKualitas : HD+\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1TcK_EH1d2vL4bfVhSBm0el_nhmqh2XCS/view\nPASSWORD FILE : AA18+#17',
'Nama : Bocil x Tante\nFoto : -\nVideo : 1\nSize : 156 MB\nDurasi : 23 Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1amwgPTf_PLIUc43bxivztFrD0xzdg8Tm/view\nPASSWORD FILE : AA18+#33',
'Nama : Badbitch_alter\nFoto : -\nVideo : 1\nSize : 170 MB\nDurasi : 26 Menit\nKualitas : HD+\nRate : ⭐⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1b2k9RvUeirTzfHBZJkQ9fgw0jJudGP2j/view\nPASSWORD FILE : AA18+#34',
'Nama : Princess nakal\nFoto : -\nVideo : 1\nSize : 128 MB\nDurasi : 15 Menit\nKualitas : HD\nRate : ⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1bj6nNKADyIzSXONZnmXs7c8E_Ln_3KlM/view\nPASSWORD FILE : AA18+#35',
'Nama : weweci\nFoto : -\nVideo : 1\nSize : 180 MB\nDurasi : 21 Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1cA-pPAB_WRGRRGxhBDk9ouDiynu17xPg/view\nPASSWORD FILE : AA18+#36',
'Nama : Viral Katanya\nFoto : -\nVideo : 1\nSize : 26 MB\nDurasi : 5 Menit\nKualitas : HD\nRate : ⭐⭐⭐\n\nDownload Link\nDownload : http://www.mediafire.com/file/9o80ka9z61cdtn1/%23Viral_katanya.zip/file',
'Nama : Hijab hitam\nFoto : -\nVideo : 4\nSize : 20 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1gM7UvH1jzxYek88mQnWBQmou78Gerb_w/view',
'Nama : Syifa\nFoto : 45\nVideo : 25\nSize : 100 MB\nDurasi : - Menit\nKualitas : HD+\nRate : ⭐⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1gTjGotGSlpRCZiLKaZ14sOLjBjirntUb/view\nPassword file : AA18+#27',
'Nama : Danca\nFoto : 18\nVideo : 13\nSize : 100 MB\nDurasi : - Menit\nKualitas : HD+\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1hDxgMnQ4ps2DkVhFyc51ApdsavGfqs3B/view\nPassword file : AA18+#38',
'Nama : Dewi\nFoto : 266\nVideo : 3\nSize : 150 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1iVfhweyoExOcSCq-LHvJSHRp7pmbNmzg/view\nPassword file : AA18+#40',
'Nama : Jenn\nFoto : 50\nVideo : 7\nSize : 105 MB\nDurasi : - Menit\nKualitas : HD+\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1jqYvhwGLp8BgTItHRQpONu1MX3o4o12d/view\nPassword file : AA18+#41',
'Nama : Yanna Davud\nFoto : 61\nVideo : 5\nSize : 22 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1kIs0lNpZW-R5ub09GiQG6-wgdfagoZsV/view\nPassword file : AA18+#41',
'Nama : Nina fika luna\nFoto : 30\nVideo : 28\nSize : 153 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1kirVFR8V7aYAvY_6s9v5QKyxy5hRQw-X/view\nPassword file : AA18+#42',
'Nama : Ain Penang\nFoto : 53\nVideo : 7\nSize : 42 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1kzGeQKuKaQKiz6u_JEcPh9wuJGKVB-sv/view\nPassword file : AA18+#43',
'Nama : Jilboobs\nFoto : -\nVideo : 8\nSize : 84 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1l6M6JXmNiHGaybQiHH39wucVhvLkTjkX/view\nPassword file : AA18+#44',
'Nama : Kiki hijab\nFoto : -\nVideo : 14\nSize : 190 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1lZDvGBclp35JxhWRpVSCrVOO5YhIQSSn/view\nPassword file : AA18+#45',
'Nama : Tifanny\nFoto : 117\nVideo : 4\nSize : 30 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1lrO9YJ1-MJtHavMpN2kG3nmJSReJtzE6/view\nPassword file : AA18+#46',
'Nama : Vierannii\nFoto : 95\nVideo : -\nSize : 12 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1lrOIZFT1n5XWqkX5uVq7xmmSpKjX70Mf/view\nPassword file : AA18+#47',
        ]
const nekopoi = [
'https://www2.zippyshare.com/v/z9dcY6Nr/file.html',
'https://www4.zippyshare.com/v/j7PFLGUY/file.html',
'https://www111.zippyshare.com/v/EK5uqIMh/file.html',
'https://www109.zippyshare.com/v/2ebALhhS/file.html',
'https://www115.zippyshare.com/v/LmzOkRAI/file.html',
'https://www89.zippyshare.com/v/SgEHvrJs/file.html',
'https://www66.zippyshare.com/v/j0ivbciL/file.html',
'https://www71.zippyshare.com/v/M225YIrR/file.html',
'https://www49.zippyshare.com/v/bdwYjaXS/file.html',
        ]


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

router.get('/listsurah', async(req, res, reject) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	listsurah()
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

router.get('/surah', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	surah(q)
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

router.get('/kisah_nabi', async (req, res, next) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/Katashihana/RESTAPI-2/master/data/kisahNabi/${q}.json`))
        .then(response => response.json())
        .then(data => {
        var kisah = data;
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	data: kisah
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

router.get('/umma_downloader', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	umma(url)
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

router.get('/asmaul', async(req, res, reject) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	asmaul()
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

router.get('/youtube_mp3', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	ytDonlodMp3(url)
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

router.get('/youtube_mp4', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	ytDonlodMp4(url)
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

router.get('/play_mp3-2', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	ytPlayMp3(q)
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

router.get('/play_mp4-2', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	ytPlayMp4(q)
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


router.get('/telesticker', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	telesticker(url)
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

router.get('/igtvdownloader', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	igtv(url)
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

router.get('/tebaklagu', async (req, res, next) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/Katashihana/apikatashi/master/random/tembak.json`))
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

//---->ANIME NEW FITUR<------
router.get('/quotes_anime', async (req, res, next) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       quotesAnime()
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

router.get('/fandom', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	fandom(q)
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

router.get('/topanime', async(req, res, reject) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	topAnime()
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

router.get('/topManga', async(req, res, reject) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	topManga()
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

///Other & News Fitur

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

router.get('/hoax', async(req, res, reject) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	hoax()
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

router.get('/jadwalbola', async(req, res, reject) => {
	var apikey = req.query.apikey
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	jadwalbola()
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
             	status: `Success`,
                 creator: `Katashi Hana`,
             	res: result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/jadwaltv', async(req, res, reject) => {
	var apikey = req.query.apikey
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	jadwaltv()
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
             	status: `Success`,
                 creator: `Katashi Hana`,
             	res: result
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
	wikisearch(q)
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

router.get('/inews', async(req, res, reject) => {
	var apikey = req.query.apikey
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	inews()
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

router.get('/text_maker', async(req, res, reject) => {
	var text = req.query.text;
	var apikey = req.query.apikey
            
    if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	textmakervid(text, 'poly')
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

router.get('/text_maker2', async(req, res, reject) => {
	var text = req.query.text;
	var apikey = req.query.apikey
            
    if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	textmakervid(text, 'bold')
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

router.get('/text_maker3', async(req, res, reject) => {
	var text = req.query.text;
	var apikey = req.query.apikey
            
    if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	textmakervid(text, 'glowing')
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

router.get('/text_maker4', async(req, res, reject) => {
	var text = req.query.text;
	var apikey = req.query.apikey
            
    if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	textmakervid(text, 'colorful')
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

router.get('/text_maker5', async(req, res, reject) => {
	var text = req.query.text;
	var apikey = req.query.apikey
            
    if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	textmakervid(text, 'army')
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

router.get('/text_maker6', async(req, res, reject) => {
	var text = req.query.text;
	var apikey = req.query.apikey
            
    if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	textmakervid(text, 'retro')
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

router.get('/ringtone', async (req, res, next) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       ringtone()
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

router.get('/styletext', async (req, res, next) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       styletext(q)
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

router.get('/brainly', async (req, res, next) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://api.zeks.me/api/brainly?apikey=Iyungputra&q=$q}&count=5`))
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

router.get('/shope', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	Shoope(q)
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

router.get('/gsmarena', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	GSMArena(q)
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

router.get('/Filmapik23', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	FilmApik23(q)
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

router.get('/filmapik23info', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	infoFilm123(url)
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

router.get('/rexdl', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	rexdl(q)
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

router.get('/job', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	job(q)
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

///Random 
router.get('/bokep', async (req, res, next) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       const terima1 = santet[Math.floor(Math.random() * (santet.length))]
             res.json({
             	owner: `katashi`,
             	status: `Success`,
             	res: terima1
             })
})

router.get('/nekopoi', async (req, res, next) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       const terima1 = nekopoi[Math.floor(Math.random() * (nekopoi.length))]
       const download = await fetchJson(`https://katashi.herokuapp.com/docs/zippyshare?url=${terima1}&apikey=katashi`)
       const buffer = await getBuffer(download.result.url)
       await fs.writeFileSync(__path +`/tmp/neko.mp4`, buffer)
       await res.sendFile(__path +`/tmp/neko.mp4`)
})

router.get('/animemes', async (req, res, next) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/Katashihana/apikatashi/master/random/animemes.json`))
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

router.get('/hololive', async (req, res, next) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/Katashihana/apikatashi/master/random/hololive.json`))
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

router.get('/minecraft', async (req, res, next) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/Katashihana/apikatashi/master/random/minecraft.json`))
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

router.get('/onepiece', async (req, res, next) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/Katashihana/apikatashi/master/random/onepiece.json`))
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

///New latest last
router.get('/asahotak', async(req, res, reject) => {
	var apikey = req.query.apikey;
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	asahotak()
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

router.get('/getUrlTiny', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	getUrlTiny(url)
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

router.get('/characheck', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	charaCheck(q)
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

router.get('/chara', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	chara(q)
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

router.get('/wattpad2', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	wattpad(q)
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

router.get('/wattpadrandom', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	random_detail(q)
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

router.get('/siapakah', async(req, res, reject) => {
	var apikey = req.query.apikey;
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	siapakah()
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

router.get('/tekateki', async(req, res, reject) => {
	var apikey = req.query.apikey;
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	tekateki()
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

router.get('/RandomCerpen', async(req, res, reject) => {
	var apikey = req.query.apikey;
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	RandomCerpen()
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

router.get('/herolist', async(req, res, reject) => {
	var apikey = req.query.apikey;
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	herolist()
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

router.get('/herodetails', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	herodetails(q)
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

router.get('/rexdl', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	rexdl(q)
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

router.get('/rexdldown', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	rexdldown(url)
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

router.get('/merdekanews', async(req, res, reject) => {
	var apikey = req.query.apikey;
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	merdekanews()
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

router.get('/metronews', async(req, res, reject) => {
	var apikey = req.query.apikey;
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	metronews()
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

router.get('/listsurah', async(req, res, reject) => {
	var apikey = req.query.apikey;
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	metronews()
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

router.get('/jadwaltv', async(req, res, reject) => {
	var apikey = req.query.apikey;
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	jadwaltv()
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
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	surah(q)
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

router.get('/tafsir', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	tafsir(q)
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

router.get('/telesticker', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	telesticker(url)
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

router.get('/photofunsearch', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	photofunSearch(q)
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

router.get('/alphacoders', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	alphacoders(q)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            author: `Katashi Hana`,
            result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/wallpaperflare', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	wallpaperflare(q)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            author: `Katashi Hana`,
            result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/wamods', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	wamods(q)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            author: `Katashi Hana`,
            result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/amino', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	amino(q)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            author: `Katashi Hana`,
            result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/layarkaca', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	layarkaca(q)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            author: `Katashi Hana`,
            result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/datamasjid', async(req, res, reject) => {
	var apikey = req.query.apikey;
	
	page = randomNomor(5970)
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	datamasjid('semua provinsi', `${page}`)
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

router.get('/gempaterkini', async(req, res, reject) => {
	var apikey = req.query.apikey;
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	gempaterkini()
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

router.get('/cuacaterkini', async(req, res, reject) => {
	var apikey = req.query.apikey;
	
	page = randomNomor(5970)
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	cuacaterkini()
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

router.get('/bioskopcomingsoon', async(req, res, reject) => {
	var apikey = req.query.apikey;
	
	page = randomNomor(5970)
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	bioskopcomingsoon()
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

router.get('/facebook_test', async (req, res, next) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       const info = await fetchJson(`https://loader.to/ajax/download.php?format=mp3&url=${q}`)
       var down = info.id
       const download = await fetchJson(`https://loader.to/ajax/progress.php?id=${down}`)
       res.json({
			message: `Ok`,
            status: `Success`,
            author: `Katashi Hana`,
            result: info,
            download: download
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/short_url', async (req, res, next) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       const info = await fetchJson(`https://tinyurl.com/api-create.php?url=${url}`)
       res.json({
			message: `Ok`,
            status: `Success`,
            author: `Katashi Hana`,
            result: info,
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/fbtest', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	facebook2.getInfo(url)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            author: `Katashi Hana`,
            result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/text2image', async (req, res, next) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	   const testText = 'HARTA\nTAHTA\n{q}';
	   const font = await text2img.loadFont('../lib/arial.tff')
       const buffer = await text2img.convert(font, testText, 0, 0, 512)
       await fs.writeFileSync(__path +`/tmp/text.png`, buffer)
       await res.sendFile(__path +`/tmp/text.png`)
})

router.get('/zippyshare2', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	caliph.downloader.zippyshare(url)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            author: `Katashi Hana`,
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/singkatan', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	caliph.search.singkatankata(q)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            author: `Katashi Hana`,
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/Persamaan', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	caliph.search.persamaankata(q)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            author: `Katashi Hana`,
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/freefireid', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	caliph.search.freefireid(q)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            author: `Katashi Hana`,
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/fakeua', async(req, res, reject) => {
	var apikey = req.query.apikey;
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	caliph.random.fakeua()
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

router.get('/emoji_mix', async(req, res, reject) => {
	var emo1 = req.query.emo1;
	var emo2 = req.query.emo2;
	var apikey = req.query.apikey
	
	if (!emo1) return res.sendFile(__path + '/docs/406.html')
	if (!emo2) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	caliph.other.emojimix(emo1, emo2)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            author: `Katashi Hana`,
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/whois', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	caliph.tools.whois(q)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            author: `Katashi Hana`,
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/urlshort', async(req, res, reject) => {
	var url = req.query.url;
	var custom = req.query.custom;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!custom) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	caliph.tools.shortlink(url, custom)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            author: `Katashi Hana`,
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})


router.get('/urlshort', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	caliph.tools.expandurl(url)
	.then(data => {
		var result = data;
		res.json({
			message: `Ok`,
            status: `Success`,
            author: `Katashi Hana`,
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})
         
         


        
module.exports = router
