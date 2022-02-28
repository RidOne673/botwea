const axios = require('axios');
const cheerio = require('cheerio');


async function stickerSearch(query) {
	const link = await axios.get(`https://getstickerpack.com/stickers?query=${query}`);
	const $ = cheerio.load(link.data)
	let sticker1 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(1) > a > div > img').attr('src'),
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(1) > a > div > span.title').text().trim(),
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(1) > a > div > span.username').text().trim()
	}
	let sticker2 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(2) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(2) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(2) > a > div > span.username').text().trim() 
	}
	let sticker3 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(3) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(3) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(3) > a > div > span.username').text().trim() 
	}
	let sticker4 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(4) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(4) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(4) > a > div > span.username').text().trim() 
	}
	let sticker5 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(5) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(5) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(5) > a > div > span.username').text().trim() 
	}
	let sticker6 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(6) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(6) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(6) > a > div > span.username').text().trim() 
	}
	let sticker7 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(7) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(7) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(7) > a > div > span.username').text().trim() 
	}
	let sticker8 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(8) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(8) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(8) > a > div > span.username').text().trim() 
	}
	let sticker9 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(9) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(9) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(9) > a > div > span.username').text().trim() 
	}
	let sticker10 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(10) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(10) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(10) > a > div > span.username').text().trim() 
	}
	let sticker11 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(11) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(11) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(11) > a > div > span.username').text().trim() 
	}
	let sticker12 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(12) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(12) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(12) > a > div > span.username').text().trim() 
	}
	let stickerlop =  [
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(1) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(2) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(3) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(4) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(5) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(6) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(7) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(8) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(9) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(10) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(11) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(12) > a > div > img').attr('src')
	]
let data = {
		sticker: stickerlop, sticker1, sticker2, sticker3, sticker4, sticker5, sticker6, sticker7, sticker8, sticker9, sticker10, sticker11, sticker12
	}
	return data
}


module.exports = { stickerSearch }