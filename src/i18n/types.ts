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
    hint: string;
  };
  contactModal: {
    title: string;
    intro: string;
    name: string;
    namePh: string;
    email: string;
    emailPh: string;
    org: string;
    orgPh: string;
    message: string;
    messagePh: string;
    send: string;
    gmail: string;
    close: string;
    sending: string;
    success: string;
    error: string;
    subject: string;
    autoresponse: string;
    privacyPrefix: string;
    privacyLink: string;
    privacyHref: string;
    required: string;
    invalidEmail: string;
    privacyRequired: string;
  };
  footer: {
    tagline: string;
    copyright: string;
    marks: string;
  };
  privacy: {
    meta: { title: string; description: string };
    title: string;
    updated: string;
    intro: string;
    sections: { heading: string; body: string }[];
    back: string;
  };
}
