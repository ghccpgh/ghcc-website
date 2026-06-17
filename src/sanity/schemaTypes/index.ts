import { type SchemaTypeDefinition } from 'sanity'
import { post } from './documents/post'
import { announcement } from './documents/announcement'  // curly braces now

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, announcement],
}
