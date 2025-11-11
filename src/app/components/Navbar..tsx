import Link from "next/link";
import SearchBar from "./SearchaBar";
import { Bell, Home, ShoppingCart } from "lucide-react";
const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
      <Link href="/" className="flex items-center ">
        <img
          src="/logo.png"
          alt="Logo"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />

        <p className="hidden md:block text-md font-medium tracking-wider ">
          SIMPLE STORE
        </p>
      </Link>

      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href="/">
          <Home className="w-4 h-4 text-gray-600" />
        </Link>
        <Link href="/">
          <Bell className="w-4 h-4 text-gray-600" />
        </Link>
        <Link href="/">
          <ShoppingCart className="w-4 h-4 text-gray-600" />
        </Link>
        <Link href="/">sing in</Link>
      </div>
    </nav>
  );
};

export default Navbar;
