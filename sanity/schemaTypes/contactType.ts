import { MdOutlinePhoneCallback } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export const contactType = defineType({
  name: 'contact',
  title: 'Contacts',
  icon: MdOutlinePhoneCallback,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'phone',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      email: 'email',
    },
    prepare({ name, email }) {
      return {
        title: name ? name : 'name not provodied',
        subtitle: 'email',
        media: MdOutlinePhoneCallback,
      };
    },
  },
});
