import type { Tables } from '@/integrations/supabase/types';
import { photos } from './brand';
export type Property = Tables<'properties'> & { images: string[]; demo?: boolean };
export const categories = ['Villa','Appartement','Terrain','Bureau','Immeuble'];
export const demoProperties: Property[] = [
 { title: 'Villa contemporaine avec piscine', slug: 'exemple-villa-almadies', price: 350000000, transaction_type: 'Acheter', property_type: 'Villa', location: 'Almadies, Dakar', bedrooms: 4, bathrooms: 4, surface: 450, images: [photos.villa, photos.interior] },
 { title: 'Appartement ouvert sur l’océan', slug: 'exemple-appartement-mamelles', price: 850000, transaction_type: 'Louer', property_type: 'Appartement', location: 'Mamelles, Dakar', bedrooms: 3, bathrooms: 2, surface: 180, images: [photos.interior, photos.residence] },
 { title: 'Résidence au cœur de la ville', slug: 'exemple-residence-mermoz', price: 125000000, transaction_type: 'Acheter', property_type: 'Appartement', location: 'Mermoz, Dakar', bedrooms: 3, bathrooms: 3, surface: 160, images: [photos.residence, photos.interior] },
 { title: 'Villa lumineuse avec jardin', slug: 'exemple-villa-ngorr', price: 1500000, transaction_type: 'Louer', property_type: 'Villa', location: 'Ngor, Dakar', bedrooms: 5, bathrooms: 4, surface: 380, images: [photos.villa, photos.interior] },
].map((p, index) => ({ ...p, id: `demo-${index}`, created_at: '', description: 'Exemple de présentation du catalogue. Cette propriété, ses photographies et ses caractéristiques sont illustratives et ne constituent pas une annonce disponible à la vente ou à la location.', featured: true, status: 'draft', amenities: ['Terrasse', 'Parking', 'Espace lumineux'], demo: true }));
export type Filters = { transaction?: string; type?: string; location?: string; min?: number; max?: number; bedrooms?: number; sort?: string };
export function filterProperties(properties: Property[], filters: Filters) { const result = properties.filter(p => (!filters.transaction || p.transaction_type === filters.transaction) && (!filters.type || p.property_type === filters.type) && (!filters.location || p.location.toLowerCase().includes(filters.location.toLowerCase())) && (!filters.min || p.price >= filters.min) && (!filters.max || p.price <= filters.max) && (!filters.bedrooms || p.bedrooms >= filters.bedrooms)); if(filters.sort === 'asc') result.sort((a,b)=>a.price-b.price); if(filters.sort === 'desc') result.sort((a,b)=>b.price-a.price); return result; }
export const formatPrice = (price: number) => `${new Intl.NumberFormat('fr-FR').format(price)} FCFA`;
