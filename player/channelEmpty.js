module.exports = (client, message, queue) => {
    message.channel.send(`Dừng nhạc vì đéo có ma nào trong channel`)
    .then(msg => {
        setTimeout(() => msg.delete(), 10000)
      }) 
};