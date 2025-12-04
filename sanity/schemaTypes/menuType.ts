import { formatCurrency } from '@/lib/utils';
import { MdMenuBook } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export const menuType = defineType({
  name: 'menu',
  title: 'Menus',
  icon: MdMenuBook,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Menu name',
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Menu Price',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'blockImage',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      price: 'price',
      mainImage: 'mainImage',
    },
    prepare({ name, price, mainImage }) {
      const nameFormatted = name
        ? `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`
        : 'Unnamed Menu Item';
      const priceFormatted = price ? formatCurrency(price) : 'Price Unlisted';

      return {
        title: nameFormatted,
        subtitle: `Price: ${priceFormatted}`,
        media: mainImage || MdMenuBook,
      };
    },
  },
});
