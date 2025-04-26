
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // For demo purposes, we'll assume the user is not logged in initially
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-sm z-30">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <img
            src="/x-MED-logo.png" // Replace with your logo path
            alt="Pharmacy"
            className="rounded-lg animate-fade-in w-15 h-12"
          />
        </Link>

        {!isMobile ? (
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-primary transition-colors">
              Products
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </Link>
            
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative rounded-full h-8 w-8 overflow-hidden">
                    <div className="flex h-full w-full items-center justify-center bg-primary text-white">
                      U
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <Link to="/profile">
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="outline" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </div>
            )}
          </nav>
        ) : (
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Button>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="bg-white shadow-lg absolute left-0 right-0 py-2 px-4 z-50">
          <nav className="flex flex-col space-y-4 py-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            {isLoggedIn ? (
              <>
                <Link
                  to="/profile"
                  className="text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsLoggedIn(false);
                    setIsMenuOpen(false);
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <div className="flex flex-col space-y-2">
                <Button variant="outline" asChild>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    Login
                  </Link>
                </Button>
                <Button asChild>
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                    Sign Up
                  </Link>
                </Button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
