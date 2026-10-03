import { BusinessProfile } from '../types';

/**
 * Bean & Bite Central Business Data
 *
 * NOTE: Contact, address, hours, and timezone values below are unverified draft
 * values pending confirmation by the business owner (Alex Rivera).
 * Per PRD and AGENTS.md, all live interactive capabilities (click-to-call,
 * WhatsApp messaging, map navigation, and dynamic open/closed calculations)
 * are disabled until verified data is provided.
 */
export const businessData: BusinessProfile = {
  name: 'Bean & Bite Coffee & Bakery',
  owner: 'Alex Rivera',
  role: 'Founder',
  tagline: 'Fresh Bakes, Honest Beans, Warm Conversations.',
  positioning: 'Artisanal neighbourhood coffee shop and bakery',
  concept:
    'Specialising in single-origin pour-over coffees, handcrafted espresso drinks, and freshly baked sourdough pastries and cakes each morning.',
  contact: {
    phone: '+1 (555) 019-2834',
    isPhoneVerified: false,
    email: 'hello@beanandbitecafe.com',
    isEmailVerified: false,
    hasWhatsApp: false,
    isWhatsAppVerified: false,
  },
  location: {
    address: '142 Maplewood Avenue',
    district: 'Downtown District',
    cityStateZip: 'Cityville, NY 10001',
    timezone: null, // Unconfirmed timezone; cannot infer from placeholder Cityville address
    isAddressVerified: false,
    isTimezoneVerified: false,
  },
  schedule: [
    {
      days: 'Monday – Friday',
      hours: '7:00 AM – 6:00 PM',
      isConfirmed: false,
    },
    {
      days: 'Saturday – Sunday',
      hours: '8:00 AM – 5:00 PM',
      isConfirmed: false,
    },
  ],
  features: {
    // Safety guardrails: Keep interactive links and maps disabled until verified
    enableLiveCalling: false,
    enableLiveWhatsApp: false,
    enableLiveEmail: false,
    enableDirectionsLink: false,
    enableMapEmbed: false,
    enableRealtimeOpenStatus: false,
  },
};
