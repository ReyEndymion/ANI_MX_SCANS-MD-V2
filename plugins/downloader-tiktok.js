import fetch from 'node-fetch'
let handler = async (m, {command, conn, text, args}) => {
if (!text) throw `*[❗INFO❗] ENLACE DE TIKTOK FALTANTE, POR FAVOR INGRESE EN ENLACE/LINK DE ALGUN VIDEO DE TIKTOK*\n\n*—◉ EJEMPLO:*\n*#tiktok https://vm.tiktok.com/ZML42vSnn/*`
if (command == 'tiktokaudio') {
let espera = '*[❗INFO❗] AGUARDE UN MOMENTO EN LO QUE ENVIO SU AUDIO DE TIKTOK*'
m.reply(espera)
let res = await fetch("https://api.dhamzxploit.my.id/api/tiktod/?url="+args[0])
let json = await res.json()
conn.sendFile(m.chat, json.result.nowatermark, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'tiktok') {
let espera = '*[❗INFO❗] AGUARDE UN MOMENTO EN LO QUE ENVIO SU VIDEO DE TIKTOK*'
m.reply(espera)
let res = await fetch("https://api.dhamzxploit.my.id/api/tiktod/?url="+args[0])
let json = await res.json()
conn.sendFile(m.chat, json.result.nowatermark, 'error.mp4', `_ANI MX SCANS_`, m)}
}
handler.help = ['tiktok' , 'tiktokaudio'].map(v => v + ' <link>')
handler.tags = ['downloader']
handler.command = ['tiktok', 'tiktokaudio']
export default handler
