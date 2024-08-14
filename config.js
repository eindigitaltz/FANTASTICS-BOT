const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/71ce7bc2c1af81cbc7df7.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ DUDUU_MENDEZ²²¹-ᴍᴅ" 


global.devs = "255749750707" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255749750707";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,255xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,255xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255749750707";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_14_52_08_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NixcbiAgICAgICAgODIsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzLFxuICAgICAgICA1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDkzLFxuICAgICAgICAxLFxuICAgICAgICAzOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTkyLFxuICAgICAgICA5MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDUsXG4gICAgICAgIDUsXG4gICAgICAgIDM2LFxuICAgICAgICA1OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMCxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDkwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMSxcbiAgICAgICAgNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzksXG4gICAgICAgIDYzLFxuICAgICAgICAxMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODAsXG4gICAgICAgIDgxLFxuICAgICAgICAzMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDU3LFxuICAgICAgICA4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDMwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDc1LFxuICAgICAgICA1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NixcbiAgICAgICAgMjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDczLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MixcbiAgICAgICAgNzgsXG4gICAgICAgIDQyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzcsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDgxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICA0NSxcbiAgICAgICAgOTksXG4gICAgICAgIDM4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDg5LFxuICAgICAgICAxODcsXG4gICAgICAgIDY3LFxuICAgICAgICA0MixcbiAgICAgICAgMjIsXG4gICAgICAgIDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTksXG4gICAgICAgIDI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDg5LFxuICAgICAgICA1MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDMzLFxuICAgICAgICA1OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMyxcbiAgICAgICAgODMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDU2LFxuICAgICAgICA5MCxcbiAgICAgICAgODcsXG4gICAgICAgIDc0LFxuICAgICAgICAzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI5LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUVR1bHNvdjB4ZFhwV0g0aFVaTGpqZ0FRMzFlVHUrMTJ6NjFOSTFCaHU0WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU3NTMxNTU1MDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjEwMDQzMzA2NEExQkVGODEyQTA2MjIwNkIwNTcwMTY5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMzY0NzE3MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTc1MzE1NTUwOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTkxQkZCREY3NTVFRDU1OUIzNzdDNUYxNzFDRTlFMzdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIzNjQ3MTcyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlB4bEgtWnRUUWtlV2YwRXhUeVhvc2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmQ5MDU0ZmQtOGMwZC00MzVmLWEyMDctNzVlNGI1MzMyYjJiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMixcbiAgICAgIDIyMSxcbiAgICAgIDE3OCxcbiAgICAgIDI4LFxuICAgICAgMjYsXG4gICAgICAxMDksXG4gICAgICAxODEsXG4gICAgICAyMzksXG4gICAgICA1OSxcbiAgICAgIDk4LFxuICAgICAgNjcsXG4gICAgICAxOTksXG4gICAgICAyMjgsXG4gICAgICA5OSxcbiAgICAgIDksXG4gICAgICAxNzIsXG4gICAgICAxOTYsXG4gICAgICAxNzQsXG4gICAgICAyMDUsXG4gICAgICAxNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTksXG4gICAgICA1MSxcbiAgICAgIDI0NSxcbiAgICAgIDMxLFxuICAgICAgMTU3LFxuICAgICAgMjQwLFxuICAgICAgNDQsXG4gICAgICAxMDcsXG4gICAgICA2MCxcbiAgICAgIDkzLFxuICAgICAgMTIyLFxuICAgICAgMjksXG4gICAgICAxNCxcbiAgICAgIDE3LFxuICAgICAgNCxcbiAgICAgIDExNixcbiAgICAgIDE1MixcbiAgICAgIDkxLFxuICAgICAgMTc4LFxuICAgICAgOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRFdNNDNWRzZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc1MzE1NTUwODoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTcxODIzMTc2ODI3MzQ6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJfLmh5LnBlci5tYi5hdnUuX1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BxVDhOWUhFTHlKODdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUjNlZ25NNTZ4a2t2UlpORTZvcGQrQVRvM3JTL0F6aXZmY3VTc1V3QjNuYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJaL2I4SDN5bXRHbi9GZFZSV3dWbE1vRm5WMzRFeTFOZG0ycmtkQm9IdmlRZ1poSmVxZkRFM2I3WFBPNEkwa28zMDJ0Rlg2YU4rQmNvL2wyVjFIcmpDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwZkxRNGgxaTBKV3RubUZYNjVlbndxdkcraG15U2JrOXBEUVFLSUpvK1E2UHdMc1lQSzlHQ1hLK1F4ZUVCR0pBZkJZRVF4Qm9lYTlLSnArblMyKzBCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3NTMxNTU1MDg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjM2NDcxNjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHUGhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdQaC5qc29uIjogIntcImtleURhdGFcIjpcImF6bUREZGhVdFRNT25LUWJqQklwOGtIWCs2RmNFVUd2RGRQRzAzN2tkalE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA2MTI0MDgyNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIzNjQ3MTcwMjk3XCJ9Igp9

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MENDEZ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • MENDEZ ᴛᴇᴄʜ』*\n youtube.com/@DUDUU_MENDEZ"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "FANTASTICS BOT",
  ownername:process.env.OWNER_NAME|| "Duduu_mendez",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-None-RMkn7loW3l2EmY3JV1pNT3BlbkFJOM2MSmCXkKhLFKg95Bdg",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "FANTASTICS"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
