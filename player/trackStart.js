module.exports = (client, message, track) => {
    message.channel.send(`Đang chơi **${track.title}**`)
    .then(msg => {
        setTimeout(() => msg.delete(), 10000)
      }) 

};