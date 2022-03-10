//KALIAN BOLEH UBAH NAMA,OWNER,DAN LAINNYA TAPI PLIS JANGAN UBAH AUTHORNYA, BIARKAN TETAP OCTV TECH
//SC INI GRATIS BUAT KALIAN JADI SADAR DIRINYA YAA, JANGAN SEENAKNYA, klo lu bisa bikin sendiri mah silahkan bikin sendiri.
//koe paham lah cok opo sng tak maksud, wong wes gede tuo jembuten iso ngocok barang ngono o mosok rak paham
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys");
const { color, bgcolor } = require('./lib/color');
const { help } = require('./src/help');
const { menu } = require('./src/menu')
const { listsurah } = require('./src/listsurah');
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions');
const { fetchJson, fetchText } = require('./lib/fetcher');
const { recognize } = require('./lib/ocr');
const { ayla } = require('./lib/ayla');
const { morse } = require('./lib/morse');
const { ytDonlodMp3, ytDonlodMp4, ytMp3, ytMp4, ytSearch } = require("./scrape/youtube");
const { linkwa } = require("./scrape/linkwa");
const { Gempa, Cuaca } = require("./scrape/bmkg");
const { textpro, textpro2, ephoto } = require("./scrape/textpro");
const { pinterest } = require("./scrape/pinterest");
const { artiNama, artiMimpi, ramalJodoh, nomorHoki, zodiakMing, zodiakHar } = require("./scrape/primbon");
const { tiktok } = require("./scrape/tiktok");
const { stickerSearch } = require("./scrape/semoji");
const { mediafireDl } = require ('./scrape/mediafire');
const { terjemah } = require ('./scrape/translate');
const fs = require('fs');
const crypto = require('crypto');
const moment = require('moment-timezone');
const { exec } = require('child_process');
const fetch = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg');
const imageToBase64 = require('image-to-base64');
const imgbb = require('imgbb-uploader');
const { ind } = require('./bahasa');
const brainly = require('brainly-scraper');
const lirik = require('lyrics-parse');
const similarity = require('similarity');
const mesg = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'));
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'));
const _ayla = JSON.parse(fs.readFileSync('./src/ayla.json'));
const _registered = JSON.parse(fs.readFileSync('./src/registered.json'));
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'));
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'));
const _afk = JSON.parse(fs.readFileSync('./src/afk.json'));
const power = JSON.parse(fs.readFileSync('./src/power.json'));
const _limit = JSON.parse(fs.readFileSync('./src/limit.json'));
const samih = JSON.parse(fs.readFileSync('./src/simi.json'));
const _level = JSON.parse(fs.readFileSync('./src/level.json'));
const _leveling = JSON.parse(fs.readFileSync('./src/leveling.json'));
const uang = JSON.parse(fs.readFileSync('./src/uang.json'));
const bad = JSON.parse(fs.readFileSync('./src/bad.json'));
const badword = JSON.parse(fs.readFileSync('./src/badword.json'));
const event = JSON.parse(fs.readFileSync('./src/event.json'));
const setting = JSON.parse(fs.readFileSync('./src/setting.json'));
const bacotrandom = JSON.parse(fs.readFileSync('./database/bacot.json'));
const cersex = JSON.parse(fs.readFileSync('./database/cersex.json'));
const islami = JSON.parse(fs.readFileSync('./database/quotesislami.json'));
const kehidupan = JSON.parse(fs.readFileSync('./database/quoteskehidupan.json'));
const nasehat = JSON.parse(fs.readFileSync('./database/quotesnasehat.json'));
const motivasi = JSON.parse(fs.readFileSync('./database/quotesmotivasi.json'));
const ban = JSON.parse(fs.readFileSync('./src/ban.json'));
const cewek = JSON.parse(fs.readFileSync('./database/cewek.json'));
const cowok = JSON.parse(fs.readFileSync('./database/cowok.json'));
const husbu = JSON.parse(fs.readFileSync('./database/husbu.json'));
const anime = JSON.parse(fs.readFileSync('./database/anime.json'));
const waifu = JSON.parse(fs.readFileSync('./database/waifu.json'));
const kpop = JSON.parse(fs.readFileSync('./database/kpop.json'));
const kucing = JSON.parse(fs.readFileSync('./database/kucing.json'));
const lolii = JSON.parse(fs.readFileSync('./database/loli.json'));
const changelog = JSON.parse(fs.readFileSync('./database/changelog.json'));
const asupan = JSON.parse(fs.readFileSync('./database/asupan.json'));

///Load file in bellow
const tebakgambar = new Set();
const caklontong = new Set();
const penjelasan = new Set();
const math2 = new Set();
const tbendera = new Set();
const tlagu = new Set();
const tibukota = new Set();
const kimia = new Set();
const asah = new Set();
const siapa =  new Set();
const susun = new Set();
const tebakan  = new Set();
const captcha = new Set();

const suit = JSON.parse(fs.readFileSync('./src/suit.json'));

///LOAD FILE DATABASE
const _bendera = JSON.parse(fs.readFileSync('./database/bendera.json'))
const _kimia = JSON.parse(fs.readFileSync('./database/kimia.json'));
const _asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'));
const _tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'));
const _captcha = JSON.parse(fs.readFileSync('./database/captcha.json'));
const _tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'));
const _susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'));
const _siapaaku = JSON.parse(fs.readFileSync('./database/siapaaku.json'));
const _math = JSON.parse(fs.readFileSync('./database/math.json'));
const _caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'));

prefix = setting.prefix
preff = setting.preff
blocked = ["6285865775319@s.whatsapp.net","6282349516238@s.whatsapp.net","6282210159450@s.whatsapp.net","6289512703226@s.whatsapp.net","6283191156893@s.whatsapp.net","6287844366550@s.whatsapp.net","6285770293378@s.whatsapp.net","62895619678228@s.whatsapp.net","6288231028441@s.whatsapp.net","62859181244066@s.whatsapp.net","6285648032282@s.whatsapp.net","6281334335408@s.whatsapp.net","6285727390824@s.whatsapp.net","6285879689074@s.whatsapp.net","6283143576784@s.whatsapp.net","265880820312@s.whatsapp.net"]

//setting
name = setting.name
limitawal = setting.limitawal
memberlimit = setting.memberlimit
tresshold = setting.tresshold

const usedCommandRecently = new Set();
const isFiltered = (from) => !!usedCommandRecently.has(from);
const addFilter = (from) => {
    usedCommandRecently.add(from);
    setTimeout(() => usedCommandRecently.delete(from), 5000);
};

const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

 
        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./src/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./src/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./src/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)]
        }
        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./src/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./src/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./src/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./src/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./src/limit.json', JSON.stringify(_limit))
            }
        }
             
        

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

function findUrl(message) {
  var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
  return message.match(urlRegex)
}

