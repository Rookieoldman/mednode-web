export interface Translations {
  meta: { title: string; description: string };
  nav: { products: string; advantages: string; contact: string };
  hero: { badge: string; title: string; subtitle: string; cta: string };
  products: {
    title: string;
    medsign: {
      name: string;
      tagline: string;
      description: string;
      features: string[];
    };
    medflow: {
      name: string;
      tagline: string;
      description: string;
      features: string[];
    };
  };
  advantages: {
    title: string;
    items: { title: string; description: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    cta: string;
    email: string;
  };
  footer: {
    tagline: string;
    copyright: string;
    marks: string;
  };
}
