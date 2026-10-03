export interface BusinessHours {
  readonly days: string;
  readonly hours: string;
  readonly isConfirmed: boolean;
}

export interface BusinessContact {
  readonly phone: string;
  readonly isPhoneVerified: boolean;
  readonly email: string;
  readonly isEmailVerified: boolean;
  readonly hasWhatsApp: boolean;
  readonly isWhatsAppVerified: boolean;
}

export interface BusinessLocation {
  readonly address: string;
  readonly district: string;
  readonly cityStateZip: string;
  readonly timezone: string | null;
  readonly isAddressVerified: boolean;
  readonly isTimezoneVerified: boolean;
}

export interface BusinessProfile {
  readonly name: string;
  readonly owner: string;
  readonly role: string;
  readonly tagline: string;
  readonly positioning: string;
  readonly concept: string;
  readonly contact: BusinessContact;
  readonly location: BusinessLocation;
  readonly schedule: readonly BusinessHours[];
  readonly features: {
    readonly enableLiveCalling: boolean;
    readonly enableLiveWhatsApp: boolean;
    readonly enableLiveEmail: boolean;
    readonly enableDirectionsLink: boolean;
    readonly enableMapEmbed: boolean;
    readonly enableRealtimeOpenStatus: boolean;
  };
}
