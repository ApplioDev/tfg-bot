const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const { token } = require('./token.json');
const copypasta = "Crazy?/I was crazy once./They put me in a room./A rubber room./A rubber room with rats!/The rats made me crazy!/Crazy?/I was crazy once./They put me in a room./A rubber room./A rubber room with rats!/The rats made me crazy!";

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
	if (message.author.tag === client.user.tag) return;
	let msg = message.content.toLowerCase();
	if (msg.toLowerCase().includes('crazy')) delayedTimeout(1000, "/", copypasta, (part) => message.channel.send(part));
});

function delayedTimeout(delay, separator, str, fn) {
	const parts = str.split(separator);
	parts.forEach((part, i) => {
		setTimeout(() => fn(part), i * delay)
	})
}

client.login(token);
