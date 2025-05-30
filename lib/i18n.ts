import { create } from 'zustand';

export type Language = 'en' | 'bn';

type TranslationKey =
  | 'nav.home'
  | 'nav.services'
  | 'nav.process'
  | 'nav.portfolio'
  | 'nav.testimonials'
  | 'nav.contact'
  | 'hero.title1'
  | 'hero.title2'
  | 'hero.subtitle'
  | 'hero.cta'
  | 'about.title'
  | 'about.subtitle'
  | 'about.point1'
  | 'about.point2'
  | 'about.point3'
  | 'about.point4'
  | 'services.title'
  | 'services.subtitle'
  | 'services.service1.title'
  | 'services.service1.description'
  | 'services.service2.title'
  | 'services.service2.description'
  | 'services.service3.title'
  | 'services.service3.description'
  | 'services.service4.title'
  | 'services.service4.description'
  | 'process.title'
  | 'process.subtitle'
  | 'process.step1.title'
  | 'process.step1.description'
  | 'process.step2.title'
  | 'process.step2.description'
  | 'process.step3.title'
  | 'process.step3.description'
  | 'process.step4.title'
  | 'process.step4.description'
  | 'portfolio.title'
  | 'portfolio.subtitle'
  | 'portfolio.case1.title'
  | 'portfolio.case1.description'
  | 'portfolio.case1.result'
  | 'portfolio.case2.title'
  | 'portfolio.case2.description'
  | 'portfolio.case2.result'
  | 'portfolio.case3.title'
  | 'portfolio.case3.description'
  | 'portfolio.case3.result'
  | 'testimonials.title'
  | 'testimonials.subtitle'
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.formName'
  | 'contact.formEmail'
  | 'contact.formPhone'
  | 'contact.formCompany'
  | 'contact.formService'
  | 'contact.formMessage'
  | 'contact.formSubmit'
  | 'footer.copyright';

