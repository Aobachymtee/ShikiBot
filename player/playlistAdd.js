module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${playlist.title} đã được thêm vào playist (**${playlist.tracks.length}** !`)
    .then(msg => {
        setTimeout(() => msg.delete(), 10000)
      }) 
};