import { defineQuery } from 'next-sanity';

export const ALL_TEAM_MEMBERS_QUERY = defineQuery(`*[_type == 'teamMember'
 && defined(slug.current)]{
  name,
  slug,
  role,
  mainImage{
    alt,
    asset->{url}
  }
 }`);

export const ALL_MENU_ITEMS_QUERY = defineQuery(`*[_type == 'menu'
 && defined(slug.current)]{
  name,
  slug,
  price,
  ingredients,
  mainImage{
    alt,
    asset->{url}
  }
 }`);

export const ALL_BLOGS_QUERY = defineQuery(`*[_type == 'blog'
 && defined(slug.current)]
|order(publishedAt){
  title,
  slug,
  publishedAt,
  mainImage{
    alt,
    asset->{url}
  }
 }`);

export const BLOG_QUERY = defineQuery(`*[_type == 'blog'
 && slug.current == $slug]
|order(publishedAt){
  title,
  slug,
  publishedAt,
  mainImage{
    alt,
    asset->{url}
  },
  desc,
  duration
 }`);

export const ALL_FAQS_QUERY = defineQuery(`*[_type == 'faq']{
 question,
  answer
 }`);

export const ALL_PRODUCTS_QUERY = defineQuery(`*[_type == 'product'
 && defined(slug.current)]{
  name,
  slug,
  price,
  discount,
  mainImage{
    alt,
    asset->{url}
  }
 }`);

export const RRODUCT_QUERY = defineQuery(`*[_type == 'product'
 && slug.current == $slug]{
  name,
  slug,
  price,
  discount,
  mainImage{
    alt,
    asset->{url}
  },
  subtitle,
  category,
  desc,
  review
 }`);
