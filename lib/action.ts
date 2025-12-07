'use server';

import { client } from '@/sanity/lib/client';
import { ContactFormStateProps, NewsletterPreviousState } from './types';

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

export const handleContactForm = async (
  prevState: ContactFormStateProps,
  formData: FormData,
): Promise<{
  status: string;
  message?: string;
  field?: string;
  errors?: { field: string; message: string }[];
}> => {
  const fullName = formData.get('fullName')?.toString().trim() || '';
  const email = formData.get('email')?.toString().trim() || '';
  const reg_email = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
  const message = formData.get('message')?.toString().trim() || '';
  const phone = formData.get('phone')?.toString().trim() || '';

  const errors: { field: string; message: string }[] = [];

  if (!fullName) {
    errors.push({ message: 'This field cannot be empty!', field: 'fullName' });
  }
  if (!email) {
    errors.push({ message: 'This field cannot be empty!', field: 'email' });
  }
  if (!message) {
    errors.push({ message: 'This field cannot be empty!', field: 'message' });
  }
  if (!fullName) {
    errors.push({ message: 'This field cannot be empty!', field: 'phone' });
  }
  if (email && !reg_email.test(email)) {
    errors.push({ message: 'Must be a valid email address', field: 'email' });
  }

  if (errors.length > 0) {
    return {
      status: 'error',
      errors,
    };
  }

  try {
    await client.create({
      _type: 'contact',
      fullName,
      email,
      phone,
      message,
    });
    return {
      status: 'success',
      message: `Thank you for contacting us! We'll be in touch shortly!`,
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'Something went wrong! Try again later!',
    };
  }
};
