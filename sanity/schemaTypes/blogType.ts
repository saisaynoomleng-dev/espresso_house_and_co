import { capitalizeString, formatDate } from '@/lib/utils';
import { FaRegNewspaper } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const blogType = defineType({
  name: 'blog',
  title: 'Blog',
  icon: FaRegNewspaper,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Blog Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Reading Time',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'blockImage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Blog Description',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'title',
      publishedAt: 'publishedAt',
      mainImage: 'mainImage',
    },
    prepare({ name, publishedAt, mainImage }) {
      const nameFormatted = name ? capitalizeString(name) : 'Missing Title';
      const publishedAtFormatted = publishedAt
        ? formatDate(publishedAt)
        : 'Unknown publish date';

      return {
        title: nameFormatted,
        subtitle: `Published On: ${publishedAtFormatted}`,
        media: mainImage || FaRegNewspaper,
      };
    },
  },
});
