import { type SchemaTypeDefinition } from 'sanity'
import { post } from './documents/post';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post],
}

