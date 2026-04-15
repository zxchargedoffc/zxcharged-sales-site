import { purchaseBaseUrl } from '../content';

const START_PAYLOADS: Record<string, string> = {
  '30 дней': 'buy_30d',
  '60 дней': 'buy_60d',
  '365 дней': 'buy_365d',
  'Навсегда': 'buy_life',
  life: 'buy_life',
  lifetime: 'buy_life'
};

export function buyLink(plan?: string) {
  const normalized = plan?.trim() ?? '';
  const payload = normalized.startsWith('buy_')
    ? normalized
    : START_PAYLOADS[normalized] ?? 'buy';
  const separator = purchaseBaseUrl.includes('?') ? '&' : '?';
  return `${purchaseBaseUrl}${separator}start=${encodeURIComponent(payload)}`;
}
