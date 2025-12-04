import { type SchemaTypeDefinition } from 'sanity';
import { productType } from './productType';
import { blockContentType } from './blockContentType';
import { blockImageType } from './blockImageType';
import { reviewType } from './reviewType';
import { categoryType } from './categoryType';
import { menuType } from './menuType';
import { newsletterType } from './newsletterType';
import { teamMemberType } from './teamMemberType';
import { blogType } from './blogType';
import { contactType } from './contactType';
import { faqType } from './faqType';
import { reservationType } from './reservationType';
import { tableType } from './tableType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    productType,
    blockContentType,
    blockImageType,
    reviewType,
    categoryType,
    menuType,
    newsletterType,
    teamMemberType,
    blogType,
    contactType,
    faqType,
    reservationType,
    tableType,
  ],
};
