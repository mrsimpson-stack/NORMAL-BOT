const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61V226rOBT9lZFfk064XyJVGgMhCUkIuQBJRvPggAEn3GogKT3Kv49oWrXSnNPpSMOTZey119577eUfIC9IhWe4BcMfoKTkgmrcLeu2xGAItCaKMAV9EKIagSGYmheXhM8XbdOboUy08tXAnSyjpR6txSzYnFde28vM82HpTR/BrQ/K5piS4AvAMGG9wxQbC507csnYpnlgoz07sBnGgkXDm2Z6kRhedN3gEdw6REQoyeNRmeAMU5TOcOsgQr9Hn4PrKF3RJ96Wd7bfu0b6euNXFI5NX3UtJtgdmok8kp0e9036z8lcHcVclRxhq5yEk5ItI+2CiEYpPiHVw73NaMH6AUpGd/oViXMcTkOc16Ruv113YTLpxSia0EI9yjzsvVhM2jBrL7sQOGbz2Sm3C8MOzYtffY84lCZstVCFkhnPFb8oBn66g27UGMmyDSYGfNoExfglgqXJfCbu0HetnP9L3ccwagZRquWK5BOlnZ35zZH4cZ2s16t2gnFQL6gyPQhWGn+Pvqsfuchc67OVjhelmetlUCvNKbTbDBsvh0seCWHYNiu93X/QR3VDv2K58nVBMV9cm6XBQEm0AUcmBZqslUhVj7NU5Zdardoc3rHWwZbEWtjtrtvcnR7mlaFeEkdi1yxzXicse3TP52xpuYYbrx5fMzrjdhqCIXvrA4pjUtUU1aTIuz1O5PsAhZcNDiiuX8sL8me6Nl0xOgTLtDfV1wuqhRBGe+g0RViZojnLFUevvJnHPII+KGkR4KrC4YRUdUHbBa4qFOMKDP987VSXNMVZUWOLhN0ciJIs86rEy7L8R/X7NUF1hcry9xzXoA8iWmQLDIY1bXAfvF5gJYWTZUZioMGYgi6wrMhBQWIZYSTrCiN0KWb3oFuS4apGWQmGrCwInKywgnTr/z88RiPNYM2Rro0M0TA0jlUMRpcEzpAMXRM46WseInv7qw9y/FzfddxVn2f7ICK0qt28KdMChe8if/+JgqBo8nrT5oHeLTAFw0/buK5JHlddZk2OaJCQC9a7PMAwQmmFb30Q4gsJcIcHLm0pb4nVbtYtzeuJtorKHVx1HUyK/H7kqEpKIMrHByTK6oPAouABqYr8wIcCp4ZCxHMBA7py3C2ku/NLRUvT1o1Np7Hks5gLnq3aXizwbnFAxasq71LEFIfvVT6i4NyU2+KM8y9wo9PMmap75oAGPnxaLP2r2U56TntcxZ9w7xIHwx8ftq0XYYdnmNya1dQt6LrVxfmHGoY/0UOOusPAc+zNb65jwO1o0wV760QHE+IakbQCQ6DPj0qqFqPRkjvzVBmP4SKGegzBR+feHeE+cdl5PgiImwbhzPGduWdvngJrP9hCyV+JqbHz3KvtbdSYG8PHn4B0b6OVe9dg9CyQ4hL4c1nbb3fpiN/1gnQ7fpm30bk6ztITjlTDdwf5i2XN4cy0qqKaCrzq+vlzc6hLutXImD+KT9xgv1ga8WMX7a6gz8GuwmEFdyR2mfX2vHs6JWgwnpmrzJl419j39k6yXBN4cA89LmwjGYY7eLXmzta2GvSyyS68rU8qxMRPz7JloFUqunqbwLtXvXpl+vZGkTcXuestIvjV8t9a8W8d+1A+c+t/gnh7Q36hLu1Q6gN+mlq7yebEnlp26z7luu8w12V6Xh5WLOstDM+97O0kBrdupMsU1VFBMzAEKA9pQULQBymqavgxvD/xA17ug6yFZbmpUf0+8wB2n16OwO1vlfnUwR4JAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254710772666,254106727593",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE_MESSAGES || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});





