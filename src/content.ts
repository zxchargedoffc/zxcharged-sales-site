export const purchaseBaseUrl =
  import.meta.env.VITE_PURCHASE_URL || 'https://t.me/zxcharged_support';

export interface BenefitItem {
  title: string;
  text: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  label: string;
  description: string;
  features: string[];
  popular: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const benefits: BenefitItem[] = [
  {
    title: 'PvP-first UX',
    text: 'Интерфейс и визуальные акценты собраны вокруг боя: читаемо, быстро, без лишнего шума.'
  },
  {
    title: 'Оптимизированный runtime',
    text: 'Лёгкий HUD, лимиты эффектов и стабильный запуск помогают держать плавность в реальной игре.'
  },
  {
    title: 'Offline-активация',
    text: 'Ключ активируется локально на устройстве, без постоянной зависимости от серверной проверки.'
  },
  {
    title: 'Premium HUD',
    text: 'Glass UI, аккуратные акценты, адаптивная читаемость и чистая визуальная иерархия.'
  },
  {
    title: 'Приватная выдача',
    text: 'Покупатель получает ключ и инструкцию активации без лишних панелей и ручных ожиданий.'
  },
  {
    title: 'Быстрый старт',
    text: 'Скачал, запустил loader, ввёл ключ, активировал клиент и играешь.'
  }
];

export const pricing: PricingPlan[] = [
  {
    name: '30 дней',
    price: '199 ₽',
    label: 'Старт',
    description:
      'Оптимально, чтобы попробовать клиент и оценить удобство в PvP.',
    features: [
      'Offline-ключ',
      'Все основные функции',
      'Обновления текущей ветки'
    ],
    popular: false
  },
  {
    name: '60 дней',
    price: '299 ₽',
    label: 'Популярный',
    description: 'Лучший баланс цены и срока для регулярной игры.',
    features: [
      'Offline-ключ',
      'Полный доступ',
      'Приоритетная выдача ключа'
    ],
    popular: true
  },
  {
    name: '90 дней',
    price: '449 ₽',
    label: 'Сезон',
    description:
      'Для тех, кто хочет закрыть несколько недель активной игры заранее.',
    features: ['Offline-ключ', 'Полный доступ', 'Стабильная цена на период'],
    popular: false
  },
  {
    name: 'Навсегда',
    price: '699 ₽',
    label: 'Lifetime',
    description: 'Разовая покупка для постоянного использования клиента.',
    features: ['Lifetime-ключ', 'Полный доступ', 'Максимальная выгода'],
    popular: false
  }
];

export const faqs: FaqItem[] = [
  {
    question: 'Что такое ZXCHARGED CLIENT?',
    answer:
      'Это premium PvP-клиент с упором на удобство, визуальную читаемость и стабильную работу. Он поставляется через loader и активируется ключом.'
  },
  {
    question: 'Как активировать ключ?',
    answer:
      'После покупки вы получаете ключ, запускаете loader, вводите ключ в окне активации и клиент сохраняет лицензию локально на устройстве.'
  },
  {
    question: 'Ключ привязывается к устройству?',
    answer:
      'Да, offline-активация привязывает лицензию к текущей системе, чтобы защитить ключ от передачи третьим лицам.'
  },
  {
    question: 'Есть ли риск блокировки на сервере?',
    answer:
      'Любые игровые модификации нужно использовать с учётом правил конкретного сервера. Сайт не обещает обход правил или античитов.'
  },
  {
    question: 'Что делать после оплаты?',
    answer:
      'Нажмите кнопку покупки, напишите продавцу выбранный тариф и получите ключ вместе с инструкцией запуска.'
  }
];
