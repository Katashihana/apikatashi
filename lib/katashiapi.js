const axios = require("axios")
const cheerio = require('cheerio')
const request = require('request')
const fs = require('fs')
const puppeteer = require('puppeteer')
const former = require("form-data")
const {
	fromBuffer
} = require('file-type');
const { JSDOM } = require('jsdom')
const fetch = require('node-fetch')
const yts = require( 'yt-search')
const { spawn, exec } = require('child_process')
const { default: Axios } = require("axios")
const qs = require('qs')
const author = "Katashi"

///Anime

async function quotesAnime() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                	author: "katashi",
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

async function Action() {
  return new Promise((resolve, reject) => {
    axios.get(`https://movieofotaku.blogspot.com/search/label/Action`)
      .then(({
        data
      }) => {
        const $ = cheerio.load(data)
        let synopsis = []
     let url = []
     let img = []
 	$('div.thumbnail > a').get().map((rest) => {
         url.push($(rest).attr('href'))
         })
         $('div.snippet-ongoing').get().map((rest) => {
        	synopsis.push($(rest).text())
         })
         $('div.thumbnail > a > img').get().map((rest) => {
        	img.push($(rest).attr('src'))
         })
     let result = []
     for (let i = 0; i < url.length; i++) {
          result.push({
               	sinopsis: synopsis[i],
               	link: url[i],
               	img: img[i]
          })
     }
            
        const res = {
            status: 200,
            author: "katashi",
            hasil: result
          }
          resolve(res)
      })
      .catch(reject)
  })
}

async function charaCheck(query) {
     return new Promise((resolve, reject) => {
          const char = query
          axios.get('https://myanimelist.net/character.php?cat=character&q=' + char)
          .then(({ data }) => {
               const $ = cheerio.load(data)
               const selector = '#content > table > tbody > tr:nth-child(1) > td > a'
               const small = $('#content > table > tbody > tr:nth-child(1) > td:nth-child(2) > small').text()
               const name = $(selector).text() + ' ' + small
               const url = $(selector).attr('href')
               resolve({
                    status: 200,
                    author: "katashi",
                    name: name,
                    message: `Found chara ${name} and added to database!`
               })

          }).catch(e => reject({
               status: 404,
               message: `Character ${query} was not found!`
          }))
     })
}

async function Adventure() {
  return new Promise((resolve, reject) => {
    axios.get(`https://movieofotaku.blogspot.com/search/label/Adventure`)
      .then(({
        data
      }) => {
        const $ = cheerio.load(data)
        let synopsis = []
     let url = []
     let img = []
 	$('div.thumbnail > a').get().map((rest) => {
         url.push($(rest).attr('href'))
         })
         $('div.snippet-ongoing').get().map((rest) => {
        	synopsis.push($(rest).text())
         })
         $('div.thumbnail > a > img').get().map((rest) => {
        	img.push($(rest).attr('src'))
         })
     let result = []
     for (let i = 0; i < url.length; i++) {
          result.push({
               	sinopsis: synopsis[i],
               	link: url[i],
               	img: img[i]
          })
     }
            
        const res = {
            status: 200,
            author: "katashi",
            hasil: result
          }
          resolve(res)
      })
      .catch(reject)
  })
}

async function chara(query) {
     return new Promise((resolve, reject) => {
          const char = query
          axios.get('https://myanimelist.net/character.php?cat=character&q=' + char)
          .then(({ data }) => {
               const $ = cheerio.load(data)
               const selector = '#content > table > tbody > tr:nth-child(1) > td > a'
               const small = $('#content > table > tbody > tr:nth-child(1) > td:nth-child(2) > small').text()
               const name = $(selector).text() + ' ' + small
               const url = $(selector).attr('href')
               let manga = []
               selector_mov = '#content > table > tbody > tr:nth-child(1) > td:nth-child(3) > small > a'
               let serial = []
               $(selector_mov).get().map((res) => {
                    const name = $(res).text()
                    const url = 'https://myanimelist.net' + $(res).attr('href')
                    serial.push({
                         Anime: name,
                         url: url
                    })
               })
               let grab_frinst = $('#content > table > tbody > tr:nth-child(1) > td > small > div > a')
               if ($(`${grab_frinst}`).attr('href') === undefined) {
               } else {
                    manga.push({
                         name: $(grab_frinst).text(),
                         url: 'https://myanimelist.net' + $(`${grab_frinst}`).attr('href')
                    })
               }

               axios.get(url)
               .then(({ data }) => {
                    let imgs = []
                    const $ = cheerio.load(data)
                    const res_desc = $('#content > table > tbody > tr > td:nth-child(2)').text().split('\n\n\n\n\n\t  ')[1].split('            \n        \n')[0].replace(')',')\n')
                    $('#content > table > tbody > tr > td.borderClass > div > a > img').get().map((rest) => {
                         imgs.push($(rest).attr('data-src'))
                    })
                    const elseimg = ['https://mrhrtz-wabot.000webhostapp.com/cooltext372748737425114.png']
                    const sendImg = imgs.length > 0 ? imgs : elseimg
                    const result = {
                         status: 200,
                         author: "katashi",
                         name: name,
                         image: sendImg,
                         full_desc: res_desc,
                         url: url,
                         anime: serial,
                         manga: manga
                    }
                    resolve(result)
               }).catch(reject)
          }).catch(e => reject({
               status: 404,
               message: `Character ${query} was not found!`
          }))
     })
}

/// Tools

async function top4top(baper) {
	return new Promise(async (resolve, reject) => {
		const {
			ext
		} = await fromBuffer(baper) || {}
		var req = request({
				url: "https://top4top.io/index.php",
				method: "POST",
				"headers": {
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"accept-language": "en-US,en;q=0.9,id;q=0.8",
					"cache-control": "max-age=0",
					'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryAmIhdMyLOrbDawcA',
					'User-Agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.585 Mobile Safari/534.11+'
				}
			},
			function(error, response, body) {
				if (error) { return resolve({
					result: 'error'
				}) }
				const $ = cheerio.load(body)
				let result = $('div.alert.alert-warning > ul > li > span').find('a').attr('href') || "gagal"
				if (result == "gagal") {
					resolve({
						status: "error",
						msg: "maybe file not allowed or try another file"
					})
				}
				resolve({
					author: "katashi",
					status: "sukses",
					result
				})
			});
		let form = req.form()
		form.append('file_1_', baper, {
			filename: `${Math.floor(Math.random() * 10000)}.` + `${ext}`
		})
		form.append('file_1_', '')
		form.append('submitr', '[ رفع الملفات ]')
	})
}
async function shorturl(url, alias) {
    return new Promise((resolve, reject) => {
        const aliasna = alias || ''
        axios.post('https://tinyurl.com/create.php', {
            'source': 'create',
            'url': url,
            'submit': 'Make TinyURL!',
            'alias': aliasna
        }).then(({ data }) => {
            resolve(data)
        })
    })
}

async function getUrlTiny(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then((response) => {
                const result = response.request.res.responseUrl
                
                const res = {
            status: 200,
            author: "katashi",
            hasil: result
          }
          resolve(res)
            }).catch(reject)
    })

}

///Media Search

exports.ghuser = (query) => {
	return new Promise((resolve, reject) => {
		axios.get('https://github.com/search?q=' + query + '&type=users')
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const username = [];
				const link = [];
				const result = [];
				const thumb = [];
				$('#user_search_results > div > div > div.flex-auto > div > div.f4.text-normal > a.color-text-secondary').each(function(a, b) {
					link.push('https://github.com/' + $(b).attr('href'))
					usr = $(b).text();
					username.push(usr)
				})
				$('#user_search_results > div > div > div.flex-shrink-0.mr-2 > a > img').each(function(c, d) {
					thumb.push($(d).attr('src').replace('s=40&', ''))
				})
				for (let i = 0; i < link.length; i++) {
					result.push({
						author: "Katashi",
						name: username[i],
						thumb: thumb[i],
						link: link[i]
					})
				}
				resolve(result)
			})
			.catch(reject)
	})
}
exports.ghfollower = (query) => {
	return new Promise((resolve, reject) => {
		axios.get('https://github.com/' + query + '?tab=followers')
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const link = [];
				const result = [];
				const username = [];
				$('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div > div > div > div.d-table-cell.col-9.v-align-top.pr-3 > a').each(function(a, b) {
					link.push('https://github.com/' + $(b).attr('href'))
					username.push($(b).attr('href').split('/')[1])
				})
				for (let i = 0; i < link.length; i++) {
					result.push({
						username: username[i],
						link: link[i]
					})
				}
				const hasil = {
					author: "Katashi",
					username: $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.js-profile-editable-replace > div.clearfix.d-flex.d-md-block.flex-items-center.mb-4.mb-md-0 > div.vcard-names-container.float-left.js-profile-editable-names.col-12.py-3.js-sticky.js-user-profile-sticky-fields > h1 > span.p-nickname.vcard-username.d-block').text().split('\n')[1].replace('          ', ''),
					followers: $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.js-profile-editable-replace > div.d-flex.flex-column > div.js-profile-editable-area.d-flex.flex-column.d-md-block > div.flex-order-1.flex-md-order-none.mt-2.mt-md-0 > div > a:nth-child(1) > span').text(),
					avatar: $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.js-profile-editable-replace > div.clearfix.d-flex.d-md-block.flex-items-center.mb-4.mb-md-0 > div.position-relative.d-inline-block.col-2.col-md-12.mr-3.mr-md-0.flex-shrink-0 > a > img').attr('src'),
					listfollowers: result
				}
				resolve(hasil)
			})
			.catch(reject)
	})
}
exports.ghfollowing = (query) => {
	return new Promise((resolve, reject) => {
		axios.get('https://github.com/' + query + '?tab=following')
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const link = [];
				const result = [];
				const username = [];
				$('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div > div > div > div.d-table-cell.col-9.v-align-top.pr-3 > a').each(function(a, b) {
					link.push('https://github.com/' + $(b).attr('href'))
					username.push($(b).attr('href').split('/')[1])
				})
				for (let i = 0; i < link.length; i++) {
					result.push({
						username: username[i],
						link: link[i]
					})
				}
				const hasil = {
					author: "Katashi",
					username: $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.js-profile-editable-replace > div.clearfix.d-flex.d-md-block.flex-items-center.mb-4.mb-md-0 > div.vcard-names-container.float-left.js-profile-editable-names.col-12.py-3.js-sticky.js-user-profile-sticky-fields > h1 > span.p-nickname.vcard-username.d-block').text().split('\n')[1].replace('          ', ''),
					following: $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.js-profile-editable-replace > div.d-flex.flex-column > div.js-profile-editable-area.d-flex.flex-column.d-md-block > div.flex-order-1.flex-md-order-none.mt-2.mt-md-0 > div > a:nth-child(1) > span').text(),
					avatar: $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.js-profile-editable-replace > div.clearfix.d-flex.d-md-block.flex-items-center.mb-4.mb-md-0 > div.position-relative.d-inline-block.col-2.col-md-12.mr-3.mr-md-0.flex-shrink-0 > a > img').attr('src'),
					listfollowing: result
				}
				resolve(hasil)
			})
			.catch(reject)
	})
}

