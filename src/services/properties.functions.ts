import { createServerFn } from '@tanstack/react-start';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';
import type { Property } from '@/data/properties';
export const listProperties = createServerFn({ method: 'GET' }).handler(async (): Promise<Property[]> => {
 const key=process.env['SUPABASE_PUBLISHABLE_KEY']; const url=process.env['SUPABASE_URL'];
 if(!key || !url) throw new Error('Le catalogue est momentanément indisponible.');
 const client=createClient<Database>(url,key,{auth:{persistSession:false,autoRefreshToken:false},global:{fetch:(input,init)=>{const headers=new Headers(init?.headers); if(key.startsWith('sb_') && headers.get('Authorization')===`Bearer ${key}`) headers.delete('Authorization'); headers.set('apikey',key); return fetch(input,{...init,headers});}}});
 const {data,error}=await client.from('properties').select('*, property_images(image_url,display_order)').eq('status','published').order('created_at',{ascending:false}).limit(1000);
 if(error) throw new Error(error.message);
 return Promise.all((data ?? []).map(async p => ({...p,images:await Promise.all(p.property_images.sort((a,b)=>a.display_order-b.display_order).map(async i=>{if(i.image_url.startsWith('https://') || i.image_url.startsWith('/__l5e/')) return i.image_url; const {data:signed,error:signError}=await client.storage.from('property-photos').createSignedUrl(i.image_url,3600); if(signError) return ''; return signed?.signedUrl ?? ''; })).then(urls=>urls.filter(Boolean))})));
});
