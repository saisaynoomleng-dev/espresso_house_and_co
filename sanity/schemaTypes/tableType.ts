import { MdOutlineTableBar } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export const tableType = defineType({
  name: 'table',
  title: 'Table',
  icon: MdOutlineTableBar,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Table No',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'seats',
      title: 'Number of seats',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      seats: 'seats',
    },
    prepare({ name, seats }) {
      return {
        title: name ? name : 'Name not provided',
        subtitle: `Number of Seats: ${seats}`,
        media: MdOutlineTableBar,
      };
    },
  },
});