async function herodetails(name) {
             return new Promise((resolve, reject) => {
                  var splitStr = name.toLowerCase().split(' ');
                  for (var i = 0; i < splitStr.length; i++) {
                       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
                  }
                  const que = splitStr.join(' ')
                  Axios.get('https://mobile-legends.fandom.com/wiki/' + que)
                  .then(({ data }) => {
                       const $ = cheerio.load(data)
                       let mw = []
                       let attrib = []
                       let skill = []
                       const name = $('#mw-content-text > div > div > div > div > div > div > table > tbody > tr > td > table > tbody > tr > td > font > b').text() 
                       $('.mw-headline').get().map((res) => {
                            const mwna = $(res).text()
                            mw.push(mwna)
                       })
                       $('#mw-content-text > div > div > div > div > div > div > table > tbody > tr > td').get().map((rest) => {
                            const haz = $(rest).text().replace(/\n/g,'')
                            attrib.push(haz)
                       })
                       $('#mw-content-text > div > div > div > div > div > div > table > tbody > tr > td > div.progressbar-small.progressbar > div').get().map((rest) => {
                            skill.push($(rest).attr('style').replace('width:',''))
                       })
                       Axios.get('https://mobile-legends.fandom.com/wiki/' + que + '/Story')
                       .then(({ data }) => {
                            const $ = cheerio.load(data)
                            let pre = []
                            $('#mw-content-text > div > p').get().map((rest) => {
                                 pre.push($(rest).text())
                            })
                            const story = pre.slice(3).join('\n')
                            const items = []
                            const character = []
                            $('#mw-content-text > div > aside > section > div').get().map((rest) => {
                                 character.push($(rest).text().replace(/\n\t\n\t\t/g, '').replace(/\n\t\n\t/g,'').replace(/\n/g,''))
                            })
                            $('#mw-content-text > div > aside > div').get().map((rest) => {
                                 items.push($(rest).text().replace(/\n\t\n\t\t/g, '').replace(/\n\t\n\t/g,'').replace(/\n/g,''))
                            })
                            const img = $('#mw-content-text > div > aside > figure > a').attr('href')
                            const chara = character.slice(0,2)
                            const result = { 
                                 status: 200,
                                 author: "Katashi",
                                 hero_name: name + ` ( ${mw[0].replace('CV:',' CV:')} )`,
                                 entrance_quotes: attrib[2].replace('Entrance Quotes','').replace('\n',''),
                                 hero_feature: attrib[attrib.length - 1].replace('Hero Feature',''),
                                 image: img,
                                 items: items,
                                 character: {
                                      chara
                                 },
                                 attributes: {
                                      movement_speed: attrib[12].replace('● Movement Speed',''),
                                      physical_attack: attrib[13].replace('● Physical Attack',''),
                                      magic_power: attrib[14].replace('● Magic Power',''),
                                      attack_speed: attrib[15].replace('● Attack Speed',''),
                                      physical_defense: attrib[16].replace('● Physical Defense',''),
                                      magic_defense: attrib[17].replace('● Magic Defense',''),
                                      basic_atk_crit_rate: attrib[18].replace('● Basic ATK Crit Rate',''),
                                      hp: attrib[19].replace('● HP',''),
                                      mana: attrib[20].replace('● Mana',''),
                                      ability_crit_rate: attrib[21].replace('● Ability Crit Rate',''),
                                      hp_regen: attrib[22].replace('● HP Regen',''),
                                      mana_regen: attrib[23].replace('● Mana Regen','')
                                 },
                                 price: {
                                      battle_point: mw[1].split('|')[0].replace(/ /g,''),
                                      diamond: mw[1].split('|')[1].replace(/ /g,''),
                                      hero_fragment: mw[1].split('|')[2] ? mw[1].split('|')[2].replace(/ /g,'') : 'none'
                                 },
                                 role: mw[2],
                                 skill: {
                                      durability: skill[0],
                                      offense: skill[1],
                                      skill_effects: skill[2],
                                      difficulty: skill[3]
                                 },
                                 speciality: mw[3],
                                 laning_recommendation: mw[4],
                                 release_date: mw[5],
                                 background_story: story
                            }
                            resolve(result)
                       }).catch((e) => reject({ status: 404, message: e.message }))
                  }).catch((e) => reject({ status: 404, message: e.message }))
             })
        }

async function herolist(){
            return new Promise((resolve, reject) => {
                  Axios.get('https://mobile-legends.fandom.com/wiki/Mobile_Legends:_Bang_Bang_Wiki')
                  .then(({ data }) => {
                       const $ = cheerio.load(data)
                       let data_hero = []
                       let url = []
                       $('div > div > span > span > a').get().map((result) => {
                            const name = decodeURIComponent($(result).attr('href').replace('/wiki/',''))
                            const urln = 'https://mobile-legends.fandom.com' + $(result).attr('href')
                            data_hero.push(name)
                            url.push(urln)
                       })
                       resolve({ author: "Katashi", status: 200, hero: data_hero })
                  }).catch((e) => reject({ status: 404, message: e.message }))
             })
        }

async function Shoope(item, limit) {
	const hasil = []
	await axios.request(`https://shopee.co.id/api/v4/search/search_items?by=relevancy&keyword=${item}&limit=${limit}&newest=0&order=desc&page_type=search&scenario=PAGE_GLOBAL_SEARCH&version=2`, {
		method: "GET",
		data: null,
		headers: {
			"accept": "*/*",
			"accept-language": "en-US,en;q=0.9,id;q=0.8",
			"if-none-match-": "55b03-856cd63f16112f8a43da6096f97ac3fe",
			"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
		}
	}).then(respon => {
		hasil.push(respon.data)
	})
	return hasil[0]
}

async function GSMArena(querry) {
	const link = await axios.get(`https://www.gsmarena.com/res.php3?sSearch=${querry}`)
	const ch = cheerio.load(link.data)
	let Url = ch('#review-body > div > ul').find('li:nth-child(1) > a').attr('href')
	const Link = await axios.get(`https://www.gsmarena.com/${Url}`)
	let $ = cheerio.load(Link.data)
	let barang = $('#body > div > div.review-header > div').find(' div.article-info-line.page-specs.light.border-bottom > h1').text().trim()
	let rilis = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.specs-brief.pattern > span:nth-child(1) > span').text().trim()
	let thumb = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > div > a > img').attr('src')
	let ukuran = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.specs-brief.pattern > span:nth-child(3) > span').text().trim()
	let tipe = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.specs-brief.pattern > span:nth-child(5) > span').text().trim()
	let storage = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.specs-brief.pattern > span:nth-child(7) > span').text().trim()
	let display = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-display > div').text().trim()
	let inchi = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-display > strong > span').text().trim()
	let camPix = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-camera > strong > span:nth-child(1)').text().trim()
	let Mp = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-camera > strong > span:nth-child(2)').text().trim()
	let VideoVix = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-camera > div').text().trim()
	let Ram = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-expansion > strong > span:nth-child(2)').text().trim()
	let chipset = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-expansion > div').text().trim()
	let batre = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-battery > strong > span:nth-child(1)').text().trim()
	let Mah = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-battery > strong > span:nth-child(2)').text().trim()
	let merekBatre = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-battery > div').text().trim()
	let AngkaRam = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-expansion > strong > span:nth-child(1)').text().trim()
	let detail = []
	$('#specs-list').each(function (anu, RA) {
		let isi = $(RA).text().trim()
		detail.push(isi)
	})
	const result = {
		status: Link.status,
		author: "Katashi",
		result: {
			judul: barang,
			rilis: rilis,
			thumb: thumb,
			ukuran: ukuran,
			type: tipe,
			storage: storage,
			display: display,
			inchi: inchi,
			pixel: camPix + Mp,
			videoPixel: VideoVix,
			ram: AngkaRam + Ram,
			chipset: chipset,
			batrai: batre + Mah,
			merek_batre: merekBatre,
			detail: detail[0]
		}
	}
	return result
}

async function FilmApik23(querry) {
	try{
	const link = await axios.get(`https://filmapik.website/?s=${querry}`);
	const c = cheerio.load(link.data)
	let Id = []
	c('#main > div > div.main-content.main-category > div.movies-list-wrap.mlw-category > div.movies-list.movies-list-full ').each(function (a, b) {
		c(b).find('div').each(function (e, d) {
			let id = c(d).find('a').attr('href')
			Id.push(id)
		})
	})
	let Random = Id[Math.floor(Math.random() * (Id.length))]
	const Link = await axios.get(Random)
	const $ = cheerio.load(Link.data)
	let judul = $('#mv-info').find('div.mvi-content > div.mvic-desc > h3').text().trim()
	let view = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-left > p:nth-child(1)').text().trim()
	let genre = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-left > p:nth-child(2)').text().trim()
	let studio = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-left > p:nth-child(3) > span').text().trim()
	let durasi = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-right > p:nth-child(1) > span').text().trim()
	let TvStatus = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-right > p:nth-child(2) > span').text().trim()
	let network = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-right > div > p:nth-child(5) > a').text().trim()
	let thumb = $('#mv-info').find('div.mvi-content > div.thumb.mvic-thumb > img').attr('src')
	let BintangFilm = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > p > span').text().trim()
	const data = {
		author: 'Katashi Hana',
		status: link.status,
		result: {
			judul: judul,
			thumb: thumb,
			Link: Random,
			penonton: view.replace('Views: ', ''),
			durasi: durasi,
			genre: genre.replace('Genre: ', ''),
			studio: studio,
			TV: TvStatus,
			network: network,
			bintangFilm: BintangFilm
		}
	}
	return data
} catch (err) {
	var notFond = {
		author: 'Katashi Hana',
		status: link.status,
		Pesan: 'ERROR HUBUNGI OWNER 082149344210'
	}
	return notFond
}
}

async function Liriklagu(querry) {
	return new Promise(async (resolve, reject) => {
		await axios.request({
			url: "https://www.musixmatch.com/search/" + querry,
			method: "GET",
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"accept-language": "en-US,en;q=0.9,id;q=0.8",
				"cache-control": "max-age=0",
				"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\""
			}
		}).then(async res => {
			const ch = cheerio.load(res.data)
			let Url = ch('#search-all-results').find('div.main-panel > div:nth-child(1) > div.box-content > div > ul > li > div > div.media-card-body > div > h2 > a').attr('href')
			await axios.request({
				url: "https://www.musixmatch.com"+ Url,
				method: "GET",
				data: null,
				headers: {
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"accept-language": "en-US,en;q=0.9,id;q=0.8",
					"cache-control": "max-age=0",
					"if-none-match": "W/\"252c5-LEqIxy/rzHPI2QxgG5//NcL3YjQ\"",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
					'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36'
				}
			}).then(({ data }) => {
				const $ = cheerio.load(data)
				let judul = $('#site > div > div > div > main > div > div > div.mxm-track-banner.top > div > div > div').find('div.col-sm-10.col-md-8.col-ml-9.col-lg-9.static-position > div.track-title-header > div.mxm-track-title > h1').text().trim()
				let artis = $('#site > div > div > div > main > div > div > div > div > div > div > div> div > div > h2 > span').text().trim()
				let thumb = $('#site > div > div > div > main > div > div > div.mxm-track-banner.top > div > div > div').find('div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div > img').attr('src')
				let lirik = []
				$('#site > div > div > div > main > div > div > div.mxm-track-lyrics-container').find('div.container > div > div > div > div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics').each(function (a, b) {
					let isi = $(b).find('span').text().trim()
					lirik.push(isi)
				})
				const result = {
					result: {
						author: 'Katashi Hana',
						judul: judul.replace('Lyrics', ''),
						penyanyi: artis,
						thumb: "https:" + thumb,
						lirik: lirik[0]
					}
				}
				resolve(result)
			}).catch(reject)
		})
	})
}

async function RandomCerpen() {
	try{
	const link = await axios.get(`http://cerpenmu.com/`)
	const c = cheerio.load(link.data)
	let kumpulan = []
	c('#sidebar > div').each(function (real, ra) {
		c(ra).find('ul > li').each(function (i, rayy) {
			let random = c(rayy).find('a').attr('href')
			kumpulan.push(random)
		})
	})
	var acak = kumpulan[Math.floor(Math.random() * (kumpulan.length))]
	let Otw = await axios.get(`${acak}`)
	const C = cheerio.load(Otw.data)
	let otw = []
	C('#content > article > article').each(function (a, b) {
		let random = C(b).find('h2 > a').attr('href')
		otw.push(random)
	})
	var Acak = otw[Math.floor(Math.random() * (otw.length))]
	let Link = await axios.get(`${Acak}`)
	let $ = cheerio.load(Link.data)
	let judul = $('#content').find('article > h1').text().trim()
	let karangan = $('#content').find('article > a:nth-child(2)').text().trim()
	let Isi = []
	$('#content > article > p').each(function (wm, Ra) {
		let isi = $(Ra).text().trim()
		Isi.push(isi)

	})
	let cerita = []
	for (let i of Isi) {
		cerita += i
	}
	const data = {
		status: 200,
		author: 'Katashi Hana',
		result: {
			Judul: judul,
			Penulis: karangan,
			sumber: Acak,
			cerita: cerita
		}
	}
	return data
} catch (err) {
	const res404 = {
		status: 500,
		author: 'Katashi hana',
		Pesan: 'Udah Ga work?:/ cp: 0895411214710'
	}
	return res404
}
}

