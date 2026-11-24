import { queryOptions } from '@tanstack/react-query';
import { listProperties } from './properties.functions';
export const propertiesQuery = queryOptions({queryKey:['properties'],queryFn:()=>listProperties(),staleTime:60000});
