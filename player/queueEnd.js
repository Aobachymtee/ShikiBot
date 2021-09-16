module.exports = (client, message, queue) => {
    message.channel.send(`Nhạc dừng vì không có bài nhạc nào trong queue`)
    .then(msg => {
        setTimeout(() => msg.delete(), 10000)
      }) 
};