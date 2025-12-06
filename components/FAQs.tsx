import { sanityFetch } from '@/sanity/lib/live';
import { ALL_FAQS_QUERY } from '@/sanity/lib/queries';
import clsx from 'clsx';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQs = async ({ className }: { className?: string }) => {
  const { data: faqs } = await sanityFetch({ query: ALL_FAQS_QUERY });

  return (
    <div className={clsx('', className)}>
      <h2 className="md:text-fs-500 font-sora col-span-full">
        Frequently Asked Questions
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full grid md:grid-cols-2 gap-3"
      >
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.slug?.current}
            value={faq.slug?.current as string}
            className="border-b border-brand-black/10"
          >
            <AccordionTrigger className="font-sora">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQs;
