function handleTepar(client, channel, tags) {
    setTimeout(() => {
      const message = `@${tags.username} aha`;
      client.say(channel, message)
        .catch((err) => {
          console.log(`Wystąpił błąd: ${err.message}`);
        });
    }, 3000);
  }
  
  module.exports = { handleTepar };