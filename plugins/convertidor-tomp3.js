import { toAudio } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `*[❗INFO❗] RESPONDA AL VIDEO O NOTA DE VOZ QUE DESEE CONVERTIR A AUDIO/MP3*`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw '*[❗INFO❗] LO LAMENTO, OCURRIO UN ERROR AL DESCARGAR SU VIDEO, POR FAVOR VUELVA A INTENTARLO*'
if (!media && !/audio/.test(mime)) throw '*[❗INFO❗] LO LAMENTO, OCURRIO UN ERROR AL DESCARGAR SU NOTA DE VOZ, POR FAVOR VUELVA A INTENTARLO*'
let audio = await toAudio(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw '*[❗INFO❗] LO LAMENTO, OCURRIO UN ERROR AL CONVERTIR SU NOTA DE VOZ A AUDIO/MP3, POR FAVOR VUELVA A INTENTARLO*'
if (!audio.data && !/video/.test(mime)) throw '*[❗INFO❗] LO LAMENTO, OCURRIO UN ERROR AL CONVERTIR SU VIDEO A AUDIO/MP3, POR FAVOR VUELVA A INTENTARLO*'
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3 (reply)']
handler.tags = ['audio']
handler.command = ['tomp3', 'toaudio', 'mp3']
export default handler
