// bot.js
import mineflayer from 'mineflayer';

// Bot configuration
const bot = mineflayer.createBot({
  host: '266_622369shadow.aternos.me',   // Minecraft server IP
  port: 49725,            // Server port (default 25565)
  username: 'BotUsername' // Bot username
});

// When bot logs in
bot.on('login', () => {
  console.log(`${bot.username} has logged in!`);
});

// When bot chats
bot.on('chat', (username, message) => {
  if(username === bot.username) return;

  console.log(`${username}: ${message}`);

  // Example: respond to "hi"
  if(message.toLowerCase() === 'hi') {
    bot.chat('Hello there!');
  }
});

// Handle errors
bot.on('error', err => console.log('Error: ', err));
bot.on('end', () => console.log('Bot disconnected'));
