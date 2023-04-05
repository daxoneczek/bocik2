const greetedUsers = new Map();

function handleDaxMention(client, channel, tags, message) {
  const regexDax = /daxoneczek/gi;
  const regexGreeting = /gucioHejka|Heyy|siema|peepoHejka|hejka/gi;
  if (regexDax.test(message) && regexGreeting.test(message)) {
    if (!greetedUsers.has(tags.username)) {
      console.log(`Użytkownik ${tags.username} się przywitał`);
      greetedUsers.set(tags.username, true);
      const response = `@${tags.username} gucioHejka`;
      const delay = Math.floor(Math.random() * 3000) + 2000; // generowanie losowego opóźnienia między 2 a 5 sekundami
      setTimeout(() => {
        client.say(channel, response)
          .then(() => {
            console.log(`Wysłanie odpowiedzi do ${tags.username}`);
          })
          .catch((err) => {
            console.log(`Wystąpił błąd: ${err.message}`);
          });
      }, delay);
    } else {
      console.log(`Użytkownik ${tags.username} już został przywitany`);
    }
  }
}

module.exports = { handleDaxMention };
