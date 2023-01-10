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
          "https://drive.google.com/file/d/1wYqtRSBur4dHKhfEh8abvahiC7M_Jc2r/view?usp=share_link",
        ],
        chatId
      );
      await bot.sendMessage(chatId, "Выбери подраздел", aboutCompanySubButtons);
    },
    2: async () => {
      await sendNewLinks(
        "2. Первый рабочий день нового сотрудника",
        [
          "https://drive.google.com/file/d/1puV6wGqsguHEPLZzf8E9ACL1-3zXLC4W/view?usp=share_link",
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
          "https://drive.google.com/file/d/1OiBDZaNd4keaNXqnJxdrrFC3cofPkz3x/view?usp=share_link",
        ],
        chatId
      ),
    1.2: async () =>
      await sendNewLinks(
        "1.2 Миссия компании",
        [
          "https://drive.google.com/file/d/1W1xFXF2g5zzNNLd9kw-hUXHl1-XPAaE9/view?usp=share_link",
        ],
        chatId
      ),
    1.3: async () =>
      await sendNewLinks(
        "1.3 Цели компании",
        [
          "https://drive.google.com/file/d/1fe1C0hHirLDOvs1mDSDyQ2Q2kHpArQ6e/view?usp=share_link",
        ],
        chatId
      ),
    1.4: async () =>
      await sendNewLinks(
        "1.4 Принципы и традиции компании",
        [
          "https://drive.google.com/file/d/1uIrrbGntihdkvFz1hl8RNoXQiNaT-jP-/view?usp=share_link",
        ],
        chatId
      ),
    1.5: async () =>
      await sendNewLinks(
        "1.5 Наши сотрудники",
        [
          "https://drive.google.com/file/d/158ASyWL2c-MFKkwAPnPain_op6Ct6CCn/view?usp=share_link",
          "https://drive.google.com/file/d/1jOoXwuI8PI595rc0DOX4f7BU-m5D1hAC/view?usp=share_link",
          "https://drive.google.com/file/d/1hLXGJKRmJcsNZl0zXasYSIzZBT9htClJ/view?usp=share_link",
        ],
        chatId
      ),
    1.6: async () =>
      await sendNewLinks(
        "1.6 Структура компании",
        [
          "https://drive.google.com/file/d/18hc-SA9yoGhExqaMW1Co1vveE-nQpJBe/view?usp=share_link",
          "https://drive.google.com/file/d/1l2jtCw4b_I98pcL_-15sTCwrHoKMlfTW/view?usp=share_link",
        ],
        chatId
      ),
    1.7: async () =>
      await sendNewLinks(
        "1.7 Динамика роста компаниии",
        [
          "https://drive.google.com/file/d/1ngoWsUhOEw9amA5wZmiLagh8D7KUYsSq/view?usp=share_link",
          "https://drive.google.com/file/d/1ISTrk-Bgh392k0zhB4PiHyIsi1DDJVQB/view?usp=share_link",
        ],
        chatId
      ),
    1.8: async () =>
      await sendNewLinks(
        "1.8 Карта сотрудников компании",
        [
          "https://drive.google.com/file/d/1hFOAdsQLjJEhwf7GtxBb532xmQkrOl2Y/view?usp=share_link",
        ],
        chatId
      ),
    1.9: async () =>
      await sendNewLinks(
        "1.9 Карта клиентов компании",
        [
          "https://drive.google.com/file/d/1vH699KnIHpFCG8TF1gd2VdmaOXzQEb4I/view?usp=share_link",
        ],
        chatId
      ),
    2.1: async () =>
      await sendNewLinks(
        "2.1 Настройка доступов",
        [
          "https://drive.google.com/file/d/1gFWWQ_vKXFVCZstT3VxYW_bXHdPzsGYP/view?usp=share_link",
        ],
        chatId
      ),
    2.2: async () =>
      await sendNewLinks(
        "2.2 Сервисы компании",
        [
          "https://drive.google.com/file/d/1_ethGrWtGzu8qDza4-nr6F-KaYnrSy6y/view?usp=share_link",
          "https://drive.google.com/file/d/161Em6ORgVlI-ckeUYKWa17iCmZ0SAtXE/view?usp=share_link",
        ],
        chatId
      ),
    2.3: async () =>
      await sendNewLinks(
        "2.3 Правила для сервисов компании",
        [
          "https://drive.google.com/file/d/1qyfIjFIHYkhys2xaBN1v1-rcMF90cv3k/view?usp=share_link",
          "https://drive.google.com/file/d/17mm9UT5Y8D7m_9op_vd9c3FwemM24euE/view?usp=share_link",
        ],
        chatId
      ),
    2.4: async () =>
      await sendNewLinks(
        "2.4 Слак-чаты для руководителей отделов",
        [
          "https://drive.google.com/file/d/1p37WSGHqqf6Q0khHA77TnIJKX5kTqpzh/view?usp=share_link",
          "https://drive.google.com/file/d/1ocvd3SJtylJkNgSa2C9UhAt3vk1iRGNp/view?usp=share_link",
        ],
        chatId
      ),
    2.5: async () =>
      await sendNewLinks(
        "2.5 Распорядок первого рабочего дня",
        [
          "https://drive.google.com/file/d/1El9ke_ihqgB5sg6nCH6zWupmWShVW438/view?usp=share_link",
        ],
        chatId
      ),
    2.6: async () =>
      await sendNewLinks(
        "2.6 Типичный график работы сотрудника компании",
        [
          "https://drive.google.com/file/d/1FiqQ2pK9dyPpZXDweISjUDRAaBtyhAwo/view?usp=share_link",
        ],
        chatId
      ),
    3: async () =>
      await sendNewLinks(
        "3. Инструкции по организации работы",
        [
          "https://drive.google.com/file/d/128NQdjuy80ASMNgjpgwOw2Lkzx-qGz82/view?usp=share_link",
        ],
        chatId
      ),
    4: async () =>
      await sendNewLinks(
        "4. Контактные лица компании",
        [
          "https://drive.google.com/file/d/1sIh5Z0V8ZT4Uwu1OmqzjxflzoA6iMrLI/view?usp=share_link",
        ],
        chatId
      ),
    5.1: async () =>
      await sendNewLinks(
        "5.1 Правила для сотрудников",
        [
          "https://drive.google.com/file/d/1rBC_4drvc_nZuitLocsLfbxUvy--nkI9/view?usp=share_link",
          "https://drive.google.com/file/d/1P111janILp4Ep5b2wl-L76TCn04C0VMi/view?usp=share_link",
        ],
        chatId
      ),
    5.2: async () =>
      await sendNewLinks(
        "5.2 У нас НЕ принято",
        [
          "https://drive.google.com/file/d/19e61evbo2sqzvvEU2-iagHmIx5a8VcQf/view?usp=share_link",
        ],
        chatId
      ),
    6: async () =>
      await sendNewLinks(
        "6. Грейды и квалификация сотрудников",
        [
          "https://drive.google.com/file/d/1oQiP0mPoesF00BLyff-_3zGguSgiDy5g/view?usp=share_link",
          "https://drive.google.com/file/d/1vFC0d6BgFUz1DzeJ0mh9BfnraqcFsBxo/view?usp=share_link",
          "https://drive.google.com/file/d/19JSd7Pzc9ebS5Jb1PNaT9I27qAJEW2uW/view?usp=share_link",
        ],
        chatId
      ),
    7: async () =>
      await sendNewLinks(
        "7. Образование и развитие",
        [
          "https://drive.google.com/file/d/1jV-M9AZG32SFWh_MmWkxP4QdcdzAnGUn/view?usp=share_link",
        ],
        chatId
      ),
    8: async () =>
      await sendNewLinks(
        "8. Бенефиты для сотрудников",
        [
          "https://drive.google.com/file/d/1w-tfTrqqlno9Fl49FNiJlLtvbdUi9qZT/view?usp=share_link",
        ],
        chatId
      ),
    9: async () =>
      await sendNewLinks(
        "9. Отпуска и больничные",
        [
          "https://drive.google.com/file/d/12YBLEGeFAS3reNcRllMPh5RD3E2FiDyO/view?usp=share_link",
        ],
        chatId
      ),
    10: async () =>
      await sendNewLinks(
        "10. График работы. Выходные и праздники",
        [
          "https://drive.google.com/file/d/1pVo7I53hUqDMU0BIYWfJGKFAI4r_KmXI/view?usp=share_link",
        ],
        chatId
      ),
    11: async () =>
      await sendNewLinks(
        "11. Командировки",
        [
          "https://drive.google.com/file/d/17Lgrx06QNZAwcd-QVWY18VfKyYvKULc6/view?usp=share_link",
        ],
        chatId
      ),
    12: async () =>
      await sendNewLinks(
        "12. Релокейт",
        [
          "https://drive.google.com/file/d/17Lgrx06QNZAwcd-QVWY18VfKyYvKULc6/view?usp=share_link",
        ],
        chatId
      ),
    13: async () =>
      await sendNewLinks(
        "13. Работа из дому",
        [
          "https://drive.google.com/file/d/1M6w_NIHS0H2jXLkdfXnmDSa2ygJrJWoI/view?usp=share_link",
        ],
        chatId
      ),
  };

  choice[data]();
};
