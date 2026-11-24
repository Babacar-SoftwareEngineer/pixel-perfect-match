import villa from '@/assets/villa-contemporaine.png.asset.json';
import interior from '@/assets/appartement-interieur.png.asset.json';
import residence from '@/assets/residence-dakar.png.asset.json';
export const photos = { villa: villa.url, interior: interior.url, residence: residence.url };
export const phone = '+221 77 000 00 00';
export const phoneHref = 'tel:+221770000000';
export function whatsappUrl(message = 'Bonjour FAST IMMO, je souhaite échanger avec vous sur mon projet immobilier.') { return `https://wa.me/221770000000?text=${encodeURIComponent(message)}`; }
export function pageHead(title: string, description: string) { return { meta: [{ title: `${title} | FAST IMMO` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | FAST IMMO` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }; }
