import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { defineField, defineType } from 'sanity';

export const reviewType = defineType({
  name: 'review',
  title: 'Reviews',
  icon: IoChatbubbleEllipsesOutline,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Reviewer Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      type: 'blockImage',
    }),
    defineField({
      name: 'desc',
      type: 'text',
    }),
    defineField({
      name: 'rating',
      title: 'Ratings',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
  ],
});
