const tmi = require('tmi.js');

// Konfiguracja bota
const client = new tmi.Client({
  connection: { reconnect: true },
  channels: [ 'H2P_Gucio' ] // Tutaj wpisz nazwę kanału, na którym chcesz używać bota
});

// Nasłuchuj wiadomości na kanale
client.on('message', (channel, tags, message, self) => {
  if (self) return; // Ignoruj wiadomości wysyłane przez bota

  // Jeśli wiadomość zawiera "!test", wyślij wiadomość zwrotną
  if (message.toLowerCase().includes('!test')) {
    client.say(channel, 'Self respond!');
  }
});

// Połącz z serwerem Twitch
client.connect();