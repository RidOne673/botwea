const menu = (prefix, pushname2, uangku, role, sender, limitCounts) => {
	return `π₯πΎ π π π - π π π π  
	πΎ π π π π π π ππ₯
  
  βMODERATION MODEβ
  
  *MENU*:
  
  β β₯ *${prefix}kick*
  ~>Ketik ${prefix}kick lalu tag member yang ingin dikeluarkan
  
  β β₯ *${prefix}kicktime*
  ~>Ketik ${prefix}kicktime lalu tag member yang ingin dikeluarkan dan memberi jeda waktu sebelum mengeluarkan
  
  β β₯ *${prefix}add*
  ~>Ketik ${prefix}add lalu masukkan nomor member yang akan dimasukkan, format nomor harus 628xxxxx, contoh 
  ${prefix}add 6285773929493
  
  β β₯ *${prefix}group*
  ~>Ketik ${prefix}group lock untuk menutup group dan ${prefix}group unlock untuk membuka group
  
  β β₯ *${prefix}tutuptime*
  ~>Menutup group dengan waktu, cara penggunaan contoh: ${prefix}tutuptime 10 detik
  
  β β₯ *${prefix}bukatime*
  ~>Membuka group dengan waktu, cara penggunaan contoh: ${prefix}bukatime 10 detik
  
  β β₯ *${prefix}tutup*
  ~>Menutup group dan otomatis membuka group setelah waktu yg di stel habis, cara penggunaan: ${prefix}tutup 10 detik
  
  β β₯ *${prefix}linkgc*
  ~>Ketik ${prefix}linkgc untuk memunculkan link group
  
  β β₯ *${prefix}hidetag*
  ~>Ketik ${prefix}hidetag text, untuk memberi notif ke semua member group
  
  β β₯ *${prefix}setpp*
  ~>Kirim gambar lalu ketik ${prefix}setpp untuk mengubah icon group
  
  β β₯ *${prefix}welcome*
  ~>Ketik ${prefix}welcome 1 untuk mengaktifkan mode welcome dan ketik ${prefix}welcome 0 untuk menonaktifkan mode welcome
  
  β β₯ *${prefix}tagall*
  ~>Ketik ${prefix}tagall untuk memanggil semua member group, terdapat 3 fitur ${prefix}tagall, ${prefix}tagall2, ${prefix}tagall3
  
  β β₯ *${prefix}pengumuman*
  ~>Ketik ${prefix}pengumuman text pengumuman untuk memberi notifikasi pengumuman kepada member group
  
  β β₯ *${prefix}leave*
  ~>Ketik ${prefix}leave untuk mengeluarkan bot dari group
  
  β β₯ *${prefix}promote*
  ~>Ketik ${prefix}promote lalu tag member yang ingin dijadikan admin
  
  β β₯ *${prefix}demote*
  ~>Ketik ${prefix}demote lalu tag admin yang ingin di jadikan member
  
  β β₯ *${prefix}antilink*
  ~>Ketik ${prefix}antilink 1 untuk mengaktifkan dan ketik ${prefix}antilink untuk menonaktifkan
  
  β β₯ *${prefix}antidelete*
  ~>Ketik ${prefix}antidelete 1 untuk mengaktifkan dan ketik ${prefix}antidelete untuk menonaktifkan
  
  β β₯ *${prefix}badword*
  ~>Ketik ${prefix}badword 1 untuk mengaktifkan dan ketik ${prefix}badword untuk menonaktifkan
  
  β β₯ *${prefix}leveling*
  ~>Ketik ${prefix}leveling 1 untuk mengaktifkan dan ketik ${prefix}leveling untuk menonaktifkan
  
  β β₯ *${prefix}nsfw*
  ~>Ketik ${prefix}nsfw 1 untuk mengaktifkan dan ketik ${prefix}nsfw untuk menonaktifkan
  
  β β₯ *${prefix}on/off*
  ~>Untuk mengaktifkan dan menonaktifkan bot di group dengan cara ketik ${prefix}on atau ${prefix}off
  
  *BONUS MENU:*
  
  β β₯ *${prefix}buylimit*
  ~>untuk membeli limit jika limit telah habis, dengan harga 2000/limit. Cara pembelian ketik ${prefix}buylimit jumlah limit yang akan dibeli
  
  β β₯ *${prefix}brainly*
  ~>Ketik${prefix}brainly lalu tulis pertanyaan kamu
  
  β β₯ *${prefix}img2url*
  ~>Kirim atau reply gambar dan beri caption ${prefix}img2url untuk mengubah gambar menjadi link
  
  β β₯ *${prefix}randomquran*
  ~>Ketik ${prefix}randomquran untuk memunculkan quran random
  
  β β₯ *${prefix}cmd*
  ~>Ketik ${prefix}cmd untuk melihat all fitur
	`
}

exports.menu = menu
