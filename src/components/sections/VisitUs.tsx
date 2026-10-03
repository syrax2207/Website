import React from 'react';
import { Clock, MapPin, Mail, Sparkles, Sun, Bike, Laptop, HeartHandshake } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { businessData } from '../../data/business';

export const VisitUs: React.FC = () => {
  return (
    <Section id="visit" background="oat" className="scroll-mt-20">
      <Container size="wide">
        <SectionHeading
          align="center"
          eyebrow="Plan Your Visit"
          title="Visit Bean &amp; Bite"
          subtitle="We look forward to welcoming you into our warm, neighbourhood space for honest coffee, fresh bakes, and peaceful mornings."
        />

        {/* 3 Core Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
          {/* Card 1: Hours */}
          <div className="bg-cream rounded-2xl p-6 sm:p-8 border border-oat shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-oat flex items-center justify-center text-coffee mb-5">
                <Clock className="w-6 h-6" aria-hidden="true" />
              </div>

              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="font-serif text-xl font-bold text-espresso">
                  Opening Hours
                </h3>
                <Badge variant="outline" size="sm">
                  Draft Hours
                </Badge>
              </div>

              <p className="font-sans text-xs text-espresso/70 mb-5">
                Our intended weekly schedule for morning roasts and fresh bakes.
              </p>

              <div className="space-y-3 font-sans text-sm border-t border-oat/70 pt-4">
                {businessData.schedule.map((slot) => (
                  <div key={slot.days} className="flex justify-between items-center py-1">
                    <span className="font-medium text-espresso">{slot.days}</span>
                    <span className="text-coffee font-semibold">{slot.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-oat/70 text-[11px] text-espresso/60 italic font-sans">
              * Final weekly hours and holiday schedules will be confirmed prior to opening.
            </div>
          </div>

          {/* Card 2: Location */}
          <div className="bg-cream rounded-2xl p-6 sm:p-8 border border-oat shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-oat flex items-center justify-center text-coffee mb-5">
                <MapPin className="w-6 h-6" aria-hidden="true" />
              </div>

              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="font-serif text-xl font-bold text-espresso">
                  Location
                </h3>
                <Badge variant="sage" size="sm">
                  Coming Soon
                </Badge>
              </div>

              <p className="font-sans text-xs text-espresso/70 mb-5">
                Situated in the heart of the neighbourhood.
              </p>

              <div className="space-y-1.5 font-sans text-sm border-t border-oat/70 pt-4 text-espresso/85">
                <p className="font-medium text-espresso">
                  {businessData.location.address}
                </p>
                <p>{businessData.location.district}</p>
                <p>{businessData.location.cityStateZip}</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-oat/70 text-[11px] text-espresso/60 italic font-sans">
              * Verified transit, walking directions, and live maps will be published upon launch.
            </div>
          </div>

          {/* Card 3: Contact & Inquiries */}
          <div className="bg-cream rounded-2xl p-6 sm:p-8 border border-oat shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-oat flex items-center justify-center text-coffee mb-5">
                <Mail className="w-6 h-6" aria-hidden="true" />
              </div>

              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="font-serif text-xl font-bold text-espresso">
                  Get In Touch
                </h3>
                <Badge variant="default" size="sm">
                  Preview
                </Badge>
              </div>

              <p className="font-sans text-xs text-espresso/70 mb-5">
                For community questions, supplier connections, and bakery updates.
              </p>

              <div className="space-y-3 font-sans text-sm border-t border-oat/70 pt-4">
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-espresso/50 font-semibold mb-0.5">
                    Email Address (Demo)
                  </span>
                  <span className="font-medium text-espresso select-all">
                    {businessData.contact.email}
                  </span>
                </div>

                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-espresso/50 font-semibold mb-0.5">
                    Phone (Draft Demo)
                  </span>
                  <span className="font-medium text-espresso/80">
                    {businessData.contact.phone}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-oat/70 text-[11px] text-espresso/60 italic font-sans">
              * Live phone and direct email links are disabled until confirmed by the owner.
            </div>
          </div>
        </div>

        {/* Neighbourhood Café Amenities */}
        <div className="max-w-5xl mx-auto bg-cream rounded-2xl p-6 sm:p-8 border border-oat shadow-xs mb-10">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="font-sans text-xs uppercase tracking-wider text-coffee font-semibold block mb-1">
              Neighbourhood Amenities
            </span>
            <h4 className="font-serif text-xl font-bold text-espresso">
              Designed For Your Daily Routine
            </h4>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-xl bg-oat/40 border border-oat flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-cream text-coffee flex items-center justify-center mb-2.5 shadow-2xs">
                <Laptop className="w-4.5 h-4.5" />
              </div>
              <span className="font-serif text-sm font-bold text-espresso block mb-0.5">
                Quiet Work Desks
              </span>
              <span className="font-sans text-[11px] text-espresso/70">
                Comfortable seating &amp; natural daylight
              </span>
            </div>

            <div className="p-4 rounded-xl bg-oat/40 border border-oat flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-cream text-coffee flex items-center justify-center mb-2.5 shadow-2xs">
                <Sun className="w-4.5 h-4.5" />
              </div>
              <span className="font-serif text-sm font-bold text-espresso block mb-0.5">
                Outdoor Patio
              </span>
              <span className="font-sans text-[11px] text-espresso/70">
                Breezy morning sidewalk tables
              </span>
            </div>

            <div className="p-4 rounded-xl bg-oat/40 border border-oat flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-cream text-coffee flex items-center justify-center mb-2.5 shadow-2xs">
                <Bike className="w-4.5 h-4.5" />
              </div>
              <span className="font-serif text-sm font-bold text-espresso block mb-0.5">
                Bike Racks
              </span>
              <span className="font-sans text-[11px] text-espresso/70">
                Easy cycle access for morning commuters
              </span>
            </div>

            <div className="p-4 rounded-xl bg-oat/40 border border-oat flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-cream text-coffee flex items-center justify-center mb-2.5 shadow-2xs">
                <HeartHandshake className="w-4.5 h-4.5" />
              </div>
              <span className="font-serif text-sm font-bold text-espresso block mb-0.5">
                Neighbourhood Vibe
              </span>
              <span className="font-sans text-[11px] text-espresso/70">
                Community board &amp; friendly conversations
              </span>
            </div>
          </div>
        </div>

        {/* Grand Opening Banner */}
        <div className="max-w-3xl mx-auto bg-cream/90 rounded-2xl p-5 sm:p-6 border border-oat text-center shadow-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-oat text-coffee text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Grand Opening Preview</span>
          </div>
          <p className="font-serif text-lg font-bold text-espresso mb-1">
            Official Location &amp; Visiting Information Coming Soon
          </p>
          <p className="font-sans text-sm text-espresso/75 max-w-xl mx-auto">
            We are finalising our space, setting up our baking ovens, and dialing in our espresso beans.
            Full transit guides, confirmed opening dates, and online preorders will be shared soon.
          </p>
        </div>
      </Container>
    </Section>
  );
};
