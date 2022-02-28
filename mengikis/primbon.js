const axios = require("axios");
const cheerio = require("cheerio");
const request = require("request");

async function artiMimpi(mimpi) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://www.primbon.com/tafsir_mimpi.php?mimpi=${mimpi}&submit=+Submit+`
      )
      .then(({ data }) => {
        const $ = cheerio.load(data);
        const cek = $("#body > font > i").text();
        const adaga = /Tidak ditemukan/g.test(cek) ? false : true;
        if (adaga) {
          const isi = $("#body")
            .text()
            .split(`Hasil pencarian untuk kata kunci: ${mimpi}`)[1]
            .replace(/\n\n\n\n\n\n\n\n\n/gi, "\n");
          const result = {
            result: isi.replace(/\n/gi, "").replace("       ", "").replace("\"        ", "")
          };
          resolve(result);
        } else {
          const result = {
            result: `Arti mimpi ${mimpi} tidak di temukan`
          };
          resolve(result);
        }
      })
      .catch(reject);
  });
};

async function artiNama(nama) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://www.primbon.com/arti_nama.php?nama1=${nama}&proses=+Submit%21+`
      )
      .then(({ data }) => {
        const $ = cheerio.load(data);
        const isi = $("#body").text().split("Nama:")[0];
        const result = {
          result: isi.replace(/\n/gi, "").replace("ARTI NAMA", "").replace("                                ", "")
        };
        resolve(result);
      })
      .catch(reject);
  });
};

async function ramalJodoh(nama1, nama2) {
  return new Promise((resolve, reject) => {
    axios
    .get(`https://www.primbon.com/kecocokan_nama_pasangan.php?nama1=${nama1}&nama2=${nama2}&proses=+Submit%21+`)
    .then(({ data }) => {
     const $ = cheerio.load(data);
     const thumbnail = 'https://www.primbon.com/'+$('#body > img').attr('src');
     const res = $('#body').text().split(nama2)[1].replace('< Hitung Kembali','').split('\n')[0];
     const positif = res.split('Sisi Negatif Anda: ')[0].replace('Sisi Positif Anda: ','')
     const negatif = res.split('Sisi Negatif Anda: ')[1]
     const result = {
          namaKamu: nama1,
          namaPasangan: nama2,
          thumbnail: thumbnail,
          positif: positif,
          negatif: negatif
     }
     resolve(result);
    })
    .catch(reject);
  });
};

async function nomorHoki(nomor) {
  return new Promise((resolve, reject) => {
    var options = { method: 'POST',
      url: 'https://primbon.com/no_hoki_bagua_shuzi.php',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      form: { nomer: nomor, submit: ' Submit! ' } };

      request(options, function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body);
      const result = $('#body').text().split('POTENSI HOKI')[1].replace('\n\n\n\n  \n    \nMasukkan Nomor HP Anda\n    \n  \n  \n    \n\n    \n    \n\n    \n  \n\n\n\n\nMeningkatkan Keberuntungan Melalui Nomor Handphone (HP)\nNomor HP adalah gabungan kombinasi angka-angka yang sebenarnya memiliki arti, ada yang membawa pengaruh baik (hoki), biasa, atau bahkan dianggap kurang baik. Sebuah nomor HP bisa saja dianggap cantik, dijual sampai jutaan, bahkan puluhan juta rupiah, namun nomor tersebut belum tentu hoki. Aplikasi ini dibuat untuk mengecek seberapa jauh pengaruh energi suatu deret nomor HP berdasarkan algoritma Bagua Shuzi, yaitu metode China kuno yang sudah berusia ribuan tahun yang bertujuan untuk mengejar keberuntungan melalui pemilihan angka.\n\nBagua Shuzi menjelaskan pengaruh kombinasi angka yang berupa energi Kekayaan (Sheng Qi), Kesehatan (Tian Yi), Cinta/Relasi (Yan Nian), dan Kelancaran/Kestabilan (Fu Wei), sebagai energi positif. Sedangkan energi Perselisihan (Huo Hai), Kehilangan (Liu Sha), Malapetaka (Wu Gui), dan Kehancuran (Jue Ming), sebagai energi negatif. Sebuah nomor dikatakan baik atau hoki jika persentase energi positifnya lebih banyak dibanding energi negatifnya. Karena metode Bagua Shuzi menggunakan algoritma perhitungan yang cukup kompleks, maka tidak heran jika nomor hoki jumlahnya lebih terbatas dibanding nomor cantik.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    \n    ', '')
      resolve({
        result: 'POTENSI HOKI'+result
      });
    });

  })
}

async function zodiakMing(querry) {
	const link = await axios.get(`https://www.fimela.com/zodiak/${querry}/minggu-ini`)
	const  $ = cheerio.load(link.data)
	let thumb = $('body > div > div > div').find('div > div > a > img').attr('src')
	let judul = $('body > div > div > div').find('div > div > div.zodiak--content-header__text > h5').text().trim()
	let date = $('body > div > div > div').find('div> div.zodiak--content-header__text > span').text().trim()
	let hoki = $('body > div > div > div > div').find('div > div > div:nth-child(1) > div > span').text().trim()
	let umum = $('body > div > div > div > div').find(' div > div > div:nth-child(1) > div > p').text().trim()
	let love = $('body > div > div > div > div').find(' div > div > div:nth-child(2) > div > p').text().trim()
	let keuangan = $('body > div > div > div > div').find(' div > div > div:nth-child(3) > div > p').text().trim()
	const result = {
			zodiak: judul,
			thumb: thumb,
			date: date,
			nomer_hoki: hoki,
			ramalan: {
				umum: umum,
				love: love,
				keuangan: keuangan
			}
	}
	return result
}
async function zodiakHar (querry) {
	let Hasil = []
	await axios.request(`https://www.fimela.com/zodiak/${querry}`, {
			method: "GET",
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"accept-language": "en-US,en;q=0.9,id;q=0.8",
				"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
			}
		}).then(({ data}) => {
			const $ = cheerio.load(data)
			let thumb = $('body > div > div > div').find('div > div > a > img').attr('src')
			let judul = $('body > div > div.container-main > div.container-article > div').find('div.zodiak--content-header__right > div.zodiak--content-header__text > h5').text().trim()
			let tanggal = $('body > div > div > div > div > div > div > span').text().trim()
			let nomer_ = $('body > div > div > div > div > div > div').find('div:nth-child(1) > div.zodiak--content__content > span').text().trim()
			let isi = []
			$('body > div > div > div > div > div > div').each(function (anu, RA) {
				let umum = $(RA).find('div:nth-child(1) > div.zodiak--content__content > p').text().trim() || undefined
				let love = $(RA).find('div:nth-child(2) > div.zodiak--content__content > p').text().trim() || undefined
				let keuangan = $(RA).find('div:nth-child(3) > div.zodiak--content__content > p').text().trim() || undefined
				let Data = {
					umum: umum,
					love: love,
					keuangan: keuangan
				}
				isi.push(Data)
			})
			let ramal = []
			isi.map(ryuzin => {
				if (ryuzin.umum === undefined) return
				if (ryuzin.love === undefined) return
				if (ryuzin.keuangan === undefined) return
				ramal.push(ryuzin)
			})
			const result = {
				zodiak: judul,
				thumb: thumb,
				date: tanggal,
				nomer_hoki: nomer_,
				ramalan: ramal[0]
			}
			Hasil.push(result)
		})
		return Hasil[0]
}

module.exports = { artiNama, artiMimpi, ramalJodoh, nomorHoki, zodiakMing, zodiakHar };