exports.film = async (query) => {
	return new Promise((resolve, reject) => {
		axios.get(`http://167.99.71.200/?s=${query}`)
			.then((data) => {
				const $ = cheerio.load(data.data)
				const judul = [];
				const genre = [];
				const thumb = [];
				const link = [];
				const format = [];
				$('div > div.item-article > header > h2 > a').each(function(a, b) {
					deta = $(b).text();
					judul.push(deta)
				})
				$('div > div.item-article > header > div.gmr-movie-on').each(function(a, b) {
					deta = $(b).text();
					genre.push(deta)
				})
				$('div > div.content-thumbnail.text-center > a > img').each(function(a, b) {
					thumb.push($(b).attr('src'))
				})
				$('div > div.item-article > header > div.gmr-watch-movie > a').each(function(a, b) {
					link.push($(b).attr('href'))
				})
				for (let i = 0; i < judul.length; i++) {
					format.push({
						author: "katashi hana",
						judul: judul[i],
						genre: genre[i],
						thumb: thumb[i],
						link_nonton: link[i]
					})
				}
				if (format == '') {
					resolve({
						status: 'error'
					})
				} else {
					resolve(format)
				}
			})
			.catch(reject)
	})
}

async function trendtwit(country) {
	return new Promise((resolve, reject) => {
		axios.get(`https://getdaytrends.com/${country}/`)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const hastag = [];
				const tweet = [];
				const result = [];
				$('#trends > table.table.table-hover.text-left.clickable.ranking.trends.wider.mb-0 > tbody > tr> td.main > a').each(function(a, b) {
					deta = $(b).text()
					hastag.push(deta)
				})
				$('#trends > table.table.table-hover.text-left.clickable.ranking.trends.wider.mb-0 > tbody > tr > td.main > div > span').each(function(a, b) {
					deta = $(b).text()
					tweet.push(deta)
				})
				num = 1
				for (let i = 0; i < hastag.length; i++) {
					result.push({
						author: "katashi hana",
						rank: num,
						hastag: hastag[i],
						tweet: tweet[i]
					})
					num += 1
				}
				resolve({
					country: country,
					result: result
				})
			})
			.catch(reject)
	})
}

exports.stickersearch = async (query) => {
	return new Promise((resolve) => {
		axios.get(`https://getstickerpack.com/stickers?query=${query}`)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const link = [];
				$('#stickerPacks > div > div:nth-child(3) > div > a').each(function(a, b) {
					link.push($(b).attr('href'))
				})
				rand = link[Math.floor(Math.random() * link.length)]
				axios.get(rand)
					.then(({
						data
					}) => {
						const $$ = cheerio.load(data)
						const url = [];
						$$('#stickerPack > div > div.row > div > img').each(function(a, b) {
							url.push($$(b).attr('src').split('&d=')[0])
						})
						resolve({
							creator: 'Katashi Hana',
							title: $$('#intro > div > div > h1').text(),
							author: $$('#intro > div > div > h5 > a').text(),
							author_link: $$('#intro > div > div > h5 > a').attr('href'),
							sticker: url
						})
					})
			})
	})
}

async function pstore(query, page) {
    return new Promise((resolve, reject) => {
      axios.get(`https://p-store.net/search?query=${query}&page=${page}`).then(async tod => {
      const $ = cheerio.load(tod.data)
      
      hasil = []
      
        $("div.col-xs-6.col-md-4.col-cusong").each(function(i, cuk) {
        title  = $(cuk).find("p > a").text();
        thumb  = $(cuk).find("a > img").attr("src");
        link  = $(cuk).find("p > a").attr("href");
        harga  = $(cuk).find("div.price").text();
        const Data = {
            author: "katashi hana",
            title: title,
            thumb: thumb,
            link: link,
            harga: harga
          }
          hasil.push(Data)
      
      })
      resolve(hasil)
      });
      });
    }

async function joox(query) {
    return new Promise((resolve, reject) => {
      const time = Math.floor(new Date() / 1000)
        axios.get('http://api.joox.com/web-fcgi-bin//web_search?lang=id&country=id&type=0&search_input=' + query + '&pn=1&sin=0&ein=29&_=' + time)
          .then(({ data }) => {
                let result = []
                let hasil = []
                let promoses = []
                let ids = []
                data.itemlist.forEach(result => {
                    ids.push(result.songid)
                });
                for (let i = 0; i < data.itemlist.length; i++) {
                    const get = 'http://api.joox.com/web-fcgi-bin/web_get_songinfo?songid=' + ids[i]
                    promoses.push(
                        axios.get(get, {
                            headers: {
                                Cookie: 'wmid=142420656; user_type=1; country=id; session_key=2a5d97d05dc8fe238150184eaf3519ad;'
                            }
                        })
                            .then(({ data }) => {
                                const res = JSON.parse(data.replace('MusicInfoCallback(', '').replace('\n)', ''))
                                hasil.push({
                                    lagu: res.msong,
                                    album: res.malbum,
                                    penyanyi: res.msinger,
                                    publish: res.public_time,
                                    img: res.imgSrc,
                                    mp3: res.mp3Url
                                })
                                Promise.all(promoses).then(() => resolve({
                                    creator: "katashi hana",
                                    status: true,
                                    data: hasil,
                                }))
                            }).catch(reject)
                    )
                }
            }).catch(reject)
    })
}

async function palingmurah(query) {
return new Promise((resolve, reject) => {
axios.get(`https://palingmurah.net/pencarian-produk/?term=${query}`).then(async tod => {
const $ = cheerio.load(tod.data)
hasil = []
$("div.ui.card.wpj-card-style-2").each(function(c, d) {
//INFO BARANG
name = $(d).find("div.content.wpj-small.list-70-right > a.list-header").text().trim();
link = $(d).find("div.content.wpj-small.list-70-right > a.list-header").attr('href');
img = $(d).find("div.card-image-helper > img").attr('data-src');
harga = $(d).find("div.flex-master.card-job-price.text-right.text-vertical-center").text().trim();
//user
usernamepenjual = $(d).find("strong").text().trim();
linkpenjual = $(d).find("a.ui.wpj-big.avatar.image").attr('href');
iconpenjual = $(d).find("a.ui.wpj-big.avatar.image > img").attr('data-src');
const Data = {
	creator: "Katashi",
name: name,
harga: harga,
img: img,
link: link,
usernamepenjual: usernamepenjual,
linkpenjual: linkpenjual,
iconpenjual: iconpenjual
}
hasil.push(Data)
})
resolve(hasil)
}).catch(reject)
});
}

async function sfilesearch(query) {
return new Promise((resolve, reject) => {
axios.get(`https://sfile.mobi/search.php?q=${query}&search=Search`).then(async tod => {
const $ = cheerio.load(tod.data)
hasil = []
$("div.list").each(function(i, cuk) {
ico= $(cuk).find("img").attr("src");
lin= $(cuk).find("a").attr("href");
name= $(cuk).find("a").text();
const Data = {
	creator: "Katashi",
icon: ico,
name: name,
link: lin
}
hasil.push(Data)

})
resolve(hasil)
});
});
}

async function hoax() {
return new Promise((resolve, reject) => {
axios.get(`https://turnbackhoax.id/`).then( tod => {
const $ = cheerio.load(tod.data)
hasil = []
$("figure.mh-loop-thumb").each(function(a, b) {
$("div.mh-loop-content.mh-clearfix").each(function(c, d) {
link = $(d).find("h3.entry-title.mh-loop-title > a").attr('href');
img = $(b).find("img.attachment-mh-magazine-lite-medium.size-mh-magazine-lite-medium.wp-post-image").attr('src');
title = $(d).find("h3.entry-title.mh-loop-title > a").text().trim();
desc = $(d).find("div.mh-excerpt > p").text().trim();
date = $(d).find("span.mh-meta-date.updated").text().trim();
const Data = {
creator: "Katashi",
title: title,
thumbnail: img,
desc: desc,
date: date,
link: link
}
hasil.push(Data)
})
})
resolve(hasil)
}).catch(reject)
});
}

async function mcpedl(query) {
return new Promise((resolve, reject) => {
axios.get(`https://mcpedl.com/?s=${query}`).then(async tod => {
const $ = cheerio.load(tod.data)
hasil = []
$("div.post").each(function(c, d) {
name = $(d).find("h2.post__title").text().trim();
date = $(d).find("div.post__date").text().trim();
desc = $(d).find("p.post__text").text().trim();
category = $(d).find("div.post__category > a").text().trim();
link = $(d).find("a").attr('href')
link2 = `https://mcpedl.com${link}`
const Data = {
	creator: "Katashi",
name: name,
category: category,
date: date,
desc: desc,
link: link2
}
hasil.push(Data)

})
 resolve(hasil)
}).catch(reject)
});
}

async function halal(query, page) {
return new Promise((resolve, reject) => {
axios.get(`https://www.halalmui.org/mui14/searchproduk/search/?kategori=nama_produk&katakunci=${query}&page=${page}`).then( tod => {
const $ = cheerio.load(tod.data)
hasil = []
$("tr > td").each(function(c, d) {
name = $(d).find("span").eq(0).text()
namee = name.replace('Nama Produk :', '')
nmr = $(d).find("span").eq(1).text()
nmrr = nmr.replace('Nomor Sertifikat :', '')
const Data = {
title: namee,
nomorsertifikat: nmrr
}
hasil.push(Data)
resolve(hasil)
}).catch(reject)
})
})
}

async function kodepos(kota) {
return new Promise(async (resolve, reject) => {
let postalcode = 'https://carikodepos.com/';
let url = postalcode+'?s='+kota;
await request.get({
headers: {
'Accept': 'application/json, text/javascript, */*;',
'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4209.3 Mobile Safari/537.36',
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
'Origin': postalcode,
'Referer': postalcode
},
url: url,
}, function(error, response, body) {
if (error) return reject(error);
let $ = cheerio.load(body);
var search = $('tr');
if (!search.length) return reject('No result could be found');
var results = [];
search.each(function(i) {
if (i != 0) {
var td = $(this).find('td');
var result = {};
td.each(function(i) {
var value = $(this).find('a').html();
var key = (i == 0) ? 'province' : (i == 1) ? 'city' : (i == 2) ? 'subdistrict' : (i == 3) ? 'urban' : 'postalcode';
result[key] = value;
})
results.push(result);
}
});
return resolve(results);
console.log(results)
});
});
};

function gempa() {
return new Promise((resolve, reject) => {
axios.get('https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan.bmkg').then((response) => {
const $ = cheerio.load(response.data)
const urlElems = $('table.table-hover.table-striped')
for (let i = 0; i < urlElems.length; i++) {
const urlSpan = $(urlElems[i]).find('tbody')[0]
if (urlSpan) {
const urlData = $(urlSpan).find('tr')[0]
var Kapan = $(urlData).find('td')[1]
var Letak = $(urlData).find('td')[2]
var Magnitudo = $(urlData).find('td')[3]
var Kedalaman = $(urlData).find('td')[4]
var Wilayah = $(urlData).find('td')[5]
var lintang = $(Letak).text().split(' ')[0]
var bujur = $(Letak).text().split(' ')[2]
var hasil = {
	creator: "Katashi",
Waktu: $(Kapan).text(),
Lintang: lintang,
Bujur: bujur,
Magnitudo: $(Magnitudo).text(),
Kedalaman: $(Kedalaman).text().replace(/\t/g, '').replace(/I/g, ''),
Wilayah: $(Wilayah).text().replace(/\t/g, '').replace(/I/g, '').replace('-','').replace(/\r/g, '').split('\n')[0],
Map: ''
}
resolve(hasil);
console.log(hasil)
}
}
})
})
}

