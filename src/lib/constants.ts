export const WHATSAPP_NUMBER = '919138278584';
export const WHATSAPP_DISPLAY = '+91 91382 78584';
export const CONTACT_EMAIL = 'velcora.ai@gmail.com';
export const wa = (text: string) =>
  'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text);
export const GITHUB_URL = 'https://github.com/VELCORA';
export const CONTACT_URL = wa('Hi Velcora AI, I want a FREE audit of my business processes.');
export const CTA_MESSAGES = {
  audit: 'Hi Velcora AI, I want a FREE audit of my business processes.',
  newsletter: 'Hi Velcora AI, I want to subscribe to your newsletter.',
};
