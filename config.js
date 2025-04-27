//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "237676327871";
global.sudo = process.env.SUDO || "237676327871";
global.owner = process.env.OWNER_NUMBER || "237676327871";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0tocmdIZ0xZcHhIckx1TmFRME0wUlQ1UjltcHV2RHEwN3hlMWFnbEhGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTVTYTBoUmlobXFUMlF1V3FNTUhDZWVDSG1KaEFRcDNtVzc2NTU4UzVURT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSWR5TGw2OUFDbVpEQVRFaERMSHRpS2hJN3Bxam5oUGJ5Tkc0WTVmWTFRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsN3JvamNsV051TmcvQWxNRnNvcjBrTkptSnFWVmk0ZXFaeEd5WDNQNUFrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFERWxISGtIQ09VeCtGS0VXQkxYWjNaUWtIa2VrenpIUERrZjQ4S2FRV2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllWcjgyR0FkYXp2R1czVzRnSmpUdTJES1RJT0J3aU9QR0R1cm5HbTlPRW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUJQMm9tVmFKb3A1aUJrdFJoM2RUY01jcEN5Z3ZybDJXOW5RTVhSQjNtWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGxWb1lHRW53cHozYXZ4RXRWanpEZHlrUlcya284cmxPeHpadXdSQ2p5WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNXdEhIeHF1WEl1QmdtaCs0WDZja0xiYjlIMjZQV3l2aVMvWjZQRUhlZWJLUEVPYVVlZnpTYlBleWswK2dXMDFUUmdCUDhLanpONElKcW9UdmVib0R3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA4LCJhZHZTZWNyZXRLZXkiOiIwY1hMYmg4UWhodFMzVkNicHFzK2JtcmI4N1czb0hrL3NPM09GU3ZoNXRrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJMeWd0cGNkZ1R2R3N6TC1aNzFDb3lRIiwicGhvbmVJZCI6ImU3NTM3M2Y5LWM1ZTctNDNlMS05NjE4LWJjMjIzMTM0OTc5NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhd0hBZFArM1BVckVKZDMwNGsrS1hiNnRuTTA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXJHbmFjRHYzUGhRQWgvMGg5N2JZRXdjMmpvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJUV1k2SzE1IiwibWUiOnsiaWQiOiIyMzc2NzYzMjc4NzE6MjNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ002Vm9Pc0pFT1RsdGNBR0dBZ2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ijh1eE5oenZna1lCZmR3MGtvMXA1eFF2cWE1N25WTksvVWFQSGljOURxVFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6InB0Y1RheExrN3FXYjJkYTBNMjIxVkFLMXQzeXNrMmg2dFQ1THJQWjZBcHYvemE0blRzUXIrcFFSNWcxQlFxYkVsQ0xUNmE5RGg4QzZURzhzbU1IUURBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtVjQ2cFhpS1BqQWJSTW9yNzlPUFFXeTZaQVl4ZXkyQTJ6b05GOUJDK1hDM0l6U3dqeDFRVHREdWlmVjdHUHN4VEdXREVXWmRraStwQ0t3YmI3M0tCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY3NjMyNzg3MToyM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmTHNUWWM3NEpHQVgzY05KS05hZWNVTDZtdWU1MVRTdjFHang0blBRNmsxIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDU3MTE4NTYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT0J0In0=
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0tocmdIZ0xZcHhIckx1TmFRME0wUlQ1UjltcHV2RHEwN3hlMWFnbEhGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTVTYTBoUmlobXFUMlF1V3FNTUhDZWVDSG1KaEFRcDNtVzc2NTU4UzVURT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSWR5TGw2OUFDbVpEQVRFaERMSHRpS2hJN3Bxam5oUGJ5Tkc0WTVmWTFRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsN3JvamNsV051TmcvQWxNRnNvcjBrTkptSnFWVmk0ZXFaeEd5WDNQNUFrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFERWxISGtIQ09VeCtGS0VXQkxYWjNaUWtIa2VrenpIUERrZjQ4S2FRV2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllWcjgyR0FkYXp2R1czVzRnSmpUdTJES1RJT0J3aU9QR0R1cm5HbTlPRW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUJQMm9tVmFKb3A1aUJrdFJoM2RUY01jcEN5Z3ZybDJXOW5RTVhSQjNtWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGxWb1lHRW53cHozYXZ4RXRWanpEZHlrUlcya284cmxPeHpadXdSQ2p5WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNXdEhIeHF1WEl1QmdtaCs0WDZja0xiYjlIMjZQV3l2aVMvWjZQRUhlZWJLUEVPYVVlZnpTYlBleWswK2dXMDFUUmdCUDhLanpONElKcW9UdmVib0R3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA4LCJhZHZTZWNyZXRLZXkiOiIwY1hMYmg4UWhodFMzVkNicHFzK2JtcmI4N1czb0hrL3NPM09GU3ZoNXRrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJMeWd0cGNkZ1R2R3N6TC1aNzFDb3lRIiwicGhvbmVJZCI6ImU3NTM3M2Y5LWM1ZTctNDNlMS05NjE4LWJjMjIzMTM0OTc5NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhd0hBZFArM1BVckVKZDMwNGsrS1hiNnRuTTA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXJHbmFjRHYzUGhRQWgvMGg5N2JZRXdjMmpvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJUV1k2SzE1IiwibWUiOnsiaWQiOiIyMzc2NzYzMjc4NzE6MjNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ002Vm9Pc0pFT1RsdGNBR0dBZ2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ijh1eE5oenZna1lCZmR3MGtvMXA1eFF2cWE1N25WTksvVWFQSGljOURxVFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6InB0Y1RheExrN3FXYjJkYTBNMjIxVkFLMXQzeXNrMmg2dFQ1THJQWjZBcHYvemE0blRzUXIrcFFSNWcxQlFxYkVsQ0xUNmE5RGg4QzZURzhzbU1IUURBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtVjQ2cFhpS1BqQWJSTW9yNzlPUFFXeTZaQVl4ZXkyQTJ6b05GOUJDK1hDM0l6U3dqeDFRVHREdWlmVjdHUHN4VEdXREVXWmRraStwQ0t3YmI3M0tCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY3NjMyNzg3MToyM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmTHNUWWM3NEpHQVgzY05KS05hZWNVTDZtdWU1MVRTdjFHang0blBRNmsxIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDU3MTE4NTYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT0J0In0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
