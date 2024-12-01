import { MetadataRoute } from 'next'

export const dynamic = "force-static"; // Forces static generation
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mgphotographyae.com/#mg-home',
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://mgphotographyae.com/#about-us',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://mgphotographyae.com/#our-services',
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://mgphotographyae.com//#contact-us',
      changeFrequency: 'weekly',
      priority: 0.6,
    }
  ]
}
