import db from '../lib/database.js'
let handler = async (m, { text, usedPrefix }) => {
let INTROJUEGO = `*HOLA ππ», ESTAS JUGANDO A "PIEDRA, PAPEL O TIJERA"*\n\n*OPCIONES DISPONIBLES:*\n*piedra, papel o tijera*\n\n*EJEMPLO:*\n*${usedPrefix}ppt tijera*\n\n*- USE LAS OPCIONES EN MINUSCULAS COMO SE INDICA EN EL EJEMPLO*\n\n*ππΊ _ANI MX SCANS_*`
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
m.reply(`*π° Empate!*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*π Puntos +500 XP*`)
} else if (text == 'papel') {
if (astro == 'piedra') {
db.data.users[m.sender].exp += 1000
m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*π Puntos +1000 XP*`)
} else {
db.data.users[m.sender].exp -= 300
m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*β Puntos -300 XP*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
db.data.users[m.sender].exp += 1000
m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*π Puntos +1000 XP*`)
} else {
db.data.users[m.sender].exp -= 300
m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*β Puntos -300 XP*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
db.data.users[m.sender].exp += 1000
m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*π Puntos +1000 XP*`)
} else {
db.data.users[m.sender].exp -= 300
m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*β Puntos -300 XP*`)
}
} else if (text == 'papel') {
if (astro == 'piedra') {
db.data.users[m.sender].exp += 1000
m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*π Puntos +1000 XP*`)
} else {
db.data.users[m.sender].exp -= 300
m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*β Puntos -300 XP*`)
}
} else if (text == 'piedra') {
if (astro == 'tijera') {
db.data.users[m.sender].exp += 1000
m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*π Puntos +1000 XP*`)
} else {
db.data.users[m.sender].exp -= 300
m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*β Puntos -300 XP*`)
}
} else {
throw INTROJUEGO
}}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt)$/i
export default handler