async function playstore(name){
	return new Promise((resolve, reject) => {
axios.get('https://play.google.com/store/search?q='+ name +'&c=apps')
.then(({ data }) => {
	const $ = cheerio.load(data)
	let ln = [];
	let nm = [];
	let dv = [];
	let lm = [];
	const result = [];
	$('div.wXUyZd > a').each(function(a,b){
const link = 'https://play.google.com' + $(b).attr('href')
ln.push(link);
	})
	$('div.b8cIId.ReQCgd.Q9MA7b > a > div').each(function(d,e){
const name = $(e).text().trim()
nm.push(name);
	})
	$('div.b8cIId.ReQCgd.KoLSrc > a > div').each(function(f,g){
const dev = $(g).text().trim();
dv.push(dev)
	})
	$('div.b8cIId.ReQCgd.KoLSrc > a').each(function(h,i){
const limk = 'https://play.google.com' + $(i).attr('href');
lm.push(limk);
	})	
for (let i = 0; i < ln.length; i++){
	result.push({
		creator: "Katashi",
name: nm[i],
link: ln[i],
developer: dv[i]
	})
	}
resolve(result)
})
console.log(result)
	.catch(reject)
	})
}

async function pinterest(querry) {
	let HASIL = []
	await axios.request(`https://id.pinterest.com/search/pins/?rs=typed&q=` + querry, {
			method: "GET",
			url: "https://id.pinterest.com/search/pins/?rs=typed&q="+ querry,
			headers: {
				"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
				"sec-ch-ua-mobile": "?0",
				"upgrade-insecure-requests": "1",
				"cookie": "csrftoken=ebe0be3a93cea6072be18633add953a2; _b=\"AVezvd6F4UtE24FUsA6INxipyZZDoSpyCc5vaJK4QDYXmExosVEc4h6WkiKhlVtQ430=\"; cm_sub=denied; fba=True; _ga=GA1.2.862909259.1620474446; g_state={\"i_l\":0}; _auth=1; _pinterest_sess=TWc9PSZ0VEZqZmdDSlJYaGU5REIvNklIcVlnMjE5b0ZraTE5REJVQ0JiMUwxTkZZaGFoVk1sRDVhOFlwQzhkQnQ0YkMwRlNyV0lIWUFlK0ZVTkVxYUhKNmlvZ0R1UXlQYTBRRVVhMU1yYkpmcXpHK3UyNjNhckRqUFFOYVJVa3RnVmJtVzd2MmRGaHFMZUpLNVhtaHptTDhWSnBSdXhZY0FhRnRTN3J1S0V4cGtsVTBxeE54NkF2blVNSFV3R0NTQTR1bVVNRURGVGdnYlN5UjdBbk9YcHVGbGI3a1kwd1dEZDgrZVM1SDc3V0pJMm00OWxKUDVNQjBLVlFocTB4Mjg1M1RnbGxBaFAxbS9MTnVzei91cEQvcjBtakp6N0ZnU2t1Y3NxWW1DRDV1Q3h0ankvQ3FEWGh3MXczcXBHNXJpYVNCMHB6dUoxMGF6ZzVxN2VqQVBoSElSd0tiQk41ZVRPQXlOaGNpNzVQMWJSeVZJbCtYYVMxQ1ZRUFUwalU3eGVzMGRySlNzdWo1NG5uaXNFM3ZpT0o0TkZHR1daUXlwaXFQclMwa04raW9xVnVaTTRSVGEzTE03TVlZcmZYVDd5UmVPd2lZaGw4aE9VMHJBd0tidEsrcHdPWk96RlFMekVLTzY3VU1PL0tIYUdwUE1IWVdJNnJXalBkU09Sb3dEaHlQVVR1T1RqNW5Sc2FRdmVkZmhkMk9HNHBCL0ZpZ3NMdmZvVW9ReVltTFBCTlNLWHpray9LNWJ2UTNvTlBzVm9aZjRvYWRvRFhla0dBNzdveWJVYXZmVFp2cnFFNU5DYUVwSHhxeDlIajNIVTlHaEVYdGptWm5mSGVSRmtIMmQwVVVVZlVCVEh6UHB3TnBtdWV0b2l6L3VTc3pXMXFGN3lHS3ZJM3BwL0NrWVJDMm1HY2tROGxuQVFRNS9OUW45R3dtSk8zeFJidVFSTG1qTG5PelAvKzd3T3lrN1NoKzBHVGNTY1pGSEY0bW8xcGVmc3NtclBhTWE2QUMxOXNpQWUwRmo4UHl0ZGpwUzhUQXVhbjYwT0ZJeHhHai8yOWFUVTA1Wkx2czN4VSttLzMvbkFVQ2svWnZvNC9xZ3E4VkhYSFZ5elo4TzhtU0o5c3ZDcEJyYjE3QVI1WHlmTTFhWThvWHQ1T0tSTWRsWnI3a1lpU245dEVLd1lZSXRremtkTUZmcVA2YUg0c1UrSk1JOWJVRzZpcWd3T0NVaFZkdUh3UUdURi9sbDBqT2pBZVV2ZnlTQzc5ZnBMYkFMQ1ZsWjdIYWcmaDc1Uk5kK2I4MjFMUXBaVUthci9rVHpCUWRvPQ==; _pinterest_cm=\"TWc9PSYxZnpkMS9XN29Rd2R0TnpBN0RzVktja1J4NUtINUJqRzNGODFXS0xES1pndWlNVm52a0d3V0JocmVIS3p5eDdnNXNZa0hGelNQNDBSTFRId3ZhTFFIQjRGOW1lNlJZMzFiVlg1MHhSOFpmMGhRZUoySUpJZDIyWlVYMjRXNHRaL1lodFl4eW1jWjNyTklpbytYbHZyd29nRm5DY0pQOGgyUWpDdk9zQ1craXR5VEZoNHV4ZzRnOXV4SUFFSStYZCsmT08zMFI1bktXa3pwSDFtK3NNRWpxWWNpQzNzPQ==\"; _routing_id=\"595f24cd-7f4c-4495-aa67-37212d099cd8\"; sessionFunnelEventLogged=1"
			}
		}).then(res => {
			const $ = cheerio.load(res.data)
			let hasil = []
			$('body > div > div > div > div > div > div > div > div > div > div > div').each(function (a, b) {
				$(b).find('div').each(function (c, d) {
					let Link = $(d).find('div > div > div > div > a').find('img').attr('src')
					hasil.push(Link)
				})
			})
			let Data = []
			hasil.map(V => {
				if (V === undefined) return 
				Data.push(V.replace('236x', 'originals'))
			})
			let FilterArray = new Set(Data)
			let unique = [...FilterArray]
			const result = {
				status: res.status,
				creator: "Katashi",
				result: unique
			}
			HASIL.push(result)
		})
		return HASIL[0]
}

async function wattpad(judul) {
	return new Promise((resolve, reject) => {
		axios.get("https://www.wattpad.com/search/" + judul).then(({
				data
			}) => {
				var $ = cheerio.load(data)
				var result = [];
				var jdl = [];
				var img = [];
				var des = [];
				var lnk = [];
				var red = [];
				var vt = [];
				var cp = [];
				var dur = [];
				var limk = 'https://www.wattpad.com'
				$('div.story-card-data.shown-xxs > div.top-section > div.cover').each(function(a, b) {
					img.push($(b).find('img').attr('src'))
				})
				$('div.story-card-data.shown-xxs > div.top-section > div.story-info > div.title').each(function(a, b) {
					jdl.push($(b).text().trim())
				})
				$('div.story-card-data.shown-xxs > div.description').each(function(a, b) {
					des.push($(b).eq(0).text().trim())
				})
				$('a.story-card').each(function(a, b) {
					lnk.push(limk + $(b).attr('href'))
				})
				$('div.story-card-data.shown-xxs > div.top-section > div.story-info >  ul.new-story-stats > li:nth-child(1) > div.icon-container > div.tool-tip > span.stats-value').each(function(a, b) {
					red.push($(b).text())
				})
				$('div.story-card-data.shown-xxs > div.top-section > div.story-info >  ul.new-story-stats > li:nth-child(2) > div.icon-container > div.tool-tip > span.stats-value').each(function(a, b) {
					vt.push($(b).text().trim())
				})
				$('div.story-card-data.shown-xxs > div.top-section > div.story-info >  ul.new-story-stats > li:nth-child(3) > div.icon-container > div.tool-tip > span.stats-value').each(function(a, b) {
					cp.push($(b).text())
				})
				$('div.story-card-data.shown-xxs > div.top-section > div.story-info >  ul.new-story-stats > li:nth-child(4) > div.icon-container > div.tool-tip > span.stats-value').each(function(a, b) {
					dur.push($(b).text())
				})
				for (let i = 0; i < lnk.length; i++) {
					result.push({
						author: "katashi",
						judul: jdl[i],
						desc: des[i],
						reads: red[i],
						votes: vt[i],
						chapters: cp[i],
						durations: dur[i],
						image: img[i],
						link: lnk[i]
					})

				}
				resolve(result)
			})
			.catch({
				message: 'err'
			})

	})
}

async function random_detail(judul) {
	return new Promise((resolve, reject) => {
		wattpad(judul).then(res => {
			let a = JSON.parse(JSON.stringify(res))
			let b = a[Math.floor(Math.random() * a.length)];
			axios.get(b.link).then(({
				data
			}) => {
				var $ = cheerio.load(data)

				var pp_author = $('div.author-info').find('img').attr('src')
				var author = $('div.story-details-page > div.story-header > div.story-info > div.author-info > div.author-info__username > a').text().trim()
				var link_author = $('div.story-details-page > div.story-header > div.story-info > div.author-info > div.author-info__username > a').attr('href')
				var rc = [];
				var tc = [];
				var to = [];
				$('div.story-parts.shown-xxs > ul > li > a').each(function(a, b) {
					rc.push($(b).attr('href'))
				})
				$('div.story-parts.shown-xxs > ul > li > a > div.part__label').each(function(a, b) {
					tc.push($(b).text().trim())
				})

				for (let i = 0; i < tc.length; i++) {
					to.push({
						title_part: tc[i],
						link_part: 'https://wattpad.com' + rc[i]
					})

				}
				resolve({
					author: "katashi",
					judul: b.judul,
					desc: b.desc,
					reads: b.reads,
					votes: b.votes,
					chapters: b.chapters,
					duration: b.durations,
					image: b.image,
					link: b.link,
					author,
					pp_author,
					link_author: 'https://www.wattpad.com' + link_author,
					read_chapters: to
				})
			})
		})
	})
}

async function searchLineSticker(query) {
     return new Promise((resolve, reject) => {
          axios.request({
               url: 'https://store.line.me/search/id?q=' + query,
               method: 'get',
               headers: {
                    Cookies: 'uu=b1WTj6v25XycORW8AAbn5l1o3p1oFK4IdSTgN6PUlgRHpNnaA5B92AZcK2voKHbo; fs=%7B%221%22%3A%7B%22impressed%22%3Afalse%7D%2C%222%22%3A%7B%22impressed%22%3Afalse%7D%2C%223%22%3A%7B%22impressed%22%3Afalse%7D%2C%224%22%3A%7B%22impressed%22%3Afalse%7D%7D; _ga=GA1.2.1178183582.1607484022; _trmccid=8efd163d8815b247; _ga=GA1.3.1178183582.1607484022; XSRF-TOKEN=57bd64c7-6a65-492b-8185-da991a4a321f; display_lang=id; ss=RCVSTjEPJwWR5RZ5n1ksm2gks527xxnxQOGHHx5XS9PG6905D2Lr4SfCqdUObFUqHJ8rUUpGZKnu1BSN16nxGYqwZeRUrNQXMwHS:164862:176e41e63da; _trmcdisabled2=-1; _trmcuser={"id":"","attr1":"4g","attr2":"PC","attr3":false,"attr4":false}; _gid=GA1.2.2024142913.1610144970; _gid=GA1.3.2024142913.1610144970; _trmcsession={"id":"9bfc398d1a8637f6","path":"/search/id","query":"?q=minecraft","params":{},"time":1610149248526}; _trmcpage=/search/id; __try__=1610149660198; _gat_UA-51908971-1=1; '
               }
          })
          .then(({ data }) => {
               fs.writeFileSync('./datachord.html', data)
               const $ = cheerio.load(data)
               console.log(data)
               resolve(data)
          }).catch(reject)
     })
}

