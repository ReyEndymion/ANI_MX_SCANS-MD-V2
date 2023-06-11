let handler = async (m) => {
db.data.chats[m.chat].isBanned = false
m.reply('*[❗INFO❗] ESTE CHAT FUE DESBANEADO CON EXITO*')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
handler.owner = true
export default handler