async function starts() {
	const client = new WAConnection()
	client.version = [3, 3234, 9]
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
	client.on('connecting', () => {
		start('2', 'Connecting...')
	})
	client.on('open', () => {
		success('2', 'Connected')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/nMgnn0m/Gambar-wa-6.jpg'
				}
				teks = `[ NEW MEMBER IN GROUP _*${mdata.subject}*_ ] \n*_____________*\n@${num.split('@')[0]}\nSELAMAT BERGABUNG\n \n\nIntro dulu yaa\n╭═══•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•═══
│
│Nama Lengkap    : 
│Ttl                          : 
│Agama                  : 
│Alamat Lengkap  : 
│Gender                  :
│Usia                       :
│Hobby                   :
│Cita-cita                :
│Alasan masuk gc:
│Motto hidup         :
│
╰═══ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙═══╯\n*_____________*\nGak intro KICK!1!1\nMoga betah Di group!\n\n\nNb:kalau bisa jenis kelamin berupa gambar`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/nMgnn0m/Gambar-wa-6.jpg'
				}
				teks =`Eh si anjing @${num.split('@')[0]} keluar`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	
	client.on('group-update', async (anu) => {
	metdata = await client.groupMetadata(anu.jid)
	if(anu.announce == 'false'){
	teks = `⚠️ Group Open ⚠️ \n_Group ini telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    client.sendMessage(metdata.id, teks, MessageType.text)
    console.log(`- [ Group Opened ] - In ${metdata.subject}`)
      }
    else if(anu.announce == 'true'){
    teks = `⚠️ Group Closed ⚠️ \n_Group ini telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    client.sendMessage(metdata.id, teks, MessageType.text)
    console.log(`- [ Group Closed ] - In ${metdata.subject}`)
    } else if(anu.restrict == 'false'){
    teks = ` ⚙️Public group setting change : false⚙️ `
    client.sendMessage(metdata.id, teks, MessageType.text)
    console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
    } else if(anu.restrict == 'true'){
	teks = ` ⚙️Public group setting change : true⚙️ `
	client.sendMessage(metdata.id, teks, MessageType.text)
	console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
    } 
    if(!anu.desc == ''){
	tehyung = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
	   teks = `✨ Deskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]} ✨\n\n•Deskripsi Baru : \n${anu.desc}`
	      client.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tehyung]}})
	      	 console.log(`- [ Group Description Change ] - In ${metdata.subject}`)
	     }
	})
	
	client.on('group-participants-update', async (anu) => {
	const mdata = await client.groupMetadata(anu.jid)
	if (anu.action == 'demote') {
				num = anu.participants[0]
				teks = `⚙️ _*DEMOTE DETECTOR!!*_ ⚙️\n@${num.split('@')[0]} _Telah di demote di grup ini_`
				client.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'promote') {
				num = anu.participants[0]
				teks = `⚙️ _*PROMOTE DETECTOR!!*_ ⚙️\n@${num.split('@')[0]} _Telah di promote di grup ini_`
				client.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
			}
	})

    client.on("CB:Call", json => {
      		let call;
      		calling = JSON.parse(JSON.stringify(json))
      		call = calling[1].from
      		setTimeout(function(){
      			client.sendMessage(call, `Maaf, nomor kamu diblokir karena bot tidak dapat menerima telepon.\nHarap baca rules dahulu sebelum menggunakan bot`, MessageType.text)
      			.then(() => client.blockUser(call, "add"))
      			}, 1000);
      		}
      	)

	client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
		try {
      if (!mek.hasNewMessage) return
        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			const type = Object.keys(mek.message)[0]
			const mentionUser = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
            mentionByReply = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentionUser.push(mentionByReply)
			const apiKey = setting.apiKey
      const zekaisApi = setting.zekais
			const lolApi = setting.lolApi
			const zeksApi = setting.zeksApi
			const insom = from.endsWith('@g.us')
			const botFebb = insom ? mek.participant : mek.key.remoteJid
			pushname2 = client.contacts[botFebb] != undefined ? client.contacts[botFebb].vname || client.contacts[botFebb].notify : undefined
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, listMessage, buttonsMessage } = MessageType
            const date = new Date().toLocaleDateString()
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const wektu = moment.tz('Asia/Jakarta').format('HH');
			const jam = moment.tz('Asia/Jakarta').format('HH');
  			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			body = (type === "conversation" && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == "imageMessage") && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == "videoMessage") && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == "extendedTextMessage") && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == "templateButtonReplyMessage") && mek.message.templateButtonReplyMessage.selectedId ? mek.message.templateButtonReplyMessage.selectedId : (type == "buttonsResponseMessage") && mek.message.buttonsResponseMessage.selectedButtonId ? mek.message.buttonsResponseMessage.selectedButtonId : (type === "listResponseMessage") && mek.message.listResponseMessage.singleSelectReply.selectedRowId ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : "";
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			body2 = (type === "conversation" && mek.message.conversation.startsWith(preff)) ? mek.message.conversation : (type == "imageMessage") && mek.message[type].caption.startsWith(preff) ? mek.message[type].caption : (type == "videoMessage") && mek.message[type].caption.startsWith(preff) ? mek.message[type].caption : (type == "extendedTextMessage") && mek.message[type].text.startsWith(preff) ? mek.message[type].text : (type == "templateButtonReplyMessage") && mek.message.templateButtonReplyMessage.selectedId ? mek.message.templateButtonReplyMessage.selectedId : (type == "buttonsResponseMessage") && mek.message.buttonsResponseMessage.selectedButtonId ? mek.message.buttonsResponseMessage.selectedButtonId : (type === "listResponseMessage") && mek.message.listResponseMessage.singleSelectReply.selectedRowId ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : "";
            buddy = budy.toLowerCase();
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const command2 = body2.slice(1).trim().split(/ +/).shift().toLowerCase()
            const ar = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
            const isCmd2 = body2.startsWith(preff)
			const tescuk = ["0@s.whatsapp.net"]
			client.chatRead (from)
            client.updatePresence(from, Presence.recording)

			mess = {
				wait: '⌛ Wait a minute... ⌛ ',
				success: '✔️ Berhasil ✔️',
				error: {
					stick: '❌ Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌',
					Iv: '❌ Link tidak valid ❌'
				},
				only: {
					nsfw: '❌NSFW tidak diaktifkan❌'	
					}
			}

			const botNumber = client.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`]
			const ownerNumber2 = [`${setting.ownerNumber2}@s.whatsapp.net`]// replace this with your number
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isEventon = isGroup ? event.includes(from) : false
      const isBadWord = isGroup ? badword.includes(from) : false
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
      const isLevelingOn = isGroup ? _leveling.includes(from) : false
      const isPower = isGroup ? power.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
      const isAntilink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
            const isSuit = suit.includes(sender)
			const isOwner2 = ownerNumber2.includes(sender)
			const isBanned = ban.includes(sender)
		 const isRegistered = _registered.includes(sender)
		 const isAyla = _ayla.includes(sender)
		 const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}})
			}
            const mntions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}, quoted: mek})
			}
const levelRole = getLevelingLevel(sender)

        var role = 'Newbie ㋡'

        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 210) {
            role = 'Legends 忍'
        } else if (levelRole <= 220) {
            role = 'Legends 忍'
        } else if (levelRole <= 230) {
            role = 'Legends 忍'
        } else if (levelRole <= 240) {
            role = 'Legends 忍'
        } else if (levelRole <= 250) {
            role = 'Legends 忍'
        } else if (levelRole <= 260) {
            role = 'Legends 忍'
        } else if (levelRole <= 270) {
            role = 'Legends 忍'
        } else if (levelRole <= 280) {
            role = 'Legends 忍'
        } else if (levelRole <= 290) {
            role = 'Legends 忍'
        } else if (levelRole <= 300) {
            role = 'Legends 忍'
        } else if (levelRole <= 310) {
            role = 'Legends 忍'
        } else if (levelRole <= 320) {
            role = 'Legends 忍'
        } else if (levelRole <= 330) {
            role = 'Legends 忍'
        } else if (levelRole <= 340) {
            role = 'Legends 忍'
        } else if (levelRole <= 350) {
            role = 'Legends 忍'
        } else if (levelRole <= 360) {
            role = 'Legends 忍'
        } else if (levelRole <= 370) {
            role = 'Legends 忍'
        } else if (levelRole <= 380) {
            role = 'Legends 忍'
        } else if (levelRole <= 390) {
            role = 'Legends 忍'
        } else if (levelRole <= 400) {
            role = 'Legends 忍'
        } else if (levelRole <= 410) {
            role = 'Legends 忍'
        } else if (levelRole <= 420) {
            role = 'Legends 忍'
        } else if (levelRole <= 430) {
            role = 'Legends 忍'
        } else if (levelRole <= 440) {
            role = 'Legends 忍'
        } else if (levelRole <= 450) {
            role = 'Legends 忍'
        } else if (levelRole <= 460) {
            role = 'Legends 忍'
        } else if (levelRole <= 470) {
            role = 'Legends 忍'
        } else if (levelRole <= 480) {
            role = 'Legends 忍'
        } else if (levelRole <= 490) {
            role = 'Legends 忍'
        } else if (levelRole <= 500) {
            role = 'Legends 忍'
        } else if (levelRole <= 600) {
            role = 'Legends 忍'
        } else if (levelRole <= 700) {
            role = 'Legends 忍'
        } else if (levelRole <= 800) {
            role = 'Legends 忍'
        } else if (levelRole <= 900) {
            role = 'Legends 忍'
        } else if (levelRole <= 1000) {
            role = 'Legends 忍'
        } else if (levelRole <= 2000) {
            role = 'Legends 忍'
        } else if (levelRole <= 3000) {
            role = 'Legends 忍'
        } else if (levelRole <= 4000) {
            role = 'Legends 忍'
        } else if (levelRole <= 5000) {
            role = 'Legends 忍'
        } else if (levelRole <= 6000) {
            role = 'Legends 忍'
        } else if (levelRole <= 7000) {
            role = 'Legends 忍'
        } else if (levelRole <= 8000) {
            role = 'Legends 忍'
        } else if (levelRole <= 9000) {
            role = 'Legends 忍'
        } else if (levelRole <= 10000) {
            role = 'Legends 忍'
           
           var prema = 'Free'
			if (!isOwner) {
				prema = 'Owner'
			}
	}

    // Tebak Gambar
        if (tebakgambar.hasOwnProperty(from) && !isCmd2) {
        jawaban = tebakgambar[from]
        if (budy.toLowerCase() == jawaban) {
        sim = await similarity(budy.toLowerCase(), jawaban)
        if (sim > tresshold) return reply('Sedikit lagi..!')
        buttons = [
        {buttonId: `${preff}tebakgambar`, buttonText: {displayText: 'Tebak Gambar'}, type: 1}
        ]

        buttonMess = {
        contentText: "*SELAMAT JAWABAN ANDA BENAR*",
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }

        client.sendMessage(from, buttonMess, buttonsMessage, {quoted: mek})
        delete tebakgambar[from]
        
        }
        if (messagesC.includes('pass')) {
            buttons = [
        {buttonId: `${preff}tebakgambar`, buttonText: {displayText: 'Tebak Gambar'}, type: 1}
        ]

        buttonMess = {
        contentText:`*Jawaban tebak gambar adalah* : ${jawaban}`,
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }

        client.sendMessage(from, buttonMess, buttonsMessage, {quoted: mek})
            delete tebakgambar[from]
        }
        }
        //CAK LONTONG
        if (caklontong.hasOwnProperty(from) && !isCmd2) {
        jawabane = caklontong[from]
        penjelasani = penjelasan[from]
        if (budy.toLowerCase() == jawabane) {
        sim = await similarity(budy.toLowerCase(), jawabane)
        if (sim > tresshold) return reply('Sedikit lagi..!')
         buttons = [
        {buttonId: `${preff}caklontong`, buttonText: {displayText: 'Cak Lontong'}, type: 1}
        ]

        buttonMess = {
        contentText: `Yap benar🥳🎉\n\n*Jawaban*:${jawabane}\n*Penjelasan*:${penjelasani}`,
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }

        client.sendMessage(from, buttonMess, buttonsMessage, {quoted: mek})
        delete caklontong[from]
        delete penjelasan[from]
        
        } 
        if (messagesC.includes('pass')) {
        buttons = [
        {buttonId: `${preff}caklontong`, buttonText: {displayText: 'Cak Lontong'}, type: 1}
        ]

        buttonMess = {
        contentText: "*Jawaban cak lontong adalah* : " + jawabane + "\n*Penjelasan*:" + penjelasani,
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }

        client.sendMessage(from, buttonMess, buttonsMessage, {quoted: mek})
        delete caklontong[from]
        delete penjelasan[from]
        }
        }
    //MATH2
        if (math2.hasOwnProperty(from) && !isCmd2) {
        jawabanmath = math2[from]
        if (budy.toLowerCase() == jawabanmath) {
        sim = await similarity(budy.toLowerCase(), jawabanmath)
        if (sim > tresshold) return reply('Sedikit lagi..!')
        buttons = [
        {buttonId: `${preff}math`, buttonText: {displayText: 'Math'}, type: 1}
        ]

        buttonMess = {
        contentText: `SELAMAT JAWABAN ANDA BENAR`,
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }

        client.sendMessage(from, buttonMess, buttonsMessage, {quoted: mek})
        delete math2[from]
        
        } 
    if (messagesC.includes('pass')) {
       buttons = [
        {buttonId: `${preff}math`, buttonText: {displayText: 'Math'}, type: 1}
        ]

        buttonMess = {
        contentText: `*Jawaban math adalah* : ${jawabanmath}`,
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }

        client.sendMessage(from, buttonMess, buttonsMessage, {quoted: mek})
        delete math2[from]
        }
        }
    //ASAH OTAK
        if (asah.hasOwnProperty(from) && !isCmd2) {
        jawabanmath = asah[from]
        if (budy.toLowerCase() == jawabanmath) {
        sim = await similarity(budy.toLowerCase(), jawabanmath)
        if (sim > tresshold) return reply('Sedikit lagi..!')
         buttons = [
        {buttonId: `${preff}asahotak`, buttonText: {displayText: 'Asah Otak'}, type: 1}
        ]

        buttonMess = {
        contentText: `SELAMAT JAWABAN ANDA BENAR`,
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }

        client.sendMessage(from, buttonMess, buttonsMessage, {quoted: mek})
        delete asah[from]
        
        } 
    if (messagesC.includes('pass')) {
         buttons = [
        {buttonId: `${preff}asahotak`, buttonText: {displayText: 'Asah Otak'}, type: 1}
        ]

        buttonMess = {
        contentText: `*Jawaban asahotak adalah* : ${jawabanmath}`,
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }

        client.sendMessage(from, buttonMess, buttonsMessage, {quoted: mek})
        delete asah[from]
    }
        }
    //SIAPAKAH AKUU
        if (siapa.hasOwnProperty(from) && !isCmd2) {
        jawabanmath = siapa[from]
        if (budy.toLowerCase() == jawabanmath) {
          sim = await similarity(budy.toLowerCase(), jawabanmath)
        if (sim > tresshold) return reply('Sedikit lagi..!')
        buttons = [
        {buttonId: `${preff}siapaaku`, buttonText: {displayText: 'Siapa Aku'}, type: 1}
        ]

        buttonMess = {
        contentText: `SELAMAT JAWABAN ANDA BENAR`,
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }

        client.sendMessage(from, buttonMess, buttonsMessage, {quoted: mek})
        delete siapa[from]
        
        } 
    if (messagesC.includes('pass')) {
       buttons = [
        {buttonId: `${preff}siapaaku`, buttonText: {displayText: 'Siapa Aku'}, type: 1}
        ]

        buttonMess = {
        contentText: `*Jawaban siapa aku adalah* : ${jawabanmath}`,
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }

        client.sendMessage(from, buttonMess, buttonsMessage, {quoted: mek})
        delete siapa[from]
    }
        }
        //SUSUN KATA
        if (susun.hasOwnProperty(from) && !isCmd2) {
        jawabanmath = susun[from]
        if (budy.toLowerCase() == jawabanmath) {
          sim = await similarity(budy.toLowerCase(), jawabanmath)
        if (sim > tresshold) return reply('Sedikit lagi..!')
        buttons = [
        {buttonId: `${preff}susunkata`, buttonText: {displayText: 'Susun Kata'}, type: 1}
        ]

        buttonMess = {
        contentText: `SELAMAT JAWABAN ANDA BENAR`,
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }

        client.sendMessage(from, buttonMess, buttonsMessage, {quoted: mek})
        delete susun[from]
        
        } 
    if (messagesC.includes('pass')) {
         buttons = [
        {buttonId: `${preff}susunkata`, buttonText: {displayText: 'Susun Kata'}, type: 1}
        ]

        buttonMess = {
        contentText: `*Jawaban susun kata adalah* : ${jawabanmath}`,
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }

        client.sendMessage(from, buttonMess, buttonsMessage, {quoted: mek})
        delete susun[from]
    }
        }
    //TEBAK TEBAKAN
        if (tebakan.hasOwnProperty(from) && !isCmd2) {
        jawabanmath = tebakan[from]
        if (budy.toLowerCase() == jawabanmath) {
          sim = await similarity(budy.toLowerCase(), jawabanmath)
        if (sim > tresshold) return reply('Sedikit lagi..!')
        buttons = [
        {buttonId: `${preff}tebaktebakan`, buttonText: {displayText: 'Tebak-tebakan'}, type: 1}
        ]

        buttonMess = {
        contentText: `SELAMAT JAWABAN ANDA BENAR`,
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }

        client.sendMessage(from, buttonMess, buttonsMessage, {quoted: mek})
        delete tebakan[from]
        
        } 
    if (messagesC.includes('pass')) {
        buttons = [
        {buttonId: `${preff}tebaktebakan`, buttonText: {displayText: 'Tebak-tebakan'}, type: 1}
        ]

        buttonMess = {
        contentText: `*Jawaban tebak-tebakan adalah* : ${jawabanmath}`,
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }

        client.sendMessage(from, buttonMess, buttonsMessage, {quoted: mek})
        delete tebakan[from]
    }
        }
    //CAPTCHA
        if (captcha.hasOwnProperty(from) && !isCmd2) {
        jawabanmath = captcha[from]
        if (budy == jawabanmath) {
        reply(`SELAMAT JAWABAN ANDA BENAR`)
        delete captcha[from]
        
        } 
    if (messagesC.includes('pass')) {
      reply(`*Jawaban captcha adalah* : ${jawabanmath}`)
        delete captcha[from]
    }
        }
    //KIMIA
        if (kimia.hasOwnProperty(from) && !isCmd2) {
        jwb = kimia[from]
        if (budy.toLowerCase() == jwb) {
        sim = await similarity(budy.toLowerCase(), jwb)
        if (sim > tresshold) return reply('Sedikit lagi..!')
        buttons = [
        {buttonId: `${preff}kimia`, buttonText: {displayText: 'Kimia'}, type: 1}
        ]

        buttonMess = {
        contentText: `SELAMAT JAWABAN ANDA BENAR`,
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }

        client.sendMessage(from, buttonMess, buttonsMessage, {quoted: mek})
        delete kimia[from]
        
        } 
        if (messagesC.includes('pass')) {
         buttons = [
        {buttonId: `${preff}kimia`, buttonText: {displayText: 'Kimia'}, type: 1}
        ]

        buttonMess = {
        contentText: `*Jawaban kimia adalah* : ${jwb}`,
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }

        client.sendMessage(from, buttonMess, buttonsMessage, {quoted: mek})
        delete kimia[from]
        }
        }
        //TEBAK BENDERA
    if (tbendera.hasOwnProperty(from) && !isCmd2) {
        jawaban = tbendera[from]
        if (budy.toLowerCase() == jawaban) {
        sim = await similarity(budy.toLowerCase(), jawaban)
        if (sim > tresshold) return reply('Sedikit lagi..!')
         buttons = [
        {buttonId: `${preff}tebakbendera`, buttonText: {displayText: 'Tebak Bendera'}, type: 1}
        ]

        buttonMess = {
        contentText: `SELAMAT JAWABAN ANDA BENAR`,
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }

        client.sendMessage(from, buttonMess, buttonsMessage, {quoted: mek})
        delete tbendera[from]
        }
        if (messagesC.includes('pass')) {
         buttons = [
        {buttonId: `${preff}tebakbendera`, buttonText: {displayText: 'Tebak Bendera'}, type: 1}
        ]

        buttonMess = {
        contentText: `*Jawaban tebak bendera adalah* : ${jawaban}`,
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }

        client.sendMessage(from, buttonMess, buttonsMessage, {quoted: mek})
        delete tbendera[from]
        }
        }
        //TEBAK LAGU KEBANGSAAN
    if (tlagu.hasOwnProperty(from) && !isCmd2) {
        jawaban = tlagu[from]
        if (budy.toLowerCase() == jawaban) {
        sim = await similarity(budy.toLowerCase(), jawaban)
        if (sim > tresshold) return reply('Sedikit lagi..!')
        buttons = [
        {buttonId: `${preff}lagukebangsaan`, buttonText: {displayText: 'Lagu Kebangsaan'}, type: 1}
        ]

        buttonMess = {
        contentText: `SELAMAT JAWABAN ANDA BENAR`,
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }

        client.sendMessage(from, buttonMess, buttonsMessage, {quoted: mek})
        delete tlagu[from]
        }
        if (messagesC.includes('pass')) {
        buttons = [
        {buttonId: `${preff}lagukebangsaan`, buttonText: {displayText: 'Lagu Kebangsaan'}, type: 1}
        ]

        buttonMess = {
        contentText: `*Jawaban lagu kebangsaan adalah* : ${jawaban}`,
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }

        client.sendMessage(from, buttonMess, buttonsMessage, {quoted: mek})
        delete tlagu[from]
        }
        }
        //IBU KOTA
    if (tibukota.hasOwnProperty(from) && !isCmd2) {
        jawaban = tibukota[from]
        if (budy.toLowerCase() == jawaban) {
        sim = await similarity(budy.toLowerCase(), jawaban)
        if (sim > tresshold) return reply('Sedikit lagi..!')
         buttons = [
        {buttonId: `${preff}ibukota`, buttonText: {displayText: 'Ibu Kota'}, type: 1}
        ]

        buttonMess = {
        contentText: `SELAMAT JAWABAN ANDA BENAR`,
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }

        client.sendMessage(from, buttonMess, buttonsMessage, {quoted: mek})
        delete tibukota[from]
        }
        if (messagesC.includes('pass')) {
        buttons = [
        {buttonId: `${preff}ibukota`, buttonText: {displayText: 'Ibu Kota'}, type: 1}
        ]

        buttonMess = {
        contentText: `*Jawaban ibu kota adalah* : ${jawaban}`,
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }

        client.sendMessage(from, buttonMess, buttonsMessage, {quoted: mek})
        delete tibukota[from]
        }
        }

			//funtion nobadword
 	   	if (isGroup && isBadWord) {
         if (bad.includes(messagesC)) {
         var kic = `${sender.split("@")[0]}@s.whatsapp.net`
            if (!isGroupAdmins) {
               try {
                setTimeout( () => {
 	              client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
 					   	}, 5000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("1detik")
							}, 4000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("2detik")
							}, 3000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("3detik")
							}, 2000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("4detik")
							}, 1000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("*ANTI BADWORD*\nMaaf kamu di kick karena berkata kasar")
							}, 0)
               } catch { client.sendMessage(from, `Untung gw ga admin`, text , {quoted : mek}) }
                } else {
                return reply( "Tolong Jaga Ucapan Min 😇")
                }
            }
        }
        
        var hrs = moment.tz('Asia/Jakarta').format('HHMM');
        if (hrs == 0000) {
	    const mesg = [];
	   fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(mesg));
       };
       
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname2, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
             for (let lmt of _limit) {
             if (lmt.id === sender) {
             let limitCounts = limitawal - lmt.limit
             if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
             client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
             found = true
                        }
                    }
             if (found === false) {
             let obj = { id: sender, limit: 0 }
             _limit.push(obj)
            fs.writeFileSync('./src/limit.json', JSON.stringify(_limit))
             client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                   }
				}
		 //AFK
		       for (let x of mentionUser) {
            if (_afk.hasOwnProperty(x.split('@')[0])) {
                ini_txt = "Dia Lagi Afk Coy!\n"
                if (_afk[x.split('@')[0]] != "") {
                    ini_txt += "Dengan alasan : " + _afk[x.split('@')[0]]
                }
                client.sendMessage(from, ini_txt, text, {quoted: mek})
				snd = `${x.split('@')[0]}@s.whatsapp.net`
				pesann =`Di cariin di group *${groupName}* tuh\n\n\nPengirim : ${sender.split("@s.whatsapp.net")[0]}\nUsername : ${pushname2}\nPesan : ${budy}`
			client.sendMessage(snd, pesann, text)
			}
            }
            if (_afk.hasOwnProperty(sender.split('@')[0])) {
				if (isGroup) {
            reply("Anda telah keluar dari mode afk.")
            delete _afk[sender.split('@')[0]]
            fs.writeFileSync("./src/afk.json", JSON.stringify(_afk))
            } else {
				///console.log('p')
			}
			}
				
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname2), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./src/limit.json',JSON.stringify(_limit))
           return false
       }
     }
        
      if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
					    client.sendMessage(from, `Maaf ${name} Tidak Bisa Masuk Group Karna Member Group ${groupMetadata.subject} Tidak Memenuhi Limit Member\n\nMinimal Member ${memberlimit}`, text)
					    	setTimeout( () => {
                            client.groupLeave(from)
					    	}, 5000)
					    }
		       } catch (err) { console.error(err)  }
        }
      
       const uangku = checkATMuser(sender)
       const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
            //function balance
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
        
	
	if (isCmd && isFiltered(from) && !isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname2))
        return reply('Cooldown 5 detik....')}
        
     if (isCmd && isFiltered(from) && isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname2), 'in', color(groupName))
        return reply('Cooldown 5 detik....')
        }
        
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const wala = fs.readFileSync('aud/wala.m4a')
			const biasa = fs.readFileSync('aud/biasalah.m4a')
            const samasama = fs.readFileSync('aud/sama.m4a')

			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
            if (!isGroup && isCmd2) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command2), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
            if (!isGroup && !isCmd2) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
            if (isCmd2 && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command2), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
            if (!isCmd2 && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

			console.log(pushname2 + ' : ' + pes)
	  
	switch (ar) {
		case 'bot':
         if (isPower) return;
        if (isBanned) return;
			reply(`Iya sayang silahkan ketik ${prefix}menu`);
		break

        case 'botoff':
        case 'offbot':
        if (isPower) return
        if (isBanned) return
        if (!isRegistered) return
        if (!isGroup) return
        if (!isGroupAdmins && !isOwner) return
        power.push(from)
        fs.writeFileSync('./src/power.json', JSON.stringify(power))
        reply('Bot Off')
        break

        case 'boton':
        case 'onbot':
        if (isBanned) return
        if (!isRegistered) return
        if (!isGroup) return
        if (!isGroupAdmins && !isOwner) return
        power.splice(from, 1)
        fs.writeFileSync('./src/power.json', JSON.stringify(power))
        reply('Bot On')
        break

        case 'cok':
         if (isBanned) return;
         reply('Piye cok?');
         break
			
		case 'suwun':
		case 'suwon':
         if (isPower) return;
        if (isBanned) return;
			reply('Nggih');
		break
			
		case 'p':
           if (isPower) return;
        if (isBanned) return;
          if (!isGroup) return reply(`Hay ${pushname2}👋, Selamat datang di Octave bot\nKetik ${prefix}menu untuk melihat semua fitur kami`);
		  if (isOwner) return reply('Salam yang bener sayang☺️');
			reply('Salam sing bener cok!1!1');
		break
			
		case 'thank':
		case 'thanks':
		case 'tx':
		case 'tq':
		case 'thx':
		case 'thq':
         if (isPower) return;
        if (isBanned) return;
		  reply('You are wellcome dear');
		break
		
		case 'pagi':
        case 'pagii':
        case 'morning':
		case 'enjing':
		case 'isuk':
         if (isPower) return;
        if (isBanned) return;
        if (wektu >= 4 && wektu <= 9) {
        reply(`${ar} juga sayang❤️`);
        } else if (wektu >= 10 && wektu <= 15) {
        reply(`${ar} apaan, ini mah udah siang`);
        } else if (wektu >= 16 && wektu <= 18) {
        reply(`${ar} apaan, ini mah udah sore`);
        } else {
        reply(`${ar} apaan, ini mah udah malam`);
        };
        break
		
        case 'siang':
        case 'siangg':
        case 'siank':
        case 'ciank':
        case 'ciang':
		case 'awan':
         if (isPower) return;
        if (isBanned) return;
        if (wektu >= 4 && wektu <= 9) {
        reply(`${ar} apaan, ini mah masih pagi`);
        } else if (wektu >= 10 && wektu <= 15) {
        reply(`${ar} juga sayang❤️`);
        } else if (wektu >= 16 && wektu <= 18) {
        reply(`${ar} apaan, ini mah udah sore`);
        } else {
        reply(`${ar} apaan, ini mah udah malem`);
        };
        break
		
        case 'sore':
        case 'soree':
		case 'sonten':
         if (isPower) return;
        if (isBanned) return;
        if (wektu >= 4 && wektu <= 9) {
        reply(`${ar} apaan, ini mah masih pagi`);
        } else if (wektu >= 10 && wektu <= 15) {
        reply(`${ar} apaan, ini mah masih siang`);
        } else if (wektu >= 16 && wektu <= 18) {
        reply(`${ar} juga sayang❤️`);
        } else {
        reply(`${ar} apaan, ini mah udah malem`);
        };
        break
		
        case 'malem':
        case 'malam':
        case 'night':
		case 'wengi':
		case 'dalu':
         if (isPower) return;
        if (isBanned) return;
        if (wektu >= 4 && wektu <= 9) {
        reply(`${ar} apaan, ini mah masih pagi`);
        } else if (wektu >= 10 && wektu <= 15) {
        reply(`${ar} apaan, ini mah masih siang`);
        } else if (wektu >= 16 && wektu <= 18) {
        reply(`${ar} apaan, ini mah masih sore`);
        } else {
        reply(`${ar} juga sayang❤️`);
        };
        break
           		};

        switch(command2) {
///command2 CASE
  case 'tebakgambar':
  if (isPower) return;
  if (isBanned) return;
  ///if (!isRegistered) return reply(ind.noregis());
  if (tebakgambar.hasOwnProperty(from)) return reply('selesaikan yang sebelumnya atau "pass"')
  anu = _tebakgambar[Math.floor(Math.random() * _tebakgambar.length)];
  ini_image = anu.soal
  jawaban = anu.jawaban
  tebakgambar[from] = jawaban.toLowerCase()
  buff = await getBuffer(ini_image)
  client.sendMessage(from, buff, image, { quoted: mek, caption: `Jawab jawab jawabbb\n\n*Clue* : ${anu.clue}` })
  break
case 'caklontong':
if (isPower) return;
  if (isBanned) return;
  ///if (!isRegistered) return reply(ind.noregis());
  if (caklontong.hasOwnProperty(from)) return reply('selesaikan yang sebelumnya atau "pass"')
  anu = _caklontong[Math.floor(Math.random() * _caklontong.length)];
  ini_soale = anu.quiz
  jawabane = anu.answer
  penjelasane = anu.detail
  caklontong[from] = jawabane.toLowerCase()
  penjelasan[from] = penjelasane.toLowerCase()
  s = jawabane.toLowerCase()
  s = s.replace (/a/g, "_ ")
  s = s.replace (/b/g, "_ ")
  s = s.replace (/c/g, "_ ")
  s = s.replace (/d/g, "_ ")
  s = s.replace (/e/g, "_ ")
  s = s.replace (/f/g, "_ ")
  s = s.replace (/g/g, "_ ")
  s = s.replace (/h/g, "_ ")
  s = s.replace (/i/g, "_ ")
  s = s.replace (/j/g, "_ ")
  s = s.replace (/k/g, "_ ")
  s = s.replace (/l/g, "_ ")
  s = s.replace (/m/g, "_ ")
  s = s.replace (/n/g, "_ ")
  s = s.replace (/o/g, "_ ")
  s = s.replace (/p/g, "_ ")
  s = s.replace (/q/g, "_ ")
  s = s.replace (/r/g, "_ ")
  s = s.replace (/s/g, "_ ")
  s = s.replace (/t/g, "_ ")
  s = s.replace (/u/g, "_ ")
  s = s.replace (/v/g, "_ ")
  s = s.replace (/w/g, "_ ")
  s = s.replace (/x/g, "_ ")
  s = s.replace (/y/g, "_ ")
  s = s.replace (/z/g, "_ ")
  reply(ini_soale + '\n\n Clue : ' + s)
  break
  case 'math':
  if (isPower) return;
  if (isBanned) return;
  ///if (!isRegistered) return reply(ind.noregis());
  if (math2.hasOwnProperty(from)) return reply('selesaikan yang sebelumnya atau "pass"')
  get_math = _math[Math.floor(Math.random() * _math.length)];
  ini_math = get_math.soal
  jawabanmath = get_math.jawaban
  sak = `${ini_math} = `
  math2[from] = jawabanmath.toLowerCase()
  img = await getBuffer(`https://cdn4.vectorstock.com/i/thumb-large/22/63/mathematics-circular-flat-vector-20232263.jpg`);
  client.sendMessage(from, img, image, {quoted: mek, caption: sak})
  break
  case 'asahotak':
  if (isPower) return;
  if (isBanned) return;
  ///if (!isRegistered) return reply(ind.noregis());
  if (asah.hasOwnProperty(from)) return reply('selesaikan yang sebelumnya atau "pass"')
  anu =  _asahotak[Math.floor(Math.random() *_asahotak.length)];
  ani = anu.soal
  ano = anu.jawaban
  asah[from] = ano.toLowerCase();
  soal = ani + '\n\nClue : ' + anu.clue
  reply(soal)
  break
  case 'susunkata':
  if (isPower) return;
  if (isBanned) return;
  ///if (!isRegistered) return reply(ind.noregis());
  if (susun.hasOwnProperty(from)) return reply('selesaikan yang sebelumnya atau "pass"')
  anu =  _susunkata[Math.floor(Math.random() * _susunkata.length)];
  ani = anu.soal
  ano = anu.jawaban
  susun[from] = ano.toLowerCase();
  soal = ani + '\n\nClue : ' + anu.clue
  reply(soal)
  break
  case 'siapaaku':
  if (isPower) return;
  if (isBanned) return;
  ///if (!isRegistered) return reply(ind.noregis());
  if (siapa.hasOwnProperty(from)) return reply('selesaikan yang sebelumnya atau "pass"')
  anu =  _siapaaku[Math.floor(Math.random() * _siapaaku.length)];
  ani = anu.soal
  ano = anu.jawaban
  siapa[from] = ano.toLowerCase();
  soal = ani + '\n\nClue : ' + anu.clue
  reply(soal)
  break
  case 'tebaktebakan':
  if (isPower) return;
  if (isBanned) return;
  ///if (!isRegistered) return reply(ind.noregis());
  if (tebakan.hasOwnProperty(from)) return reply('selesaikan yang sebelumnya atau "pass"')
  anu =  _tebaktebakan[Math.floor(Math.random() * _tebaktebakan.length)];
  ani = anu.soal
  ano = anu.jawaban
  tebakan[from] = ano.toLowerCase();
  soal = ani + '\n\nClue : ' + anu.clue
  reply(soal)
  break
 case 'captcha':
  if (captcha.hasOwnProperty(from)) return reply('selesaikan yang sebelumnya atau "pass"')
  anu =  _captcha[Math.floor(Math.random() * _captcha.length)];
  ani = anu.soal
  ano = anu.jawaban
  captcha[from] = ano
  gbr = await getBuffer(ani)
  client.sendMessage(from, gbr, image, {caption: 'Jawab....!'})
  break

   case 'suit':
