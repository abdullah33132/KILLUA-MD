import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.botnumber = ""

global.owner = [
  ['201008599375','[JoAnimi]-Killua☣️[3AMK]', true],
  ['201500781413'],
  ['201092544329'],
  ['212602272422']
];

global.suittag = ['201008599375'];
global.prems = ['201008599375'];
const _0x3d4f75=_0x51ac;function _0x5a88(){const _0x38ac9f=['saad','chats','metadata','924497uheGea','3057460vEzwHW','1882250qebvNS','1202922FOAomD','3zhzFSN','615629AzoFkD','2779812KsRrvv','15957728GAPaaW','map'];_0x5a88=function(){return _0x38ac9f;};return _0x5a88();}function _0x51ac(_0x2ca913,_0x483623){const _0x5992dc=_0x5a88();return _0x51ac=function(_0x44c6c1,_0x2d12e6){_0x44c6c1=_0x44c6c1-(0x1a6*-0x5+0x2526+0x19c*-0x11);let _0x154f92=_0x5992dc[_0x44c6c1];return _0x154f92;},_0x51ac(_0x2ca913,_0x483623);}(function(_0x834252,_0x3ea08c){const _0x17d3eb=_0x51ac,_0xb23a27=_0x834252();while(!![]){try{const _0x5c941f=-parseInt(_0x17d3eb(0x18e))/(-0x1d03*0x1+-0x1*0xf3f+0x4eb*0x9)+parseInt(_0x17d3eb(0x18c))/(0x162c+0x1b35+0x1*-0x315f)+-parseInt(_0x17d3eb(0x18d))/(0xfb7+0x170d+-0x26c1)(parseInt(_0x17d3eb(0x196))/(0x12e8+0x23b-0x1+0x10a9*-0x1))+-parseInt(_0x17d3eb(0x197))/(0x1674+0x95*0x26+0x2c8d*-0x1)+-parseInt(_0x17d3eb(0x18f))/(-0x25c*-0x5+-0x253c*-0x1+0x1881*-0x2)+parseInt(_0x17d3eb(0x195))/(-0x7a1+0x53c+0x4*0x9b)+parseInt(_0x17d3eb(0x190))/(0xc7b+0x17d8+-0x244b);if(_0x5c941f===_0x3ea08c)break;else _0xb23a27['push'](_0xb23a27['shift']());}catch(_0x310c91){_0xb23a27['push'](_0xb23a27['shift']());}}}(_0x5a88,-0xf603c+0x51c6*0x22+-0x52b1*-0x26),global[_0x3d4f75(0x192)]=async function(_0x551bd8,_0x4299cc){const _0x447692=_0x3d4f75,_0x13b013=(conn[_0x447692(0x193)][_0x551bd8]||{})[_0x447692(0x194)]||await conn['groupMetadata'](_0x551bd8)['catch'](_0x5d5c05=>null)||{},_0xedc3be=_0x13b013['participants']||[];let _0x1ebe66=_0xedc3be[_0x447692(0x191)](_0x14358c=>_0x14358c['id']);return _0x1ebe66['includes'](_0x4299cc);});
global.packname = '[3AMK]';
global.author = '[JoAnimi]-Killua☣️';
global.wm = 'killua';
global.titulowm = '[3AMK]';
global.titulowm2 = `[JoAnimi]-Killua☣️`
global.igfg = '[JoAnimi]-Killua☣️[3AMK]';
global.wait = '*|اصبر عليا شويه علشان انفذ طلبك|*';
global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');

global.mods = [];

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'ar';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('ar', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('ar', {month: 'long'});
global.año = d.toLocaleDateString('ar', {year: 'numeric'});
global.tiempo = d.toLocaleString('ar', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\nBOBIZA`;
global.gt = 'KILLUA';
global.mysticbot = 'The KILLUA';
global.md = 'null';
global.mysticbot = 'null';
global.waitt = '*[ ⏳ ] LOADING...*';
global.waittt = '*[ ⏳ ] LOADING...*';
global.waitttt = '*[ ⏳ ] LOADING...*';
global.nomorown = '201008599375';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*[ 📅 ] التاريخ:*  ${moment.tz('Africa/cairo').format('DD/MM/YY')}`;
global.bottime = `*[ ⏳ ] الساعه:* ${moment.tz('Africa/cairo').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
