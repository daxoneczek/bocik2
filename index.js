const tmi = require('tmi.js');
const readline = require('readline');
const { handleTepar } = require('./handleTepar');
const { handleDaxMention } = require('./handleDaxMention');
const { handleUptimeCommand } = require('./uptime');

const { handleTicketMessage } = require('./ticket');

const options = {
  identity: {
    username: 'Daxoneczek',
    password: 'oauth:d66bz2wgsm5guqm0gvdfa7jjd3k1q9'
  },
  channels: ['H2P_Gucio', 'Daxoneczek']
};

const client = new tmi.client(options);
let ticketEnabled = true;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  if (input === 'on') {
    ticketEnabled = true;
    console.log('Funkcja ticket włączona.');
  } else if (input === 'off') {
    ticketEnabled = false;
    console.log('Funkcja ticket wyłączona.');
  }
});

client.on('connected', (address, port) => {
  console.log(`Bot został połączony na ${address}:${port}`);
  client.say('Daxoneczek', 'Połączono z czatem.');
});
client.on('message', (channel, tags, message, self) => {
  if (ticketEnabled) {
    handleTicketMessage(client, channel, tags, message);
  }

  if (message.toLowerCase() === '!tepar') {
    console.log(`Wywołanie komendy !tepar przez użytkownika ${tags.username}`);
    handleTepar(client, channel, tags);
  } else if (tags.username === 'daxoneczek' && message.toLowerCase() === '!uptime') {
    console.log(`Received uptime command from ${tags.username}`);
    handleUptimeCommand(client, channel, tags);
  } else {
    handleDaxMention(client, channel, tags, message);
  }
});

client.connect().then(() => {
  console.log('Bot został zalogowany i wczytane zostały wszystkie funkcje.');
});