if (isPower) return;
if (isBanned) return;
///if (!isRegistered) return reply(ind.noregis());
if (isSuit) return reply('Kamu belum menyelesaikan pilihanmu!')
buttons = [
  {buttonId: `${preff}batu`, buttonText: {displayText: 'BATU 🪨'}, type: 1},
  {buttonId: `${preff}kertas `, buttonText: {displayText: 'KERTAS 📄'}, type: 1},
  {buttonId: `${preff}gunting  `, buttonText: {displayText: 'GUNTING ✂️'}, type: 1}
]
buttonMessage = {
    contentText: "Silahkan pilih salah satu!",
    footerText: setting.botname,
    buttons: buttons,
    headerType: 1
}
client.sendMessage(from, buttonMessage, buttonsMessage, {quoted: mek})
suit.push(sender)
setTimeout(() => {
suit.splice(sender, 1)
},30000)
break
case 'batu':
if (!isSuit) return
var jsn = ["batu","kertas","gunting"]
var ai =  jsn[Math.floor(Math.random() * jsn.length)];
if (ai === "gunting") {
    say = `Komputer memilih *${ai}* Kamu memilih *batu*, Selamat kamu menang`
} else if (ai === "kertas") {
    say =`Komputer memilih *${ai}* Kamu memilih *batu*, Maaf kamu kalah`
} else {
    say = "*SERI*"
}
suit.splice(sender, 1)
buttons = [
  {buttonId: `${preff}suit`, buttonText: {displayText: 'SUIT lagi?'}, type: 1}
]
buttonMessage = {
    contentText: say,
    footerText: setting.botname,
    buttons: buttons,
    headerType: 1
}
client.sendMessage(from, buttonMessage, buttonsMessage, {quoted: mek})
break
case 'kertas':
if (!isSuit) return
var jsn = ["batu","kertas","gunting"]
var ai =  jsn[Math.floor(Math.random() * jsn.length)];
if (ai === "batu") {
    say = `Komputer memilih *${ai}* Kamu memilih *kertas*, Selamat kamu menang`
} else if (ai === "gunting") {
    say = `Komputer memilih *${ai}* Kamu memilih *kertas*, Maaf kamu kalah`
} else {
    say = "*SERI*"
}
buttons = [
  {buttonId: `${preff}suit`, buttonText: {displayText: 'SUIT lagi?'}, type: 1}
]
buttonMessage = {
    contentText: say,
    footerText: setting.botname,
    buttons: buttons,
    headerType: 1
}
client.sendMessage(from, buttonMessage, buttonsMessage, {quoted: mek})
suit.splice(sender, 1)
break
case 'gunting':
if (!isSuit) return
var jsn = ["batu","kertas","gunting"]
var ai =  jsn[Math.floor(Math.random() * jsn.length)]; 
if (ai === "kertas") {
    say = `Komputer memilih *${ai}* Kamu memilih *gunting*, Selamat kamu menang`
} else if (ai === "batu") {
    say = `Komputer memilih *${ai}* Kamu memilih *gunting*, Maaf kamu kalah`
} else {
    say = "*SERI*"
}
buttons = [
  {buttonId: `${preff}suit`, buttonText: {displayText: 'SUIT lagi?'}, type: 1}
]
buttonMessage = {
    contentText: say,
    footerText: setting.botname,
    buttons: buttons,
    headerType: 1
}
client.sendMessage(from, buttonMessage, buttonsMessage, {quoted: mek})
suit.splice(sender, 1)
break

case 'tebakbendera':
if (isPower) return;
if (isBanned) return;
///if (!isRegistered) return reply(ind.noregis());
if (tbendera.hasOwnProperty(from)) return reply('selesaikan yang sebelumnya atau "pass"')
nimek =  _bendera[Math.floor(Math.random() * _bendera.length)];
soal = nimek.bendera
jawab = nimek.negara
tbendera[from] = jawab.toLowerCase()
  ini_buffer = await getBuffer(soal)
  client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: "Berikut adalah bendera dari negara?" })
break
case 'lagukebangsaan':
if (isPower) return;
if (isBanned) return;
///if (!isRegistered) return reply(ind.noregis());
if (tlagu.hasOwnProperty(from)) return reply('selesaikan yang sebelumnya atau "pass"')
nimek =  _bendera[Math.floor(Math.random() * _bendera.length)];
soal = nimek.negara
jawab = nimek.lagu_kebangsaan
tlagu[from] = jawab.toLowerCase()
  s = jawab.toLowerCase()
  s = s.replace (/a/g, "_")
  s = s.replace (/i/g, "_")
  s = s.replace (/u/g, "_")
  s = s.replace (/e/g, "_")
  s = s.replace (/o/g, "_")
reply(`Lagu kebangsaan negara ${soal} adalah?\n\n*Clue* : ` + s)
break
case 'ibukota':
if (isPower) return;
if (isBanned) return;
///if (!isRegistered) return reply(ind.noregis());
if (isPower) return;
if (isBanned) return;
///if (!isRegistered) return reply(ind.noregis());
if (tibukota.hasOwnProperty(from)) return reply('selesaikan yang sebelumnya atau "pass"')
nimek =  _bendera[Math.floor(Math.random() * _bendera.length)];
soal = nimek.negara
jawab = nimek.ibu_kota
tibukota[from] = jawab.toLowerCase()
  s = jawab.toLowerCase()
  s = s.replace (/a/g, "_")
  s = s.replace (/i/g, "_")
  s = s.replace (/u/g, "_")
  s = s.replace (/e/g, "_")
  s = s.replace (/o/g, "_")
reply(`Ibu kota negara ${soal} adalah?\n\n*Clue* : ` + s)
break
case 'kimia':
if (isPower) return;
if (isBanned) return;
///if (!isRegistered) return reply(ind.noregis());
if (kimia.hasOwnProperty(from)) return reply('selesaikan yang sebelumnya atau "pass"')
nimek = _kimia[Math.floor(Math.random() * _kimia.length)];
soal = nimek.soal
jawab = nimek.jawab
buff = await getBuffer('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeaF3hgBvnI2n6_y5V72tMORY4dLJTgfvmOw&usqp=CAU')
kimia[from] = jawab.toLowerCase()
  s = jawab.toLowerCase()
  s = s.replace (/a/g, "_")
  s = s.replace (/i/g, "_")
  s = s.replace (/u/g, "_")
  s = s.replace (/e/g, "_")
  s = s.replace (/o/g, "_")
client.sendMessage(from, buff, image, {caption: `" ${soal} " merupakan unsur kimia dari?\n\n*Clue* : ` + s, quoted: mek})
break
case 'clearall':
anu = await client.chats.all()
client.setMaxListeners(25)
for (let _ of anu) {
client.deleteChat(_.jid)
}
reply('✅Sukses delete all chat✅')
break
case 'view':
link = args[0]
loop = args[1]
for(let i = 0; i < loop; ++i){
  setTimeout (async()=> {
 resu = await fetchText(link)
reply(resu)
  }, 3000 *i)
}
break

case'time':
var Digital = new Date();
var hours = Digital.getHours();
txx= `hasil ${hours}`
reply(txx);
break

case 'allmenu':
if (isPower) return;
if (isBanned) return;
///if (!isRegistered) return reply(ind.noregis());
if (jam >= 5 && jam <= 9) {
  ucapan1 = 'Selamat Pagi!⛅\nTerima Kasih Atas Kunjungan Anda'
  } else if (jam >= 10 && jam <= 14) {
  ucapan1 = 'Selamat Siang!☀️\nTerima Kasih Atas Kunjungan Anda'
  } else if (jam >= 15 && jam <= 17) {
  ucapan1 = 'Selamat Sore!🌄\nTerima Kasih Atas Kunjungan Anda'
  } else if (jam >= 18 && jam <= 20) {
  ucapan1 = 'Selamat Petang!🌕\nTerima Kasih Atas Kunjungan Anda'
  } else if (jam >= 21 && jam <= 23) {
  ucapan1 = 'Selamat Malam!🌘\nTerima Kasih Atas Kunjungan Anda'
  } else {
  ucapan1 = 'Sudah larut malam, Jangan lupa istirahat!😴'
  } 
  botname = setting.botname
  acara = setting.acaraa
  tanggal = setting.tanggal
  countDownDate = new Date(`${tanggal},00:00:00`).getTime();
  now = new Date().getTime();
  distance = countDownDate - now;
  days = Math.floor(distance / (1000 * 60 * 60 * 24));

 rows = [
 {title: 'Tebak Gambar', description: "", rowId:`${preff}tebakgambar`},
 {title: 'Math', description: "", rowId:`${preff}math`},
 {title: 'Cak Lontong', description: "", rowId:`${preff}caklontong`},
 {title: 'Suit', description: "", rowId:`${preff}suit`},
 {title: 'Tebak Bendera', description: "", rowId:`${preff}tebakbendera`},
 {title: 'Lagu Kebangsaan', description: "", rowId:`${preff}lagukebangsaan`},
 {title: 'Ibu Kota', description: "", rowId:`${preff}ibukota`},
 {title: 'Kimia', description: "", rowId:`${preff}kimia`},
 {title: 'Asah Otak', description: "", rowId:`${preff}asahotak`},
 {title: 'Tebak-tebakan', description: "", rowId:`${preff}tebaktebakan`},
 {title: 'Susun Kata', description: "", rowId:`${preff}susunkata`},
 {title: 'Siapa Aku', description: "", rowId:`${preff}siapaaku`}
]

sections = [{title: "Section 1", rows: rows}]

 button = {
 buttonText: 'Click Me!',
 description: `🔥𝙾 𝚌 𝚝 𝚟 - 𝚝 𝚎 𝚌 𝚑  
𝙾 𝚏 𝚏 𝚒 𝚌 𝚒 𝚊 𝚕🔥
*Tebak-tebakan bot*

${ucapan1}

📢  *INFO*  📢
📍 *Bot Name* : *${botname}*
📍 *Prefix* : 「  *${prefix}*  」
📍 *Nama* : *${pushname2}*
📍 *Duit* : *Rp.${uangku}*.-
📍 *Role* : *${role}*
📍 *Nomer* : *wa.me/${sender.split("@")[0]}*
📍 ${times}

Hay *${pushname2}* 👋🏻, jangan lupa jaga kesehatan ya...
tetap patuhi prokes dan ikuti vaksinasi
Mari mendukung program pemerintah dalam menanggulangi COVID-19 di Indonesia🇲🇨

Baca rules bot dahulu sebelum menggunakan fitur-fitur bot agar tidak terbanned dengan cara ketik *${prefix}rules*

Ada keperluan dengan owner bot?
ketik *${prefix}chatowner* pesan kamu

*M e n u* :`,
 sections: sections,
 listType: 1
}

client.sendMessage(from, button, listMessage)

