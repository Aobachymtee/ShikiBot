module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`Mày đã vào voice chat đéo đâu`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`Nhầm địa chỉ đại ca ơi, em ở voice khác mẹ rồi`);
        if (!args[0]) return message.channel.send(`nhập hộ t m muốn chơi bài gì đi làm ơn`);

        client.player.play(message, args.join(" "), { firstResult: true })
        .then(msg => {
            setTimeout(() => msg.delete(), 10000)
          }) 
    },
};