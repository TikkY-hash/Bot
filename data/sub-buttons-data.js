import { returnButtonStructure } from "../utils.js";

export const aboutCompanySubButtons = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      returnButtonStructure("1.1 История компании", 1.1),
      returnButtonStructure("1.2 Миссия компании", 1.2),
      returnButtonStructure("1.3 Цели компании", 1.3),
      returnButtonStructure("1.4 Принципы и традиции компании", 1.4),
      returnButtonStructure("1.5 Наши сотрудники", 1.5),
      returnButtonStructure("1.6 Структура компании", 1.6),
      returnButtonStructure("1.7 Динамика роста компании", 1.7),
      returnButtonStructure("1.8 Карта сотрудников компании", 1.8),
      returnButtonStructure("1.9 Карта клиентов компании", 1.9),
    ],
  }),
};

export const firstDaySubButtons = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      returnButtonStructure("2.1 Настройка доступов", 2.1),
      returnButtonStructure("2.2 Сервисы компании", 2.2),
      returnButtonStructure("2.3 Правила для сервисов компании", 2.3),
      returnButtonStructure("2.4 Слак-чаты для руководителей отделов", 2.4),
      returnButtonStructure("2.5 Распорядок первого рабочего дня", 2.5),
      returnButtonStructure("2.6 Типичный график работы сотрудника компании", 2.6),
    ],
  }),
};

export const rulesSubButtons = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        returnButtonStructure("5.1 Правила для сотрудников", 5.1),
        returnButtonStructure("5.2 У нас НЕ принято", 5.2),
      ],
    }),
  };
