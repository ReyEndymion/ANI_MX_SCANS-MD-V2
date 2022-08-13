import db from '../lib/database.js'
import axios from 'axios'
import fs from 'fs'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗INFO❗] LOS COMANDOS +18 ESTAN DESACTIVADOS EN ESTE GRUPO, SI ES ADMIN Y DESEA ACTIVARLOS USE EL COMANDO #enable modohorny*'
if (!text) throw `*[❗INFO❗] EJEMPLO DE USO DEL COMANDO ${usedPrefix + command} Con mi prima*`
try {
let apikey = keysxxx[Math.floor(Math.random() * keysxxx.length)]
let res = await axios.get(`https://zenzapis.xyz/searching/xnxx?apikey=${apikey}&query=${text}`)
let json = res.data
let listSerch = []
let teskd = `Videos relacionados con: ${args.join(" ")}`
const sections = [{
title: `*RESULTADOS*`,
rows: listSerch }]
const listMessage = {
text: teskd,
footer: 'Elija una opcion y precione Enviar',
title: " 『 VIDEOS RELACIONADOS 』",
buttonText: "[♦ RESULTADOS ♦]",
sections}
for (let i of json.result) {
listSerch.push({title: i.title, description: '⇧ SELECCIONA ESTA OPCION PARA DESCARGAR EsTE VIDEO ⇧', rowId: `${usedPrefix}xnxxdl ${i.url}`})} 
conn.sendMessage(m.chat, listMessage, { quoted: m })
} catch (e) {
m.reply('*[❗INFO❗] ERROR, POR FAVOR VUELVA A INTENTARLO*')
console.log(e)
}}
handler.command = /^porhubsearch|xvideossearch|xnxxsearch$/i
export default handler
global.keysxxx = ['fiktod', 'c2459db922', 'BF39D349845E', '675e34de8a', '37CC845916', '0b917b905e6f', '6fb0eff124']
