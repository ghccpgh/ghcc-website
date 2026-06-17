import { type SchemaTypeDefinition } from 'sanity'
import { post } from './documents/post';
import { testimonial } from './documents/testimonial';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post
    , testimonial
  ]
}

