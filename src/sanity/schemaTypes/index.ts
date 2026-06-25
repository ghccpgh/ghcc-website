import { type SchemaTypeDefinition } from 'sanity'
import { post } from './documents/post'
import { announcement } from './documents/announcement'
import { testimonial } from './documents/testimonial'
import { mission } from './documents/mission'
import { boardMember } from './documents/boardmember'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, announcement, testimonial, mission, boardMember],
}
