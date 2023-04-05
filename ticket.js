function handleTicketMessage(client, channel, tags, message) {
    if (tags.username === 'bot_gucio' && message === 'Rozpoczęto głosowanie wpisz !ticket aby wziąć udział PogChamp') {
      setTimeout(() => {
        client.say(channel, '!ticket')
        .then(() => {
          console.log(`wyslano !ticket`);
        });
      }, 3000);
    }
  }
  
  module.exports = { handleTicketMessage };