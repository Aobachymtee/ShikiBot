module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`Độ trễ bot - Ping : **${client.ws.ping}ms**
 **Nhân tiện shiki gay**`)
 .then(msg => {
    setTimeout(() => msg.delete(), 10000)
  }) 
    },
};