import { bot } from "../index.js";

import {
  firstDaySubButtons,
  aboutCompanySubButtons,
  rulesSubButtons,
} from "../data/sub-buttons-data.js";
import { sendNewLinks } from "../utils.js";

export const checkCallback = async (msg) => {
  const data = msg.data;
  const chatId = msg.message.chat.id;

  const choice = {
    1: async () => {
      await sendNewLinks(
        "1. О компании",
        [
          data,
        ],
        chatId
      );
      await bot.sendMessage(chatId, "Выбери подраздел", aboutCompanySubButtons);
    },
    2: async () => {
      await sendNewLinks(
        "2. Первый рабочий день нового сотрудника",
        [
          "2",
        ],
        chatId
      );
      await bot.sendMessage(chatId, "Выбери подраздел", firstDaySubButtons);
    },
    5: async () => {
      await bot.sendMessage(chatId, "Выбери подраздел", rulesSubButtons);
    },
    1.1: async () =>
      await sendNewLinks(
        "1.1 История компании",
        [
          data,
        ],
        chatId
      ),
    1.2: async () =>
      await sendNewLinks(
        "1.2 Миссия компании",
        [
          "1.6",
        ],
        chatId
      ),
    1.3: async () =>
      await sendNewLinks(
        "1.3 Цели компании",
        [
          "1.7",
        ],
        chatId
      ),
    1.4: async () =>
      await sendNewLinks(
        "1.4 Принципы и традиции компании",
        [
          "1.8",
        ],
        chatId
      ),
    1.5: async () =>
      await sendNewLinks(
        "1.5 Наши сотрудники",
        [
          "1.9",
          "1.10",
          "1.11",
        ],
        chatId
      ),
    1.6: async () =>
      await sendNewLinks(
        "1.6 Структура компании",
        [
          "1.12",
          "1.13",
        ],
        chatId
      ),
    1.7: async () =>
      await sendNewLinks(
        "1.7 Динамика роста компаниии",
        [
          "1.2",
          "1.3",
        ],
        chatId
      ),
    1.8: async () =>
      await sendNewLinks(
        "1.8 Карта сотрудников компании",
        [
          "1.5",
        ],
        chatId
      ),
    1.9: async () =>
      await sendNewLinks(
        "1.9 Карта клиентов компании",
        [
          "1.4",
        ],
        chatId
      ),
    2.1: async () =>
      await sendNewLinks(
        "2.1 Настройка доступов",
        [
          "2.7",
        ],
        chatId
      ),
    2.2: async () =>
      await sendNewLinks(
        "2.2 Сервисы компании",
        [
          "2.1",
          data,
        ],
        chatId
      ),
    2.3: async () =>
      await sendNewLinks(
        "2.3 Правила для сервисов компании",
        [
          data,
          "2.4",
        ],
        chatId
      ),
    2.4: async () =>
      await sendNewLinks(
        "2.4 Слак-чаты для руководителей отделов",
        [
          "2.5",
          "2.6",
        ],
        chatId
      ),
    2.5: async () =>
      await sendNewLinks(
        "2.5 Распорядок первого рабочего дня",
        [
          "2.8",
        ],
        chatId
      ),
    2.6: async () =>
      await sendNewLinks(
        "2.6 Типичный график работы сотрудника компании",
        [
          "2.9",
        ],
        chatId
      ),
    3: async () =>
      await sendNewLinks(
        "3. Инструкции по организации работы",
        [
          data,
        ],
        chatId
      ),
    4: async () =>
      await sendNewLinks(
        "4. Контактные лица компании",
        [
          data,
        ],
        chatId
      ),
    5.1: async () =>
      await sendNewLinks(
        "5.1 Правила для сотрудников",
        [
          data,
          "5.2",
        ],
        chatId
      ),
    5.2: async () =>
      await sendNewLinks(
        "5.2 У нас НЕ принято",
        [
          "5.3",
        ],
        chatId
      ),
    6: async () =>
      await sendNewLinks(
        "6. Грейды и квалификация сотрудников",
        [
          "6.1",
          "6.2",
          "6.3",
        ],
        chatId
      ),
    7: async () =>
      await sendNewLinks(
        "7. Образование и развитие",
        [
          data,
        ],
        chatId
      ),
    8: async () =>
      await sendNewLinks(
        "8. Бенефиты для сотрудников",
        [
          data,
        ],
        chatId
      ),
    9: async () =>
      await sendNewLinks(
        "9. Отпуска и больничные",
        [
         data,
        ],
        chatId
      ),
    10: async () =>
      await sendNewLinks(
        "10. График работы. Выходные и праздники",
        [
          data,
        ],
        chatId
      ),
    11: async () =>
      await sendNewLinks(
        "11. Командировки",
        [
          data,
        ],
        chatId
      ),
    12: async () =>
      await sendNewLinks(
        "12. Релокейт",
        [
          "11",
        ],
        chatId
      ),
    13: async () =>
      await sendNewLinks(
        "13. Работа из дому",
        [
          data,
        ],
        chatId
      ),
  };

  choice[data]();
};
