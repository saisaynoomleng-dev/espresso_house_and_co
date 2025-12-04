import { formatCurrency } from '@/lib/utils';
import { GiCoffeeBeans } from 'react-icons/gi';
import { defineField, defineType } from 'sanity';

export const productType = defineType({
  name: 'product',
  title: 'Products',
  icon: GiCoffeeBeans,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
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
      validation: (rule) =>
        rule.required().info(`Required to generate a page on the website`),
    }),
    defineField({
      name: 'subtitle',
      title: 'Sub Title',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Product Price',
      type: 'number',
      initialValue: 10,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'discount',
      title: 'Product Discount',
      type: 'number',
    }),
    defineField({
      name: 'category',
      title: 'Product Category',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'desc',
      title: 'Product Description',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'blockImage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'review',
      title: 'reviews',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'review' } }],
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
        : 'Unnamed Product';
      const priceFormatted = price ? formatCurrency(price) : 'Price Unlisted';

      return {
        title: nameFormatted,
        subtitle: `Price: ${priceFormatted}`,
        media: mainImage || GiCoffeeBeans,
      };
    },
  },
});
