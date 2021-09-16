module.exports = (client, message, query) => {
    message.channel.send(`Không tìm thấy kết quả nào trên youtube là ${query} !`)
    .then(msg => {
        setTimeout(() => msg.delete(), 10000)
      }) 
};