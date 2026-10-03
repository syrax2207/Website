import React, { useState, useEffect, useRef } from 'react';
import { Coffee, Menu as MenuIcon, X } from 'lucide-react';
import { Container } from './Container';
import { Button } from '../ui/Button';

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Visit Us', href: '#visit' },
] as const;

export interface NavbarProps {
  brandName?: string;
  tagline?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  brandName = 'Bean & Bite',
  tagline = 'Coffee & Bakery',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        toggleButtonRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scrolling when mobile menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
      toggleButtonRef.current?.focus();
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-cream/95 backdrop-blur-md border-b border-oat/80 transition-colors">
      <Container size="wide">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo Treatment */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee focus-visible:ring-offset-2 rounded-lg py-1 px-1 -ml-1"
            aria-label={`${brandName} ${tagline} - Home`}
          >
            <div className="w-10 h-10 rounded-full bg-oat flex items-center justify-center text-coffee group-hover:bg-coffee group-hover:text-cream transition-colors duration-150">
              <Coffee className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-espresso leading-tight">
                {brandName}
              </span>
              <span className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-coffee leading-none">
                {tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2"
            aria-label="Primary navigation"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-sans text-sm font-medium text-espresso/80 hover:text-coffee hover:bg-oat/50 px-3.5 py-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee focus-visible:ring-offset-2"
              >
                {item.label}
              </a>
            ))}
            <div className="ml-4 pl-4 border-l border-oat">
              <Button
                variant="primary"
                size="sm"
                href="#menu"
                className="font-medium shadow-none"
              >
                View Menu
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center md:hidden">
            <button
              ref={toggleButtonRef}
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-controls="mobile-nav-dialog"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-espresso hover:text-coffee hover:bg-oat focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee focus-visible:ring-offset-2 cursor-pointer transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Drawer / Dropdown */}
      <div
        id="mobile-nav-dialog"
        ref={mobileMenuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className={`md:hidden fixed inset-x-0 top-20 bottom-0 bg-cream border-t border-oat shadow-lg p-6 flex flex-col justify-between transition-all duration-200 ease-in-out z-50 ${
          isOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-2'
        }`}
        style={{ height: 'calc(100vh - 5rem)' }}
      >
        <nav
          className="flex flex-col space-y-2 pt-2"
          aria-label="Mobile primary navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="font-serif text-xl font-semibold text-espresso hover:text-coffee py-3 px-4 rounded-xl hover:bg-oat/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="border-t border-oat pt-6 pb-8 space-y-4">
          <Button
            variant="primary"
            size="lg"
            fullWidth
            href="#menu"
            onClick={handleLinkClick}
          >
            Explore Menu
          </Button>

          <p className="text-xs text-center text-espresso/60 font-sans">
            Fresh Bakes, Honest Beans, Warm Conversations.
          </p>
        </div>
      </div>
    </header>
  );
};
