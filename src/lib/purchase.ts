import { purchaseBaseUrl } from '../content';

function isTelegramUrl(url: string) {
  return url.includes('t.me/') || url.includes('telegram.me/');
}

export function buyLink(plan: string) {
  if (purchaseBaseUrl.includes('{plan}')) {
    return purchaseBaseUrl.replace('{plan}', encodeURIComponent(plan));
  }

  if (isTelegramUrl(purchaseBaseUrl)) {
    const text = encodeURIComponent(
      `Хочу купить ключ ZXCHARGED CLIENT: ${plan}`
    );
    return `${purchaseBaseUrl}${
      purchaseBaseUrl.includes('?') ? '&' : '?'
    }text=${text}`;
  }

  return purchaseBaseUrl;
}