async function brainlydetail(url) {
     return new Promise((resolve, reject) => {
axios.get(url)
.then(({ data }) => {
    let answer = []
    const $ = cheerio.load(data)
    $('div[data-test="answer-box-text"]').get().map((rest) => {
        answer.push($(rest).text().replace('\n',''))
    })
    let media = [] 
    let media_question = []
    $('div[data-test="question-box-attachments"] > div > div > div > img.brn-qpage-next-attachments-viewer-image-preview__image').get().map((rest) => {
        if ($(rest).length) {
            media_question.push($(rest).attr('src'))
        }
    })
    $('div[data-test="answer-box-attachments"] > div > div > div > img.brn-qpage-next-attachments-viewer-image-preview__image').get().map((rest) => {
        if ($(rest).length) {
            media.push($(rest).attr('src'))
        }
    })
    const time = $('div.sg-text.sg-text--xsmall.sg-text--gray-secondary > time').attr('datetime')
    const mapel = $('a[data-test="question-box-subject"]').text().replace(/\n/g,'')
    const kelas = $('a[data-test="question-box-grade"]').text().replace(/\n/g,'')
    const pertanyaan = $('h1[data-test="question-box-text"] > span').text().replace('\n','')
    let jawaban = []
    for (let i = 0; i < answer.length; i++) {
        jawaban.push({
            teks: answer[i],
            media: media[i] || []
        })        
    }
    const result = { 
    	author: "katashi",
        pertanyaan: pertanyaan,
        foto_pertanyaan: media_question,
        waktu_dibuat: time,
        kelas: kelas,
        mapel: mapel,
        jawaban: jawaban
    }
    resolve(result)
    })
  })
}

async function brainly(pertanyaan,jumlah,callback){
  return new Promise((resolve,reject)=>{
    require("brainly-scraper")(pertanyaan.toString(),Number(jumlah)).then((res) => {
      let brainlyResult = []
      res.data.forEach((ask) => {
        let opt = {
          author: "katashi",
          pertanyaan: ask.pertanyaan,
          fotoPertanyaan: ask.questionMedia
        }
        ask.jawaban.forEach(answer => {
          opt.jawaban = {
            judulJawaban: answer.text,
            fotoJawaban: answer.media
          }
        })
        brainlyResult.push(opt)
      })
      resolve(brainlyResult)
    }).then(a => {
        callback(a)
    }).catch(reject)
  })
}

async function brainly2(query){
    const browser = await puppeteer.launch({
        headless: false,
        //executablePath: 'C://Program Files//Google//Chrome//Application//chrome.exe'
    });
    const page = await browser.newPage();
    const q = '${query}';
    await page.goto(`https://brainly.co.id/app/ask?&q=${q}`,{
        waitUntil: 'networkidle0',
    })
    await page.waitForSelector('a.sg-text')
    const bodyHandle = await page.$('body');
    const data = await page.evaluate(body => body.innerHTML, bodyHandle);
    await bodyHandle.dispose();
    const $ = cheerio.load(data)
    let url = []
    let title = []
    $('div > a.sg-text.sg-text--small.sg-text--link.sg-text--bold.sg-text--blue-dark').get().map((rest) => {
        url.push($(rest).attr('href'))
    })
    $('div > div > div.sg-text.sg-text--default.sg-text--break-words').get().map((rest) => {
        title.push($(rest).text())
    })
    let result = []
     for (let i = 0; i < url.length; i++) {
          resolve({
			title: title[i],
            url: url[i]
		})
     }
    await browser.close();
    }
    
async function brainly3(q) {
	return new Promise(async(resolve,reject) => {
	axios.get('https://brainly.co.id/app/ask?&q=${q}')
	.then(({ data }) => {
	const $ = cheerio.load(data)
	let url = []
    let title = []
    $('div > a.sg-text.sg-text--small.sg-text--link.sg-text--bold.sg-text--blue-dark').get().map((rest) => {
        url.push($(rest).attr('href'))
    })
    $('div > div > div.sg-text.sg-text--default.sg-text--break-words').get().map((rest) => {
        title.push($(rest).text())
    })
	for (let i = 0; i < url.length; i++) {
		resolve({
			title: title[i],
            url: url[i]
		})
	}
})
	.catch(reject)
	})
} 

///Photofunia

async function coki() {
	try {
		var a = await axios.request("https://photofunia.com/images?server=1", {
			method: "GET",
			headers: {
				"User-Agent": "Mozilla/5.0 (X11; Linux x86_64; Flow) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/359.0.0.288 Safari/537.36",
				"Accept": "application/json, text/javascript, */*; q=0.01",
				"Host": "photofunia.com"
			}
		})
		var coki = a.headers['set-cookie'][0].split(';')[0]
		return ({
			coki: coki
		})
	} catch (e) {
		if (e.response) {
			return ({
				status: e.response.status,
				msg: e.response.statusText
			})

		}
		console.log(e)
	}
}

async function imgkey(url, imeg) {
	var u = new URL(url)
	var a = await coki()
	try {
		var form = new former()
		form.append("image", imeg, {
			filename: `${Math.floor(Math.random() * 10000)}.jpg`
		})
		var b = await axios.request("https://photofunia.com/images?server=1", {
			method: "POST",
			data: form.getBuffer(),
			headers: {
				"User-Agent": "Mozilla/5.0 (X11; Linux x86_64; Flow) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/359.0.0.288 Safari/537.36",
				"Accept": "application/json, text/javascript, */*; q=0.01",
				"Host": "photofunia.com",
				cookie: a.coki + "; accept_cookie=true",
				...form.getHeaders(),
				"Accept-Language": "id-ID,id;q=0.9,en-GB;q=0.8,en;q=0.7,en-US;q=0.6",
				"Referer": "https://photofunia.com" + u.pathname
			}
		})
		var imgkey = b.data.response.key
		return ({
			key: imgkey,
			coki: a.coki,
			data: b.data
		})
	} catch (e) {
		if (e.response) {
			return ({
				status: "gagal",
				msg: e.response.statusText
			})
		} else {
			return ({
				status: "gagal", 
				msg: "bukan link gambar itu bang"
			})
		}
		console.log(e)
	}
}

async function photofunimg(url, imeg) {
	var u = new URL(url)
	if (!/https:\/\/.+\.photofunia.+/g.test(url)) {
		return resolve({
			status: "gagal", 
			msg: "itu bukan link dari photofunia"
		})
	}
	var key = await imgkey(url, imeg)
	console.log(key)
	try {
		form2 = new former()
		form2.append('current-category', "all_effects");
		form2.append('image', key.key);
		form2.append("image:crop", "0");
		c = await axios.request("https://photofunia.com" + u.pathname + "?server=1", {
			method: "POST",
			data: form2.getBuffer(),
			headers: {
				"User-Agent": "Mozilla/5.0 (X11; Linux x86_64; Flow) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/359.0.0.288 Safari/537.36",
				"Accept": "application/json, text/javascript, */*; q=0.01",
				"Host": "photofunia.com",
				cookie: key.coki + "; accept_cookie=true",
				...form2.getHeaders(),
				"Accept-Language": "id-ID,id;q=0.9,en-GB;q=0.8,en;q=0.7,en-US;q=0.6",
				"Referer": "https://photofunia.com" + u.pathname
			}
		})
		var img = /data-share-image="(.+?)"/.exec(c.data)[1]
		return ({
			status: "sukses",
			author: "katashi",
			url: img
		})
	} catch (e) {
		if (e.response) {
			return ({
				status: "gagal",
				msg: e.response.statusText
			})

		} else {
			return ({
				status: "gagal", 
				msg: "error nih"
			})
		}
		console.log(e)
	}
}

async function photofuntext(url, text) {
	return new Promise(async (resolve, reject) => {
		if (!/https:\/\/.+\.photofunia.+/g.test(url)) {
			return resolve({
				msg: "itu bukan link dari photofunia"
			})
		}
		var u = new URL(url)
		try {
			a = await axios.request("https://photofunia.com/cookie-warning?server=1", {
				"method": "GET",
				"headers": {
					"Host": "photofunia.com",
					"Referer": "https://photofunia.com" + u.pathname
				}
			})
			var coki = a.headers['set-cookie'][0].split(';')[0]
			var form = new former()
			form.append('current-category', 'all_effect')
			form.append('text', text)

			var b = await axios.request("https://photofunia.com" + u.pathname + "?server=1", {
				method: "POST",
				data: form.getBuffer(),
				headers: {
					accept: '*/*',
					'accept-language': 'en-US,en;q=0.9',
					...form.getHeaders(),
					'referer': 'https://photofunia.com' + u.pathname,
					'user-agent': 'Mozilla/5.0 (X11; Linux x86_64; Flow) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/359.0.0.288 Safari/537.36',
					cookie: coki + "; accept_cookie=true"
				}
			})

			var img = /data-share-image="(.+?)"/.exec(b.data)[1]
			return resolve({
				status: "sukses",
				author: "katashi",
				url: img
			})
		} catch (e) {
			if (e.response) {
				return resolve({
					status: "gagal",
					msg: e.response.statusText
				})

			} else {
				return resolve({
					status: "gagal", 
					msg: "salah link mungkin"
				})
			}
			console.log(e)
		}
	})
}

/// Ephoto360

async function radio(url) {
	var a = await axios.request(url, {
		headers: {
			accept: '/',
			'accept-language': "en-US,en;q=0.9",
			'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
		}
	})
	var $ = cheerio.load(a.data)
	let radio1 = []
	let radio2 = []
	let value = {
		radio1,
		radio2
	}
	$("input[name='radio0[radio]']").each(function(palse, terue) {
		radio1.push($(terue).attr('value'))
	})
	$("input[name='radio1[radio]']").each(function(palse, terue) {
		radio2.push($(terue).attr('value'))
	})
	return value
}

