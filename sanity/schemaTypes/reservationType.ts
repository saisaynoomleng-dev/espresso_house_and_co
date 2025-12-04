import { formatBookingDate } from '@/lib/utils';
import { IoCalendarNumber } from 'react-icons/io5';
import { defineField, defineType } from 'sanity';

export const reservationType = defineType({
  name: 'reservation',
  title: 'Reservations',
  icon: IoCalendarNumber,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Customer Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'people',
      title: 'Number of People',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'table',
      title: 'Table',
      type: 'reference',
      to: [{ type: 'table' }],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      phone: 'phone',
      date: 'date',
    },
    prepare({ name, phone, date }) {
      const dateFormatted = date ? formatBookingDate(date) : 'Unspecified date';
      return {
        title: name ? name : 'Name not provided',
        subtitle: `Time: ${dateFormatted} | Phone: ${phone}`,
        media: IoCalendarNumber,
      };
    },
  },
});
