import db from '../lib/database.js'
import { createHash } from 'crypto'
let handler = async function (m, { text, usedPrefix }) {
let rtotalreg = Object.values(db.data.users).filter(user => user.registered == true).length
let user = db.data.users[m.sender]
if (user.registered === true) throw `*[❗INFO❗] HEY! YA ESTAS REGISTRADO*\n\n*QUIERES QUITAR TU REGISTRO? USA EL COMANDO ${usedPrefix}unreg <numero de serie>*\n\n*SI NO RECUERDAS TU NUMERO DE SERIE PUEDES USAR EL COMANDO ${usedPrefix}myns*`
let name = conn.getName(m.sender)
let age = Math.floor(Math.random() * 41)
age = parseInt(age)
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex')
let caption = `┏┅ ━━━━━━━━━━━━ ┅ ━
┇「 INFORMACION 」
┣┅ ━━━━━━━━━━━━ ┅ ━
┃ *NOMBRE:* ${name}
┃ *EDAD:* ${age} años
┃ *NUMERO DE SERIE:* 
┃ ${sn}
┗┅ ━━━━━━━━━━━━ ┅ ━`
let author = global.author
conn.sendButton(m.chat, caption, `¡TU NUMERO DE SERIE TE SERVIRA POR SI DESEAS BORRAR TU REGISTRO EN EL BOT!\n${author}`, [['¡¡AHORA SOY UN VERIFICADO/A!!', '/profile']], m)
db.data.users[m.sender].money += 10000
db.data.users[m.sender].exp += 10000
}
handler.help = ['verificar']
handler.tags = ['xp']
handler.command = /^(verify|register|verificar)$/i
export default handler