break
case 'ping':
  reply('pong')
  break
};
		
			switch(command) {
        case 'help':
        case 'menu':
        case '?':
        case 'cmd':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        if (jam >= 5 && jam <= 9) {
        ucapan1 = 'Selamat Pagi!⛅\nTerima Kasih Atas Kunjungan Anda'
        } else if (jam >= 10 && jam <= 14) {
        ucapan1 = 'Selamat Siang!☀️\nTerima Kasih Atas Kunjungan Anda'
        } else if (jam >= 15 && jam <= 17) {
        ucapan1 = 'Selamat Sore!🌄\nTerima Kasih Atas Kunjungan Anda'
        } else if (jam >= 18 && jam <= 20) {
        ucapan1 = 'Selamat Petang!🌕\nTerima Kasih Atas Kunjungan Anda'
        } else if (jam >= 21 && jam <= 23) {
        ucapan1 = 'Selamat Malam!🌘\nTerima Kasih Atas Kunjungan Anda'
        } else {
        ucapan1 = 'Sudah larut malam, Jangan lupa istirahat!😴'
        } 
        botname = setting.botname
        acara = setting.acaraa
        tanggal = setting.tanggal
        countDownDate = new Date(`${tanggal},00:00:00`).getTime();
        now = new Date().getTime();
        distance = countDownDate - now;
        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        if (distance < 0) {
        times = ("Terlewat");
        } else {
        times = (days + " Hari Lagi Menuju " + acara);
        }
        buttons = [
        {buttonId: `${prefix}allmenuu`, buttonText: {displayText: `⚙️ FULL FITURE ⚙️`}, type: 1},
        {buttonId: `${preff}allmenu`, buttonText: {displayText: `🎮 GAME 🎮`}, type: 1},
        {buttonId: `${prefix}sewa`, buttonText: {displayText: `💸 SEWA BOT 💸`}, type: 1}
        ]
        buttonMessage = {
        contentText: `🔥𝙾 𝚌 𝚝 𝚟 - 𝚝 𝚎 𝚌 𝚑  
𝙾 𝚏 𝚏 𝚒 𝚌 𝚒 𝚊 𝚕🔥
Just gabuts!

${ucapan1}

📢  *INFO*  📢
📍 *Bot Name* : *${botname}*
📍 *Prefix* : 「  *${prefix}*  」
📍 *Nama* : *${pushname2}*
📍 *Duit* : *Rp.${uangku}*.-
📍 *Role* : *${role}*
📍 *Nomer* : *wa.me/${sender.split("@")[0]}*
📍 ${times}

Hay *${pushname2}* 👋🏻, jangan lupa jaga kesehatan ya...
tetap patuhi prokes dan ikuti vaksinasi
Mari mendukung program pemerintah dalam menanggulangi COVID-19 di Indonesia🇲🇨

Baca rules bot dahulu sebelum menggunakan fitur-fitur bot agar tidak terbanned dengan cara ketik *${prefix}rules*

Ada keperluan dengan owner bot?
ketik *${prefix}chatowner* pesan kamu

*M e n u* :`,
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }
        client.sendMessage(from, buttonMessage, buttonsMessage, {quoted: mek})
        break
        case 'allmenuu':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        if (jam >= 5 && jam <= 9) {
        ucapan1 = 'Selamat Pagi!⛅\nTerima Kasih Atas Kunjungan Anda'
        } else if (jam >= 10 && jam <= 14) {
        ucapan1 = 'Selamat Siang!☀️\nTerima Kasih Atas Kunjungan Anda'
        } else if (jam >= 15 && jam <= 17) {
        ucapan1 = 'Selamat Sore!🌄\nTerima Kasih Atas Kunjungan Anda'
        } else if (jam >= 18 && jam <= 20) {
        ucapan1 = 'Selamat Petang!🌕\nTerima Kasih Atas Kunjungan Anda'
        } else if (jam >= 21 && jam <= 23) {
        ucapan1 = 'Selamat Malam!🌘\nTerima Kasih Atas Kunjungan Anda'
        } else {
        ucapan1 = 'Sudah larut malam, Jangan lupa istirahat!😴'
        } 
		botname = setting.botname
	    acara = setting.acaraa
        tanggal = setting.tanggal
        countDownDate = new Date(`${tanggal},00:00:00`).getTime();
        now = new Date().getTime();
        distance = countDownDate - now;
        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        if (distance < 0) {
        times = ("Terlewat");
        } else {
        times = (days + " Hari Lagi Menuju " + acara);
        }
        client.sendMessage(from, help(prefix, botname, pushname2, uangku, role, sender, ucapan1, times), text);
        break
        case 'sewa':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        teks = `Hay ${pushname2}👋, Have a nice day

Tarif sewa bot adalah 10k perbulan untuk 1 group.

Chat owner terlebih dahulu untuk konfirmasi sewa bot melalui ${prefix}chatowner
Setelah itu lakukan pembayaran sebesar 10k, jagan lupa kirim bukti pembayaran beserta linknya melalui fitur ${prefix}chatowner

Pembayaran dapat dilakukan via DANA, OVO, GOPAY di 085706174510

Terimakasih`
        reply(teks);
        break
        case 'myinfo':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        inf = ` ----------------------------------
        
        📢 YOUR INFO📢
        
        📍 Nama: ${pushname2}
        📍 Duit: *Rp.${uangku}.-*
        📍 Role: *${role}*
        📍 Level: ${getLevelingLevel(sender)}
        📍 Xp: ${getLevelingXp(sender)}/${reqXp} 
        📍 Nomer: wa.me/${sender.split("@")[0]}
		
        ----------------------------------`
        reply(inf);
        break
        case 'info':
        case 'ingfo':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        const me = client.user;
        pp = await client.getProfilePicture(me.jid)
        uptime = process.uptime();
        console.log(sender)
        teks = `*Nama bot* : ${me.name}\n*OWNER* : *Private*\n*AUTHOR* : ${setting.botname}\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*WhatsApp Version* : ${me.phone.wa_version}\n*OS Version* : ${me.phone.os_version}\n*Device Manufacturer* : ${me.phone.device_manufacturer}\n*Device Model* : ${me.phone.device_model}\n*OS Build Number* : ${me.phone.os_build_number}\n*Total Block* : ${blocked.length}\n*Total ban*:${ban.length}\n*Bot aktif selama* : ${kyun(uptime)}`
        buffer = await getBuffer(pp);
        client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}});
        break

        case 'badword':
        if (isBanned) return
        if (!isGroup) return reply(ind.groupo());
        if (!isGroupAdmins && !isOwner) return reply(ind.admin());
        buttons = [
        {buttonId: `${prefix}nobadon`, buttonText: {displayText: 'ON'}, type: 1},
        {buttonId: `${prefix}nobadoff`, buttonText: {displayText: 'OFF'}, type: 1}
        ]
        buttonMessage = {
        contentText: "Pilih salah satu!",
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }
        client.sendMessage(from, buttonMessage, buttonsMessage, {quoted: mek})
        break
        case 'nobadon':
        if (isBanned) return
        if (!isGroup) return
        if (!isGroupAdmins && !isOwner) return
        if (isBadWord) return reply('*Fitur BadWord sudah aktif sebelum nya*');
        badword.push(from);
        fs.writeFileSync('./src/badword.json', JSON.stringify(badword));
        reply(`Fitur Badword Enable!`);
        break
        case 'nobadoff':
        if (isBanned) return
        if (!isGroup) return
        if (!isGroupAdmins && !isOwner) return
        badword.splice(from, 1);
        fs.writeFileSync('./src/badword.json', JSON.stringify(badword));
        reply(`Fitur Badword Disable`);
        break

        case 'join':
        if (!isOwner && !isOwner2) return reply(mess.only.ownerB);
        if (args.length < 1) return reply('Linknya mana kak?');
         code = args[0].replace("https://chat.whatsapp.com/","");
            client.acceptInvite(code);
          reply("Succes joined in the group");
        break
        case 'addbadword':
        if (!isOwner && !isOwner2) return reply(ind.ownerb());
        if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`);
        const bw = body.slice(12);
        bad.push(bw);
        fs.writeFileSync('./src/bad.json', JSON.stringify(bad));
        reply('Success Menambahkan Bad Word!');
        break
        case 'delbadword':
        if (!isOwner && !isOwner2) return reply(ind.ownerb());
        if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`);
        let dbw = body.slice(12);
        bad.splice(dbw);
        fs.writeFileSync('./src/bad.json', JSON.stringify(bad));
        reply('Success Menghapus BAD WORD!');
        break 
        case 'listbadword':
        if (isPower) return;
        if (isBanned) return;
        let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
        for (let i of bad) {
        lbw += `➸ ${i.replace(bad)}\n`
        };
        await reply(lbw);
        break 
          case 'level':
        if (isPower) return
        if (isBanned) return
        if (!isRegistered) return reply( ind.noregis())
        if (!isLevelingOn) return reply(ind.lvlnoon())
        if (!isGroup) return reply(ind.groupo())
        const userLevel = getLevelingLevel(sender)
        const userXp = getLevelingXp(sender)
        if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
        const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
        resul = `📢 *LEVEL*\n  ├─ 📍*Name* : ${pushname2}\n  ├─ 📍*Nomor* : ${sender.split("@")[0]}\n  ├─ 📍*User XP* : ${userXp}/${requiredXp}\n  └─ 📍*User Level* : ${userLevel}\n`
        client.sendMessage(from, resul, text, { quoted: mek})
        .catch(async (err) => {
        console.error(err)
        await reply(`Error!\n${err}`)
        })
        break
        case 'transfer':
        if (!isRegistered) return reply( ind.noregis())
        if (!q.includes('|')) return  reply(ind.wrongf())
        const tujuan = q.substring(0, q.indexOf('|') - 1)
        const jumblah = q.substring(q.lastIndexOf('|') + 1)
        if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
        if (jumblah < 5000 ) return reply(`minimal transfer 5000`)
        if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
        const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
        fee = 0.010 *  jumblah
        hasiltf = jumblah - fee
        addKoinUser(tujuantf, hasiltf)
        confirmATM(sender, jumblah)
        addKoinUser(`${ownerNumber}`, fee)
        reply(`*「 SUKSES 」*\n\nPengiriman uang telah sukses\nDari : +${sender.split("@")[0]}\nKe : +${tujuan}\njJumlah transfer : ${jumblah}\nPajak : ${fee}`)
        break
        case 'dompet':
        if (isPower) return
        if (isBanned) return
        if (!isRegistered) return reply( ind.noregis())
        if (isBanned) return 
        const kantong = checkATMuser(sender)
        reply(ind.uangkau(pushname2, sender, kantong))
        break

        case 'leveling':
        if (isBanned) return
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins && !isOwner) return reply(ind.admin())
        buttons = [
        {buttonId: `${prefix}levon`, buttonText: {displayText: 'ON'}, type: 1},
        {buttonId: `${prefix}levoff`, buttonText: {displayText: 'OFF'}, type: 1}
        ]
        buttonMessage = {
        contentText: "Pilih salah satu!",
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }
        client.sendMessage(from, buttonMessage, buttonsMessage, {quoted: mek})
        break
        case 'levon':
        if (isBanned) return
        if (!isGroup) return 
        if (!isGroupAdmins && !isOwner) return
        if (isLevelingOn) return reply('*Fitur level sudah aktif sebelum nya*')
        _leveling.push(from)
        fs.writeFileSync('./src/leveling.json', JSON.stringify(_leveling))
        reply(ind.lvlon())
        break
        case 'levoff':
        if (isBanned) return
        if (!isGroup) return 
        if (!isGroupAdmins && !isOwner) return
         _leveling.splice(from, 1)
        fs.writeFileSync('./src/leveling.json', JSON.stringify(_leveling))
        reply(ind.lvloff())
        break 

        case 'buylimit':
        if (isPower) return
        if (isBanned) return
        if (!isRegistered) return reply( ind.noregis())
        if (args.length < 1) return reply(`Ketik ${prefix + command} jumlah limit yang akan dibeli`)
        payout = body.slice(10)
        const koinPerlimit = 2000
        const total = koinPerlimit * payout
        if ( checkATMuser(sender) <= total) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
        if ( checkATMuser(sender) >= total ) {
        confirmATM(sender, total)
        bayarLimit(sender, payout)
        await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : ${setting.botname}\n*Penerima* : ${pushname2}\n*Nominal pembelian* : ${payout} \n*Harga limit* : ${koinPerlimit}/limit\n*Sisa uang mu* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(20)}`)
        } 
        break
        case 'buypremiumlimit':
        if (isPower) return
        if (isBanned) return
        if (!isRegistered) return reply( ind.noregis())
        if (args.length < 1) return reply(`Ketik ${prefix + command} jumlah limit yang akan dibeli`)
        payout = body.slice(17)
        const koinpremPerlimit = 2000
        const totalprem = koinpremPerlimit * payout
        if ( checkATMuser(sender) <= totalprem) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
        if ( checkATMuser(sender) >= totalprem ) {
        confirmATM(sender, totalprem)
        bayarLimit(sender, payout)
        await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : ${setting.botname} \n*Penerima* : ${pushname2}\n*Nominal pembelian* : ${payout} \n*Harga limit* : ${koinpremPerlimit}/limit\n*Sisa uang mu* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(20)}`)
        } 
        break
        case 'giftlimit': 
        if (!isRegistered) return reply( ind.noregis())
        if (!isOwner && !isOwner2) return reply(ind.ownerb())
        const nomerr = args[0].replace('@','')
        const jmla = args[1]
        if (jmla <= 1) return reply(`minimal gift limit adalah 1`)
        if (isNaN(jmla)) return reply(`limit harus berupa angka`)
        if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @6283152753417 20`)
        const cysz = nomerr + '@s.whatsapp.net'
        var found = false
        Object.keys(_limit).forEach((i) => {
        if(_limit[i].id === cysz){
        found = i
        }
        })
        if (found !== false) {
        _limit[found].limit -= jmla
        const updated = _limit[found]
        const result = `Gift kuota limit sukses dengan NS: ${createSerial(20)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
        *「 GIFT KUOTA LIMIT 」*
        • User : @${updated.id.replace('@s.whatsapp.net','')}
        • Limit: ${limitawal-updated.limit}`
        console.log(_limit[found])
        fs.writeFileSync('./src/limit.json',JSON.stringify(_limit));
        reply(result)
        } else {
        reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
        }
        break
        case 'blocklist':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        teks = 'This is list of blocked number :\n'
        for (let block of blocked) {
        teks += `~> @${block.split('@')[0]}\n`
        }
        teks += `Total : ${blocked.length}`
        client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
        break
        case 'ocr':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
        const media = await client.downloadAndSaveMediaMessage(encmedia)
        reply(mess.wait)
        await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
        .then(teks => {
            reply(teks.trim())
            fs.unlinkSync(media)
        })
        .catch(err => {
            reply(err.message)
            fs.unlinkSync(media)
        })
        } else {
        reply('Foto aja mas')
        }
        ///await limitAdd(sender) 
        break

        case 'antilink':
        if (isBanned) return
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins) return reply(ind.admin())
        if (!isBotGroupAdmins && !isOwner) return reply(ind.badmin())
        buttons = [
        {buttonId: `${prefix}antion`, buttonText: {displayText: 'ON'}, type: 1},
        {buttonId: `${prefix}antioff`, buttonText: {displayText: 'OFF'}, type: 1}
        ]
        buttonMessage = {
        contentText: "Pilih salah satu!",
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }
        client.sendMessage(from, buttonMessage, buttonsMessage, {quoted: mek})
        break 
        case 'antion':
        if (isBanned) return
        if (!isGroup) return
        if (!isGroupAdmins) return
        if (!isBotGroupAdmins && !isOwner) return
        if (isAntilink) return reply('Anti link group sudah aktif')
        antilink.push(from)
        fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
        reply('Sukses mengaktifkan anti link group di group ini ✔️')
        client.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
        break
        case 'antioff':
        if (isBanned) return
        if (!isGroup) return
        if (!isGroupAdmins) return
        if (!isBotGroupAdmins && !isOwner) return
        antilink.splice(from, 1)
        fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
        reply('Sukes menonaktifkan anti link group di group ini ✔️')
        break

        case 'stiker':
        case 'sticker':
        case 's':
        if (isPower) return	
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        await addFilter(from);
	    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
        const media = await client.downloadAndSaveMediaMessage(encmedia)
        reply(mess.wait)
        ran = getRandom('.webp')
        await ffmpeg(`./${media}`)
        .input(media)
        .on('start', function (cmd) {
        	console.log(`Started : ${cmd}`)
        })
        .on('error', function (err) {
        	console.log(`Error : ${err}`)
        	fs.unlinkSync(media)
        	reply(mess.error.stick)
        })
        .on('end', function () {
        	console.log('Finish')
        	client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek,  packname: 'Octave bot', author: setting.botname})
        	fs.unlinkSync(media)
        	fs.unlinkSync(ran)
        })
        .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
        .toFormat('webp')
        .save(ran)
        } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
        const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
        const media = await client.downloadAndSaveMediaMessage(encmedia)
        ran = getRandom('.webp')
        reply(mess.wait)
        await ffmpeg(`./${media}`)
        .inputFormat(media.split('.')[1])
        .on('start', function (cmd) {
        	console.log(`Started : ${cmd}`)
        })
        .on('error', function (err) {
        	console.log(`Error : ${err}`)
        	fs.unlinkSync(media)
        	tipe = media.endsWith('.mp4') ? 'video' : 'gif'
        	reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
        })
        .on('end', function () {
        	console.log('Finish')
        	client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek, packname: 'Octave bot', author: setting.botname})
        	fs.unlinkSync(media)
        	fs.unlinkSync(ran)
        })
        .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
        .toFormat('webp')
        .save(ran)
        } else {
        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim\nJika video durasi max 10 detik.`)
        }
        ///await limitAdd(sender) 
        break
        case 'gtts':
        case 'tts':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return client.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: mek})
        const gtts = require('./lib/gtts')(args[0])
        if (args.length < 2) return client.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
        reply(mess.wait)
        dtt = body.slice(8)
        ranm = getRandom('.mp3')
        dtt.length > 1000
        ? reply('Textnya kebanyakan om')
        : gtts.save(ranm, dtt, function() {
        client.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        fs.unlinkSync(ranm)
        })
        ///await limitAdd(sender) 
		await addFilter(from);
        break
        case 'ban':
        if (isBanned) return
        if (!isOwner && !isOwner2) return reply(mess.only.ownerB)
        if (args.length < 1) return reply('Tag yang ingin di ban')
        banne = body.slice(6)
        ban.push(`${banne}@s.whatsapp.net`)
        fs.writeFileSync('./src/ban.json', JSON.stringify(ban))
        client.sendMessage(from, 'Done Banned✅', text)
        break
        case 'addban':
        if (isBanned) return
        if (!isOwner && !isOwner2) return reply(mess.only.ownerB)
        if (args.length < 1) return reply('nomor Cok')
        if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
        banne = body.slice(8)
        ban.push(`${banne}@s.whatsapp.net`)
        fs.writeFileSync('./src/ban.json', JSON.stringify(ban))
        client.sendMessage(from, 'Done Banned✅', text, {quoted: mek})
        break
        case 'addbanned':
        if (isBanned) return
        if (!isOwner && !isOwner2) return reply(mess.only.ownerB)
        if (args.length < 1) return reply('nomor Cok')
        if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
        var banned = body.slice(11)
        var nomor = banned.split("|")[0];
        var reason = banned.split("|")[1];
        reason1 = `❗Your number has been banned❗\n\nReason:\n${reason}`
        tekst = `❗⚠️ *W A R N I N G* ⚠️❗\n\n\nNomor yang telah dibanned tidak akan diunban!`
        ban.push(`${nomor}@s.whatsapp.net`)
        fs.writeFileSync('./src/ban.json', JSON.stringify(ban))
        client.sendMessage(from, 'Done Banned✅', text, {quoted: mek})
        client.sendMessage(`${nomor}@s.whatsapp.net`, reason1, text)
        client.sendMessage(`${nomor}@s.whatsapp.net`, tekst, text)
        break
        /*case 'unban':
        if (!isOwner && !isOwner2)return reply(mess.only.ownerB)
        bnnd = body.slice(8)
        ban.splice(`${bnnd}@s.whatsapp.net`)
        fs.writeFileSync('./src/ban.json', JSON.stringify(ban))
        reply(`Done Unban✅`)
        break*/
		case 'resetlink':
		if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        if (!isGroup) return reply(ind.groupo());
        if (!isGroupAdmins) return reply(ind.admin());
        if (!isBotGroupAdmins) return reply(ind.badmin());
		client.revokeInvite(from);
        reply('Link group telah direset');
	    break
        case 'fitnah':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [628xxxx|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah 6285785778976|hai|hai juga`)
        var gh = body.slice(8)
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
        var replace = gh.split("|")[0];
        var target = gh.split("|")[1];
        var bot = gh.split("|")[2];
        client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${replace}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
        ///await limitAdd(sender)		
        break
        case 'morse':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix + command} teks`);
        anu = await morse(body.slice(7));
        reply('Hasil : ' + anu)
        ///await limitAdd(sender)       
        break
        case 'shortlink':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply(`Ketik ${prefix + command} url`);
        reply(mess.wait);
        anu = await fetchJson(`https://api-xcoders.xyz/api/tools/shorturl?url=${args[0]}&apikey=${apiKey}`);
        reply (anu.result);
        ///await limitAdd(sender);
        break
        case 'bacot':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
		await addFilter(from);
        hasil = bacotrandom[Math.floor(Math.random() * (bacotrandom.length))];
        buttons = [
        {buttonId: `${prefix}bacot`, buttonText: {displayText: 'BACOT'}, type: 1}
        ]
        buttonMessage = {
        contentText: hasil,
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }
        client.sendMessage(from, buttonMessage, buttonsMessage, {quoted: mek})
        break
        case 'addbacot':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        if (args.length < 1) return reply(`Ketik ${prefix}${command} text\nUntuk menbahkan text ke database bacot`);
        huu = body.slice(9);
        bacotrandom.push(huu);
        fs.writeFileSync('./database/bacot.json', JSON.stringify(bacotrandom));
        reply(`Sukses, Kata ${huu} Telah Ditambahkan ke database`);
        break
        case 'addc':
        if (isPower) return
        if (isBanned) return
        if (!isOwner && !isOwner2) return 
        if (args.length < 1) return reply(`Ketik ${prefix}${command} text`)
        huu = body.slice(6)
        cersex.push(huu)
        fs.writeFileSync('./database/cersex.json', JSON.stringify(cersex))
        reply(`Sukses Ditambahkan ke database\n${cersex.length}`)
        break
        case 'cersex':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (isGroup) return reply('Fiture Disable')
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        hasil = cersex[Math.floor(Math.random() * (cersex.length))]
        reply(hasil)
        ///await limitAdd(sender) 
        break
        case 'covid':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply('Covid negara mana?')
        client.updatePresence(from, Presence.composing) 
        data = await fetchJson(`https://arugaz.herokuapp.com/api/corona?country=${body.slice(7)}`)
        if (data.result) reply(data.result)
        hasil = `Negara : ${data.result.country}\n\nActive : ${data.result.active}\ncasesPerOneMillion : ${data.result.casesPerOneMillion}\ncritical : ${data.result.critical}\ndeathsPerOneMillion : ${data.result.deathsPerOneMillion}\nrecovered : ${data.result.recovered}\ntestPerOneMillion : ${data.result.testPerOneMillion}\ntodayCases : ${data.result.todayCases}\ntodayDeath : ${data.result.todayDeath}\ntotalCases : ${data.result.totalCases}\ntotalTest : ${data.result.totalTest}`
        reply(hasil)
        ///await limitAdd(sender) 
             break
        case 'chord':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply('teks nya mana om')
        tels = body.slice(7)
        anu = await fetchJson(`https://api-xcoders.xyz/api/search/chordlagu?query=${body.slice(6)}&apikey=${apiKey}`)
        reply(anu.result.chord)
        ///await limitAdd(sender) 
        break 
        case 'quotesdilan':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        anu4 = await fetchJson(`http://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolApi}`)
        reply(anu4.result)
        ///await limitAdd(sender) 
        break
        case 'bucin':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        gatauda = body.slice(1)
        anu = await fetchJson(`http://api.zekais.com/bucin?apikey=${zekaisApi}`)
        buttons = [
        {buttonId: `${prefix}bucin`, buttonText: {displayText: 'BUCIN'}, type: 1}
        ]
        buttonMessage = {
        contentText: anu.result,
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }
        client.sendMessage(from, buttonMessage, buttonsMessage, {quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'quotesimg':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        anu3 = await getBuffer(`http://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolApi}`)
        reply(mess.wait)
        client.sendMessage(from, anu3, image, {quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'pantun':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        anu = await fetchJson(`http://api.lolhuman.xyz/api/random/pantun?apikey=${lolApi}`, {method: 'get'})
        reply(anu.result)
        ///await limitAdd(sender) 
        break 
        case 'jam':
            reply(wektu);
        break
        case 'terbalik':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply (`Ketik ${prefix + command} text`);
        str = body.slice(10);
        trb = str.split('').reverse().join('');
        reply (trb);
        ///await limitAdd(sender);
        break
 		case 'halah':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply (`Ketik ${prefix + command} text`);
        s = body.slice(7);
        s = s.replace(/\i/g, "a");
        s = s.replace(/\u/g, "a");
        s = s.replace(/\e/g, "a");
        s = s.replace(/\o/g, "a");
		s = s.replace(/\I/g, "A");
        s = s.replace(/\U/g, "A");
        s = s.replace(/\E/g, "A");
        s = s.replace(/\O/g, "A");
        reply(s)
        ///await limitAdd(sender);
        break
        case 'hilih':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply (`Ketik ${prefix + command} text`);
        s = body.slice(7);
        s = s.replace(/\a/g, "i");
        s = s.replace(/\u/g, "i");
        s = s.replace(/\e/g, "i");
        s = s.replace(/\o/g, "i");
		s = s.replace(/\A/g, "I");
        s = s.replace(/\U/g, "I");
        s = s.replace(/\E/g, "I");
        s = s.replace(/\O/g, "I");
        reply(s);
        ///await limitAdd(sender);
        break
        case 'huluh':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply (`Ketik ${prefix + command} text`);
        s = body.slice(7);
        s = s.replace(/\i/g, "u");
        s = s.replace(/\a/g, "u");
        s = s.replace(/\e/g, "u");
        s = s.replace(/\o/g, "u");
		s = s.replace(/\A/g, "U");
        s = s.replace(/\I/g, "U");
        s = s.replace(/\E/g, "U");
        s = s.replace(/\O/g, "U");
        reply(s);
        ///await limitAdd(sender);
        break
        case 'heleh':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply (`Ketik ${prefix + command} text`);
        s = body.slice(7);
        s = s.replace(/\i/g, "e");
        s = s.replace(/\u/g, "e");
        s = s.replace(/\a/g, "e");
        s = s.replace(/\o/g, "e");
		s = s.replace(/\I/g, "E");
        s = s.replace(/\U/g, "E");
        s = s.replace(/\A/g, "E");
        s = s.replace(/\O/g, "E");
        reply(s);
        ///await limitAdd(sender);
        break
        case 'holoh':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply (`Ketik ${prefix + command} text`);
        s = body.slice(7);
        s = s.replace(/\i/g, "o");
        s = s.replace(/\u/g, "o");
        s = s.replace(/\e/g, "o");
        s = s.replace(/\a/g, "o");
		s = s.replace(/\I/g, "O");
        s = s.replace(/\U/g, "O");
        s = s.replace(/\E/g, "O");
        s = s.replace(/\A/g, "O");
        reply(s);
        ///await limitAdd(sender);
        break
        case 'jumlah':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply (`Ketik ${prefix + command} text`);
        jum = body.slice(8);
        hasil = jum.length;
        jml = `Jumlah huruf : ${hasil}`;
        reply (jml);
        ///await limitAdd(sender);
        break
        
        case 'pint':
        case 'pinterest':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix}${command} gambar yang akan dicari`)
        pinte = args.join(" ")
        data = await pinterest(pinte)
        reply(mess.wait)
        n = JSON.parse(JSON.stringify(data));
        nimek =  n[Math.floor(Math.random() * n.length)];
        pok = await getBuffer(nimek)
        client.sendMessage(from, pok, image, { quoted: mek, caption: `𝐏𝐈𝐍𝐓𝐄𝐑𝐄𝐒𝐓\n\*Hasil Pencarian* : *${pinte}*`})
        ///await limitAdd(sender) 
        break
        case 'lirik':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply('Lirik lagu apa kak?');
        teks = body.slice(7);
        anu = await lirik(teks);
        reply('Lirik dari lagu '+teks+' adalah :\n\n'+anu);
        ///await limitAdd(sender)
        break
        case 'rules':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        reply(`Rules bot:
1. Dilarang mengeksploitasi bot
2. Dilarang spam command
3. Dilarang telp/vc bot, karena bot memiliki fitur auto block
4. Dilarang memperjual belikan bot/nomor bot sebab bot ini FREE
5. Semua data yang dikirimkan ke bot akan dihapus setiap jam 12 malam
6. Bot tidak bertanggung jawab atas semua data-data anda
7. Bot tidak bertanggung jawab atas command yang diberikan sebab bot tidak akan melakukan sesuatu tanpa perintah
8. Jika bot mengirimkan hal-hal yang sifatnya merugikan, memicu kerusuhan, dan lain sebagainya semua salah pengguna, kembali ke point 7.
9. Membuat  stiker harus satu persatu. sebab, jika langsung banyak akan menyebabkan sistem berhenti dan pengguna auto di ban
10. Hindari konten pornografi (berupa gambar, video, dan stiker)
11. Dilarang sembarangan menggunakan fitur chatowner
12. Menghujat berarti siap menerima konsekwensi.

Jika tidak suka dengan bot ini keluarkan saja dari group anda atau ketik -botleft, sebab bot tidak akan join tanpa diminta.

Tahulah berterimakasih sebab anda tidak perlu membayar untuk menggunakan bot ini, gunakan secara bijak, jangan berlebihan.


Be a smart user and good luck!`)
        break
        case 'quoteskehidupan':
        if (isPower) return
        if (isBanned) return
        if (!isRegistered) return reply( ind.noregis())
        if (isLimit(sender)) return reply(ind.limitend(pusname))
        if (isBanned) return 
        const quo = kehidupan[Math.floor(Math.random() * kehidupan.length)]
        crot = await getBuffer(`https://i.ibb.co/Bj8tD93/IMG-20210126-WA0018.jpg`)
        client.sendMessage(from, crot, image, { quoted: mek, caption: '*Quotes Kehidupan*\n\n'+ quo })
        ///await limitAdd(sender)
        break
        case 'quotesislami':
        if (isPower) return
        if (isBanned) return
        if (!isRegistered) return reply( ind.noregis())
        if (isLimit(sender)) return reply(ind.limitend(pusname))
        if (isBanned) return 
        const isl = islami[Math.floor(Math.random() * islami.length)]
        islam = await getBuffer(`https://i.ibb.co/dPnjvD3/IMG-20210127-WA0018.jpg`)
        client.sendMessage(from, islam, image, { quoted: mek, caption: '*Quotes Islami*\n\n'+ isl })
        ///await limitAdd(sender)
        break	
        case 'quotesnasehat':
        if (isPower) return
        if (isBanned) return
        if (!isRegistered) return reply( ind.noregis())
        if (isLimit(sender)) return reply(ind.limitend(pusname))
        const nsh = nasehat[Math.floor(Math.random() * nasehat.length)]
        nase = await getBuffer(`https://i.ibb.co/bspYPtC/IMG-20210125-WA0018.jpg`)
        client.sendMessage(from, nase, image, { quoted: mek, caption: '*Quotes Nasehat*\n\n'+ nsh })
        ///await limitAdd(sender)
        break
        case 'quotesmotivasi':
        if (isPower) return
        if (isBanned) return
        if (!isRegistered) return reply( ind.noregis())
        if (isLimit(sender)) return reply(ind.limitend(pusname))
        const vasi = motivasi[Math.floor(Math.random() * motivasi.length)]
        vass = await getBuffer(`https://i.ibb.co/346nsHC/56806462-399407660892553-4745814299438481408-o.jpg`)
        client.sendMessage(from, vass, image, { quoted: mek, caption: '*Motivasi*\n\n'+ vasi})
        ///await limitAdd(sender)
        break
        case 'codebahasa':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        reply(`af: Afrikaans\nsq: Albanian\nar: Arabic\nhy: Armenian\nca: Catalan\nzh: Chinese\nzh-cn: Chinese (Mandarin/China)\nzh-tw: Chinese (Mandarin/Taiwan\nzh-yue: Chinese (Cantonese)\nhr: Croatian\ncs: Czech\nda: Danish\nnl: Dutch\nen: English\nen-au: English (Australia)\nen-uk: English (United Kingdom)\nen-us: English (United States)\neo: Esperanto\nfi: Finnish\nfr: French\nde: German\nel: Greek\nht: Haitian Creole\nhi: Hindi\nhu: Hungarian\nis: Icelandic\nid: Indonesian\nit: Italian\nja: Japanese\nko: Korean\nla: Latin\nlv: Latvian\nmk: Macedonian\nno: Norwegian\npl: Polish\npt: Portuguese\npt-br: Portuguese (Brazil)\nro: Romanian\nru: Russian\nsr: Serbian\nsk: Slovak\nes: Spanish\nes-es: Spanish (Spain)\nes-us: Spanish (United States)\nsw: Swahili\nsv: Swedish\nta: Tamil\nth: Thai\ntr: Turkish\nvi: Vietnamese\ncy: Welsh`)
        break
        case 'setprefix':
        if (!isOwner && !isOwner2) return reply(mess.only.ownerB)
        if (args.length < 1) return reply('mangsud?')
        prefix = args[0]
        reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
        break
        case 'truth':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
        const ttrth = trut[Math.floor(Math.random() * trut.length)]
        truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
        client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
        ///await limitAdd(sender) 
        break
        case 'dare':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
        const der = dare[Math.floor(Math.random() * dare.length)]
        tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
        client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
        ///await limitAdd(sender) 
        break
        case 'apakah':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply('Apakah apanya?')
        apakah = body.slice(1)
        const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Sedikit Memungkinkan']
        const kah = apa[Math.floor(Math.random() * apa.length)]
        client.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
        ///await limitAdd(sender) 
        break
        case 'rate':
        case 'nilai':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply('Apanya yang dinilai?')
        rate = body.slice(1)
        const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
        const te = ra[Math.floor(Math.random() * ra.length)]
        client.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
        ///await limitAdd(sender) 
		await addFilter(from)
        break
		case 'afk':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        if (!isGroup) return reply(ind.groupo());
        alasan = args.join(" ");
        frm = sender.split('@')[0];
	    _afk[frm] = alasan.toLowerCase()
        fs.writeFileSync('./src/afk.json', JSON.stringify(_afk));
        ini_txt = "Anda telah afk\n";
        if (alasan != "") {
        ini_txt += "Dengan alasan : " + alasan
        };
        reply(ini_txt);
        break
        case 'gantengcek':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        ganteng = body.slice(1)
        const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
        const teng = gan[Math.floor(Math.random() * gan.length)]
        client.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
        ///await limitAdd(sender) 
        break
        case 'cantikcek':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        cantik = body.slice(1)
        const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
        const tik = can[Math.floor(Math.random() * can.length)]
        client.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
        ///await limitAdd(sender) 
        break
        case 'watak':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply('Watak siapa kak? wataknya kakak ya kaya setan')
        if (args.length < 1) return reply('Watak siapa bangsadd?')
        watak = body.slice(1)
        const wa =['penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','BaikHati','penyabar','Uwu','top deh, pokoknya','Suka Membantu','males','rajin']
        const tak = wa[Math.floor(Math.random() * wa.length)]
        client.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
        ///await limitAdd(sender) 
        break
        case 'hobby':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply('Hobbynya siapa kak? kalau hobbyku sih mencintaimu')
        hobby = body.slice(1)
        const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri','coli','ngocok','masturbasi','colm*k','Mencintaimu><']
        const by = hob[Math.floor(Math.random() * hob.length)]
        client.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
        ///await limitAdd(sender) 
        break
        case 'bisakah':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply('Bisa apa?')
        bisakah = body.slice(1)
        const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU','Maybe']
        const keh = bisa[Math.floor(Math.random() * bisa.length)]
        client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
        ///await limitAdd(sender) 
        break
        case 'kapankah':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply('Gatau lu ga tanya')
        kapankah = body.slice(1)
        const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Lu Pikir Sendiri Lah Lu Kira Gw Tuhan Yg Tahu Segalanya']
        const koh = kapan[Math.floor(Math.random() * kapan.length)]
        client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
        ///await limitAdd(sender) 
        break
        case 'dadu':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        dadu = body.slice(1)
        const elu =['1','2','3','4','5','6']
        const ule = elu[Math.floor(Math.random() * elu.length)]
        client.sendMessage(from, ule, text, { quoted: mek })
        ///await limitAdd(sender) 
        break
        ///quran
        case 'randomquran':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
        quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
        client.sendMessage(from, quran, text, {quoted: mek})
        break
        case 'quran':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${body.slice(0)} nomor surah|ayat\nUntuk mengetahui nomor surah ketik ${prefix}listsurah`)
        if (args[0].startsWith('a')) return reply('Surah harus berformat nomor')
        var qur = body.slice(7)
        var sur = qur.split("|")[0];
        var ay = qur.split("|")[1];
    quran = await fetchJson(`https://api-xcoders.xyz/api/muslim/quran?surah=${sur}&ayat=${ay}&apikey=${apiKey}`);
        anu = quran.result
        hasill = `*Surah* : ${anu.surah}\n*Nomor Surah* : ${anu.surah_no}\n*Ayat* : ${anu.ayat_no}\n*Text* : ${anu.text_arab}\n*Terjemah* : ${anu.translate_id}\n\n*Tafsir* : ${anu.tafsir.short}\n\n*Penjelasan* : ${anu.tafsir.long}`
        reply(hasill);
        ///await limitAdd(sender) 
        break
        case 'qaudio':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply(`Ketik ${body.slice(0)} nomor surah ayat\nUntuk mengetahui nomor surah ketik ${prefix}listsurah`);
        if (args[0].startsWith('a')) return reply('Surah harus berformat nomor');
        var pp = args[0];
		var qq = args[1];
		rr = ('000' + pp).slice(-3);
		ss = ('000' + qq).slice(-3);
		jml = rr  + ss
	    link = `https://everyayah.com/data/Alafasy_64kbps/${jml}.mp3`;
	    aud = await getBuffer(link)
        reply(mess.wait)
        client.sendMessage(from, aud, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        ///await limitAdd(sender) 
        break
        case 'listsurah':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        client.sendMessage(from, listsurah() , text, {quoted: mek})
        break
        case 'kisahnabi':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply(`Ketik ${prefix + command} Nama Nabi`);
        anu = await fetchJson(`https://api-xcoders.xyz/api/muslim/kisahnabi?nabi=${body.slice(11)}&apikey=${apiKey}`);
        hasil = `📝 *Nama* : ${anu.result.name}\n📅 *Kelahiran* : ${anu.result.kelahiran}\n⏳ *Usia Wafat* : ${anu.result.wafat_usia}\n📍 *Singgah* : ${anu.result.singgah}\n📖 *Cerita* :\n\n${anu.result.kisah}`
        reply(hasil);
        ///await limitAdd(sender);
        break
        ///end
        case 'tik':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply(`Ketik ${prefix}${command} url tiktok`);
        if (!isUrl(args[0]) && !args[0].includes('vt')) return reply('URL TIDAK VALID');
        reply(`${mess.wait} \n\nDikarenakan bug di aplikasi Tiktok, jika video gagal dikirim, silahkan kembali ke aplikasi Tiktok dan salin ulang link.`);
        tikt = await tiktok(args[0]);
        if (tikt.result.nowatermark == undefined) return reply('Error atau URL salah');
        nowm = await getBuffer(tikt.result.nowatermark);
        client.sendMessage(from, nowm, video, {mimetype: 'video/mp4', filename: `p`, quoted: mek});
        ///await limitAdd(sender);
        break
        case 'block':
        client.updatePresence(from, Presence.composing) 
        if (!isGroup) return reply(ind.groupo())
        if (isOwner && !isOwner2) return reply(mess.only.ownerB)
        client.blockUser (`${body.slice(7)}@c.us`, "add")
        client.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
        break
        case 'unblock':
        if (!isGroup) return reply(ind.groupo())
        if (!isOwner && !isOwner2) return reply(mess.only.ownerB)
        client.blockUser (`${body.slice(9)}@c.us`, "remove")
        client.sendMessage(from, `perintah Diterima, membuka blokir ${body.slice(9)}@c.us`, text)
        break
        case 'tagall2':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins) return reply(ind.admin())
        members_id = []
        teks = (args.length > 1) ? body.slice(9).trim() : ''
        teks += '\n\n'
        for (let mem of groupMembers) {
        teks += `*#* @${mem.jid.split('@')[0]}\n`
        members_id.push(mem.jid)
        }
        mentions(teks, members_id, true)
        break
       case 'tagall':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins) return reply(ind.admin())
       captt = body.slice(8)
        groupMembers.forEach ((name, i) => { 
        setTimeout (() => { 
		 members_id = []
		tekss = `@${name.jid.split('@')[0]} ${captt}`
		 members_id.push(name.jid);
		mentions(tekss, members_id, true);
        }, i * 1000); 
        });
        break
        case 'tagall3':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins) return reply(ind.admin())
        members_id = []
        teks = (args.length > 1) ? body.slice(8).trim() : ''
        teks += '\n\n'
        for (let mem of groupMembers) {
        teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
        members_id.push(mem.jid)
        }
        client.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
        break
        case 'clearall':
        if (!isOwner && !isOwner2) return reply('Kamu siapa?')
        anu = await client.chats.all()
        client.setMaxListeners(25)
        for (let _ of anu) {
        client.deleteChat(_.jid)
        }
        reply('✅Sukses delete all chat✅')
        break
        case 'promote':
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        if (!isGroup) return reply(ind.groupo());
        if (!isGroupAdmins) return reply(ind.admin());
        if (!isBotGroupAdmins) return reply(ind.badmin());
        if (args.length > 1) return reply('satu² ajg');
        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return;
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true);
        client.groupMakeAdmin(from, mentioned);
        break
        case 'demote':
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        if (!isGroup) return reply(ind.groupo());
        if (!isGroupAdmins) return reply(ind.admin());
        if (!isBotGroupAdmins) return reply(ind.badmin());
        if (args.length > 1) return reply('satu² ajg');
        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return;
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true);
        client.groupDemoteAdmin(from, mentioned);
		break
        case 'tomp3':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (!isQuotedVideo) return reply('❌ reply videonya um ❌');
        reply(mess.wait);
	    await addFilter(from);
        encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom('.mp4');
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
        fs.unlinkSync(media);
        if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌');
        bufferlkj = fs.readFileSync(ran);
        client.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek});
        fs.unlinkSync(ran);
        });
        ///await limitAdd(sender); 
        break
        case 'tutuptime':
        client.updatePresence(from, Presence.composing) 
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins) return reply(ind.admin())
        if (!isBotGroupAdmins) return reply(ind.badmin())
        if (args[1]=="detik") {var timer = args[0]+"000"
        } else if (args[1]=="menit") {var timer = args[0]*60+"000"
        } else if (args[1]=="jam") {var timer = args[0]*60*60+"000"
        } else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
        reply('Timer telah distel')
        setTimeout( () => {
        var nomor = mek.participant
        const close = {
        text: `Grup ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
        contextInfo: { mentionedJid: [nomor] }
        }
        client.groupSettingChange (from, GroupSettingChange.messageSend, true);
        reply(close)
        }, timer)
        break
        case 'bukatime':
        client.updatePresence(from, Presence.composing) 
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins) return reply(ind.admin())
        if (!isBotGroupAdmins) return reply(ind.badmin())
        if (args[1]=="detik") {var timer = args[0]+"000"
        } else if (args[1]=="menit") {var timer = args[0]*60+"000"
        } else if (args[1]=="jam") {var timer = args[0]*60*60+"000"
        } else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
        reply('Timer telah distel')
        setTimeout( () => {
        var nomor = mek.participant
        const close = {
        text: `Grup dibuka oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *semua peserta* dapat mengirim pesan`,
        contextInfo: { mentionedJid: [nomor] }
        }
        client.groupSettingChange (from, GroupSettingChange.messageSend, false);
        reply(close)
        }, timer)
        break
        case 'tutup':
        client.updatePresence(from, Presence.composing) 
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins) return reply(ind.admin())
        if (!isBotGroupAdmins) return reply(ind.badmin())
        if (args[1]=="detik") {var timer = args[0]+"000"
        } else if (args[1]=="menit") {var timer = args[0]*60+"000"
        } else if (args[1]=="jam") {var timer = args[0]*60*60+"000"
        } else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
        reply('Timer telah distel')
        client.groupSettingChange (from, GroupSettingChange.messageSend, true);
        setTimeout( () => {
        var nomor = mek.participant
        const close = {
        text: `Grup dibuka oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *semua peserta* dapat mengirim pesan`,
        contextInfo: { mentionedJid: [nomor] }
        }
        client.groupSettingChange (from, GroupSettingChange.messageSend, false);
        reply(close)
        }, timer)
        break
        case 'limit':
        if (isPower) return
        if (isBanned) return
        if (!isRegistered) return reply( ind.noregis())
        checkLimit(sender)
        break
        case 'setlimit':
        case 'addlimit':
        if (args.length < 1) return
        if (!isOwner) return reply(ind.ownerb())
        limitawal = args[0]
        reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
        break 
        case 'setmemlimit':
        if (args.length < 1) return
        if (!isOwner) return reply(ind.ownerb())
        if (isNaN(args[0])) return reply('Limit harus angka')
        memberlimit = args[0]
        reply(`Change Member limit To ${memberlimit} SUCCESS!`)
        break 
        case 'groupinfo':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
          client.updatePresence(from, Presence.composing)
          if (!isGroup) return reply(ind.groupo())
          ppUrl = await client.getProfilePicture(from) // leave empty to get your own
        buffergbl = await getBuffer(ppUrl)
        client.sendMessage(from, buffergbl, image, {quoted: mek, caption: `*NAME* : ${groupName}\n*MEMBER* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESK* : ${groupDesc}`})
          break
        case 'add':
        case 'invite':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins) return reply(ind.admin())
        if (!isBotGroupAdmins) return reply(ind.badmin())
        if (args.length < 1) return reply('Yang mau di add jin ya atau anak pungut kak?')
        if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
        try {
        num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
        client.groupAdd(from, [num])
        } catch (e) {
        console.log('Error :', e)
        reply('Gagal menambahkan target, mungkin karena di private')
        }
        break
        /*case 'kicktime':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins) return reply(ind.admin())
        if (!isBotGroupAdmins) return reply(ind.badmin())
        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
        if (args.length > 1) return reply('satu² ajg')
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
        setTimeout( () => {
        client.sendMessage(from, 'Yok Sama" Al-fatihah', text)
        }, 19000)
        setTimeout( () => {
        reply('sukses min:D')
        }, 17000)
        setTimeout( () => {
        client.groupRemove(from, mentioned)
        }, 15000)
        setTimeout( () => {
        client.sendMessage(from, `Bismilah headshot\n @${mentioned[0].split('@')[0]}@s.whatsapp.net`, text) // ur cods
        }, 10000)
        setTimeout( () => {
        client.sendMessage(from, 'Asikkk Dapet Makanan nihh😋', text)
        }, 5000)
        setTimeout( () => {
        reply('Perintah Diterima min😃')
        }, 0)
        break*/
        case 'setpp':
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins) return reply(ind.admin())
        if (!isBotGroupAdmins) return reply(ind.badmin())
        var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
        var media = await  client.downloadAndSaveMediaMessage(encmedia)
        await client.updateProfilePicture (from, media)
        reply('Sukses mengganti icon Grup')
        break

        case 'ayla':
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        if (isGroup) return reply('Maaf Ayla tidak bisa bicara didalam group.');
        buttons = [
        {buttonId: `${prefix}aylaon`, buttonText: {displayText: 'ON'}, type: 1},
        {buttonId: `${prefix}aylaoff`, buttonText: {displayText: 'OFF'}, type: 1}
        ]
        buttonMessage = {
        contentText: "Pilih salah satu!",
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }
        client.sendMessage(from, buttonMessage, buttonsMessage, {quoted: mek})
        break
        case 'aylaon':
        if (isBanned) return;
        if (!isRegistered) return
        if (isGroup) return
        if (isAyla) return
        _ayla.push(from);
        fs.writeFileSync('./src/ayla.json', JSON.stringify(_ayla));
        reply('Kamu sudah bisa ngobrol dengan Ayla sekarang');
        break
        case 'aylaoff':
        if (isBanned) return;
        if (!isRegistered) return
        if (isGroup) return
        _ayla.splice(from, 1);
        fs.writeFileSync('./src/ayla.json', JSON.stringify(_ayla));
        reply('Ayla pamit, dadah..👋');
        break

        case 'delete':
        case 'del':
        case 'd':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
        reply('done✅')
        break
        /*case 'kick2':
		case 'minggato':
        case 'tendang':
        case 'tokne':
        case 'usir':
        case 'huss':
        case 'ngalio':
		case 'add2':
        case 'tambah':
        case 'culik':
        case 'kick':
		case 'demote2':
        case 'demot2':
        case 'donke':
        case 'turunin':
        case 'phk':
        case 'pecat':
		case 'promot2':
        case 'promote2':
        case 'admin':
        case 'naik':
        case 'munggah':
		case 'promote':
		case 'demote':
		case 'kicktime':
		case 'add':
		reply(`Maaf ${pushname2}, fitur ${prefix + command} sedang dalam perbaikan`)
        break*/
        case 'tagme':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
         if (!isGroup) return reply(ind.groupo())
        var nom = mek.participant
        const tag = {
        text: `@${nom.split("@s.whatsapp.net")[0]} jomblo yaa kok minta tag bot\nYhahaha...`,
        contextInfo: { mentionedJid: [nom] }
        }
        client.sendMessage(from, tag, text, {quoted: mek})
        ///await limitAdd(sender) 
        break
		// add2 nambah member 2
        case 'add2':
        case 'tambah':
        case 'culik':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        if (!isGroup) return reply(ind.groupo());
        if (!isGroupAdmins) return reply(ind.admin());
        if (!isBotGroupAdmins) return reply(ind.badmin());
        if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
        if (args.length > 1) return;
		try {
        entah = mek.message.extendedTextMessage.contextInfo.participant;
		//reply(entah)
        client.groupAdd(from, [entah]);
		} catch (e) {
        console.log('Error :', e)
        reply('Gagal menambahkan target, mungkin karena di private')
        };
        break
        // kick turinin admin medon seko admin
        case 'kick2':
		case 'minggato':
        case 'tendang':
        case 'tokne':
        case 'usir':
        case 'huss':
        case 'ngalio':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        if (!isGroup) return reply(ind.groupo());
        if (!isGroupAdmins) return reply(ind.admin());
        if (!isBotGroupAdmins) return reply(ind.badmin());
        if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
		reply('Done');
        var entah = mek.message.extendedTextMessage.contextInfo.participant
        if (entah == `6285706174510@s.whatsapp.net`){
			reply('Ngelamak anjing!');
			var kic = `${sender.split("@")[0]}@s.whatsapp.net`
			client.groupRemove(from, [kic]);		
        } else {
        client.groupRemove(from, [entah])
		//reply(entah)
        }
        break
        // demote turinin admin medon seko admin
        case 'demote2':
        case 'demot2':
        case 'unadmin':
        case 'turunin':
        case 'phk':
        case 'pecat':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        if (!isGroup) return reply(ind.groupo());
        if (!isGroupAdmins) return reply(ind.admin());
        if (!isBotGroupAdmins) return reply(ind.badmin());
        if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
        if (args.length > 1) return reply('satu² ajg');
		reply('Done');
        entah = mek.message.extendedTextMessage.contextInfo.participant;
        client.groupDemoteAdmin(from, [entah]);
		//reply(entah)
        break
        // Menaikan Jabata 2 Promote2 promot2 promot
        case 'promot2':
        case 'promote2':
        case 'admin':
        case 'naik':
        case 'munggah':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        if (!isGroup) return reply(ind.groupo());
        if (!isGroupAdmins) return reply(ind.admin());
        if (!isBotGroupAdmins) return reply(ind.badmin());
        if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
        if (args.length > 1) return reply('satu² ajg');
		reply('Done');
        entah = mek.message.extendedTextMessage.contextInfo.participant;
        client.groupMakeAdmin(from, [entah]);
		//reply(entah)
        break
        case 'kick':
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins) return reply(ind.admin())
        if (!isBotGroupAdmins) return reply(ind.badmin())
        if (args.length > 1) return reply('satu² ajg')
        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
	    if (args[0] == '@6285706174510') {
			reply('Ngelamak ajg!')
			var kic = `${sender.split("@")[0]}@s.whatsapp.net`
			client.groupRemove(from, [kic])
		} else {
        mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
        client.groupRemove(from, mentioned)
		men = `${mentioned}`
		reply(men)
        }
        break
        case 'bundir':
		if (!isGroup) return reply(ind.groupo())
		if (!isBotGroupAdmins) return reply(ind.badmin())
        client.updatePresence(from, Presence.composing)
        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
        reply(`Yahh bundir`)
        client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
        break
        case 'muleh':
        if (!isGroup) return
        if (!isOwner) return
        if (!isBotGroupAdmins) return
        client.updatePresence(from, Presence.composing)
        reply(`Yoh balek`)
        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
        setTimeout( () => {
        client.groupLeave(from)
        }, 5000)
        setTimeout( () => {
        client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
        }, 3000)
        break
        case 'kickban':
        if (!isGroup) return reply(ind.groupo())
        if (!isOwner) return reply(mess.only.ownerB)
        if (!isBotGroupAdmins) return reply(ind.badmin())
        if (args.length > 1) return reply('satu² ajg')
        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
        ban.push(`${body.slice(10)}@s.whatsapp.net`)
        fs.writeFileSync('./src/ban.json', JSON.stringify(ban))
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
        mentions(`Perintah di terima, mengeluarkan + banned: @${mentioned[0].split('@')[0]}`, mentioned, true)
        client.groupRemove(from, mentioned)
        break
        case 'banlist':
        if (isPower) return
        client.updatePresence(from, Presence.composing)
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())  
        teks = 'This is list of ban number :\n'
        for (let benn of ban) {
        teks += `~> @${benn.split('@')[0]}\n`
        }
        teks += `Total : ${ban.length}`
        client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
        break
        case 'hidetag':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins && !isOwner) return reply(ind.admin())
        if (args.length < 1) return reply('Textnya mana?')
        var value = body.slice(9)
        var group = await client.groupMetadata(from)
        var member = group['participants']
        var mem = []
        member.map( async adm => {
        mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
        })
        var options = {
        text: value,
        contextInfo: { mentionedJid: mem },
        quoted: mek
        }
        client.sendMessage(from, options, text)
        break
        case 'hidetag1':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (!isGroup) return reply(ind.groupo())
        if (args.length < 1) return reply('Textnya mana?')
        if (budy.includes('kontol')) {
        if (isBadWord) {
        if (!isBotGroupAdmins) {
        if (isOwner) return reply('Hey kamu gabole gitu')
        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
        reply(`Barbar boleh goblok jangan`)
        client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
        }
        }
        }
        var value = body.slice(9)
        var group = await client.groupMetadata(from)
        var member = group['participants']
        var mem = []
        member.map( async adm => {
        mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
        })
        var options = {
        text: value,
        contextInfo: { mentionedJid: mem },
        quoted: mek
        }
        client.sendMessage(from, options, text)
        ///await limitAdd(sender)
        await addFilter(from)		
        break
        case 'pengumuman':
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins) return reply(ind.admin())
        if (args.length < 1) return reply('Pengumannya apa?')
        var nom = mek.participant
        var value = `[P E N G U M U M A N]\n\n${body.slice(11)}\n\nAnnouncement by @${nom.split("@s.whatsapp.net")[0]}`
        var group = await client.groupMetadata(from)
        var member = group['participants']
        var mem = []
        member.map( async adm => {
        mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
        })
        var options = {
        text: value,
        contextInfo: { mentionedJid: mem },
        quoted: mek
        }
        client.sendMessage(from, options, text)
        break
        case 'listadmin':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
        no = 0
        for (let admon of groupAdmins) {
        no += 1
        teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
        }
        mentions(teks, groupAdmins, true)
        break
        case 'linkgroup':
        case 'linkgrup':
        case 'linkgc':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins) return reply(ind.admin())
        if (!isBotGroupAdmins) return reply(ind.badmin())
        linkgc = await client.groupInviteCode(from)
         reply('https://chat.whatsapp.com/'+linkgc)
        break
        case 'leave':
        if (isBanned) return
        if (!isGroup) return reply(ind.groupo())
        if (!isOwner) return reply(mess.only.ownerB)
        reply('dadah....')
        anu = await client.groupLeave(from, '𝗕𝘆𝗲𝗲', groupId)
            break
        case 'botleft':
        if (isBanned) return
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins) return reply(ind.admin())
        reply('dadah....')
        anu = await client.groupLeave(from, '𝗕𝘆𝗲𝗲', groupId)
            break
        case 'toimg':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (!isQuotedSticker) return reply('❌ reply stickernya um ❌');
        await addFilter(from);
	    reply(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom('.jpg');
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
        fs.unlinkSync(media);
        if (err) return reply('❌ Gagal, pada saat mengkonversi sticker ke gambar ❌');
        buffer = fs.readFileSync(ran);
        client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'});
        fs.unlinkSync(ran);
        });
        ///await limitAdd(sender); 
        break

		case 'simih':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins && !isOwner) return reply(ind.admin())
        buttons = [
        {buttonId: `${prefix}simihon`, buttonText: {displayText: 'ON'}, type: 1},
        {buttonId: `${prefix}simihoff`, buttonText: {displayText: 'OFF'}, type: 1}
        ]
        buttonMessage = {
        contentText: "Pilih salah satu!",
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }
        client.sendMessage(from, buttonMessage, buttonsMessage, {quoted: mek})
        break
        case 'simihon':
        if (isPower) return
        if (isBanned) return
        if (!isRegistered) return
        if (!isGroup) return
        if (!isGroupAdmins && !isOwner) return
        if (isSimi) return reply('Mode simi sudah aktif')
        samih.push(from)
        fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
        reply('Sukses mengaktifkan mode simi di group ini ✔️\n\nMode simi tidak mengerti emoji dan stiker dan hanya dibatasi 50 query perjam \nJangan gunakan emoji atau stiker saat mode simi aktif, agar query tidak terbuang sia-sia.')
        break
        case 'simihoff':
        if (isPower) return
        if (isBanned) return
        if (!isRegistered) return
        if (!isGroup) return
        if (!isGroupAdmins && !isOwner) return
        samih.splice(from, 1)
        fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
        reply('Sukes menonaktifkan mode simi di group ini ✔️')
        break

        case 'daftar':
        client.updatePresence(from, Presence.composing)
        if (args.length < 1) return reply(`Parameter Salah\nCommand : ${prefix}daftar nama|umur\nContoh : ${prefix}daftar layla|17`)
        const namaUser = q.substring(0, q.indexOf('|') - 0)
        const umurUser = q.substring(q.lastIndexOf('|') + 1)
        if (isBanned) return
        if (isRegistered) return reply('kamu sudah terdaftar')
        if(isNaN(umurUser)) return await reply('*Umur harus berupa angka!*')       
        if (namaUser.length >= 30) return reply(`*why is your name so long it's a name or a train*`)
        if (umurUser > 30) return reply(`*UMUR KAMU TERLALU TUA*`)
        if (umurUser < 15) return reply(`*UMUR KAMU TERLALU MUDA*`)
        var reg = body.slice(8)
        var jeneng = reg.split("|")[0];
        var umure = reg.split("|")[1];
        _registered.push(sender)
        fs.writeFileSync('./src/registered.json', JSON.stringify(_registered))
        try {
        ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
        } catch {
        ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
        }
        buff = await getBuffer(ppimg)
        captus =  `\`\`\`Pendaftaran berhasil dengan SN: TM08GK8HEUZBEHDO\`\`\`\n\n\`\`\`Pada ${date} ${time}\`\`\`\n\`\`\`[Nama]: ${jeneng}\`\`\`\n\`\`\`[Nomor]: wa.me/${sender.split("@")[0]}\`\`\`\n\`\`\`[Umur]: ${umure}\`\`\`\n\`\`\`Untuk menggunakan bot\`\`\`\n\`\`\`silahkan\`\`\`\n\`\`\`kirim ${prefix}menu\`\`\`\n\`\`\`\nTotal Pengguna ${_registered.length}\`\`\``
        client.sendMessage(from,buff, image, {caption: captus, quoted: mek})
        break

        case 'welcome':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins && !isOwner) return reply(ind.admin())
        buttons = [
        {buttonId: `${prefix}wellon`, buttonText: {displayText: 'ON'}, type: 1},
        {buttonId: `${prefix}wellof`, buttonText: {displayText: 'OFF'}, type: 1}
        ]
        buttonMessage = {
        contentText: "Pilih salah satu!",
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }
        client.sendMessage(from, buttonMessage, buttonsMessage, {quoted: mek})
        break
        case 'wellon':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins && !isOwner) return reply(ind.admin())
        if (isWelkom) return reply('Udah aktif um')
        welkom.push(from)
        fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
        reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
        break
        case 'wellof':
         if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins && !isOwner) return reply(ind.admin())
        welkom.splice(from, 1)
        fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
        reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
        break

        case 'nsfw':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        reply('NSFW IS LOCKED IN THE MONTH OF RAMADHAN')
        /*if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins) return reply(ind.admin())
        if (args.length < 1) return reply('Hmmmm')
        if (Number(args[0]) === 1) {
        if (isNsfw) return reply('Udah aktif um')
        nsfw.push(from)
        fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
        reply('Sukses mengaktifkan fitur NSFW di group ini ✔️')
        } else if (Number(args[0]) === 0) {
        nsfw.splice(from, 1)
        fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
        reply('Sukses menonaktifkan fitur NSFW di group ini ✔️')
        } else {
        reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
        }*/
          break
        case 'off':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins && !isOwner) return reply(ind.admin())
        power.push(from)
        fs.writeFileSync('./src/power.json', JSON.stringify(power))
        reply('Bot Off')
        break
        case 'on':
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins && !isOwner) return reply(ind.admin())
        power.splice(from, 1)
        fs.writeFileSync('./src/power.json', JSON.stringify(power))
        reply('Bot On')
        break
        case 'owelcome':
        if (isBanned) return
        if (!isGroup) return reply(ind.groupo())
        if (!isOwner) return reply('Kamu siapa?')
        if (args.length < 1) return reply('Hmmmm')
        if (Number(args[0]) === 1) {
        if (isWelkom) return reply('Udah aktif um')
        welkom.push(from)
        fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
        reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
        } else if (Number(args[0]) === 0) {
        welkom.splice(from, 1)
        fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
        reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
        } else {
        reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
        }
          break
        case 'chatowner':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (args.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
        pesan = `Member laknat chatnih\n\nNomor :https://wa.me/${sender.split("@s.whatsapp.net")[0]} / ${sender.split("@s.whatsapp.net")[0]}\n\npesan : ${body.slice(11)}`
	    if (isMedia && !mek.message.videoMessage || isQuotedImage) {
		var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
        var media = await  client.downloadAndSaveMediaMessage(encmedia)
		buff = fs.readFileSync(media)
		client.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, buff, image, {caption: pesan})
		reply('SUKSES CHAT KE OWNER\nPesan main-main hanya akan membuatmu dibanned oleh bot')
		} else {
	    client.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, pesan, text)
		reply('SUKSES CHAT KE OWNER\nPesan main-main hanya akan membuatmu dibanned oleh bot')
		}
        break 
        /*case 'chat':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (args.length < 1) return reply(`Ketik ${body.slice(0)} nomor tujuan|pesan`)
        if (args[0].startsWith('08')) return reply('Format nomor:628xxxxx')
        if (args[0].startsWith('+6')) return reply('Ga peke + langsung 6285xxx')
        if (args[0].startsWith('62 8')) return reply('Jangan pake spasi anjj')
        if (args.length > 300) return reply('Maaf Teks Terlalu Panjang, Maksimal 300 Teks')
        var cht = body.slice(6)
        var nomor = cht.split("|")[0];
        var msg = cht.split("|")[1];
        tekst = `*Hay ada pesan dari seseorang nih...*\n\nPesan : ${msg}\n\nPengirim:https://wa.me/${sender.split("@s.whatsapp.net")[0]}\nBy O C T V tech bot`
        client.sendMessage(`${nomor}@s.whatsapp.net`, tekst, text)
        reply(`SUKSES CHAT KE NOMOR ${nomor}`)
        ///await limitAdd(sender) 
        break*/
        case 'ochat':
        if (isPower) return
        if (isBanned) return
        if (!isOwner) return reply(mess.only.ownerB)
        if (args.length < 1) return reply(`Ketik ${body.slice(0)} nomor tujuan|pesan`)
        if (args[0].startsWith('08')) return reply('Format nomor:628xxxxx')
        var cht = body.slice(7)
        var nomor = cht.split("|")[0];
        var msg = cht.split("|")[1];
	    s = nomor
        s = s.replace(/\-/g, "");
        s = s.replace(/\ /g, "");
        s = s.replace(/\+/g, "");
        if (isNaN(s)) return reply('Nomor harus berupa angka');
        tekst = `*CHAT DARI OWNER*\n\nPesan : ${msg}\n\nUntuk reply ketik ${prefix}chatowner balasan`
        client.sendMessage(`${s}@s.whatsapp.net`, tekst, text)
        reply(`SUKSES CHAT KE NOMOR ${nomor}`)
        break
        case 'warn':
        if (isPower) return
        if (isBanned) return
        if (!isOwner) return reply(mess.only.ownerB)
        if (args.length < 1) return reply(`Ketik ${body.slice(0)} nomor tujuan|pesan`)
        if (args[0].startsWith('08')) return reply('Format nomor:628xxxxx')
        var cht = body.slice(6)
        var nomor = cht.split("|")[0];
        var msg = cht.split("|")[1];
        s = nomor
        s = s.replace(/\-/g, "");
        s = s.replace(/\ /g, "");
        s = s.replace(/\+/g, "");
        if (isNaN(s)) return reply('Nomor harus berupa angka');
        tekst = `❗⚠️ *W A R N I N G* ⚠️❗\n\n\n${msg}`
        client.sendMessage(`${s}@s.whatsapp.net`, tekst, text)
        reply(`SUKSES CHAT KE NOMOR ${nomor}`)
        break
        case 'privatechat':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (args.length < 1) return reply(`Ketik ${body.slice(0)} nomor tujuan|pesan`)
        if (args[0].startsWith('08')) return reply('Format nomor:628xxxxx')
        if (args.length > 300) return reply('Maaf Teks Terlalu Panjang, Maksimal 300 Teks')
        var cht = body.slice(13)
        var nomor = cht.split("|")[0];
        var msg = cht.split("|")[1];
        s = nomor
        s = s.replace(/\-/g, "");
        s = s.replace(/\ /g, "");
        s = s.replace(/\+/g, "");
        if (isNaN(s)) return reply('Nomor harus berupa angka');
        tekst = `*Hay, Seseorang telah mengirim pesan ke kamu...*\n\nPesan : ${msg}\n\n\nBy O C T V tech bot`
        client.sendMessage(`${s}@s.whatsapp.net`, tekst, text)
        reply(`SUKSES CHAT KE NOMOR ${nomor}`)
        ///await limitAdd(sender) 
        break

        case 'grup':
        case 'gc':
        case 'group':
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins) return reply(ind.admin())
        if (!isBotGroupAdmins) return reply(ind.badmin())
        client.updatePresence(from, Presence.composing) 
        buttons = [
        {buttonId: `${prefix}grlock`, buttonText: {displayText: 'LOCK'}, type: 1},
        {buttonId: `${prefix}grunlock`, buttonText: {displayText: 'UNLOCK'}, type: 1}
        ]
        buttonMessage = {
        contentText: "Pilih salah satu!",
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }
        client.sendMessage(from, buttonMessage, buttonsMessage, {quoted: mek})
        break
        case 'grlock':
        if (isBanned) return
        if (!isRegistered) return
        if (!isGroup) return
        if (!isGroupAdmins) return
        if (!isBotGroupAdmins) return
        reply(`Group telah ditutup oleh admin ${pushname2} , sehingga hanya admin yang dapat mengirim pesan.`)
        client.groupSettingChange(from, GroupSettingChange.messageSend, true)
        break
        case 'grunlock':
        if (isBanned) return
        if (!isRegistered) return
        if (!isGroup) return
        if (!isGroupAdmins) return
        if (!isBotGroupAdmins) return
        reply(`Group telah dibuka oleh admin ${pushname2} , sehinggaa semua peserta dapat mengirim pesan.`)
        client.groupSettingChange(from, GroupSettingChange.messageSend, false)
        break

        case 'clone':
        if (isBanned) return
        if (!isGroup) return reply(ind.groupo())
        if (!isOwner) return reply('Kamu siapa?')
        if (args.length < 1) return reply('Tag target yang ingin di clone')
        if (args.length > 1) return reply('satu² ajg')
        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
        try {
        pp = await client.getProfilePicture(id)
        buffer = await getBuffer(pp)
        client.updateProfilePicture(botNumber, buffer)
        mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
        } catch (e) {
        reply('Gagal om')
        }
        break
        //textmaker
        case 'avengers':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} text|text`)
        reply(mess.wait)
        var avg = body.slice(9)
        var tx1 = avg.split("|")[0];
        var tx2 = avg.split("|")[1];
        anu = await textpro2('https://textpro.me/create-3d-avengers-logo-online-974.html', tx1, tx2)
        buff = await getBuffer(anu)
        client.sendMessage(from, buff, image, {quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'bpink':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} text`)
        reply(mess.wait)
        anu = await textpro('https://textpro.me/create-blackpink-logo-style-online-1001.html', body.slice(7))
        buff = await getBuffer(anu)
        client.sendMessage(from, buff, image, {quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'glitch':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} text|text`)
        var glt = body.slice(8)
        var text7 = glt.split("|")[0];
        var text8 = glt.split("|")[1];
        reply(mess.wait)
        anu = await textpro2('https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html', text7, text8)
        buff = await getBuffer(anu)
        client.sendMessage(from, buff, image, {quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'tahta':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} text`)
        reply(mess.wait)
        anu = await getBuffer(`https://api.zeks.me/api/hartatahta?text=${body.slice(6)}&apikey=${zeksApi}`)
        client.sendMessage(from, anu, image, {caption:`Harta Tahta ${body.slice(7)}`, quotedd: mek})
        ///await limitAdd(sender) 
        break
        case 'marvel':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} text|text`)
        var mar = body.slice(8)
        var text12 = mar.split("|")[0];
        var text13 = mar.split("|")[1];
        anu = await textpro2('https://textpro.me/create-logo-style-marvel-studios-online-971.html', text12, text13)
        reply(mess.wait)
        buff = await getBuffer(anu)
        client.sendMessage(from, buff, image, {quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'glitch2':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} text`)
        anu = await textpro('https://textpro.me/create-impressive-glitch-text-effects-online-1027.html', body.slice(9))
        reply(mess.wait)
        buff = await getBuffer(anu)
        client.sendMessage(from, buff, image, {quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'phlogo':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} text|text`)
        var phl = body.slice(8)
        var text16 = phl.split("|")[0];
        var text17 = phl.split("|")[1];
        anu = await textpro2('https://textpro.me/pornhub-style-logo-online-generator-free-977.html', text16, text17)
        reply(mess.wait)
        buff = await getBuffer(anu)
        client.sendMessage(from, buff, image, {quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'thunder':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} text`)
        anu = await textpro('https://textpro.me/create-thunder-text-effect-online-881.html', body.slice(9))
        reply(mess.wait)
        buff = await getBuffer(anu)
        client.sendMessage(from, buff, image, {quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'attp':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}attp Wajahku Ganteng*`)
        attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
        client.sendMessage(from, attp2, sticker, {quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'ttp':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}ttp Wajahku Ganteng*`)
        anu = await getBuffer(`https://api-xcoders.xyz/api/maker/ttp?apikey=${apiKey}&text=${body.slice(5)}`)
        anu1 = fs.readFileSync(anu)
        rano = getRandom('.webp')
        exec(`ffmpeg -i ${anu1} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
        if (err) return reply(mess.error.stick)
        fs.unlinkSync(anu1)
        ttp = fs.readFileSync(rano)
        client.sendMessage(from, ttp, sticker, {quoted: mek})
        fs.unlinkSync(rano)
                })
        break
        case 'bneon':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} text`)
        anu = await textpro('https://textpro.me/neon-light-text-effect-online-882.html', body.slice(7))
        reply(mess.wait)
        buff = await getBuffer(anu)
        client.sendMessage(from, buff, image, {quoted: mek})
        ///await limitAdd(sender)
        break
        case 'matrix':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} text`)
        anu = await textpro('https://textpro.me/matrix-style-text-effect-online-884.html', body.slice(8))
        reply(mess.wait)
        buff = await getBuffer(anu)
        client.sendMessage(from, buff, image, {quoted: mek})
        ///await limitAdd(sender)
        break
        case 'greenhoror':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} text`)
        anu = await textpro('https://textpro.me/create-green-horror-style-text-effect-online-1036.html', body.slice(12))
        reply(mess.wait)
        buff = await getBuffer(anu)
        client.sendMessage(from, buff, image, {quoted: mek})
        ///await limitAdd(sender)
        break
        case 'dropwater':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} text`)
        anu = await textpro('https://textpro.me/dropwater-text-effect-872.html', body.slice(11))
        reply(mess.wait)
        buff = await getBuffer(anu)
        client.sendMessage(from, buff, image, {quoted: mek})
        ///await limitAdd(sender)
        break
        case 'devil':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} text`)
        anu = await textpro('https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html', body.slice(7))
        reply(mess.wait)
        buff = await getBuffer(anu)
        client.sendMessage(from, buff, image, {quoted: mek})
        ///await limitAdd(sender)
        break
        
        ///maker with imgbb uploader
        
        /*case 'cphcomment':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`kirim gambar lalu ketik ${prefix}${command} nama|komentar`)
        gh = body.slice(11)
        usnm = gh.split("|")[0];
        cmn = gh.split("|")[1];
        var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
        var media = await  client.downloadAndSaveMediaMessage(encmedia)
        var imgbb = require('imgbb-uploader')
        res = await imgbb('de404db9d9a94c4d0eb2490b93788824', media)
        reply(mess.wait)
        buffer88 = await getBuffer(`https://api.zeks.me/api/phub?apikey=apivinz&img=${res.display_url}&username=${usnm}&msg=${cmn}`)
        client.sendMessage(from, buffer88, image, {quoted: mek, caption: `*${usnm}* : ${cmn}`})
        ///await limitAdd(sender) 
        break*/
        case 'translate':
         if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix + command} code bahasa|text`);
        var lang = args[0];
        var kata = body.slice(14);
        terj = await terjemah(kata, lang);
        reply(terj);
        break
		case 'changelog':
		if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
		teks = `Here are the changes that have occurred in the ${setting.botname} bot:`;
		no = 0;
		for (let chg of changelog) {
			no += 1;
			teks += `\n\n🚀 ${no.toString()}. ${chg}`;
		};
		reply(teks);
		break;
		case 'change':
		if (!isOwner) return;
		if (args.length < 1) return;
		var dates = moment.tz('Asia/Jakarta').format('dd,DD/MM/YYYY HH:mm:ss');
		chg = dates  + ' :\n' + body.slice(8);
		changelog.push(chg);
		fs.writeFileSync('./database/changelog.json', JSON.stringify(changelog));
		reply('Succes added changelog');
		break;
        case 'kalender':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
        var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
        var media = await  client.downloadAndSaveMediaMessage(encmedia)
        res = await imgbb('de404db9d9a94c4d0eb2490b93788824', media)
        reply(mess.wait)
        anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/calendar?image_url=${res.display_url}`)
        bufferj = await getBuffer(anu.result)
        client.sendMessage(from, bufferj, image, {quoted: mek})
        } else {
        reply(`Kirim foto lalu ketik ${prefix}${command}`)
        }
        ///await limitAdd(sender) 
        break
        case 'badut':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
        var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
        var media = await  client.downloadAndSaveMediaMessage(encmedia)
        res = await imgbb('de404db9d9a94c4d0eb2490b93788824', media)
        reply(mess.wait)
        try {
        bufferj = await fetchJson(`https://docs-jojo.herokuapp.com/api/clown-face-in-hole?image_url=${res.display_url}`)
        reply('Wajah tidak terdeteksi!')
        } catch {
        bufferj = await getBuffer(`https://docs-jojo.herokuapp.com/api/clown-face-in-hole?image_url=${res.display_url}`)
        client.sendMessage(from, bufferj, image, {quoted: mek})
        }
        } else {
        reply(`Kirim foto lalu ketik ${prefix}${command}`)
        }
        ///await limitAdd(sender) 
        break
        case 'nobg':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
        var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
        var media = await  client.downloadAndSaveMediaMessage(encmedia)
        res = await imgbb('de404db9d9a94c4d0eb2490b93788824', media)
        if (res.image.extension === "png") return reply('Maaf gampar berformat .png tidak dapat dihapus background\nMohon gunakan gambar berformat .jpg')
        reply(mess.wait)
        bufferj = await getBuffer(`https://api-xcoders.xyz/api/maker/rmbg?url=${res.display_url}&apikey=${apiKey}`)
        client.sendMessage(from, bufferj, image, {quoted: mek})
        } else {
        reply(`Kirim foto lalu ketik ${prefix}${command}`)
        }
        ///await limitAdd(sender) 
        break
                
        //tools
        
        case 'artinama':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply(`Namanya siapa?`);
        reply(mess.wait);
        anu = await artiNama(body.slice(10));
        reply(anu.result);
        ///await limitAdd(sender) ;
        break
        case 'artimimpi':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply(`Mimpiya apa?`);
        reply(mess.wait);
        anu = await artiMimpi(body.slice(11));
        reply(anu.result);
        ///await limitAdd(sender);
        break
        case 'jodoh':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply(`Ketik ${prefix+ command} namamu|nama pasanganmu`);
        var s = body.slice(7);
        var t = s.split("|")[0];
        var u = s.split("|")[1];
        anu = await ramalJodoh(t, u);
        hasil = `*Namamu* : ${t}\n*Nama Pasagan* : ${u}\n*Positif* : ${anu.positif}\n*Negatif* : ${anu.negatif}`
        reply(hasil);
        ///await limitAdd(sender);
        break
        case 'nomorhoki':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply(`Ketik ${prefix+ command} nomor telepon`);
        anu = await nomorHoki(args[0]);
        reply(anu.result);
        ///await limitAdd(sender);
        break
        case 'zodiakharian':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply(`Ketik ${prefix+ command} zodiakmu`);
        anu = await zodiakHar(body.slice(14));
        reply(mess.wait);
        tek = `✨ *Zodiak* : ${anu.zodiak}\n\n📅 *Tanggal* : ${anu.date}\n\n🎰 *Nomor hoki* : ${anu.nomer_hoki}\n\n🗒️ *Ramalan* : ${anu.ramalan.umum}\n\n❤️ *Love* : ${anu.ramalan.love}\n\n💵 *Keuangan* : ${anu.ramalan.keuangan}`
        buff = await getBuffer(anu.thumb)
        client.sendMessage(from, buff, image, {quoted: mek, caption: tek});
        ///await limitAdd(sender);
        break
        case 'zodiak':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply(`Ketik ${prefix+ command} zodiakmu`);
        anu = await zodiakMing(body.slice(8));
        reply(mess.wait);
        tek = `✨ *Zodiak* : ${anu.zodiak}\n\n📅 *Tanggal* : ${anu.date}\n\n🎰 *Nomor hoki* : ${anu.nomer_hoki}\n\n🗒️ *Ramalan* : ${anu.ramalan.umum}\n\n❤️ *Love* : ${anu.ramalan.love}\n\n💵 *Keuangan* : ${anu.ramalan.keuangan}`
        buff = await getBuffer(anu.thumb)
        client.sendMessage(from, buff, image, {quoted: mek, caption: tek});
        ///await limitAdd(sender);
        break
        case 'infogempa':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        anu = await Gempa();
        teks = `• *Waktu*:${anu.waktu}\n• *Magnitude*:${anu.magnitudo}\n• *Kedalaman*:${anu.kedalaman}\n• *Lintang*:${anu.lintang}\n• *Bujur*:${anu.bujur}\n• *Wilayah*:${anu.wilayah}`;
        gbr = await getBuffer(anu.map);
        client.sendMessage(from, gbr, image, {quoted: mek, caption: teks});
        ///await limitAdd(sender);
        break;
        case 'cuaca':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply(`Masukkan nama kota`);
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        anu = await Cuaca(body.slice(7));
        teks = `🔰 *Tempat* : ${anu.Nama}\n📍 *Longitude* : ${anu.Longitude}\n📍 *Latitude* : ${anu.Latitude}\n🌡️ *Suhu* : ${anu.Suhu}\n🌪️ *Angin* : ${anu.Angin}\n❄️ *Kelembaban* : ${anu.Kelembaban}\n🌥️ *Cuaca* : ${anu.Cuaca}\n🗒️ *Keterangan* : ${anu.Keterangan}\n🌬️ *Udara* : ${anu.Udara}`
        reply(teks);
        ///await limitAdd(sender);
        break
        
        case 'nulis':
        case 'tulis':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix}${command} text`)
        reply(mess.wait)
        anu = await getBuffer(`https://api-xcoders.xyz/api/maker/nulis?apikey=${apiKey}&text=${body.slice(6)}`)
        client.sendMessage(from, anu, image, {quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'nulis2':
          if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix}${command} nama|kelas|text|warna tinta\nUntuk warna tinta adalah:\n1 = coklat\n2 = merah\n3 = biru\n4 = hitam`)
        var nul = body.slice(8)
        var nama = nul.split("|")[0];
        var kelas = nul.split("|")[1];
        var tekk = nul.split("|")[2];
        var tinta = nul.split("|")[2];
        reply(mess.wait)
        buffr = await getBuffer(`https://api.zeks.me/api/magernulis?nama=${nama}&kelas=${kelas}&text=${tekk}&tinta=${tinta}&apikey=${zeksApi}`)
        client.sendMessage(from, buffr, image, {caption: 'Ketahuan guru mampus lu', quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'ppcouple':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        anu  = await fetchJson(`https://api-xcoders.xyz/api/random/ppcouple?apikey=${apiKey}`);
        tek = anu.result.theme
        gb1 = await getBuffer(anu.result.ppcwo);
        client.sendMessage(from, gb1, image, {quoted: mek, caption: `*Theme* : ` + tek + `\n\nPP cowo`});
        gb2 = await getBuffer(anu.result.ppcwe);
        client.sendMessage(from, gb2, image, {quoted: mek, caption: `*Theme* : ` + tek + `\n\nPP cewe`});
        ///await limitAdd(sender);
        break
		case 'asupan':
		if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        nimek =  asupan[Math.floor(Math.random() * asupan.length)];
        vid = await mediafireDl(nimek);
        hsl = await getBuffer(vid.link);
		reply(mess.wait);
		client.sendMessage(from, hsl, video, {quoted: mek, mimetype: 'video/mp4'});
		///await limitAdd(sender);
		await addFilter(from);
		break
        case 'simi':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} pesan`)
        sim = await fetchJson(`https://api-xcoders.xyz/api/fun/simi?text=${body.slice(5)}&apikey=hnslrl1882`)
        simi = (sim.result)
        client.sendMessage(from, simi, text, {quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'pictcewek':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        reply(mess.wait)
        nimek =  cewek[Math.floor(Math.random() * cewek.length)];
        pok = await getBuffer(nimek)
        client.sendMessage(from, pok, image, { quoted: mek, caption: 'nih'})
        ///await limitAdd(sender) 
        break
        case 'pictcowok':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        reply(mess.wait)
        nimek =  cowok[Math.floor(Math.random() * cowok.length)];
        pok = await getBuffer(nimek)
        client.sendMessage(from, pok, image, { quoted: mek, caption: 'nih'})
        ///await limitAdd(sender) 
        break
        case 'pictkucing':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        reply(mess.wait)
        nimek =  kucing[Math.floor(Math.random() * kucing.length)];
        pok = await getBuffer(nimek)
        client.sendMessage(from, pok, image, { quoted: mek, caption: 'nih'})
        ///await limitAdd(sender) 
        break
        case 'loli':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        reply(mess.wait)
        nimek =  lolii[Math.floor(Math.random() * lolii.length)];
        pok = await getBuffer(nimek)
        client.sendMessage(from, pok, image, { quoted: mek, caption: 'nih'})
        ///await limitAdd(sender) 
        break
        case 'anime':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        reply(mess.wait)
        nimek =  anime[Math.floor(Math.random() * anime.length)];
        pok = await getBuffer(nimek)
        client.sendMessage(from, pok, image, { quoted: mek, caption: 'nih'})
        ///await limitAdd(sender) 
        break
		case 'bc':
		if (!isOwner) return reply('Owner only')
		if (args.length < 1) return reply('......')
	    anu = await client.chats.all()
	    ket =  `📢${setting.botname} Broadcast Message📢\n\n` + body.slice(4)
		if (isMedia && !mek.message.videoMessage || isQuotedImage) {
		var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		var	buff = await client.downloadAndSaveMediaMessage(encmedia)
		anu.forEach ((send, i) => {
			setTimeout (() => {
				var media = fs.readFileSync(buff)
				var sendd = send.jid
				var memb = `${sendd}`
				client.sendMessage(memb, media , image, {caption : ket})
		    }, i * 3000)
		})
		reply('Sukses broadcast')
		} else {
	     anu.forEach ((send, i) => {
			setTimeout (() => {
				sendd = send.jid
				client.sendMessage(sendd, ket, text)
		    }, i * 1500)
		})
		reply('Sukses broadcast')
		}
		break
		case 'bcd':
		if (!isOwner) return reply('Owner only')
		anu = await client.chats.all()
	    anu.forEach ((send, i) => {
			setTimeout (() => {
				sendd = send.jid
				reply(`${sendd}`)
		    }, i * 500)
		})
		reply('Sukses broadcast')
		
		break
        case 'play':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply(`Ketik ${prefix}${command} judul lagu`);
        await addFilter(from);
        reply('Sedang diproses...');
        ply = await ytMp3(body.slice(6));
        rslt = `Lagu ditemukan\n\n\nJudul:${ply.title}\n\nChannel:${ply.channel}\n\nPublished:${ply.published}\n\nViews:${ply.views}\n\n\nLagu akan dikirimkan, jangan spam ya sayang!`;
        thmb = await getBuffer(ply.thumb);
        client.sendMessage(from, thmb, image, {caption: rslt, quoted: mek})
        lagu = await getBuffer(ply.url);
        client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${ply.title}.mp3`, quoted: mek,});
        ///await limitAdd(sender); 
        break
        case 'playmp4':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply(`Ketik ${prefix}${command} judul video`);
        await addFilter(from);
        reply('Sedang diproses...');
        ply = await ytMp4(body.slice(9));
        rslt = `Video ditemukan\n\n\nJudul:${ply.title}\n\nChannel:${ply.channel}\n\nPublished:${ply.published}\n\nViews:${ply.views}\n\n\nVideo akan dikirimkan, jangan spam ya sayang!`;
        thmb = await getBuffer(ply.thumb);
        client.sendMessage(from, thmb, image, {caption: rslt, quoted: mek});
        vidd = await getBuffer(ply.url);
        client.sendMessage(from, vidd, video, {mimetype: 'video/mp4', filename: `${ply.title}.mp4`, quoted: mek});
        ///await limitAdd(sender);
        break
        case 'ytmp3':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix}${command} Link Youtube`)
        reply('Sedang diproses...')
        if (!args[0].includes('https://youtu')) return reply('Masukkan url youtube')
        ply = await ytMp3(args[0]);
        rslt = `Lagu ditemukan\n\n\nJudul:${ply.title}\n\nChannel:${ply.channel}\n\nPublished:${ply.published}\n\nViews:${ply.views}\n\n\nLagu akan dikirimkan, jangan spam ya sayang!`;
        thmb = await getBuffer(ply.thumb);
        client.sendMessage(from, thmb, image, {caption: rslt, quoted: mek})
        lagu = await getBuffer(ply.url);
        client.sendMessage(from, lagu, document, {mimetype: 'audio/mp4', filename: `${ply.title}.mp3`, quoted: mek})
        ///await limitAdd(sender)
        break
        case 'ytmp4':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (isLimit(sender)) return reply (imitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix}${command} Link Youtube`)
        reply('Sedang diproses...')
        if (!args[0].includes('https://youtu')) return reply('Masukkan url youtube')
        ply = await ytMp4(args[0]);
        rslt = `Video ditemukan\n\n\nJudul:${ply.title}\n\nChannel:${ply.channel}\n\nPublished:${ply.published}\n\nViews:${ply.views}\n\n\nVideo akan dikirimkan, jangan spam ya sayang!`;
        thmb = await getBuffer(ply.thumb);
        client.sendMessage(from, thmb, image, {caption: rslt, quoted: mek});
        vidd = await getBuffer(ply.url);
        client.sendMessage(from, vidd, video, {mimetype: 'video/mp4', filename: `${ply.title}.mp4`, quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'img2url':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        reply(mess.wait)
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
        var media = await  client.downloadAndSaveMediaMessage(encmedia)
        var imgbb = require('imgbb-uploader')
        imgbb('de404db9d9a94c4d0eb2490b93788824', media)
          .then(data => {
              var caps = `「 *IMAGE TO URL* 」\n\n*╠➥  ID :* ${data.id}\n*╠➥  MimeType :* ${data.image.mime}\n*╠➥  Extension :* ${data.image.extension}\n\n*╠➥  URL :* ${data.display_url}`
              ibb = fs.readFileSync(media)
               client.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
          })
          .catch(err => {
              throw err
          })
          ///await limitAdd(sender) 
        break  
        case 'wame':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        client.updatePresence(from, Presence.composing) 
        options = {
        text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
        contextInfo: { mentionedJid: [sender] }
        }
        client.sendMessage(from, options, text, { quoted: mek } )
        break
        case 'wiki':
        case 'wikipedia':
        ///if (!isRegistered) return reply(ind.noregis())
        if (isPower) return
        if (isBanned) return
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix}${command} query`)
        reply(mess.wait)
        wiki = await fetchJson(`https://api.zeks.me/api/wiki?q=${args.join(" ")}&apikey=${zeksApi}`)
        if (wiki.result.error) return reply('Query tidak ditemukan')
        reply(wiki.result.result)
        ///await limitAdd(sender) 
        break
        case 'kusonime':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} judul anime`)
        anu = await fetchJson(`https://api-xcoders.xyz/api/anime/kusonime?search=${body.slice(10)}&apikey=${apiKey}`)
        if (anu.message) return reply('Judul anime tidak di temukan')
        reply(mess.wait)
        result = `• *Title*:${anu.result.title}\n• *Title Japan*:${anu.result.title_jp}\n• *Genre*:${anu.result.genre}\n• *Season*:${anu.result.season}\n• *Producer*:${anu.result.producer}\n• *Type*:${anu.result.type}\n• *Status*:${anu.result.status}\n• *Total Episode*:${anu.result.total_episode}\n• *Score*:${anu.result.score}\n• *Duration*:${anu.result.duration}\n• *Relase*:${anu.result.released_on}\n• *Description*:${anu.result.description}\n\n`
        for (let dnl of anu.result.download) {
          result += `resolusi:${dnl.resolution}\n\n`
          for (let res of dnl.download_list){
            result += `link:${res.download_link}\ndownloader:${res.downloader}\n\n`
          }
        }
        thumbs = await getBuffer(anu.result.thumbs)
        client.sendMessage(from, thumbs,  image, {quoted: mek, caption: result})
        ///await limitAdd(sender) 
        break
        case 'playstore':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${body.slice(0)} aplikasi yang dicari`)
        ps = `${body.slice(11)}`
        anu = await fetchJson(`https://api.zeks.me/api/sgplay?apikey=${zeksApi}&q=${ps}`, {method: 'get'})
        store = '======================\n'
        for (let ply of anu.result){
        store += `• *Nama Apk:* ${ply.title}\n• *ID:* ${ply.appid}\n• *Developer:* ${ply.developer}\n• *Link Apk:* ${ply.url}\n=====================\n`
        }
        reply(store.trim())
        ///await limitAdd(sender) 
        break
        case 'jadwaltv':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${body.slice(0)} channel tv`)
        channel = args[0]
        tvnow = await fetchJson(`https://api.zeks.me/api/jadwaltv?apikey=${zeksApi}&channel=${body.slice(10)}`);
        reply(tvnow.result)
        ///await limitAdd(sender) 
        break
        case 'ganteng':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (!isGroup) return reply(ind.groupo());
		await addFilter(from);
        membr = [];
        const nus = groupMembers;
        const msl = groupMembers;
        const siapss = nus[Math.floor(Math.random() * nus.length)];
        const sipss = pushname2[Math.floor(Math.random() * msl.length)];
        teks = `Yang paling Ganteng disini Adalah : @${siapss.jid.split('@')[0]}`;
        membr.push(siapss.jid);
        mentions(teks, membr, true);
        ///await limitAdd(sender);
        break
        case 'beban':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (!isGroup) return reply(ind.groupo());
		await addFilter(from);
        membr = [];
        const met = groupMembers;
        const msd = groupMembers;
        const siapsa = met[Math.floor(Math.random() * met.length)];
        const sipsd = pushname2[Math.floor(Math.random() * msd.length)];
        teks = `Yang paling Beban disini Adalah : @${siapsa.jid.split('@')[0]}`;
        membr.push(siapsa.jid);
        mentions(teks, membr, true);
        ///await limitAdd(sender);
        break
        case 'cantik':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (!isGroup) return reply(ind.groupo());
		await addFilter(from);
        membr = [];
        const meo = groupMembers;
        const msk = groupMembers;
        const siaps = meo[Math.floor(Math.random() * meo.length)];
        const sips = pushname2[Math.floor(Math.random() * msk.length)];
        teks = `Yang paling Cantik disini Adalah : @${siaps.jid.split('@')[0]}`;
        membr.push(siaps.jid);
        mentions(teks, membr, true);
        ///await limitAdd(sender);
        break
        case 'babi':
        case 'bajingan':
        case 'gatel':
        case 'setan':
        case 'asu':
        case 'kimak':
		case 'jancok':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (!isGroup) return reply(ind.groupo());
		await addFilter(from);
        membr = [];
        const mew = groupMembers;
        const msi = groupMembers;
        const siapo = mew[Math.floor(Math.random() * mew.length)];
        const sipu = pushname2[Math.floor(Math.random() * msi.length)];
        teks = `Yang paling ${command} disini Adalah : @${siapo.jid.split('@')[0]}`;
        membr.push(siapo.jid);
        mentions(teks, membr, true);
        ///await limitAdd(sender);
        break
        case 'brainly':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix + command} query\nContoh penggunaan : \n${prefix + command} apakah itu cinta`);
       anu = await fetchJson(`https://api.zekais.com/brainly?query=${body.slice(9)}&apikey=${zekaisApi}`)
        anu.result.forEach((dat, i) => {
            setTimeout(() => {
            brain = `'❉───────────❉\n\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${dat.question}\n\n*➸ Jawaban:* ${dat.answer[0].answer}\n❉───────────❉`
            client.sendMessage(from, brain, text)
            }, 1000*i)
        })
        ///await limitAdd(sender) 
        break 
        case 'darkjoke':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        anu = await getBuffer(`https://api-xcoders.xyz/api/random/darkjoke?apikey=${apiKey}`)
        client.sendMessage(from, anu, image, {quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'mutual':
        if (isBanned) return
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (isGroup) return reply( 'Command ini tidak bisa digunakan di dalam grup!')
        anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
        await reply('Looking for a partner...')
        await reply(`wa.me/${anug}`)
        await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
        ///await limitAdd(sender) 
        break
        case 'next':
        if (isBanned) return
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (isGroup) return reply( 'Command ini tidak bisa digunakan di dalam grup!')
        anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
        await reply('Looking for a partner...')
        await reply(`wa.me/${anug}`)
        await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
        ///await limitAdd(sender) 
        break
        case 'jadian':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (!isGroup) return reply(ind.groupo());
		await addFilter(from);
        jds = [];
        const jdii = groupMembers;
        const koss = groupMembers;
        const akuu = jdii[Math.floor(Math.random() * jdii.length)];
        const diaa = koss[Math.floor(Math.random() * koss.length)];
        teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} 💘 @${diaa.jid.split('@')[0]} \nJangan lupa PJnya yaa...`;
        jds.push(akuu.jid);
        jds.push(diaa.jid);
        mentions(teks, jds, true);
        ///await limitAdd(sender);
        break
        case 'ngewe':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (!isGroup) return reply(ind.groupo());
		await addFilter(from);
        jds = [];
        const jdiid = groupMembers;
        const kosst = groupMembers;
        const akuut = jdiid[Math.floor(Math.random() * jdiid.length)];
        const diaat = kosst[Math.floor(Math.random() * kosst.length)];
        teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan️ @${diaat.jid.split('@')[0]}  \nKetahuan kan lu`;
        jds.push(akuut.jid);
        jds.push(diaat.jid);
        mentions(teks, jds, true);
        ///await limitAdd(sender);
        break
        case 'stalkig':
        case 'igstalk':
        if (isBanned) return;
        if (isPower) return;
        //////if (!isRegistered) return reply(ind.noregis());
        if (isLimit(sender)) return reply(limitend(pusname2));
        if (args.length < 1) return reply(`Ketik ${prefix + command} username instagram`);
        try {
        anu = await fetchJson(`https://api-xcoders.xyz/api/stalk/ig?username=${args[0]}&apikey=${apiKey}`);
        reply (mess.wait)
        if (anu.status == false) return reply('Username tidak ditemukan')
        buff = await getBuffer(anu.result.profile_url);
        dat = `• *Username* : ${anu.result.username}\n• *Full Name* : ${anu.result.full_name}\n• *Bio* : ${anu.result.biography}\n• *Followers* : ${anu.result.followers}\n• *Following* : ${anu.result.following}\n• *Post* : ${anu.result.posts_count}\n• *External Url* : ${anu.result.external_url}\n• *Private Status* : ${anu.result.is_private}\n• *Verified Status* : ${anu.result.is_verified}`
        client.sendMessage(from, buff, image, {quoted: mek, caption: dat});
        } catch {
          reply(`Api's down!`)
        }
        ///await limitAdd(sender);
        break
        case 'ig':
        if (isBanned) return;
		if (isPower) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pusname2));
        if (args.length < 1) return reply(`Ketik ${prefix + command} link instagram`);
        if (!args[0].includes('instagram.com/')) return reply('Ini link apa?');
        try {
        anu = await fetchJson(`http://api.zekais.com/igdl2?url=${args[0]}&apikey=${zekaisApi}`);
        if (anu.status == 500) return reply ('URL Salah atau private');
        reply (mess.wait);
        anu.result.forEach(async(res, i) => {
            setTimeout(async() => {
            fl = await getBuffer(res.url);
            if (res.type == "image") {
                client.sendMessage(from, fl, image, {quoted: mek});
            } else {
                client.sendMessage(from, fl, video, {quoted: mek});
            };
            }, 1000* i);
        });
        } catch {
          reply(`Api's down!`)
        }
        ///await limitAdd(sender)
        break
		case 'igstory':
		if (isBanned) return;
		if (isPower) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pusname2));
        if (args.length < 1) return reply(`Ketik ${prefix + command} username Instagram`);
        if (budy.includes('instagram.com')) return reply('Username aja kak');
    try {
		anu = await fetchJson(`http://api.zekais.com/igstory?username=${args[0]}&apikey=${zekaisApi}`);
		 if (!anu.status == 200) return reply ('Username Salah');
        reply (mess.wait);
        anu.result.forEach(async(res, i) => {
            setTimeout(async() => {
            fl = await getBuffer(res.url);
            if (res.type == "image") {
                client.sendMessage(from, fl, image, {quoted: mek});
            } else {
                client.sendMessage(from, fl, video, {quoted: mek});
            };
            }, 3000* i);
        });
    } catch {
      reply(`Api's down!`)
    }
		///await limitAdd(sender);
		break
		case 'call':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        if (!isGroup) return reply(ind.groupo());
        if (!isGroupAdmins) return reply(ind.admin());
		///if (isLimit(sender)) return reply(limitend(pushname2));
        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di panggil');
         var loop = args[1];
        var mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
        for(let i = 0; i < loop; ++i){
          setTimeout (()=> {
           mentions(`@${mentioned[0].split('@')[0]}`, mentioned, true);
          }, 500 *i);
        }
        ///await limitAdd(sender);
        break
        case 'sp':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        if (!isOwner) return
        ///if (isLimit(sender)) return reply(limitend(pushname2));
       var ttt = body.slice(4);
       var nom = ttt.split("|")[0];
       var tek = ttt.split("|")[1];
       var loop = ttt.split("|")[2];
       reply(nom)
       nomorr = nom + "@s.whatsapp.net"
        for(let i = 0; i < loop; ++i){
          setTimeout (()=> {
           client.sendMessage(nomorr, tek, text)
          }, 500 *i);
        }
        ///await limitAdd(sender);
        break
        case 'twitter':
        case 'twit':
         if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix + command} URL Twitter`)
        anu = await fetchJson(`https://api.zekais.com/twtdl?url=${args[0]}&apikey=${zekaisApi}`);
        reply(mess.wait);
        buff = await getBuffer(anu.result);
        if (anu.type === "img/jpg") {
         client.sendMessage(from, buff, image, {quoted: mek})
         } else {
         client.sendMessage(from, buff, video, {quoted: mek})
         }
         ///await limitAdd(sender);
        break
          case 'ml':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix + command} nama hero`)
        anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/heroml?hero=${body.slice(4)}`)
        hasil = `*R E S U L T*\n\nNama:${anu.result.hero.name}\nKutipan:${anu.result.hero.quotes}\nRole:${anu.result.hero.role}\nSpeciality:${anu.result.hero.speciality}\nRekomendasi Lane:${anu.result.hero.laning_recommendation}\nTanggal Rilis:${anu.result.hero.release_date}\n*Atribut*\n\nMovement Speed:${anu.result.hero.attributes.movement_speed}\nPhysical Attack:${anu.result.hero.attributes.physical_attack}\nMagic Power:${anu.result.hero.attributes.magic_power}\nAttack Speed:${anu.result.hero.attributes.attack_speed}\nPhysical Defense:${anu.result.hero.attributes.physical_defense}\nMagic Defense:${anu.result.hero.attributes.magic_defense}\nBasic Atk Crit Rate:${anu.result.hero.attributes.basic_atk_crit_rate}\nHP:${anu.result.hero.attributes.hp}\nMana:${anu.result.hero.attributes.mana}\nAbility Crit Rate:${anu.result.hero.attributes.ability_crit_rate}\nHP Regen:${anu.result.hero.attributes.hp_regen}\nMana Regen:${anu.result.hero.attributes.mana_regen}`
        buffer = await getBuffer(anu.result.hero.img)
        client.sendMessage(from, buffer, image, {caption: hasil, quoted: mek})
        ///await limitAdd(sender)
        break
        case 'tafsirquran':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix + command} permasalahan`)
        anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tafsir?q=${body.slice(13)}`)
        taf = '======================\n'
        for (let ply of anu.result){
        taf += `• Tafsir:${ply.tafsir}\n• Deskripsi:${ply.deskripsi}\n=====================\n`
          }
        reply(taf.trim())
        ///await limitAdd(sender)
        break
        case 'jadwalsholat':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply(`Ketik ${prefix + command} kota`);
        anu = await fetchJson(`https://api-xcoders.xyz/api/muslim/jadwalshalat?query=${body.slice(14)}&apikey=${apiKey}`);
        if (anu.status == false) return reply ('Lokasi tidak ditemukans');
        hasil = `*R E S U L T*\n\n📅 *Tanggal* : ${anu.result.date}\n📍 *Lokasi* : ${anu.result.lokasi}\n⏰ *Timezone* : ${anu.result.timezone}\n🌃 *Imsyak* : ${anu.result.imsak}\n🌆 *Sunrise* : ${anu.result.sunrise}\n☀️ *Dzuhur* : ${anu.result.dzuhur}\n🌇 *Ashar* : ${anu.result.ashar}\n🌅 *Maghrib* : ${anu.result.maghrib}\n🌙 *Isya* : ${anu.result.isya} `
        reply(hasil)
        ///await limitAdd(sender)
        break
		case 'getallid':
		if (!isOwner && !isOwner2) return;
		anu = await client.chats.all();
		teks = '';
		for (let _ of anu){
			teks += '\n' + _.jid;
		};
		teks += '\n\n Length : ' + anu.length;
		reply(teks);
		break
        case 'fancy':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix + command} text`)
        anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fancy?text=${body.slice(7)}`) 
        fncy = '*R E S U L T*:\n'
        for (let fan of anu.result) {
          fncy+= `• ${fan}\n`
        }
        reply(fncy)
        ///await limitAdd(sender)
        break
        case 'fb':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix + command} link video fb`)
	    anu = await fetchJson(`https://api-xcoders.xyz/api/download/fb?apikey=${apiKey}&url=${args[0]}`)
		if (!anu.status == true) return reply(`Error`)
        vidd = await getBuffer(anu.result.url);
        client.sendMessage(from, vidd, video, {mimetype: 'video/mp4', quoted: mek});
        ///await limitAdd(sender)
        break
        case 'cerpen':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/cerpen`)  
        cerp = `JUDUL:${anu.result.title}\nPENGARANG:${anu.result.pengarang}\nKATEGORI:${anu.result.kategori}\n\nCERPEN:\n${anu.result.cerpen}`
        reply(cerp)
        ///await limitAdd(sender)
        break
        case 'spekhp':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix + command} merk dan type hp`)
        anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/gsm_arena?q=${body.slice(8)}`)
        reply(mess.wait);
        buffr = await getBuffer(anu.img);
        spek = `*Title* : ${anu.title}`
        for (let an of anu.spec) {
            spek += an.list
        }
        client.sendMessage(from, buffr, image, {caption: spek, quoted: mek})
        ///await limitAdd(sender)
        break
		case 'image':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix + command} gambar yang dicari`)
        try {
	    gimagee = await fetchJson(`https://api-xcoders.xyz/api/search/image?query=${body.slice(7)}&apikey=${apiKey}`);
	      reply(mess.wait);
        rev = gimagee.result.reverse()
        lght = rev.length - 5
        rev.slice(lght).forEach(async(gb, i) => {
        setTimeout(async() => {
        gbr = await getBuffer(gb.url);
              client.sendMessage(from, gbr, image, {quoted: mek});			
        }, i * 1000);
        });
        } catch {
          reply(`Api's down!`)
        }
		///await limitAdd(sender)
        
        break
		case 'image1':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix + command} gambar yang dicari`)
        reply(mess.wait);
	    var google = new Scraper({
          puppeteer: {
           headless: true,
          },
        });
		(async () => {
        gimagee = await google.scrape(`${body.slice(8)}`, 200);
		teks = ''
		for (let  gbr of gimagee) {
			teks += '"' + gbr.url + '",\n'
		};
		reply(teks);
         })();
		///await limitAdd(sender)
        break
		case 'playb':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (isGroup) return reply('Fiture Disable')
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix + command} judul bokep`)
        anu = await fetchJson(`https://mnazria.herokuapp.com/api/porn?search=${body.slice(7)}`)
        reply(mess.wait)
        bkp = JSON.parse(JSON.stringify(anu.result));
        mmq =  bkp[Math.floor(Math.random() * bkp.length)]
        urll = mmq.url
        vid = await fetchJson(`https://mnazria.herokuapp.com/api/porndownloadxvideos?url=${urll}`)
        vide = await getBuffer(vid.mp4)
        client.sendMessage(from, vide, video, {quoted: mek})
        ///await limitAdd(sender)
        break
        case 'xvid':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix + command} judul bokep`)
        anu = await fetchJson(`https://mnazria.herokuapp.com/api/porn?search=${body.slice(6)}`)
        reply(mess.wait)
        anu.result.forEach((bkp, i) => {
		   setTimeout (() => {
          hsl = `R E S U L T\n\n*Judul*:${bkp.title}\n*Artist*:${bkp.actors}\n*Durasi*:${bkp.duration}\n*link*:${bkp.url}\n\n`
		   reply(hsl)
		   }, i * 500);
        })       
        ///await limitAdd(sender)
        break
        
        //anime 
        case 'waifu':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        reply(mess.wait)
        nimek =  waifu[Math.floor(Math.random() * waifu.length)];
        pok = await getBuffer(nimek)
        client.sendMessage(from, pok, image, { quoted: mek, caption: 'nih'})
        ///await limitAdd(sender) 
        break
        case 'husbu':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        reply(mess.wait)
        nimek =  husbu[Math.floor(Math.random() * husbu.length)];
        pok = await getBuffer(nimek)
        client.sendMessage(from, pok, image, { quoted: mek, caption: 'nih'})
        ///await limitAdd(sender) 
        break
        case 'kpop':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        reply(mess.wait)
        nimek =  kpop[Math.floor(Math.random() * kpop.length)];
        pok = await getBuffer(nimek)
        client.sendMessage(from, pok, image, { quoted: mek, caption: 'nih'})
        ///await limitAdd(sender) 
        break
        case 'ssweb':
		if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
		if (args.length < 1)return reply(`Ketik ${prefix+ command} url`);
        anu = await getBuffer(`https://image.thum.io/get/maxAge/12/width/1200/${args[0]}`);
		reply(mess.wait)
	    client.sendMessage(from, anu, image, {caption: 'Jika muncul logo saja harap ulangi!',quoted: mek});
		///await limitAdd(sender);
		break
		
        case 'p':
        if (isBanned) return
        reply('[ONLINE]')
        break
        case 'bot':
        if (isBanned) return
        if (!isOwner && !isGroupAdmins) return reply(`Iya syg, mau apa?\nMending ketik ${prefix}menu`)
        buttons = [
        {buttonId: `${prefix}on`, buttonText: {displayText: 'ON 🟩'}, type: 1},
        {buttonId: `${prefix}off`, buttonText: {displayText: 'OFF 🟥'}, type: 1}
        ]
        buttonMessage = {
        contentText: `Iya syg, mau apa?\nMending ketik ${prefix}menu\n\n\nBot toggle :`,
        footerText: `${setting.botname}`,
        buttons: buttons,
        headerType: 1
        }
        client.sendMessage(from, buttonMessage, buttonsMessage, {quoted: mek})
        break
        case 'wait':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
        reply(mess.wait);
		await addFilter(from);
        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek;
        media = await client.downloadMediaMessage(encmedia)
        await wait(media).then(res => {
        client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()});
        }).catch(err => {
        reply(err);
        });
        } else {
        reply('Fotonya mana?');
        };
        ///await limitAdd(sender);
        break
				default:
				
        if (buddy.includes(`mualaikum`)) {
            if (isPower) return
            if (isBanned) return
        client.sendMessage(from, wala, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }

        if (buddy.includes(`mu'alaikum`)) {
            if (isPower) return
            if (isBanned) return
        client.sendMessage(from, wala, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }

        if (buddy.includes('biasalah')){
            if (isPower) return
            if (isBanned) return
        client.sendMessage(from, biasa, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }

        if (buddy.includes(`curhat`)) {
            if (isPower) return
            if (isBanned) return
        reply(`Ada apa sih sayang, sini dong cerita apa masalahnya`)
        }

        if (buddy.includes(' cok')) {
            if (isBanned) return
            reply('Piye cok?');
            }

        if (buddy.includes(`makasi`)) {
            if (isPower) return
            if (isBanned) return
        client.sendMessage(from, samasama, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }

        if (buddy.includes(`terima kasih`)) {
            if (isPower) return
            if (isBanned) return
        client.sendMessage(from, samasama, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }

        if (budy.includes('tiktok.com/')) {
            if (isPower) return
            if (isBanned) return
            anu = await findUrl(budy)
        anu.forEach(async(taut, i) => {
        setTimeout(async() => {
             tikt = await tiktok(taut);
             toktok = await getBuffer(tikt.result.nowatermark);
             client.sendMessage(from, toktok, video, {quoted: mek, mimetype: 'video/mp4'});
         }, 3000 * i)
        })   
        }

        if (budy.includes('instagram.com/')) {
            if (isPower) return
            if (isBanned) return
            anu = await findUrl(budy)
        anu.forEach(async(taut, i) => {
        setTimeout(async() => {
            inst = await fetchJson(`http://api.zekais.com/igdl2?url=${taut}&apikey=${zekaisApi}`);
             inst.result.forEach(async(res, i) => {
            setTimeout(async() => {
            fl = await getBuffer(res.url);
            if (res.type == "image") {
                client.sendMessage(from, fl, image, {quoted: mek});
            } else {
                client.sendMessage(from, fl, video, {quoted: mek});
            };
            }, 3000* i);
        });
         }, 3000 * i)
        })   
        }
		
		if (pes.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntilink) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		client.updatePresence(from, Presence.composing)
	     linkgc = await client.groupInviteCode(from)
		 if(pes.includes("chat.whatsapp.com/" + linkgc)) return reply('Untung link gc ini');
		if (pes.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("1detik")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("4detik")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("5detik")
		}, 0)
	}
		
        if (isPower) return
        if (isBanned) return
        if (body.startsWith(`${prefix}${command}`)) {
        reply(`Maaf *${pushname2}*, Command *${prefix}${command}* Tidak Terdaftar Di Dalam *${prefix}menu*!`)
        }

        if (budy.startsWith('$')){
      if (!mek.key.fromMe && !isOwner) return;
      qur = budy.slice(2);
      exec(qur, (err, stdout) => {
        if (err) return reply(`‣  ${err}`);
        if (stdout) {
          reply(stdout)
        }
      });
    }

    if (budy.startsWith('>')){
      if (!mek.key.fromMe && !isOwner) return;
      try {
        client.sendMessage(from, "‣ "+JSON.stringify(eval(budy.slice(2)),null,'\t'), text, {quoted: mek});
        } catch(err) {
          e = String(err);
          reply("‣ "+e);
        }
    }
		    if (!isGroup && isAyla && budy != undefined) {
        console.log(budy)
        aylaa = await ayla(budy)
	    	ayla1 = aylaa.replace(/simi/g, "ayla");
        console.log(ayla1)
        client.sendMessage(from, ayla1, text)
        } else if (isGroup && isSimi && budy != undefined) {
        console.log(budy)
        muehe = await simih(budy)
        console.log(muehe)
        reply(muehe)
        } else {
        return console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
        }

        
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
