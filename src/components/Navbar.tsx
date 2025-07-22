import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, DollarSign, HelpCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Gallery', path: '/gallery' },
  ];

  const moreItems = [
    { name: 'Pricing', path: '/pricing', icon: DollarSign, description: 'View our rates' },
    { name: 'FAQs', path: '/faqs', icon: HelpCircle, description: 'Common questions' },
    { name: 'Why Us?', path: '/why-us', icon: Star, description: 'Our advantages' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">🏗️</div>
            <div className="text-xl font-bold text-foreground">LocknKey</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? 'text-primary' : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* More Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="text-sm font-medium text-foreground hover:text-primary flex items-center space-x-1 transition-colors"
                >
                  <span>More</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-background border border-border shadow-construction">
                {moreItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild className="group cursor-pointer">
                    <Link 
                      to={item.path}
                      className="flex items-center p-3 hover:bg-secondary transition-colors"
                    >
                      <item.icon className="mr-3 h-4 w-4 text-primary group-hover:text-construction-orange transition-colors" />
                      <div>
                        <div className={`font-medium ${isActive(item.path) ? 'text-primary' : 'text-foreground'}`}>
                          {item.name}
                        </div>
                        <div className="text-xs text-muted-foreground">{item.description}</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Call Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a 
              href="tel:+1234567890"
              className="hidden sm:flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">(123) 456-7890</span>
            </a>
            
            <Button asChild className="hidden sm:inline-flex">
              <Link to="/contact-us">Get Quote</Link>
            </Button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path) ? 'text-primary' : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {moreItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path) ? 'text-primary' : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact-us"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/contact-us') ? 'text-primary' : 'text-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <div className="pt-2 border-t border-border">
                <Button asChild className="w-full">
                  <Link to="/contact-us" onClick={() => setIsMenuOpen(false)}>
                    Get Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;