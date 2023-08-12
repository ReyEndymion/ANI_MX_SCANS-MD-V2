// TODO: reduce global variabel usage

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '1';
process.on('uncaughtException', console.error)

import './config.js';
import path, { join } from 'path'
import { writeFileSync, readdirSync, statSync, unlinkSync, existsSync, readFileSync, copyFileSync, watch, rmSync, readdir, stat } from 'fs';
import yargs from 'yargs';
import { spawn } from 'child_process';
import chalk from 'chalk';
import { tmpdir } from 'os';
import { protoType, serialize } from './lib/simple.js';
import { plugins, filesInit, reload} from './lib/plugins.js'
import Connection from './lib/connection.js'
import Helper from './lib/helper.js'
import db, { loadDatabase } from './lib/database.js'

const PORT = process.env.PORT || process.env.SERVER_PORT || 3000

protoType()
serialize()
if (db.data == null) loadDatabase()

Object.assign(global, Helper)
// global.Fn = function functionCallBack(fn, ...args) { return fn.call(Connection.conn, ...args) }
global.timestamp = {
  start: new Date
}

const __dirname = global.__dirname(import.meta.url)

// global.opts['db'] = process.env['db']

const conn = await Connection.conn
const SESSION_DIR = authFile;
const SESSION_BACKUP_DIR = authFileRespald;
const CREDENTIALS_FILE = 'creds.json';
const CREDENTIALS_BACKUP_FILE = 'creds.json';

