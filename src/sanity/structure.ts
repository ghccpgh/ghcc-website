import type { StructureResolver } from 'sanity/structure'
import { CalendarIcon, EditIcon, UsersIcon, BookIcon } from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([

      // Content & Updates
      S.listItem()
        .title('Content & Updates')
        .icon(EditIcon)
        .child(
          S.list()
            .title('Content & Updates')
            .items([
              S.documentTypeListItem('announcement').title('Announcements').icon(CalendarIcon),
              S.documentTypeListItem('post').title('Blog Posts').icon(BookIcon),
            ])
        ),

      S.divider(),

      // The Neighborhood
      S.listItem()
        .title('The Neighborhood')
        .icon(UsersIcon)
        .child(
          S.list()
            .title('The Neighborhood')
            .items([
              S.documentTypeListItem('partner')
                .title('Partners')
                .icon(UsersIcon),
            ])
        ),

      S.divider(),

      // Site Settings
      S.listItem()
        .title('Site Settings')
        .child(
          S.list()
            .title('Site Settings')
            .items([
              // Uncomment as singleton pages are added:
              // S.listItem().title('Home').child(S.editor().schemaType('homePage').documentId('homePage')),
              // S.listItem().title('About').child(S.editor().schemaType('aboutPage').documentId('aboutPage')),
              // S.listItem().title('Contact').child(S.editor().schemaType('contactPage').documentId('contactPage')),
              S.listItem()
                .title('Mission Page')
                .child(S.editor().schemaType('mission').documentId('mission')),
                S.documentTypeListItem('testimonial').title('Community Voices').icon(UsersIcon),
                S.documentTypeListItem('boardMember').title('Our Board').icon(UsersIcon)
            ])
        ),


    ])