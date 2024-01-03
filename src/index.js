const {Client, IntentsBitField} = require('discord.js');
const client = new Client({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMessageReactions,
        IntentsBitField.Flags.MessageContent
    ]
});
require('dotenv').config();

const token = process.env.DISCORD_BOT_TOKEN;

client.login(token)

client.on('ready', (c)=>{
    console.log(`${c.user.tag} is online!`)
})

