let handler = m => m
handler.all = async function (m, { isBotAdmin }) {
if (m.messageStubType === 68) {
//this.reply(m.chat, 'VIRUS TERDETEKSI!!!\n\n' + require('util').format(m.key) + '\n'.repeat(9999), m)
await this.modifyChat(m.chat, 'clear', { includeStarred: false }).catch(console.log)
}}
export default handler