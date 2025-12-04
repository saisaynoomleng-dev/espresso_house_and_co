import { BiCategory } from 'react-icons/bi';
import { FaQuestion, FaRegNewspaper } from 'react-icons/fa';
import { GiCoffeeBeans } from 'react-icons/gi';
import { IoCalendarNumber, IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import {
  MdEmail,
  MdMenuBook,
  MdOutlinePhoneCallback,
  MdOutlineTableBar,
} from 'react-icons/md';
import { PiChefHatThin } from 'react-icons/pi';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Espresso House & Co.')
    .items([
      S.divider().title('Content'),
      S.documentTypeListItem('teamMember')
        .title('Team Members')
        .icon(PiChefHatThin),
      S.documentTypeListItem('menu').title('Menu Items').icon(MdMenuBook),
      S.documentTypeListItem('blog').title('Blogs').icon(FaRegNewspaper),
      S.documentTypeListItem('faq').title('FAQs').icon(FaQuestion),

      S.divider().title('Products'),
      S.documentTypeListItem('product').title('Products').icon(GiCoffeeBeans),
      S.documentTypeListItem('category')
        .title('Product Category')
        .icon(BiCategory),
      S.documentTypeListItem('review')
        .title('Reviews')
        .icon(IoChatbubbleEllipsesOutline),

      S.divider().title('Marketing'),
      S.documentTypeListItem('newsletter')
        .title('Newsletter List')
        .icon(MdEmail),
      S.documentTypeListItem('contact')
        .title('Contact Submissions')
        .icon(MdOutlinePhoneCallback),

      S.divider().title('Operation'),
      S.documentTypeListItem('reservation')
        .title('Reservations')
        .icon(IoCalendarNumber),
      S.documentTypeListItem('table').title('Tables').icon(MdOutlineTableBar),
    ]);
