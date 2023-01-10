import { bot } from "./index.js";

export const returnButtonStructure = (text, data) => [
  { text, callback_data: data },
];

export const sendNewLinks = async (title, links, chatId) => {
  await bot.sendMessage(chatId, `${title}`);

  for (const [index, link] of links.entries()) {
    await bot.sendMessage(chatId, `<a href="${link}">Слайд #${index + 1}</a>`, {
      parse_mode: "HTML",
    });
  }
};