function backupCreds() {
const credsFilePath = path.join(SESSION_DIR, CREDENTIALS_FILE);
const backupFilePath = path.join(SESSION_BACKUP_DIR, CREDENTIALS_BACKUP_FILE);

// Copiar el archivo de credenciales a la carpeta de respaldo
copyFileSync(credsFilePath, backupFilePath);
console.log(`Creado el archivo de respaldo: ${backupFilePath}`);

}
if (conn === true) {
function actualizarNumero() {
const configPath = path.join(__dirname, 'config.js');
const configData = readFileSync(configPath, 'utf8');
const updatedConfigData = configData.replace(/(global\.animxscans\s*=\s*\[\s*\[')[0-9]+'(,\s*'Bot principal\s*-\s*ANI MX SCANS',\s*true\]\s*\])/, function(match) {
  const archivoCreds = readFileSync(path.join(__dirname, 'sesionRespaldo/creds.json'));
  const numero = JSON.parse(archivoCreds).me.id.split(':')[0];
  return `global.animxscans = [['${numero}', 'Bot principal - ANI MX SCANS', true]]`;
});
writeFileSync(configPath, updatedConfigData);
}

function cleanupOnConnectionError() {

readdirSync(SESSION_DIR).forEach(file => {
  const filePath = path.join(SESSION_DIR, file);
  try {
    unlinkSync(filePath);
    console.log(`Archivo eliminado: ${filePath}`);
  } catch (error) {
    console.log(`No se pudo eliminar el archivo: ${filePath}`);
  }
});

// Borrar archivo de respaldo
const backupFilePath = path.join(SESSION_BACKUP_DIR, CREDENTIALS_BACKUP_FILE);
try {
  unlinkSync(backupFilePath);
  console.log(`Archivo de copia de seguridad eliminado: ${backupFilePath}`);
} catch (error) {
  console.log(`No se pudo eliminar el archivo de copia de seguridad o no existe: ${backupFilePath}`);
}
process.send('reset')
} 

function credsStatus() {

const credsFilePath = path.join(SESSION_DIR, CREDENTIALS_FILE);
const backupFilePath = path.join(SESSION_BACKUP_DIR, CREDENTIALS_BACKUP_FILE);

// Comprobar si el archivo de credenciales originales existe y no es 0 bytes
let originalFileValid = false;
try {
  const stats = statSync(credsFilePath);
  originalFileValid = stats.isFile() && stats.size > 0;
} catch (error) {
  console.log(`El archivo de credenciales no existe o está vacío. Generando código QR...`);
  connectionOptions
    console.log(`Escanea el código QR para continuar.`);
}

if (!originalFileValid) {
  // El archivo de credenciales originales no es válido o falta, así que copie el archivo de copia de seguridad y cambie el nombre
  const backupStats = statSync(backupFilePath);
  if (backupStats.isFile() && backupStats.size > 0) {
    copyFileSync(backupFilePath, credsFilePath);
    console.log(`Archivo de credenciales restaurado desde la copia de seguridad: ${backupFilePath} -> ${credsFilePath}`);
      process.send('reset')
  } else {
    console.log(`No se encuentra el archivo de credenciales válido y el archivo de copia de seguridad no es válido o falta: ${credsFilePath}, ${backupFilePath}`);
    connectionOptions
  }
} else {
  console.log('Archivo de respaldo correcto, continuando inicio de sesión');
}
}
backupCreds();
actualizarNumero()
credsStatus();
}

// load plugins
const pluginFolder = global.__dirname(join(__dirname, './plugins/index'))
const pluginFilter = filename => /\.(mc)?js$/.test(filename)
filesInit(pluginFolder, pluginFilter, conn).then().catch(console.error)

Object.freeze(reload)


if (!opts['test']) {
  setInterval(async () => {
    if (db.data) await db.write().catch(console.error)
    if (opts['autocleartmp']) try {
      clearTmp()
    } catch (e) { console.error(e) }
    Connection.store.writeToFile(Connection.storeFile)
  }, 60 * 1000)
}
if (opts['server']) (await import('./server.js')).default(conn, PORT)

Connection.conn.welcome = '*╔══════════════*\n*╟❧ @subject*\n*╠══════════════*\n*╟❧ @user*\n*╟❧ BIENVENIDO/A* \n*║*\n*╟❧ LEE LA DESC DEL GRUPO!*\n*║*\n*❧ DISFRUTA TU ESTADIA!!*\n*╚════════════*'
Connection.conn.bye = '╔══════════════*\n*║〘 *ADIÓS* 〙*\n*╠══════════════*\n║*_☠ Se fue @user_*\n║*_Si no regresa..._*\n║ *_Nadie l@ va a extrañar 😇👍🏼_*\n*╚══════════════*'
Connection.conn.spromote = '*@user SE SUMA AL GRUPO DE ADMINS!!*'
Connection.conn.sdemote = '*@user ABANDONA EL GRUPO DE ADMINS !!*'
Connection.conn.sSubject = '*SE HA MODIFICADO EL NOMBRE DEL GRUPO*\n*NUEVO NOMBRE:* @subject'

// Quick Test
async function _quickTest() {
  let test = await Promise.all([
    spawn('ffmpeg'),
    spawn('ffprobe'),
    spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
    spawn('convert'),
    spawn('magick'),
    spawn('gm'),
    spawn('find', ['--version'])
  ].map(p => {
    return Promise.race([
      new Promise(resolve => {
        p.on('close', code => {
          resolve(code !== 127)
        })
      }),
      new Promise(resolve => {
        p.on('error', _ => resolve(false))
      })
    ])
  }))
  let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test
  console.log(test)
  let s = global.support = {
    ffmpeg,
    ffprobe,
    ffmpegWebp,
    convert,
    magick,
    gm,
    find
  }
  // require('./lib/sticker').support = s
  Object.freeze(global.support)
/*
  if (!s.ffmpeg) (conn?.logger || console).warn('Please install ffmpeg for sending videos (pkg install ffmpeg)')
  if (s.ffmpeg && !s.ffmpegWebp) (conn?.logger || console).warn('Stickers may not animated without libwebp on ffmpeg (--enable-ibwebp while compiling ffmpeg)')
  if (!s.convert && !s.magick && !s.gm) (conn?.logger || console).warn('Stickers may not work without imagemagick if libwebp on ffmpeg doesnt isntalled (pkg install imagemagick)')
*/
}

function clearTmp() {
  const tmpPath = join(__dirname, './tmp');
  const filenames = readdirSync(tmpPath);

  filenames.forEach((filename) => {
    const filePath = join(tmpPath, filename);
    const stats = statSync(filePath);

    if (stats.isFile() && Date.now() - stats.mtimeMs >= 1000 * 60 * 3) {
      unlinkSync(filePath); // Borra el archivo si ha pasado más de 3 minutos
    }
  });
  }
/*function clearTmp() {
  const tmp = [tmpdir(), join(__dirname, './tmp')]
  const filename = []
  tmp.forEach(dirname => readdirSync(dirname).forEach(file => filename.push(join(dirname, file))))
  return filename.map(file => {
    const stats = statSync(file)
    if (stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 3)) return unlinkSync(file) // 3 minutes
    return false
  })
}*/

function purgeSession() {
      
  let prekey = []
  let directorio = readdirSync("./ANIMXSCANS")
  let filesFolderPreKeys = directorio.filter((file) => {
      if (file.startsWith('pre-key-')) {
      return true 
      }
      const stats = statSync(path.join(`./ANIMXSCANS/${file}`));
      const mtime = new Date(stats.mtime);
    const now = new Date();
    const hourAgo = new Date(now - 60 * 60 * 1000);
    return (
      (file.startsWith('sender-key-') ||
        file.startsWith('sender-key-memory-') ||
        file.startsWith('sender-key-status@broadcast') ||
        file.startsWith('session')) &&
      mtime <= hourAgo
    )
  })
  if (prekey.length === 0) {
    console.log("Ningún archivo encontrado");
  } else {
  prekey = [...prekey, ...filesFolderPreKeys]
  filesFolderPreKeys.forEach(files => {
  unlinkSync(`./ANIMXSCANS/${files}`)
  console.log(`${files} fueron eliminados`)

})
}
}  

function purgeSessionSB() {
const listaDirectorios = readdirSync('./jadibts/');
console.log(listaDirectorios);
let SBprekey = [];

listaDirectorios.forEach((filesInDir) => {
  const directorio = readdirSync(`./jadibts/${filesInDir}`);
  console.log(directorio);
  const DSBPreKeys = directorio.filter((fileInDir) => {
    if (fileInDir.startsWith('pre-key-')) {
      return true;
    }
    const stats = statSync(path.join(`./jadibts/${filesInDir}/${fileInDir}`));
    const mtime = new Date(stats.mtime);
    const now = new Date();
    const hourAgo = new Date(now - 60 * 60 * 1000);
    return (
      (fileInDir.startsWith('sender-key-') ||
        fileInDir.startsWith('sender-key-memory-') ||
        fileInDir.startsWith('sender-key-status@broadcast') ||
        fileInDir.startsWith('session')) &&
      mtime <= hourAgo
    );
  });
  if (DSBPreKeys.length === 0) {
    console.log('Ningún archivo encontrado');
  } else {
    SBprekey = [...SBprekey, ...DSBPreKeys];
    DSBPreKeys.forEach((fileInDir) => {
      unlinkSync(`./jadibts/${filesInDir}/${fileInDir}`);
      console.log(`${fileInDir} fueron eliminados`);
    });
  }
});
}

function purgeOldFiles() {
  const directories = ['./ANIMXSCANS/', './jadibts/'];
  const oneHourAgo = new Date(Date.now() - (60 * 60 * 1000));
 
  directories.forEach((dir) => {
      readdirSync(dir, (err, files) => {
      if (err) throw err;
      files.forEach((file) => {
        const filePath = path.join(dir, file);
        statSync(filePath, (err, stats) => {
          if (err) throw err;
          const createTime = new Date(stats.birthtimeMs);
          const modTime = new Date(stats.mtimeMs);
          const isOld = createTime < oneHourAgo || modTime < oneHourAgo;
          const isCreds = file === 'creds.json';
          if (stats.isFile() && isOld && !isCreds) {
              unlinkSync(filePath, (err) => {
              if (err) throw err;
              console.log(`Archivos ${filePath} borrados con éxito`);
            });
          } else {
            console.log(`Archivo ${filePath} no borrado`);
          }
        });
      });
    });
  });
}
purgeOldFiles()

setInterval(async () => {
backupCreds()
console.log(chalk.whiteBright(`\n▣────────[ BACKUP_CREDS ]───────────···\n│\n▣─❧ RESPALDO EXITOSO ✅\n│\n▣────────────────────────────────────···\n`))
}, 15 * 60 * 1000)
setInterval(async () => {
clearTmp()
console.log(chalk.cyanBright(`\n▣────────[ AUTOCLEARTMP ]───────────···\n│\n▣─❧ ARCHIVOS ELIMINADOS ✅\n│\n▣────────────────────────────────────···\n`))
}, 1000 * 60 * 3)
setInterval(async () => {
 purgeSession()
console.log(chalk.cyanBright(`\n▣────────[ AUTOPURGESESSIONS ]───────────···\n│\n▣─❧ ARCHIVOS ELIMINADOS ✅\n│\n▣────────────────────────────────────···\n`))
}, 1000 * 60 * 60)
setInterval(async () => {
  purgeSessionSB()
 console.log(chalk.cyanBright(`\n▣────────[ AUTO_PURGE_SESSIONS_SUB-BOTS ]───────────···\n│\n▣─❧ ARCHIVOS ELIMINADOS ✅\n│\n▣────────────────────────────────────···\n`))
}, 1000 * 60 * 60)
setInterval(async () => {
 purgeOldFiles()
console.log(chalk.cyanBright(`\n▣────────[ AUTO_PURGE_OLDFILES ]───────────···\n│\n▣─❧ ARCHIVOS ELIMINADOS ✅\n│\n▣────────────────────────────────────···\n`))
}, 1000 * 60 * 60)

_quickTest()
.then(() => conn.logger.info(`CARGANDO．．．\n`))
.catch(console.error)
