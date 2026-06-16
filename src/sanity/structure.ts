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
              S.listItem()
                .title('Partners — Community')
                .child(
                  S.documentList()
                    .title('Community Partners')
                    .filter('_type == "partner" && partnerType == "community"')
                    .defaultOrdering([
                      { field: 'order', direction: 'asc' },
                      { field: 'name',  direction: 'asc' },
                    ])
                ),
              S.listItem()
                .title('Partners — Non-Community')
                .child(
                  S.documentList()
                    .title('Non-Community Partners')
                    .filter('_type == "partner" && partnerType == "nonCommunity"')
                    .defaultOrdering([
                      { field: 'order', direction: 'asc' },
                      { field: 'name',  direction: 'asc' },
                    ])
                ),
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
            ])
        ),
    ])