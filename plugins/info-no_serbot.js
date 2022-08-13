let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `*[❗INFO❗] LAS FUNCIONES PARA SER BOT (#𝚜𝚎𝚛𝚋𝚘𝚝, #𝚓𝚊𝚍𝚒𝚋𝚘𝚝, #𝚋𝚘𝚝𝚜, #𝚐𝚎𝚝𝚌𝚘𝚍𝚎, #𝚜𝚞𝚋𝚋𝚘𝚝𝚜, #𝚜𝚎𝚛𝚜𝚞𝚋𝚋𝚘𝚝) NO ESTAN ACTUALMENTE FUNCIONALES PARA ESTE BOT (ANI MX SCANS)*

*—◉ PUEDE PROBAR INSTALAR DESDE CERO EL BOT SIGUIENDO UNO DE LOS TUTORIALES QUE HAY EN EL CANAL DE THE SHADOW BROKERS*
*◉ https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'INFORMACION - SERBOT',
body: '🌎ANI MX SCANS🌏',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/ReyEndymion/ANI_MX_SCANS-MD`}}})   
}
handler.command = /^(jadibot|serbot|bots|subbots|getcode)/i
export default handler
