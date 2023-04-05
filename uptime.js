// uptime.js

function getUptime() {
  const seconds = process.uptime();
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secondsRemainder = Math.floor(seconds % 60);

  const formattedUptime = [];
  if (days > 0) {
    formattedUptime.push(`${days} day${days === 1 ? '' : 's'}`);
  }
  if (hours > 0) {
    formattedUptime.push(`${hours} hour${hours === 1 ? '' : 's'}`);
  }
  if (minutes > 0) {
    formattedUptime.push(`${minutes} minute${minutes === 1 ? '' : 's'}`);
  }
  if (secondsRemainder > 0) {
    formattedUptime.push(`${secondsRemainder} second${secondsRemainder === 1 ? '' : 's'}`);
  }

  return formattedUptime.join(', ');
}

function handleUptimeCommand(client, channel, tags) {
  if (tags.username === 'daxoneczek') {
    setTimeout(() => {
      const uptime = getUptime();
      const response = `@${tags.username} chodzem już: ${uptime}`;
      client.say(channel, response)
        .then(() => {
          console.log(`Sent uptime response to ${tags.username}`);
        })
        .catch((err) => {
          console.log(`Error sending uptime response: ${err.message}`);
        });
    }, 5000); // 5-second delay
  } else {
    console.log(`Received uptime command from unauthorized user ${tags.username}`);
  }
}

module.exports = { handleUptimeCommand };