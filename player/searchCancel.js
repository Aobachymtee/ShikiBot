module.exports = (client, message, query, tracks) => {
    message.channel.send(`**Con mẹ mày sai lệnh rồi, <h mà xem**`)
    .then(msg => {
        setTimeout(() => msg.delete(), 10000)
      }) 
};