async function ephotoi(url, image) {
	if (!/^https:\/\/ephoto360\.com\/.+\.html$/.test(url) && !/^https:\/\/en.ephoto360\.com\/.+\.html$/.test(url))
		throw new Error("Invalid URL");
	var a = await axios.request(url, {
		method: 'GET',
		headers: {
			accept: '/',
			'accept-language': "en-US,en;q=0.9",
			'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
		}
	})
	var html = a.data
	var $ = cheerio.load(html)
	var cookies = a.headers['set-cookie'].toString()
	var fs = require("fs")
	var c = await upload(image)
	var form = new former()
	if (typeof c === "string") c = [c]
	for (texts of c) form.append("image[]", texts)
	form.append("file_image_input", "")
	form.append("submit", $("input[name=submit]").attr("value"))
	form.append("token", $("input[name=token]").attr("value"))
	form.append("build_server", "https://s1.ephoto360.com")
	form.append("build_server_id", $("input[name=build_server_id]").attr("value"))

	var a2 = await axios.request(url, {
		method: 'POST',
		headers: {
			accept: '/',
			'accept-language': "en-US,en;q=0.9",
			...form.getHeaders(),
			cookie: cookies,
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
		},
		data: form.getBuffer()
	})
	var $$ = cheerio.load(a2.data)
	var form_value = $$("input[name=form_value_input]").attr("value")
	if (!form_value) throw new Error('Token invalid? False')
	var apa = JSON.parse(form_value)
	var e = encodeURIComponent
	var body = Object.keys(apa).map(key => {
		vals = apa[key]
		isArray = Array.isArray(vals)
		keyq = e(key + (isArray ? '[]' : ''))
		if (!isArray) vals = [vals]
		out = []
		for (valq of vals) out.push(keyq + '=' + e(valq))
		return out.join('&')
	}).join('&')
	var headers = {
		cookie: cookies
	}
	var u = new URL(url)
	var d = await axios.request(u.origin + "/effect/create-image", {
		method: 'POST',
		headers: {
			accept: '/',
			'accept-language': "en-US,en;q=0.9",
			'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
			...headers
		},
		data: body
	})
	var hasil = {
		author: "katashi",
		data: d.data,
		url: apa.build_server + d.data.image
	}
	return hasil
}
async function ephotoi2(url, image, image2) {
	if (!/^https:\/\/ephoto360\.com\/.+\.html$/.test(url) && !/^https:\/\/en.ephoto360\.com\/.+\.html$/.test(url))
		throw new Error("Invalid URL");
	var a = await axios.request(url, {
		method: 'GET',
		headers: {
			accept: '/',
			'accept-language': "en-US,en;q=0.9",
			'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
		}
	})
	var html = a.data
	var $ = cheerio.load(html)
	var cookies = a.headers['set-cookie'].toString()
	var c = await upload(image).then(async (d) => {
		var a = await upload(image2)
		var b = [d, a]
		return b
	})
	var form = new former()
	if (typeof c === "string") c = [c]
	for (texts of c) form.append("image[]", texts)
	form.append("file_image_input", "")
	form.append("submit", $("input[name=submit]").attr("value"))
	form.append("token", $("input[name=token]").attr("value"))
	form.append("build_server", "https://s1.ephoto360.com")
	form.append("build_server_id", $("input[name=build_server_id]").attr("value"))

	var a2 = await axios.request(url, {
		method: 'POST',
		headers: {
			accept: '/',
			'accept-language': "en-US,en;q=0.9",
			...form.getHeaders(),
			cookie: cookies,
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
		},
		data: form.getBuffer()
	})
	var $$ = cheerio.load(a2.data)
	var form_value = $$("input[name=form_value_input]").attr("value")
	if (!form_value) throw new Error('Token invalid? False')
	var apa = JSON.parse(form_value)
	var e = encodeURIComponent
	var body = Object.keys(apa).map(key => {
		vals = apa[key]
		isArray = Array.isArray(vals)
		keyq = e(key + (isArray ? '[]' : ''))
		if (!isArray) vals = [vals]
		out = []
		for (valq of vals) out.push(keyq + '=' + e(valq))
		return out.join('&')
	}).join('&')
	var headers = {
		cookie: cookies
	}
	var u = new URL(url)
	var d = await axios.request(u.origin + "/effect/create-image", {
		method: 'POST',
		headers: {
			accept: '/',
			'accept-language': "en-US,en;q=0.9",
			'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
			...headers
		},
		data: body
	})
	var hasil = {
		author: "katashi",
		data: d.data,
		url: apa.build_server + d.data.image
	}
	return hasil
}
async function ephotori(url, radio, image) {
	if (!/^https:\/\/ephoto360\.com\/.+\.html$/.test(url) && !/^https:\/\/en.ephoto360\.com\/.+\.html$/.test(url))
		throw new Error("Invalid URL");
	var a = await axios.request(url, {
		method: 'GET',
		headers: {
			accept: '/',
			'accept-language': "en-US,en;q=0.9",
			'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
		}
	})
	var html = a.data
	var $ = cheerio.load(html)
	var cookies = a.headers['set-cookie'].toString()
	var c = await upload(image)
	var form = new former()
	if (typeof c === "string") c = [c]
	for (texts of c) form.append("image[]", texts)
	form.append("file_image_input", "")
	form.append("submit", $("input[name=submit]").attr("value"))
	form.append("token", $("input[name=token]").attr("value"))
	form.append("radio0[radio]", radio)
	form.append("build_server", "https://s1.ephoto360.com")
	form.append("build_server_id", $("input[name=build_server_id]").attr("value"))

	var a2 = await axios.request(url, {
		method: 'POST',
		headers: {
			accept: '/',
			'accept-language': "en-US,en;q=0.9",
			...form.getHeaders(),
			cookie: cookies,
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
		},
		data: form.getBuffer()
	})
	var $$ = cheerio.load(a2.data)
	var form_value = $$("input[name=form_value_input]").attr("value")
	if (!form_value) throw new Error('Token invalid? False')
	var apa = JSON.parse(form_value)
	var e = encodeURIComponent
	var body = Object.keys(apa).map(key => {
		vals = apa[key]
		isArray = Array.isArray(vals)
		keyq = e(key + (isArray ? '[]' : ''))
		if (!isArray) vals = [vals]
		out = []
		for (valq of vals) out.push(keyq + '=' + e(valq))
		return out.join('&')
	}).join('&')
	var body2 = body.split('radio0=%5Bobject%20Object%5D').join('radio0%5Bradio%5D=' + apa.radio0.radio)
	var headers = {
		cookie: cookies
	}
	var u = new URL(url)
	var d = await axios.request(u.origin + "/effect/create-image", {
		method: 'POST',
		headers: {
			accept: '/',
			'accept-language': "en-US,en;q=0.9",
			'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
			...headers
		},
		data: body2
	})
	var hasil = {
		author: "katashi",
		data: d.data,
		url: apa.build_server + d.data.image
	}
	return hasil
}

async function ephototi(url, text, image) {
	if (!/^https:\/\/ephoto360\.com\/.+\.html$/.test(url) && !/^https:\/\/en.ephoto360\.com\/.+\.html$/.test(url))
		throw new Error("Invalid URL");
	var a = await axios.request(url, {
		method: 'GET',
		headers: {
			accept: '/',
			'accept-language': "en-US,en;q=0.9",
			'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
		}
	})
	var html = a.data
	var $ = cheerio.load(html)
	var cookies = a.headers['set-cookie'].toString()
	var c = await upload(image)
	var form = new former()
	if (typeof text === "string") text = [text]
	for (tex of text) form.append("text[]", tex)
	if (typeof c === "string") c = [c]
	for (texts of c) form.append("image[]", texts)
	form.append("file_image_input", "")
	form.append("submit", $("input[name=submit]").attr("value"))
	form.append("token", $("input[name=token]").attr("value"))
	form.append("build_server", "https://s1.ephoto360.com")
	form.append("build_server_id", $("input[name=build_server_id]").attr("value"))

	var a2 = await axios.request(url, {
		method: 'POST',
		headers: {
			accept: '/',
			'accept-language': "en-US,en;q=0.9",
			...form.getHeaders(),
			cookie: cookies,
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
		},
		data: form.getBuffer()
	})
	var $$ = cheerio.load(a2.data)
	var form_value = $$("input[name=form_value_input]").attr("value")
	if (!form_value) throw new Error('Token invalid? False')
	var apa = JSON.parse(form_value)
	var e = encodeURIComponent
	var body = Object.keys(apa).map(key => {
		vals = apa[key]
		isArray = Array.isArray(vals)
		keyq = e(key + (isArray ? '[]' : ''))
		if (!isArray) vals = [vals]
		out = []
		for (valq of vals) out.push(keyq + '=' + e(valq))
		return out.join('&')
	}).join('&')
	headers = {
		cookie: cookies
	}
	var u = new URL(url)
	var d = await axios.request(u.origin + "/effect/create-image", {
		method: 'POST',
		headers: {
			accept: '/',
			'accept-language': "en-US,en;q=0.9",
			'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
			...headers
		},
		data: body
	})
	var hasil = {
		data: d.data,
		url: apa.build_server + d.data.image
	}
	return hasil
}

async function ephototri(url, text, radio, image) {
	if (!/^https:\/\/ephoto360\.com\/.+\.html$/.test(url) && !/^https:\/\/en.ephoto360\.com\/.+\.html$/.test(url))
		throw new Error("Invalid URL");
	var a = await axios.request(url, {
		method: 'GET',
		headers: {
			accept: '/',
			'accept-language': "en-US,en;q=0.9",
			'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
		}
	})
	var html = a.data
	var $ = cheerio.load(html)
	var cookies = a.headers['set-cookie'].toString()
	var c = await upload(image)
	var form = new former()
	if (typeof text === "string") text = [text]
	for (tex of text) form.append("text[]", tex)
	if (typeof c === "string") c = [c]
	for (texts of c) form.append("image[]", texts)
	form.append("file_image_input", "")
	form.append("submit", $("input[name=submit]").attr("value"))
	form.append("token", $("input[name=token]").attr("value"))
	form.append("radio0[radio]", radio)
	form.append("build_server", "https://s1.ephoto360.com")
	form.append("build_server_id", $("input[name=build_server_id]").attr("value"))

	var a2 = await axios.request(url, {
		method: 'POST',
		headers: {
			accept: '/',
			'accept-language': "en-US,en;q=0.9",
			...form.getHeaders(),
			cookie: cookies,
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
		},
		data: form.getBuffer()
	})
	var $$ = cheerio.load(a2.data)
	var form_value = $$("input[name=form_value_input]").attr("value")
	if (!form_value) throw new Error('Token invalid? False')
	var apa = JSON.parse(form_value)
	var e = encodeURIComponent
	var body = Object.keys(apa).map(key => {
		vals = apa[key]
		isArray = Array.isArray(vals)
		keyq = e(key + (isArray ? '[]' : ''))
		if (!isArray) vals = [vals]
		out = []
		for (valq of vals) out.push(keyq + '=' + e(valq))
		return out.join('&')
	}).join('&')
	var body2 = body.split('radio0=%5Bobject%20Object%5D').join('radio0%5Bradio%5D=' + apa.radio0.radio)
	var headers = {
		cookie: cookies
	}
	var u = new URL(url)
	var d = await axios.request(u.origin + "/effect/create-image", {
		method: 'POST',
		headers: {
			accept: '/',
			'accept-language': "en-US,en;q=0.9",
			'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
			...headers
		},
		data: body2
	})
	var hasil = {
		author: "katashi",
		data: d.data,
		url: apa.build_server + d.data.image
	}
	return hasil
}

