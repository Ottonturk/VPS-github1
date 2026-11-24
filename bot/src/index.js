import { Bot } from 'grammy';

const token = process.env.TELEGRAM_BOT_TOKEN;
const backendUrl = process.env.BACKEND_URL || 'http://backend:3000';

if (!token || token === 'your_token_here') {
  console.log('TELEGRAM_BOT_TOKEN not set. Bot running in standby mode.');
  setInterval(() => {}, 60000);
} else {
  const bot = new Bot(token);
  bot.command('start', async (ctx) => {
    try {
      const res = await fetch(`${backendUrl}/api/health`);
      const data = await res.json();
      await ctx.reply(`Бот на связи! Статус бэкенда: ${data.status}`);
    } catch {
      await ctx.reply('Бот работает, но бэкенд пока недоступен.');
    }
  });
  bot.start();
}
