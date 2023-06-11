export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner, participants}) {
  let espadmins = global.espadmins = [['5215532867844'], ['5213328673075'], ['5215560065619'], ['50581492411'], ['50237822582'], ['5212411719937'], ['50582438276'], ['50372982101'], ['59162618066'], ['5213531275886'], ['5213326820930'], ['584128927527'], ['573206049511'], ['50763057799'], ['5217443714420'], ['12246057118'], ['51984122833'], ['573108715954'], ['5215613310013'], ['573132928488'], ['5219842545994'], ['5219842504743'], ['51969664348'], ['528442677056'], ['5218444999765'], ['5217712009688'], ['573206279063'], ['5219991307200'], ['59161545885'], ['5219616650861'], ['573105436190'], ['51901786322'], ['5219992698701'], ['573166730283'], ['5214191056589'], ['5213322708837'], ['14192396562'], ['5217292331176'], ['5214775190562'], ['5215587486329'], ['12232308954'], ['34641526429'], ['573175070854'], ['5215618937690'], ['50257602757'], ['593979173410'], ['573172517283'], ['59169283414'], ['5214423933594']]
   function sort(property, ascending = true) {
     if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
     else return (...args) => args[ascending & 1] - args[!ascending & 1]
   }
   
   function toNumber(property, _default = 0) {
     if (property) return (a, i, b) => {
       return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
     }
     else return a => a === undefined ? _default : a
   }
 let creators = global.owner.filter(entry => typeof entry[0] === 'string' && !isNaN(entry[0])).map(entry => ({ jid: entry[0] })).map(toNumber('')).sort(sort('')).slice(0).map(({jid}) => `${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]}`).join` y `
 let adm = espadmins.filter(entry => typeof entry[0] === 'string' && !isNaN(entry[0])).map(entry => ({ jid: entry[0] })).map(toNumber('')).sort(sort('')).slice(0).map(({jid}) => `${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]}`).join`, `
 let el = m.sender;
 console.log(adm, 'es el error')
 if (m.isBaileys && m.fromMe) return !0
 if (m.isGroup) return !1
 if (adm.includes(el)) return !0
 if (!m.message) return !0
    if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot') || m.text.includes('deletebot') || m.text.includes('stop') || m.text.includes('estado'))
       return !0
    let chat = db.data.chats[m.chat]
    let bot = db.data.settings[this.user.jid] || {}
    let ban = `Hola *@${el}*, está prohibido hablar al privado del bot serás bloqueado.\nDudas con *${creators}\n Para los jadibots aqui solo se pueden usar los comandos jadibot/serbot, deletebot, stop y estado \n\n El grupo para usar el bot es : https://chat.whatsapp.com/DpcgpFF2RO16wFG9SlZemG`
    if (bot.antiPrivate && !isOwner && !isROwner) {
      let txt = '';
      let count = 0;
      for (const c of ban) {
      await new Promise(resolve => setTimeout(resolve, 5));
      txt += c;
      count++;

    if (count % 10 === 0) {
        conn.sendPresenceUpdate('composing' , m.chat);
    }
}
    await conn.sendMessage(m.chat, { text: txt.trim(), mentions: conn.parseMention(txt) }, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100} )
       await this.updateBlockStatus(m.chat, 'block')
    }
    return !1
}
