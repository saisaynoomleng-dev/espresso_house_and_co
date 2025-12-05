'use server';

import { client } from '@/sanity/lib/client';
import { NewsletterPreviousState } from './types';

export const handleNewsletter = async (
  prevState: NewsletterPreviousState,
  formData: FormData,
): Promise<{ status: string; message: string }> => {
  const email = formData.get('email')?.toString().trim() || '';
  const reg_email = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

  if (!email) {
    return {
      status: 'error',
      message: `Email can't be empty`,
    };
  }

  if (!reg_email.test(email)) {
    return {
      status: 'error',
      message: `Must be a valid email address`,
    };
  }

  try {
    await client.create({
      _type: 'newsletter',
      email,
    });

    return {
      status: 'success',
      message: `Thank you for your subscription, we'll be in touch!`,
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'Something went wrong! Try again later!',
    };
  }
};
