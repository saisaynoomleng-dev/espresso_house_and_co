import {
  ALL_BLOGS_QUERYResult,
  ALL_MENU_ITEMS_QUERYResult,
  ALL_PRODUCTS_QUERYResult,
  ALL_TEAM_MEMBERS_QUERYResult,
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

// CTA props
export type CTAProps = {
  className?: string;
  children: React.ReactNode;
  url: string;
};

// Member Card Props
export type MemberCardProps =
  NonNullable<ALL_TEAM_MEMBERS_QUERYResult>[number] & {
    className?: string;
  };

// Menu Card
export type MenuCardProps = NonNullable<ALL_MENU_ITEMS_QUERYResult>[number] & {
  className?: string;
};
