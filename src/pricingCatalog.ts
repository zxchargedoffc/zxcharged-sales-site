export interface PricingCard {
  name: string;
  price: string;
  label: string;
  description: string;
  features: string[];
  popular: boolean;
  payload: string;
}

export const pricingCards: PricingCard[] = [
  {
    name: '30 дней',
    price: '199 ₽',
    label: 'Старт',
    description: 'Оптимально, чтобы попробовать клиент и оценить удобство в PvP.',
    features: ['Offline-ключ', 'Все основные функции', 'Обновления текущей ветки'],
    popular: false,
    payload: 'buy_30d'
  },
  {
    name: '60 дней',
    price: '299 ₽',
    label: 'Популярный',
    description: 'Лучший баланс цены и срока для регулярной игры.',
    features: ['Offline-ключ', 'Полный доступ', 'Приоритетная выдача ключа'],
    popular: true,
    payload: 'buy_60d'
  },
  {
    name: '365 дней',
    price: '599 ₽',
    label: 'Год',
    description: 'Долгий доступ для тех, кто хочет закрыть весь игровой сезон одной покупкой.',
    features: ['Offline-ключ', 'Полный доступ', 'Выгодный формат на длинный срок'],
    popular: false,
    payload: 'buy_365d'
  },
  {
    name: 'Навсегда',
    price: '699 ₽',
    label: 'Lifetime',
    description: 'Разовая покупка для постоянного использования клиента.',
    features: ['Lifetime-ключ', 'Полный доступ', 'Максимальная выгода'],
    popular: false,
    payload: 'buy_life'
  }
];
