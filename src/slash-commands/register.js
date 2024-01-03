require('dotenv').config()
const {REST, Routes} = require('discord.js')

//slash commands list
const commands = [
    {
        name: 'ping',
        description: 'Replies with current bot ping!',
    }
]

const rest = new REST({version: '10'}).setToken(process.env.DISCORD_BOT_TOKEN);

//refresh registered slash commands on bot (main guild) function
(async ()=>{
    try{
        console.log('Started refreshing application (/) commands.')
        await rest.put(
            Routes.applicationGuildCommands(process.env.DISCORD_CLIENT_ID, process.env.DISCORD_GUILD_ID),
            {body: commands}
        )
        console.log('Successfully reloaded application (/) commands.')
    }catch(e){
        console.log('Failed to reload application (/) commands.')
        console.error(e)
    }
})()

//refresh registered slash commands on bot (globally) function
// (async ()=>{
//     try{
//         console.log('Started refreshing application (/) commands.')
//         console.log(process.env.DISCORD_CLIENT_ID)
//         await rest.put(
//             Routes.applicationCommands(process.env.DISCORD_CLIENT_ID),
//             {body: commands}
//         )
//         console.log('Successfully reloaded application (/) commands.')
//     }catch(e){
//         console.log('Failed to reload application (/) commands.')
//         console.error(e)
//     }
// })()