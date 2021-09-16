module.exports = (client, message, queue, track) => {
    message.channel.send(`${track.title} đã được thêm vào queue`)
    .then(msg => {
        setTimeout(() => msg.delete(), 10000)
      }) 
};