function sendFifka(client, channel) {
    const repeatCount = Math.floor(Math.random() * 5) + 1; // generate a random repeat count between 1 and 5
    const message = 'Taniec '.repeat(repeatCount).trim(); // repeat the word "fifka" and remove the trailing space
    client.say(channel, message)
      .then(() => {
        console.log(`Wysłanie wiadomości: ${message}`);
      })
      .catch((err) => {
        console.log(`Wystąpił błąd: ${err.message}`);
      });
  }
  
  // Wysyłanie wiadomości co losową ilość sekund między 10 a 60
const randomTime = () => Math.floor(Math.random() * (60000 - 10000) + 10000); // Losuje liczbę między 10000 i 60000 (w milisekundach)
let timeout = randomTime();

setInterval(() => {
  console.log(`Następna wiadomość zostanie wysłana za ${timeout / 1000} sekund`);
  sendFifka(client, options.channels[0]);
  timeout = randomTime(); // Losuje nowy czas dla następnego wysłania
}, timeout);

  module.exports = { sendFifka };