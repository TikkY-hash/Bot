import { returnButtonStructure } from "../utils.js";

export const buttons = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      returnButtonStructure("1. О компании", 1),
      returnButtonStructure("2. Первый рабочий день нового сотрудника", 2),
      returnButtonStructure("3. Инструкции по организации работы", 3),
      returnButtonStructure("4. Контактные лица компании", 4),
      returnButtonStructure("5. Корпоративные правила", 5),
      returnButtonStructure("6. Грейды и квалификация сотрудников", 6),
      returnButtonStructure("7. Образование и развитие", 7),
      returnButtonStructure("8. Бенефиты для сотрудников", 8),
      returnButtonStructure("9. Отпуска и больничные", 9),
      returnButtonStructure("10. График работы. Выходные и праздники", 10),
      returnButtonStructure("11. Командировки", 11),
      returnButtonStructure("12. Релокейт", 12),
      returnButtonStructure("13. Работа из дому", 13),
    ],
  }),
};
