import Link from 'next/link';
import { Button } from './ui/button';
import { HomeIcon, Sprout } from 'lucide-react';
import ModeToggle from './ModeToggle';

function Navbar() {
  return (
    <nav className="w-full sticky top-0 bg-background/95 border-b backdrop-blur supports-[backdrop-filter]:bg-background/65 z-50">
      <div className="max-w-7xl px-4 mx-auto">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl text-primary font-bold font-mono tracking-wider"
            >
              🌱Plantventory
            </Link>
          </div>

          {/* Navbar Component */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link href="/plants">
                <Sprout className="size-4" />
                <span className="hidden lg:inline">Plants</span>
              </Link>
            </Button>
            <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link href="/">
                <HomeIcon className="size-4" />
                <span className="hidden lg:inline">Home</span>
              </Link>
            </Button>

            {/* Theme Toggle */}
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
