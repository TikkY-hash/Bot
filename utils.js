import { bot } from "./index.js";

export const returnButtonStructure = (text, data) => [
  { text, callback_data: data },
];

export const sendNewLinks = async (title, links, chatId) => {
  await bot.sendMessage(chatId, `${title}`);

  for (const image of links) {
    await bot.sendPhoto(chatId, `./images/${image}.png`)
  }
};
