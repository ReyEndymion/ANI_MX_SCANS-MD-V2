let handler = async (m, { conn, isROwner, text }) => {
if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
await m.reply('```RESTART. . .```')
process.send('reset')}
handler.command = /^(res(tart)?)$/i
handler.rowner = true
export default handler
