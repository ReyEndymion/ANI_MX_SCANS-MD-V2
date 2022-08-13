import db from '../lib/database.js'
import Connection from '../lib/connection.js'
import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(db.data.users).length
const chats = Object.entries(Connection.store.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let info = `
╠═〘 INFO 𝐃𝐄L 𝐁𝐎T 〙 ═
╠
╠➥ [🤴🏻] CREADOR: *𝓡𝓮𝔂 𝓔𝓷𝓭𝔂𝓶𝓲𝓸𝓷*
╠➥ [#️⃣] No. DEL CREADOR: *wa.me/5215517489568*
╠➥ [🎳] PREFIJO: *${usedPrefix}*
╠➥ [🔐] CHATS PRIVADOS: *${chats.length - groups.length}*
╠➥ [🦜] CHATS DE GRUPOS: *${groups.length}* 
╠➥ [💡] CHATS TOTALES: *${chats.length}* 
╠➥ [🚀] ACTIVIDAD: *${uptime}*
╠➥ [🎩] USUARIOS: *${totalreg} 𝚗𝚞𝚖𝚎𝚛𝚘𝚜*
╠➥ [👨‍🦯] VELOCIDAD: 
╠  *${speed}* 
╠  *𝚖𝚒𝚕𝚒𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜*
╠➥ [☑️] AUTOREAD: ${autoread ? '*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*' : '*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*'}
╠➥ [❗] RESTRICT: ${restrict ? '*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*' : '*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*'} 
╠
╠═〘 *🌎ANI MX SCANS🌏* 〙 ═
`.trim() 
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'INFO DEL BOT',
body: 'ANI MX SCANS',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
Url: `https://www.facebook.com/ANIMxSCANS`}}})
}
handler.help = ['infobot', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(ping|speed|infobot)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
