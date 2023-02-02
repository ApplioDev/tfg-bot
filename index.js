const { Client, GatewayIntentBits, BaseGuildTextChannel, time} = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const { token } = require('./token.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

function crazy(channel) {
  setTimeout(() => channel.send('Crazy?'), 1000);
  setTimeout(() => channel.send('I was crazy once.'), 2000);
  setTimeout(() => channel.send('They put me in a room.'), 3000);
  setTimeout(() => channel.send('A rubber room.'), 4000);
  setTimeout(() => channel.send('A rubber room with rats!'), 5000);
  setTimeout(() => channel.send('The rats made me crazy!'), 6000);
  setTimeout(() => channel.send('Crazy?'), 7000);
  setTimeout(() => channel.send('I was crazy once.'), 8000);
  setTimeout(() => channel.send('They put me in a room.'), 9000);
  setTimeout(() => channel.send('A rubber room.'), 10000);
  setTimeout(() => channel.send('A rubber room with rats!'), 11000);
  setTimeout(() => channel.send('The rats made me crazy!'), 12000);
  setTimeout(() => channel.send('Crazy?'), 13000);
  setTimeout(() => channel.send('I was crazy once.'), 14000);
  setTimeout(() => channel.send('They put me in a room.'), 15000);
  setTimeout(() => channel.send('A rubber room.'), 16000);
  setTimeout(() => channel.send('A rubber room with rats!'), 17000);
  setTimeout(() => channel.send('The rats made me crazy!'), 18000);
}

client.on('messageCreate', (message) => {
  if (message.author.tag === client.user.tag) return;
  let msg = message.content.toLowerCase();
  if (msg.toLowerCase().includes('crazy')) crazy(message.channel);
});

client.login(token);