// Translations
const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.process': 'Process',
    'nav.portfolio': 'Portfolio',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',

    'hero.title1': 'Grow Your Business with',
    'hero.title2': 'Expert Digital Marketing Solutions',
    'hero.subtitle':
      'We help brands increase visibility, generate leads, and drive sales through data-driven strategies.',
    'hero.cta': 'Get A Free Consultation',

    'about.title': 'Why Partner With Us?',
    'about.subtitle':
      'We are a full-service digital marketing agency dedicated to delivering measurable results.',
    'about.point1': 'Results-Driven Campaigns',
    'about.point2': 'Transparent Reporting',
    'about.point3': 'Dedicated Account Management',
    'about.point4': 'ROI-Focused Strategies',

    'services.title': 'Our Digital Marketing Services',
    'services.subtitle':
      'Comprehensive solutions tailored to your business needs',
    'services.service1.title': 'Social Media Marketing',
    'services.service1.description':
      'We create engaging content and targeted campaigns across platforms like Facebook, Instagram, LinkedIn, and more to build your community and drive conversions.',
    'services.service2.title': 'Email Marketing',
    'services.service2.description':
      'From crafting compelling newsletters to automated drip campaigns, we help you nurture leads and turn them into loyal customers.',
    'services.service3.title': 'Lead Generation',
    'services.service3.description':
      'We deploy multi-channel strategies to attract high-quality leads that are ready to convert, using tactics like PPC, content marketing, and landing page optimization.',
    'services.service4.title': 'Search Engine Optimization',
    'services.service4.description':
      'Improve your organic visibility and rank higher on search engines with our comprehensive on-page, off-page, and technical SEO services.',

    'process.title': 'Our 4-Step Process',
    'process.subtitle': 'A proven approach to digital marketing success',
    'process.step1.title': 'Discovery & Strategy',
    'process.step1.description':
      'We start by understanding your business, goals, and challenges to create a tailored strategy.',
    'process.step2.title': 'Implementation',
    'process.step2.description':
      'Our team executes the plan using cutting-edge tools and techniques.',
    'process.step3.title': 'Optimization & Testing',
    'process.step3.description':
      'We continuously monitor and tweak campaigns for peak performance.',
    'process.step4.title': 'Reporting & Scaling',
    'process.step4.description':
      'You receive transparent reports, and we scale what works to maximize ROI.',

    'portfolio.title': 'Success Stories',
    'portfolio.subtitle': 'Real results for real businesses',
    'portfolio.case1.title': 'E-commerce Brand',
    'portfolio.case1.description':
      'Comprehensive social media strategy with targeted ads',
    'portfolio.case1.result': '150% Increase in Sales',
    'portfolio.case2.title': 'B2B Service Provider',
    'portfolio.case2.description':
      'Lead generation campaign with content marketing',
    'portfolio.case2.result': '200+ Qualified Leads Per Month',
    'portfolio.case3.title': 'Local Business',
    'portfolio.case3.description': 'SEO and local search optimization',
    'portfolio.case3.result': '300% Boost in Website Traffic',

    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': "Don't just take our word for it",

    'contact.title': 'Ready to Grow Your Business?',
    'contact.subtitle': "Let's discuss how we can help you achieve your goals.",
    'contact.formName': 'Name',
    'contact.formEmail': 'Email',
    'contact.formPhone': 'Phone',
    'contact.formCompany': 'Company',
    'contact.formService': 'Select Service',
    'contact.formMessage': 'Message',
    'contact.formSubmit': 'Send Message',

    'footer.copyright': '© 2025 Ads Premier. All Rights Reserved.',
  },
  bn: {
    'nav.home': 'হোম',
    'nav.services': 'সেবাসমূহ',
    'nav.process': 'প্রক্রিয়া',
    'nav.portfolio': 'পোর্টফোলিও',
    'nav.testimonials': 'প্রশংসাপত্র',
    'nav.contact': 'যোগাযোগ',

    'hero.title1': 'আপনার ব্যবসা বৃদ্ধি করুন',
    'hero.title2': 'এক্সপার্ট ডিজিটাল মার্কেটিং সমাধানের মাধ্যমে',
    'hero.subtitle':
      'আমরা ডাটা-চালিত কৌশলের মাধ্যমে ব্র্যান্ডের দৃশ্যমানতা বাড়াতে, লিড জেনারেট করতে এবং বিক্রয় বৃদ্ধি করতে সাহায্য করি।',
    'hero.cta': 'আপনার বিনামূল্যে কৌশল সেশন পান',

    'about.title': 'কেন আমাদের সাথে অংশীদার হবেন?',
    'about.subtitle':
      'আমরা একটি পূর্ণ-সেবা ডিজিটাল মার্কেটিং এজেন্সি যা পরিমাপযোগ্য ফলাফল দেওয়ার জন্য নিবেদিত।',
    'about.point1': 'ফলাফল-চালিত প্রচারণা',
    'about.point2': 'স্বচ্ছ রিপোর্টিং',
    'about.point3': 'সমর্পিত অ্যাকাউন্ট ম্যানেজমেন্ট',
    'about.point4': 'ROI-কেন্দ্রিক কৌশল',

    'services.title': 'আমাদের ডিজিটাল মার্কেটিং সেবাসমূহ',
    'services.subtitle': 'আপনার ব্যবসার প্রয়োজন অনুযায়ী ব্যাপক সমাধান',
    'services.service1.title': 'সোশ্যাল মিডিয়া মার্কেটিং',
    'services.service1.description':
      'আমরা আপনার কমিউনিটি তৈরি করতে এবং রূপান্তর চালাতে Facebook, Instagram, LinkedIn ইত্যাদি প্ল্যাটফর্মে আকর্ষণীয় কন্টেন্ট এবং টার্গেটেড ক্যাম্পেইন তৈরি করি।',
    'services.service2.title': 'ইমেইল মার্কেটিং',
    'services.service2.description':
      'আকর্ষক নিউজলেটার থেকে শুরু করে অটোমেটেড ড্রিপ ক্যাম্পেইন পর্যন্ত, আমরা আপনাকে লিড পরিচর্যা করতে এবং তাদের অনুগত গ্রাহকে পরিণত করতে সাহায্য করি।',
    'services.service3.title': 'লিড জেনারেশন',
    'services.service3.description':
      'আমরা PPC, কন্টেন্ট মার্কেটিং এবং ল্যান্ডিং পেজ অপ্টিমাইজেশনের মতো কৌশল ব্যবহার করে, রূপান্তর করতে প্রস্তুত উচ্চ-মানের লিড আকর্ষণ করতে মাল্টি-চ্যানেল কৌশল প্রয়োগ করি।',
    'services.service4.title': 'সার্চ ইঞ্জিন অপ্টিমাইজেশন',
    'services.service4.description':
      'আমাদের ব্যাপক অন-পেজ, অফ-পেজ এবং টেকনিক্যাল SEO সেবার সাথে আপনার অর্গানিক দৃশ্যমানতা উন্নত করুন এবং সার্চ ইঞ্জিনে উচ্চতর র্যাঙ্ক করুন।',

    'process.title': 'আমাদের ৪-ধাপ প্রক্রিয়া',
    'process.subtitle': 'ডিজিটাল মার্কেটিং সাফল্যের জন্য একটি প্রমাণিত পদ্ধতি',
    'process.step1.title': 'আবিষ্কার এবং কৌশল',
    'process.step1.description':
      'আমরা একটি তৈলিত কৌশল তৈরি করতে আপনার ব্যবসা, লক্ষ্য এবং চ্যালেঞ্জগুলি বোঝার মাধ্যমে শুরু করি।',
    'process.step2.title': 'বাস্তবায়ন',
    'process.step2.description':
      'আমাদের দল অত্যাধুনিক টুল এবং কৌশল ব্যবহার করে পরিকল্পনা কার্যকর করে।',
    'process.step3.title': 'অপ্টিমাইজেশন এবং টেস্টিং',
    'process.step3.description':
      'আমরা সর্বোচ্চ পারফরম্যান্সের জন্য ক্যাম্পেইন নিরন্তর মনিটর এবং পরিবর্তন করি।',
    'process.step4.title': 'রিপোর্টিং এবং স্কেলিং',
    'process.step4.description':
      'আপনি স্বচ্ছ রিপোর্ট পান, এবং আমরা ROI সর্বাধিক করতে যা কাজ করে তা স্কেল করি।',

    'portfolio.title': 'সফলতার গল্প',
    'portfolio.subtitle': 'বাস্তব ব্যবসার জন্য বাস্তব ফলাফল',
    'portfolio.case1.title': 'ই-কমার্স ব্র্যান্ড',
    'portfolio.case1.description':
      'টার্গেটেড বিজ্ঞাপন সহ ব্যাপক সোশ্যাল মিডিয়া কৌশল',
    'portfolio.case1.result': 'বিক্রয়ে ১৫০% বৃদ্ধি',
    'portfolio.case2.title': 'B2B সেবা প্রদানকারী',
    'portfolio.case2.description':
      'কন্টেন্ট মার্কেটিং সহ লিড জেনারেশন ক্যাম্পেইন',
    'portfolio.case2.result': 'প্রতি মাসে ২০০+ যোগ্য লিড',
    'portfolio.case3.title': 'স্থানীয় ব্যবসা',
    'portfolio.case3.description': 'SEO এবং স্থানীয় সার্চ অপ্টিমাইজেশন',
    'portfolio.case3.result': 'ওয়েবসাইট ট্রাফিকে ৩০০% বৃদ্ধি',

    'testimonials.title': 'আমাদের ক্লায়েন্টরা কী বলেন',
    'testimonials.subtitle': 'শুধু আমাদের কথা বিশ্বাস করবেন না',

    'contact.title': 'আপনার ব্যবসা বাড়াতে প্রস্তুত?',
    'contact.subtitle':
      'আসুন আলোচনা করি কিভাবে আমরা আপনাকে আপনার লক্ষ্য অর্জনে সাহায্য করতে পারি।',
    'contact.formName': 'নাম',
    'contact.formEmail': 'ইমেইল',
    'contact.formPhone': 'ফোন',
    'contact.formCompany': 'কোম্পানি',
    'contact.formService': 'সেবা নির্বাচন করুন',
    'contact.formMessage': 'বার্তা',
    'contact.formSubmit': 'বার্তা পাঠান',

    'footer.copyright':
      '© ২০২৫ ডিজিটাল মার্কেটিং এজেন্সি। সর্বস্বত্ব সংরক্ষিত।',
  },
};

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
}

// Create language store
export const useLanguage = create<LanguageState>((set, get) => ({
  language: 'en',
  setLanguage: (language) => set({ language }),
  t: (key: TranslationKey) => {
    const { language } = get();
    return translations[language][key];
  },
}));
