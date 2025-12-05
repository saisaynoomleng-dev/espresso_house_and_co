import { FaQuestion } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const faqType = defineType({
  name: 'faq',
  title: 'FAQs',
  icon: FaQuestion,
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'question',
      },
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
});
