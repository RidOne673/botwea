const translate = require('@vitalets/google-translate-api');

async function terjemah (text, lang) {
	return new Promise ((resolve, reject) => {
		try{
			const terj = translate(text, {to: lang})
            .then((data) => {
                res = data.text
                return res
            })
            resolve(terj)
        } catch (error) {
            reject(error)
		}
		 console.log(error)
	})
}

module.exports = { terjemah }
