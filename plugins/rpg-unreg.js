import db from '../lib/database.js'
import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw '*[❗N𝐅𝐎❗] INGRESE SU NUMERO DE SERIE, SI NO LO RECUERDA PUEDE USAR EL COMANDO #myns*'
let user = db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw '*[❗INFO❗] NUMERO DE SERIE INCORRECTO, COMPRUEBE QUE LO HAYA ESCRITO CORRECTAMENTE!*\n\n*SI NO LO RECUERDA PUEDE USAR EL COMANDO #myns*'
user.registered = false
m.reply(`*[ ✔ ] SE REALIZO CON EXITO, USTED YA NO ESTA REGISTRADO EN EL BOT*`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler
