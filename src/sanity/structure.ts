import type { StructureResolver } from 'sanity/structure'
import { CalendarIcon, EditIcon, UsersIcon, BookIcon, ClockIcon } from '@sanity/icons'


export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // content & updates (announcements, blog, etc)
      S.listItem()
        .title('Content & Updates').icon(EditIcon)
        .child(
          S.list()
            .title('Content & Updates')
            .items([
              // S.documentTypeListItem('announcement').title('Announcements'),
              S.documentTypeListItem('post').title('post').icon(BookIcon),
            ])
        ),

      S.divider(),

      // Every dynamic content about the neighborhood
      S.listItem()
        .title('The Neighborhood')
        .child(
          S.list()
            .title('The Neighborhood')
            .items([
              // Two filtered views of the same partner type
              S.listItem()
                .title('Partners — Community')
                .child(
                  S.documentList()
                    .title('Community Partners')
                    .filter('_type == "partner" && partnerType == "community"')
                    .defaultOrdering([
                      { field: 'order', direction: 'asc' },
                      { field: 'name', direction: 'asc' },
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
                      { field: 'name', direction: 'asc' },
                    ])
                ),
              // S.documentTypeListItem('historyEntry').title('History Timeline'),
              // S.documentTypeListItem('boardMember').title('Board Members'),
            ])
        ),

      S.divider(),

      // site settings (singleton)
      S.listItem()
        .title('Site Settings')
        .child(
          S.list()
            .title('Site Settings')
            .items([
              // S.listItem().title('Home').child(S.editor().schemaType('homePage').documentId('homePage')),
              // S.listItem().title('About').child(S.editor().schemaType('aboutPage').documentId('aboutPage')),
              // S.listItem().title('Contact').child(S.editor().schemaType('contactPage').documentId('contactPage')),
            ])
        ),
    ])