let handler = async (m, { conn }) => {
conn.reply(m.chat, `*< LISTA DE COMANDOS / TEXTOS ASIGNADOS />*\n${Object.entries(db.data.sticker).map(([key, value], index) => `*${index + 1}.-*\n*CODIGO:* ${value.locked ? `*(bloqueado)* ${key}` : key}\n*COMANDO/TEXTO* ${value.text}`).join('\n\n')}
`.trim(), null, {mentions: Object.values(db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])})
}
handler.command = ['listcmd', 'cmdlist']
handler.rowner = true
export default handler
