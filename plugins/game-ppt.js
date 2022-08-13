import db from '../lib/database.js'
let handler = async (m, { text, usedPrefix }) => {
let INTROJUEGO = `*HOLA 👋🏻, ESTAS JUGANDO A "PIEDRA, PAPEL O TIJERA"*\n\n*OPCIONES DISPONIBLES:*\n*piedra, papel o tijera*\n\n*EJEMPLO:*\n*${usedPrefix}ppt tijera*\n\n*- USE LAS OPCIONES EN MINUSCULAS COMO SE INDICA EN EL EJEMPLO*\n\n*𝘉𝘺 _ANI MX SCANS_*`
if (!text) throw INTROJUEGO
var astro = Math.random()
if (astro < 0.34) {
astro = 'piedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
}
if (text == astro) {
db.data.users[m.sender].exp += 500
m.reply(`*🔰 Empate!*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*🎁 Puntos +500 XP*`)
} else if (text == 'papel') {
if (astro == 'piedra') {
db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*🎁 Puntos +1000 XP*`)
} else {
db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*❌ Puntos -300 XP*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*🎁 Puntos +1000 XP*`)
} else {
db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*❌ Puntos -300 XP*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*🎁 Puntos +1000 XP*`)
} else {
db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*❌ Puntos -300 XP*`)
}
} else if (text == 'papel') {
if (astro == 'piedra') {
db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*🎁 Puntos +1000 XP*`)
} else {
db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*❌ Puntos -300 XP*`)
}
} else if (text == 'piedra') {
if (astro == 'tijera') {
db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*🎁 Puntos +1000 XP*`)
} else {
db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*❌ Puntos -300 XP*`)
}
} else {
throw INTROJUEGO
}}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt)$/i
export default handler
