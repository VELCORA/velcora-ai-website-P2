export const WHATSAPP_NUMBER = '917988277723';
export const WHATSAPP_DISPLAY = '+91 79882 77723';
export const CONTACT_EMAIL = 'velcora.ai@gmail.com';
export const wa = (text: string) =>
  'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text);
export const GITHUB_URL = 'https://github.com/VELCORA';
export const CONTACT_URL = wa('Hi Velcora AI, I want a FREE audit of my business processes.');
export const CTA_MESSAGES = {
  audit: 'Hi Velcora AI, I want a FREE audit of my business processes.',
  leadsdr: 'Hi Velcora AI, I want to automate my sales follow-ups with LeadSDR.',
  whatsflow: 'Hi Velcora AI, I want a WhatsApp chatbot for my business.',
  docgpt: 'Hi Velcora AI, I want to chat with my documents with DocGPT.',
  newsletter: 'Hi Velcora AI, I want to subscribe to your newsletter.',
};