async function ephoto(url, text) {
	if (!/^https:\/\/ephoto360\.com\/.+\.html$/.test(url) && !/^https:\/\/en.ephoto360\.com\/.+\.html$/.test(url))
		throw new Error("Invalid URL");
	var a = await axios.request(url, {
		method: 'GET',
		headers: {
			accept: '/',
			'accept-language': "en-US,en;q=0.9",
			'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
		}
	})
	var html = a.data
	var $ = cheerio.load(html)
	var cookies = a.headers['set-cookie'].toString()
	var form = new former()
	if (typeof text === "string") text = [text]
	for (texts of text) form.append("text[]", texts)
	form.append("submit", $("input[name=submit]").attr("value"))
	form.append("token", $("input[name=token]").attr("value"))
	form.append("build_server", $("input[name=build_server]").attr("value"))
	form.append("build_server_id", $("input[name=build_server_id]").attr("value"))

	var a2 = await axios.request(url, {
		method: 'POST',
		headers: {
			accept: '/',
			'accept-language': "en-US,en;q=0.9",
			...form.getHeaders(),
			cookie: cookies,
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
		},
		data: form.getBuffer()
	})
	var $$ = cheerio.load(a2.data)
	var form_value = $$("input[name=form_value_input]").attr("value")
	if (!form_value) throw new Error('Token invalid? False')
	var apa = JSON.parse(form_value)
	var e = encodeURIComponent
	var body = Object.keys(apa).map(key => {
		vals = apa[key]
		isArray = Array.isArray(vals)
		keyq = e(key + (isArray ? '[]' : ''))
		if (!isArray) vals = [vals]
		out = []
		for (valq of vals) out.push(keyq + '=' + e(valq))
		return out.join('&')
	}).join('&')
	headers = {
		cookie: cookies
	}
	var u = new URL(url)
	var c = await axios.request(u.origin + "/effect/create-image", {
		method: 'POST',
		headers: {
			accept: '/',
			'accept-language': "en-US,en;q=0.9",
			'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
			...headers
		},
		data: body
	})
	var hasil = {
		author: "katashi",
		data: c.data,
		url: apa.build_server + c.data.image
	}
	return hasil
}
async function ephotor(url, text, radio) {
	if (!/^https:\/\/ephoto360\.com\/.+\.html$/.test(url) && !/^https:\/\/en.ephoto360\.com\/.+\.html$/.test(url))
		throw new Error("Invalid URL");
	var a = await axios.request(url, {
		method: 'GET',
		headers: {
			accept: '/',
			'accept-language': "en-US,en;q=0.9",
			'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
		}
	})
	var html = a.data
	var $ = cheerio.load(html)
	var cookies = a.headers['set-cookie'].toString()
	var form = new former()
	if (typeof text === "string") text = [text]
	for (texts of text) form.append("text[]", texts)
	form.append("submit", $("input[name=submit]").attr("value"))
	form.append("token", $("input[name=token]").attr("value"))
	form.append("radio0[radio]", radio)
	form.append("build_server", $("input[name=build_server]").attr("value"))
	form.append("build_server_id", $("input[name=build_server_id]").attr("value"))

	var a2 = await axios.request(url, {
		method: 'POST',
		headers: {
			accept: '/',
			'accept-language': "en-US,en;q=0.9",
			...form.getHeaders(),
			cookie: cookies,
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
		},
		data: form.getBuffer()
	})
	var $$ = cheerio.load(a2.data)
	var form_value = $$("input[name=form_value_input]").attr("value")
	if (!form_value) throw new Error('Token invalid? False')
	var apa = JSON.parse(form_value)
	var e = encodeURIComponent
	var body = Object.keys(apa).map(key => {
		vals = apa[key]
		isArray = Array.isArray(vals)
		keyq = e(key + (isArray ? '[]' : ''))
		if (!isArray) vals = [vals]
		out = []
		for (valq of vals) out.push(keyq + '=' + e(valq))
		return out.join('&')
	}).join('&')
	var body2 = body.split('radio0=%5Bobject%20Object%5D').join('radio0%5Bradio%5D=' + apa.radio0.radio)
	var headers = {
		cookie: cookies
	}
	var u = new URL(url)
	var c = await axios.request(u.origin + "/effect/create-image", {
		method: 'POST',
		headers: {
			accept: '/',
			'accept-language': "en-US,en;q=0.9",
			'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
			...headers
		},
		data: body2
	})
	var hasil = {
		author: "katashi",
		data: c.data,
		url: apa.build_server + c.data.image
	}
	return hasil
}

///Game

async function asahotak() {
    return new Promise((resolve, reject) => {
        fetch('https://www.cademedia.com/jawaban-tebak-tebakan-asah-otak')
            .then(res => res.text())
            .then(res => {
                const $ = cheerio.load(res)
                data = []
                go = $('body').find('div.entry-content').text().split('P:')
                for (let i = 2; i < go.length; i++) {
                    x = (go[i].split('J:')[0]).trim()
                    switch (i) {
                        case 229: y = (go[i].split('J:')[1].split('Level')[0].split('Demikian')[0]).trim()
                            break; default: y = (go[i].split('J:')[1].split('Level')[0]).trim()
                    } data.push({ creator: "Katashi", pertanyaan: x, jawaban: y })
                }
                // save json
                // fs.writeFileSync('./asahotak.json', JSON.stringify(data))
                resolve(data)
            }).catch(reject)
    })
}

async function family100() {
    return new Promise((resolve, reject) => {
        fetch('https://teknologital.com/kunci-jawaban-ica-ica')
            .then(res => res.text())
            .then(res => {
                const $ = cheerio.load(res)
                data = []
                go = $('body').find('div.entry-content').text().split('Jawaban :')
                for (let i = 1; i < go.length; i++) {
                    y = (go[i - 1].split('\n')[1]).trim()
                    z = (go[i].split('\n')[0]).trim()
                    if (i !== 1) {
                        data.push({ creator: "Katashi", pertanyaan: y, jawaban: z })
                    }
                }
                // save json
                // fs.writeFileSync('./ica.json', JSON.stringify(data))
                resolve(data)
            }).catch(reject)
    })
}

async function siapakah() {
    return new Promise((resolve, reject) => {
        fetch('https://tutorialaplikasi.com/kunci-jawaban-tebak-siapakah-aku/')
            .then(res => res.text())
            .then(res => {
                const $ = cheerio.load(res)
                let data = []
                $('body').find('li').each(function (index, element) {
                    let x = $(this).html().split('<strong>')[0]
                    let y = $(this).find('strong').text()
                    data.push({ creator: "Katashi", pertanyaan: x, jawaban: y })
                })
                data.splice(0, 11)
                data.splice(100, 131)
                resolve(data)
            }).catch(reject)
    })
}

async function siapakah2() {
    return new Promise((resolve, reject) => {
        fetch('https://jagat-nusantara.blogspot.com/2018/01/kunci-jawaban-tebak-siapakah-aku-m.html')
            .then(res => res.text())
            .then(res => {
                const $ = cheerio.load(res)
                data = []
                go = $('article').find('div[id="adsmiddle27044024372030888142"]').text()
                for (let i = 0; i < 534; i++) {
                    x = go.split(i + '.')[1].split('\n')[0].trim()
                    y = go.split(i + '.')[1].split('Jawaban:')[1].split('\n')[0].trim()
                    data.push({ creator: "Katashi", pertanyaan: x, jawaban: y })
                } resolve(data)
            }).catch(reject)
    })
}

async function susunkata() {
    return new Promise((resolve, reject) => {
        fetch('https://www.cademedia.com/jawaban-tebak-tebakan-susun-kata')
            .then(res => res.text())
            .then(res => {
                const $ = cheerio.load(res)
                data = []
                go = $('body').find('article').text()
                for (let i = 2; i < 350; i++) {
                    v = go.split('Level ' + i)[1].split(':')[0]
                    x = go.split('Level ' + i)[1].split(':')[1]
                    if (i !== 21 && i !== 51 && i !== 101 && i !== 151 && i !== 201 && i !== 251 && i !== 301) {
                        if (i == 50 || i == 100 || i == 150 || i == 200 || i == 250 || i == 250 || i == 300) {
                            y = go.split('Level ' + i)[1].split('Jawaban')[1].split('Susun')[0]
                        } else {
                            y = go.split('Level ' + i)[1].split('Jawaban')[1].split('Level')[0]
                        }
                        data.push({ tipe: v.trim(), acak: x.replace(/(Jawaban)/gi, '').trim(), jawaban: y.replace(/:/g, '').trim() })
                        // save json
                        // fs.writeFileSync('./susunkata.json', JSON.stringify(data))
                    }
                }
                data.splice(0, 2)
                resolve(data)
            }).catch(reject)
    })
}

async function tekateki() {
    return new Promise((resolve, reject) => {
        fetch('https://www.kabargames.id/kunci-jawaban-tebak-tebakan-2020')
            .then(res => res.text())
            .then(res => {
                const $ = cheerio.load(res)
                data = []
                go = $('body').find('div.post__content').text()
                for (let i = 1; i < 201; i++) {
                    v = (go.split('Level ' + i + 'Pertanyaan:')[1].split('Jawaban')[0]).trim()
                    switch (i) {
                        case 1: x = go.split('Level ' + i + ' – 20Level ' + i)[1].split('Jawaban:')[1]
                            break
                        case 21: x = go.split('Level ' + i + ' – 40Level ' + i)[1].split('Jawaban:')[1]
                            break
                        case 41: x = go.split('Level ' + i + ' – 60Level ' + i)[1].split('Jawaban:')[1]
                            break
                        case 61: x = go.split('Level ' + i + ' – 80Level ' + i)[1].split('Jawaban:')[1]
                            break
                        case 81: x = go.split('Level ' + i + ' – 100Level ' + i)[1].split('Jawaban:')[1]
                            break
                        case 101: x = go.split('Level ' + i + ' – 120Level ' + i)[1].split('Jawaban:')[1]
                            break
                        case 121: x = go.split('Level ' + i + ' – 140Level ' + i)[1].split('Jawaban:')[1]
                            break
                        case 141: x = go.split('Level ' + i + ' – 160Level ' + i)[1].split('Jawaban:')[1]
                            break
                        case 161: x = go.split('Level ' + i + ' – 180Level ' + i)[1].split('Jawaban:')[1]
                            break
                        case 181: x = go.split('Level ' + i + ' – 200Level ' + i)[1].split('Jawaban:')[1]
                            break
                        default: x = go.split('Level ' + i)[1].split('Jawaban:')[1]
                    }
                    if (i == 20 || i == 40 || i == 60 || i == 80 || i == 100 || i == 120 || i == 140 || i == 160 || i == 180) {
                        y = (x.split('Kunci')[0]).trim()
                    } else if (i == 200) {
                        y = (x.split('Nah')[0]).trim()
                    } else {
                        y = (x.split('Level')[0]).trim()
                    }
                    data.push({ creator: "Katashi", pertanyaan: v, jawaban: y })
                    // save json
                    // fs.writeFileSync('./tekateki.json', JSON.stringify(data))
                } resolve(data)
            }).catch(reject)
    })
}

///Downloader

async function savefrom(link) {
     let dl = `${link}`
     let url = 'https://id.savefrom.net/9-how-to-download-facebook-video.html'
     const browser = await puppeteer.launch({
          headless: false,
          executablePath: 'C://Program Files//Google//Chrome//Application//chrome.exe',
          defaultViewport: null
     })
     const page = await browser.newPage()
     await page.goto(url)
     await page.type('#sf_url', dl)
     await page.click('#sf_submit')
     await page.waitForSelector('a.link.link-download')
     const bodyHandle = await page.$('body');
     const html = await page.evaluate(body => body.innerHTML, bodyHandle);
     await bodyHandle.dispose();
     const $ = cheerio.load(html)
     const title = $('div.row.title').attr('title')
     const urls = $('#sf_result > div > div.result-box.video > div.info-box > div.link-box > div.def-btn-box > a').attr('href')
     resolve({
			title: title,
          url: urls
		})
     await browser.close()
}

