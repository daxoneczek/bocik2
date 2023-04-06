const pm2 = require('pm2');

pm2.connect(function(err) {
  if (err) {
    console.error(err);
    process.exit(2);
  }

  pm2.stop('index.js', function(err) {
    pm2.disconnect();   // odłączamy się od pm2, gdy już nie jest nam potrzebne połączenie
    if (err) {
      console.error(err);
      process.exit(2);
    }
    console.log('Proces zatrzymany.');
    process.exit(0);
  });
});