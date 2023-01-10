import { bot } from "../index.js";

import { buttons } from "../data/buttons-data.js";

export const checkMessage = async (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;

  if (text === "/start") {
    await bot.sendMessage(
      chatId,
      "Добро пожаловать, на бота команды :DTeam",
      buttons
    );
  }
};
