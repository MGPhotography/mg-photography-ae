import { MetadataRoute } from 'next'

export const dynamic = "force-static"; // Forces static generation
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mgphotographyae.ae/#mg-home',
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://www.mgphotography.ae/india',
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://mgphotographyae.ae/#about-us',
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://mgphotographyae.ae/#our-services',
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://mgphotography.ae/#contact-us',
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://mgphotography.ae/all-blogs',
      changeFrequency: 'weekly',
      priority: 0.5,
    }
  ]
}
