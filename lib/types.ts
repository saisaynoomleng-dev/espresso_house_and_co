import {
  ALL_BLOGS_QUERYResult,
  ALL_PRODUCTS_QUERYResult,
} from '@/sanity/types';

// Bounded Props
export type BoundedProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

// Product Card Props
export type ProductTypeProps = NonNullable<ALL_PRODUCTS_QUERYResult>[number] & {
  className?: string;
};

// Blog Card Props
export type BlogCardProps = NonNullable<ALL_BLOGS_QUERYResult>[number] & {
  className?: string;
};

// Newsletter Form Props
export type NewsletterPreviousState = {
  status: string;
  message: string;
};
