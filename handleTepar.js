function handleTepar(client, channel, tags) {
    setTimeout(() => {
      const message = `@${tags.username} aha`;
      client.say(channel, message)
        .then(() => {
          console.log(`Wysłano wiadomość "${message}" do użytkownika ${tags.username}`);
        })
        .catch((err) => {
          console.log(`Wystąpił błąd: ${err.message}`);
        });
    }, 2000);
  }
  
  module.exports = { handleTepar };
  