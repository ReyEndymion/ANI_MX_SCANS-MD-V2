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
â âã INFO ððL ððT ã â
â 
â â¥ [ð¤´ð»] CREADOR: *ð¡ð®ð ðð·ð­ðð¶ð²ð¸ð·*
â â¥ [#ï¸â£] No. DEL CREADOR: *wa.me/5215517489568*
â â¥ [ð³] PREFIJO: *${usedPrefix}*
â â¥ [ð] CHATS PRIVADOS: *${chats.length - groups.length}*
â â¥ [ð¦] CHATS DE GRUPOS: *${groups.length}* 
â â¥ [ð¡] CHATS TOTALES: *${chats.length}* 
â â¥ [ð] ACTIVIDAD: *${uptime}*
â â¥ [ð©] USUARIOS: *${totalreg} ððððððð*
â â¥ [ð¨âð¦¯] VELOCIDAD: 
â   *${speed}* 
â   *ðððððððððððð*
â â¥ [âï¸] AUTOREAD: ${autoread ? '*ðððððððð*' : '*ððððððððððð*'}
â â¥ [â] RESTRICT: ${restrict ? '*ðððððððð*' : '*ððððððððððð*'} 
â 
â âã *ðANI MX SCANSð* ã â
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
