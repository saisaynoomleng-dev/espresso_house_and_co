'use client';

import Bounded from '@/components/Bounded';
import SubmitButton from '@/components/SubmitButton';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { handleContactForm } from '@/lib/action';
import Form from 'next/form';
import Image from 'next/image';
import Link from 'next/link';
import { useActionState } from 'react';
import { CiMail, CiMapPin, CiPhone } from 'react-icons/ci';
import { FaMapPin, FaPhone } from 'react-icons/fa';

type ContactFormState = {
  status: string;
  message?: string;
  field?: string;
  errors?: { field: string; message: string }[];
};

const initialContactFormState: ContactFormState = {
  status: '',
};

const ContactPage = () => {
  const [state, actionFucntion] = useActionState<ContactFormState, FormData>(
    handleContactForm,
    initialContactFormState,
  );

  return (
    <Bounded className="grid md:grid-cols-2 md:gap-x-5">
      <div>
        <Image
          src="/contact.jpg"
          alt=""
          width={400}
          height={400}
          className="min-w-full object-cover"
        />
      </div>

      <Form
        action={actionFucntion}
        className="grid grid-cols-2 gap-x-2 gap-y-1 items-start justify-start"
      >
        <div className="flex flex-col gap-y-2 col-span-full">
          <label htmlFor="fullName" className="formLabel">
            Full Name
          </label>
          <Input type="text" id="fullName" name="fullName" />
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="email" className="formLabel">
            Email
          </label>
          <Input type="text" id="email" name="email" />
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="phone" className="formLabel">
            phone
          </label>
          <Input type="text" id="phone" name="phone" />
        </div>

        <div className="flex flex-col gap-y-2 col-span-full">
          <label htmlFor="message" className="formLabel">
            Message
          </label>
          <Textarea name="message" id="message" className="h-30" />
        </div>

        <SubmitButton />
      </Form>

      <div className="flex flex-col gap-y-2">
        <h2 className="font-medium font-sora">Get in Touch</h2>
        <p>
          Reach out to us with your inquiries or to schedule an appointment. Let
          us know how we can assist you with your décor needs.
        </p>
        <address>
          <p className="flex gap-x-2 items-center">
            <CiMapPin />
            <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
          </p>

          <p className="flex gap-x-2 items-center">
            <CiPhone />
            <Link href="tel:+7025550122">+7025550122</Link>
          </p>

          <p className="flex gap-x-2 items-center">
            <CiMail />
            <Link href="mailto:@hello@espressohouse.com">
              @hello@espressohouse.com
            </Link>
          </p>
        </address>
      </div>

      <div className="flex flex-col gap-y-2">
        <h2 className="font-medium font-sora">Let&apos;s Talk</h2>
        <p>
          Whether you are a new customer looking for more information about our
          products or services, or an existing customer with a question or
          concern, we are here to help.
        </p>
        <p>
          Our knowledgeable and friendly customer service team is available to
          assist you in any way we can.
        </p>
      </div>
    </Bounded>
  );
};

export default ContactPage;
