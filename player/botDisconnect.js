module.exports = (client, message, queue) => {
    message.channel.send(`Dừng nhạc vì tôi thoát mẹ khỏi channel rồi lol`)
    .then(msg => {
        setTimeout(() => msg.delete(), 10000)
      }) 
};