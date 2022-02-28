const fetch = require('node-fetch')

const ayla = async (pesan) => {
	try {
		const aay = await fetch(`https://api-xcoders.xyz/api/fun/simi?text=${pesan}&apikey=hnslrl1882`, {method: 'GET'})
		const res = await aay.json()
		return res.result
	} catch {
		return 'Maaf, Ayla tidak mengerti apa yang kamu bicarakan'
	}
}
module.exports = { 
 ayla,
}