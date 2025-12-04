import { MdEmail } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export const newsletterType = defineType({
  name: 'newsletter',
  title: 'Newsletter',
  icon: MdEmail,
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
});
