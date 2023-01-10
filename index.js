import * as dotenv from "dotenv";
dotenv.config();

import { checkMessage} from "./controllers/message-controllers.js";
import { checkCallback } from "./controllers/callback-controllers.js";

import TelegramApi from "node-telegram-bot-api";

export const bot = new TelegramApi(process.env.token, { polling: true });

bot.setMyCommands([
  { command: "/start", description: "Начальное приветствие" },
]);

const start = () => {
  bot.on("message", checkMessage);

  bot.on("callback_query", checkCallback);
};

start();
