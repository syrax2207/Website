import React from 'react';
import { Clock, MapPin, Mail, Sparkles } from 'lucide-react';
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

        {/* 3 Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
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
              * Final hours and holiday adjustments will be confirmed prior to opening.
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
              * Verified transit, parking guides, and live maps will be published upon launch.
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
                For general inquiries, community events, and bakery preorder updates.
              </p>

              <div className="space-y-3 font-sans text-sm border-t border-oat/70 pt-4">
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-espresso/50 font-semibold mb-0.5">
                    Email Address
                  </span>
                  <span className="font-medium text-espresso select-all">
                    {businessData.contact.email}
                  </span>
                </div>

                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-espresso/50 font-semibold mb-0.5">
                    Phone (Draft)
                  </span>
                  <span className="font-medium text-espresso/80">
                    {businessData.contact.phone}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-oat/70 text-[11px] text-espresso/60 italic font-sans">
              * Live phone and messaging channels will be activated with verified staff.
            </div>
          </div>
        </div>

        {/* Grand Opening Banner */}
        <div className="mt-10 max-w-3xl mx-auto bg-cream/90 rounded-2xl p-5 sm:p-6 border border-oat text-center shadow-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-oat text-coffee text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Grand Opening Preview</span>
          </div>
          <p className="font-serif text-lg font-bold text-espresso mb-1">
            Official Location &amp; Visiting Information Coming Soon
          </p>
          <p className="font-sans text-sm text-espresso/75 max-w-xl mx-auto">
            We are finalising our space, setting up our baking ovens, and dialing in our espresso beans.
            Full directions, confirmed opening dates, and online preorders will be shared soon.
          </p>
        </div>
      </Container>
    </Section>
  );
};
