import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-foreground text-background mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@locknkey.com</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold mb-4 text-primary">Connect With Us</h3>
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                >
                  <social.icon className="h-5 w-5 group-hover:text-background transition-colors" />
                </a>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm opacity-80 italic">
                "Your Vision, Our Foundation."
              </p>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Our Location
            </h3>
            <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg border border-border/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1757283088804!2d73.91467431489795!3d18.56839098740849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sViman%20Nagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LocknKey Office Location"
              ></iframe>
            </div>
            <p className="text-sm mt-2 opacity-80">
              Viman Nagar, Pune, Maharashtra
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm opacity-80">
            © 2025 LocknKey Construction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