async function mediafire(url) {
let query = await axios.get(url) 
let cher = cheerio.load(query.data)
let hasil = []
let link = cher('a#downloadButton').attr('href')
let size = cher('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace(' ', '')
let seplit = link.split('/')
let author = 'Katashi Hana'
let nama = seplit[5]
let mime = nama.split('.')
mime = mime[1]
hasil.push({ author, nama, mime, size, link })
return hasil
console.log(hasil)
}

async function sfile(urlnya) {
	return new Promise((resolve, reject) => {
		let oi = axios.request({
				url: urlnya,
				method: 'get',
				headers: {
					Accept: 'application/json, text/plain, */*',
					'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
				}
			})
			.then(({
				data
			}) => { //console.log(data)
				const $ = cheerio.load(data)
				const link = $('a#download').attr('href')
				let judul = $('div > b').text()
				let uploadet = $('div.list').eq(2).text().replace('\n - Uploaded: ', '')
				let total = $('div.list').eq(3).text().replace('\n - Downloads: ', '')
				let deskripsi = $('div.list').eq(4).text().replace('\n', ' ')
				let res = {
					status: true,
					msg: "Thanks For Using This API",
					result: {
						author: "katashi",
						title: judul,
						tanggal_upload: uploadet,
						total_download: total,
						deskripsi: deskripsi,
						url_download: link
					}
				}
				resolve({
					res
				})
			}).catch(reject)
	})
}

async function twitter(link){
	return new Promise((resolve, reject) => {
let config = {
	'URL': link
}
axios.post('https://twdown.net/download.php',qs.stringify(config),{
	headers: {
"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
"sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
"cookie": "_ga=GA1.2.1388798541.1625064838; _gid=GA1.2.1351476739.1625064838; __gads=ID=7a60905ab10b2596-229566750eca0064:T=1625064837:RT=1625064837:S=ALNI_Mbg3GGC2b3oBVCUJt9UImup-j20Iw; _gat=1"
	}
})
.then(({ data }) => {
const $ = cheerio.load(data)
resolve({
desc: $('div:nth-child(1) > div:nth-child(2) > p').text().trim(),
thumb: $('div:nth-child(1) > img').attr('src'),
HD: $('tbody > tr:nth-child(1) > td:nth-child(4) > a').attr('href'),
SD: $('tr:nth-child(2) > td:nth-child(4) > a').attr('href'),
audio: 'https://twdown.net/' + $('tr:nth-child(4) > td:nth-child(4) > a').attr('href')
	})
})
	.catch(reject)
	})
}

async function igvideo(link) {
return new Promise(async(resolve, reject) => {
let config = {
'url': link,
'submit': ''
}
axios('https://downloadgram.org/video-downloader.php',{
method: 'POST',
data : new URLSearchParams(Object.entries(config)),
headers: {
"cookie": "_ga=GA1.2.623704211.1625264926; __gads=ID=a078e4fc2781b47b-22330cd520ca006e:T=1625264920:RT=1625264920:S=ALNI_MYS-jyPCjNa94DU8n-sX4aNF-ODOg; __atssc=google%3B3; _gid=GA1.2.1953813019.1625397379; __atuvc=4%7C26%2C6%7C27; __atuvs=60e2ab6d67a322ec003",
"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}
})
.then(tod => {
const $ = cheerio.load(tod.data)
resolve({
link: $('#downloadBox > a').attr('href')
})
})
})
} 
 
async function igfoto(link) {
return new Promise(async(resolve, reject) => {
let config = {
'url': link,
'submit': ''
}
axios('https://downloadgram.org/photo-downloader.php',{
method: 'POST',
data : new URLSearchParams(Object.entries(config)),
headers: {
"cookie": "_ga=GA1.2.623704211.1625264926; __gads=ID=a078e4fc2781b47b-22330cd520ca006e:T=1625264920:RT=1625264920:S=ALNI_MYS-jyPCjNa94DU8n-sX4aNF-ODOg; __atssc=google%3B3; _gid=GA1.2.1953813019.1625397379; __atuvc=4%7C26%2C6%7C27; __atuvs=60e2ab6d67a322ec003",
"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}
})
.then(tod => {
const $ = cheerio.load(tod.data)
resolve({
link: $('#downloadBox > a').attr('href')
})
})
})
}

async function igtv(link) {
return new Promise(async(resolve, reject) => {
let config = {
'url': link,
'submit': ''
}
axios('https://downloadgram.org/igtv-downloader.php',{
method: 'POST',
data : new URLSearchParams(Object.entries(config)),
headers: {
"cookie": "_ga=GA1.2.623704211.1625264926; __gads=ID=a078e4fc2781b47b-22330cd520ca006e:T=1625264920:RT=1625264920:S=ALNI_MYS-jyPCjNa94DU8n-sX4aNF-ODOg; __atssc=google%3B3; _gid=GA1.2.1953813019.1625397379; __atuvc=4%7C26%2C6%7C27; __atuvs=60e2ab6d67a322ec003",
"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}
})
.then(tod => {
const $ = cheerio.load(tod.data)
resolve({
link: $('#downloadBox > a').attr('href')
})
})
})
}

exports.soundcloud = async (link) => {
	return new Promise((resolve, reject) => {
		const options = {
			method: 'POST',
			url: "https://www.klickaud.co/download.php",
			headers: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			formData: {
				'value': link,
				'2311a6d881b099dc3820600739d52e64a1e6dcfe55097b5c7c649088c4e50c37': '710c08f2ba36bd969d1cbc68f59797421fcf90ca7cd398f78d67dfd8c3e554e3'
			}
		};
		request(options, async function(error, response, body) {
			console.log(body)
			if (error) throw new Error(error);
			const $ = cheerio.load(body)
			resolve({
				author: "katashi",
				judul: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(2)').text(),
				download_count: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(3)').text(),
				thumb: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(1) > img').attr('src'),
				link: $('#dlMP3').attr('onclick').split(`downloadFile('`)[1].split(`',`)[0]
			});
		});
	})
}

async function zippy(Url) {
	return new Promise(async(resolve, reject) => { 
		try {
			axios.get(Url).then(res => {
				let result = {}
				const $ = cheerio.load(res.data)
				let text = $('#lrbox').find('div.center > div:nth-child(1)').text().split('\n')
				result.title = (text[3] ||'').trim()
				result.size = ((text[4] || '').replace('Size:', '') || '').trim()
				result.upload_date = ((text[5] || '').replace('Uploaded:', '') || '').trim()
				$('script').each((i, e) => {
					let sc = $(e).html().search(/dlbutton/g)
					if (sc >= 0) {
						let divider = $(e).html().split(';')[0]
						let decrypt = divider.split("document.getElementById('dlbutton').href =")[1]
						console.log(decrypt)
						let _url
						if (decrypt) {
							_url = url.parse(Url).hostname + eval(decrypt)
							_url = _url.startsWith('http') ? _url : 'http://' + _url
							const url_final = _url
							result.url = url_final
						}
					}
				})
				resolve(result)
			})
		} catch(e) {
			console.log(e)
		}
	})
}

async function igstory(username){
	return new Promise(async(resolve, reject) => {
		axios.request({
			url: 'https://www.instagramsave.com/instagram-story-downloader.php',
			method: 'GET',
			headers:{
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
			}
		})
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const token = $('#token').attr('value')
			let config ={
				headers: {
					'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
					"sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
					"cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				},
				data: {
					'url':'https://www.instagram.com/'+ username,
					'action': 'story',
					'token': token
				}
			}
		axios.post('https://www.instagramsave.com/system/action.php',qs.stringify(config.data), { headers: config.headers })
		.then(({ data }) => {
		resolve(data.medias)
		   })
		})
	.catch(reject)
	})
}

///New fitur 

exports.rexdl = async (query) => {
	return new Promise((resolve) => {
		axios.get('https://rexdl.com/?s=' + query)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const judul = [];
				const jenis = [];
				const date = [];
				const desc = [];
				const link = [];
				const thumb = [];
				const result = [];
				$('div > div.post-content').each(function(a, b) {
					judul.push($(b).find('h2.post-title > a').attr('title'))
					jenis.push($(b).find('p.post-category').text())
					date.push($(b).find('p.post-date').text())
					desc.push($(b).find('div.entry.excerpt').text())
					link.push($(b).find('h2.post-title > a').attr('href'))
				})
				$('div > div.post-thumbnail > a > img').each(function(a, b) {
					thumb.push($(b).attr('data-src'))
				})
				for (let i = 0; i < judul.length; i++) {
					result.push({
						creator: 'katashi hana',
						judul: judul[i],
						kategori: jenis[i],
						upload_date: date[i],
						deskripsi: desc[i],
						thumb: thumb[i],
						link: link[i]
					})
				}
				resolve(result)
			})
	})
}
exports.rexdldown = async (link) => {
	return new Promise((resolve) => {
		axios.get(link)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const link = [];
				const url = [];
				const link_name = [];
				const judul = $('#page > div > div > div > section > div:nth-child(2) > article > div > h1.post-title').text();
				const plink = $('#page > div > div > div > section > div:nth-child(2) > center:nth-child(3) > h2 > span > a').attr('href')
				axios.get(plink)
					.then(({
						data
					}) => {
						const $$ = cheerio.load(data)
						$$('#dlbox > ul.dl > a > li > span').each(function(a, b) {
							deta = $$(b).text();
							link_name.push(deta)
						})
						$$('#dlbox > ul.dl > a').each(function(a, b) {
							url.push($$(b).attr('href'))
						})
						for (let i = 0; i < link_name.length; i++) {
							link.push({
								link_name: link_name[i],
								url: url[i]
							})
						}
						resolve({
							creator: 'katashi hana',
							judul: judul,
							update_date: $$('#dlbox > ul.dl-list > li.dl-update > span:nth-child(2)').text(),
							version: $$('#dlbox > ul.dl-list > li.dl-version > span:nth-child(2)').text(),
							size: $$('#dlbox > ul.dl-list > li.dl-size > span:nth-child(2)').text(),
							download: link
						})
					})
			})
	})
}
exports.merdekanews = async () => {
	return new Promise((resolve) => {
		axios.get('https://www.merdeka.com/peristiwa/')
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const judul = [];
				const upload = [];
				const link = [];
				const thumb = [];
				const result = [];
				$('#mdk-content-center > div.inner-content > ul > li > div').each(function(a, b) {
					deta = $(b).find('h3 > a').text();
					judul.push(deta)
					link.push('https://www.merdeka.com' + $(b).find('h3 > a').attr('href'))
					upload.push($(b).find('div > span').text())
					thumb.push($(b).find('div > a > img').attr('src'))
				})
				for (let i = 0; i < judul.length; i++) {
					result.push({
						author: "katashi",
						judul: judul[i],
						upload_date: upload[i],
						link: link[i],
						thumb: thumb[i]
					})
				}
				resolve(result)
			})
	})
}
exports.metronews = async () => {
	return new Promise((resolve) => {
		axios.get('https://www.metrotvnews.com/news')
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const judul = [];
				const desc = [];
				const link = [];
				const thumb = [];
				const tag = [];
				const result = [];
				$('body > div.container.layout > section.content > div > div.item-list.pt-20 > div > div > h3 > a').each(function(a, b) {
					judul.push($(b).attr('title'))
				})
				$('body > div.container.layout > section.content > div > div.item-list.pt-20 > div > div > p').each(function(a, b) {
					deta = $(b).text();
					desc.push(deta)
				})
				$('body > div.container.layout > section.content > div > div.item-list.pt-20 > div > div > h3 > a').each(function(a, b) {
					link.push('https://www.metrotvnews.com' + $(b).attr('href'))
				})
				$('body > div.container.layout > section.content > div > div.item-list.pt-20 > div > img').each(function(a, b) {
					thumb.push($(b).attr('src').replace('w=300', 'w=720'))
				})
				for (let i = 0; i < judul.length; i++) {
					result.push({
						author: "katashi",
						judul: judul[i],
						link: link[i],
						thumb: thumb[i],
						deskripsi: desc[i]
					})
				}
				resolve(result)
			})
	})
}

module.exports.Adventure = Adventure
module.exports.Action = Action
module.exports.shorturl = shorturl
module.exports.getUrlTiny = getUrlTiny
module.exports.searchLineSticker = searchLineSticker
module.exports.savefrom = savefrom
module.exports.charaCheck = charaCheck
module.exports.chara = chara
module.exports.brainlydetail = brainlydetail
module.exports.brainly = brainly
module.exports.brainly2 = brainly2
module.exports.brainly3 = brainly3
module.exports.photofunimg = photofunimg
module.exports.photofuntext = photofuntext
module.exports.wattpad = wattpad
module.exports.random_detail = random_detail
module.exports.sfile = sfile
module.exports.radio = radio
module.exports.ephoto = ephoto
module.exports.ephotor = ephotor
module.exports.ephotoi = ephotoi
module.exports.ephotoi2 = ephotoi2
module.exports.ephotori = ephotori
module.exports.ephototi = ephototi
module.exports.ephototri = ephototri
module.exports.top4top = top4top
module.exports.asahotak = asahotak
module.exports.family100 = family100
module.exports.siapakah = siapakah
module.exports.siapakah2 = siapakah2
module.exports.susunkata = susunkata
module.exports.tekateki = tekateki
module.exports.mediafire = mediafire
module.exports.twitter = twitter
module.exports.playstore = playstore
module.exports.halal = halal
module.exports.kodepos = kodepos
module.exports.gempa = gempa
module.exports.mcpedl = mcpedl
module.exports.sfilesearch = sfilesearch
module.exports.hoax = hoax
module.exports.igvideo = igvideo
module.exports.igfoto = igfoto
module.exports.igtv = igtv
module.exports.palingmurah = palingmurah
module.exports.joox = joox
module.exports.trendtwit = trendtwit
module.exports.RandomCerpen = RandomCerpen
module.exports.Liriklagu = Liriklagu
module.exports.FilmApik23 = FilmApik23
module.exports.GSMArena = GSMArena
module.exports.Shoope = Shoope
module.exports.zippy = zippy
module.exports.quotesAnime = quotesAnime
module.exports.igstory = igstory
module.exports.herodetails = herodetails
module.exports.herolist = herolist
