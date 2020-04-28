const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'dpb';

const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

client.once('ready', () => {
    console.log('Ready!');
    });
client.on('message', message => {
    
    if (message.content === 'dpb are you working') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Yes, I am working.');
    }
    if (message.content === 'dpb does xeu porn exist') {
        const attach = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/673739954249269255/702703330455060530/unknown.png", "SPOILER_unknown.png", { spoiler: true });
        message.channel.send("Shit that's hot..." , attach);
    }
    if (message.content === 'dpb does piss porn exist') {
        const attach = new Discord.MessageAttachment("https://media.discordapp.net/attachments/673739954249269255/702709083001716766/pisspenisremaster.png", "SPOILER_pisspenisremaster.png", { spoiler: true });
        message.channel.send("Fucking kill me.", attach);
    }
    if (message.content === 'dpb does author porn exist') {
            const attach = new Discord.MessageAttachment("https://media.discordapp.net/attachments/704578641249435698/704579704543510599/authorpenis.png", "SPOILER_authorpenis.png", { spoiler: true });
        message.channel.send("Fun fact: The Author doesnt actually have a penis.", attach);
    }
    if  (message.content === 'dpb does black porn exist') {
        const attach = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/704578641249435698/704583685139202109/blackpenis.png", "SPOILER_blackpenis.png", { spoiler: true });
            message.channel.send("Black, I'm sorry. It must be done.", attach);
    }
    if (message.content === 'dpb does sheu porn exist') {
        const attach = new Discord.MessageAttachment("https://media.discordapp.net/attachments/704578641249435698/704596322291810334/sheupenis.png", "SPOILER_sheupenis.png", { spoiler: true });
        message.channel.send("Sheu's penis is tiny haha.", attach);
    }
});
client.login('redacted, for obvious reasons');
