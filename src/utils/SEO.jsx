import { useEffect } from 'react';

export const useSEO = ({
  title = 'Favour Okafor - Full-Stack & Blockchain Developer',
  description = 'Blockchain developer specializing in Web3, DeFi, and smart contracts.',
  keywords = 'blockchain, web3, solidity, defi',
  ogType = 'website',
  ogImage = 'https://favourokafor.cv/og-image.png',
  ogUrl = 'https://favourokafor.cv/',
  twitterHandle = '@iamfavour3',
  canonical = 'https://favourokafor.cv/'
} = {}) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta description
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', description);

    // Update meta keywords
    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) keywordsMeta.setAttribute('content', keywords);

    // Update Open Graph tags
    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (ogTitleMeta) ogTitleMeta.setAttribute('content', title);

    const ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (ogDescMeta) ogDescMeta.setAttribute('content', description);

    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) ogImageMeta.setAttribute('content', ogImage);

    const ogUrlMeta = document.querySelector('meta[property="og:url"]');
    if (ogUrlMeta) ogUrlMeta.setAttribute('content', ogUrl);

    const ogTypeMeta = document.querySelector('meta[property="og:type"]');
    if (ogTypeMeta) ogTypeMeta.setAttribute('content', ogType);

    // Update Twitter Card tags
    const twitterTitleMeta = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitleMeta) twitterTitleMeta.setAttribute('content', title);

    const twitterDescMeta = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescMeta) twitterDescMeta.setAttribute('content', description);

    const twitterImageMeta = document.querySelector('meta[property="twitter:image"]');
    if (twitterImageMeta) twitterImageMeta.setAttribute('content', ogImage);

    const twitterCreatorMeta = document.querySelector('meta[name="twitter:creator"]');
    if (twitterCreatorMeta) twitterCreatorMeta.setAttribute('content', twitterHandle);

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

  }, [title, description, keywords, ogType, ogImage, ogUrl, twitterHandle, canonical]);
};

/**
 * Schema markup generator for JSON-LD structured data
 */
export const generatePersonSchema = (overrides = {}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Favour Okafor',
    jobTitle: 'Full-Stack & Blockchain Developer',
    url: 'https://favourokafor.cv/',
    sameAs: [
      'https://github.com/fahyvor',
      'https://linkedin.com/in/fahyvor',
      'https://twitter.com/iamfavour3'
    ],
    email: 'favourokafor30@gmail.com',
    knowsAbout: [
      'Solidity',
      'Web3',
      'Blockchain',
      'DeFi',
      'Smart Contracts',
      'Ethereum',
      'Foundry',
      'Hardhat',
      'React',
      'JavaScript',
      'TypeScript'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Abuja',
      addressCountry: 'Nigeria'
    },
    ...overrides
  };
};

export const generateProjectSchema = (project) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    url: project.url,
    image: project.image,
    creator: {
      '@type': 'Person',
      name: 'Favour Okafor'
    },
    dateCreated: project.dateCreated,
    keywords: project.keywords || 'Web3, blockchain, development'
  };
};
