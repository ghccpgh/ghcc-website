import { type SchemaTypeDefinition } from 'sanity'
import { post } from './documents/post'
<<<<<<< HEAD
import { announcement } from './documents/announcement' 
import { testimonial } from './documents/testimonial'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, announcement, testimonial],
}
=======
import { announcement } from './documents/announcement'
import { testimonial } from './documents/testimonial'
import { mission } from './documents/mission'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, announcement, testimonial, mission],
}
>>>>>>> 76daedc4d6841ef8646dad6f65acfb70bf979c72
