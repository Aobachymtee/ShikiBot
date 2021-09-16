const fs = require('fs');
const discord = require('discord.js');

const client = new discord.Client({ disableMentions: 'everyone' });

// CONFIG //

const settings = {
  prefix: "<",
}

const { Player } = require('discord-player');

client.player = new Player(client);
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();

fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Loading command ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));


for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
    console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};
client.on('message', function(message) {
    if (message.content === 'Bướm') {
     message.channel.send('Thanh Hiếu');
    }
   });
   client.on('message', function(message) {
    if (message.content === 'Yui') {
     message.channel.send('Phake không hát kỉa kỉa dáy');
    }
   });
   client.on('message', function(message) {
    if (message.content === 'Scarlaid') {
     message.channel.send('Simp');
    }
   });

   const rando_imgs = [
    'https://media.discordapp.net/attachments/861664521944039467/887884955974262834/90473073_p0_master1200.jpg?width=822&height=671',
    'https://media.discordapp.net/attachments/861664521944039467/887884955974262834/90473073_p0_master1200.jpg?width=822&height=671',
    'https://media.discordapp.net/attachments/861664521944039467/887884959866556477/91537529_p0_master1200.jpg?width=1193&height=671',
    'https://media.discordapp.net/attachments/861664521944039467/887884959866556477/91537529_p0_master1200.jpg?width=1193&height=671',
    'https://media.discordapp.net/attachments/861664521944039467/887884965847642182/92529738_p0_master1200.jpg?width=948&height=671',
    'https://media.discordapp.net/attachments/861664521944039467/887884969672843334/92695300_p0_master1200.jpg?width=475&height=671',
    'https://media.discordapp.net/attachments/861664521944039467/887884969823838239/92760610_p0_master1200.jpg?width=938&height=671',
    ]

    client.login(client.config.discord.token);