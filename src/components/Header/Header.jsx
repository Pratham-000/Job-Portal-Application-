import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../Logo/Logo';
import { useAuth } from '../../../context/AuthContext'; // update path if needed
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase'; // adjust if your firebase config path differs

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <header className="bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-sm">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {[
                  { label: 'About Us', to: '/about' },
                  { label: 'Companies', to: '/companies' },
                  { label: 'Connect', to: '/connect' },
                ].map(({ label, to }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        `relative transition-all duration-300 ease-in-out ${
                          isActive
                            ? 'text-gray-800 dark:text-white font-semibold'
                            : 'text-gray-500 dark:text-white/70'
                        }`
                      }
                    >
                      <span className="relative z-10">{label}</span>
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-800 dark:bg-white scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Auth Section */}
            <div className="flex items-center gap-4">
              {user ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-teal-700 dark:text-white">
                     {user.displayName || user.email}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="rounded-md bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-500 transition"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="sm:flex sm:gap-4">
                  <Link
                    to="/login"
                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-teal-500 transition"
                  >
                    Login
                  </Link>
                  <div className="hidden sm:flex">
                    <Link
                      to="/register"
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75 transition"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              )}

              {/* Hamburger */}
              <div className="block md:hidden">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="relative w-10 h-10 flex flex-col justify-center items-center p-2 group transition-all duration-300"
                >
                  <span
                    className={`h-0.5 w-6 bg-gray-700 dark:bg-white transition-all duration-300 transform ${
                      menuOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}
                  />
                  <span
                    className={`h-0.5 w-6 bg-gray-700 dark:bg-white my-1 transition-all duration-300 ${
                      menuOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span
                    className={`h-0.5 w-6 bg-gray-700 dark:bg-white transition-all duration-300 transform ${
                      menuOpen ? '-rotate-45 -translate-y-1.5' : ''
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden mt-2 overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-2 text-sm bg-white dark:bg-gray-900 rounded-md shadow-lg p-4 transition-all duration-300">
            {[
              { label: 'About Us', to: '/about' },
              { label: 'Companies', to: '/companies' },
              { label: 'Connect', to: '/connect' },
            ].map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className="block w-full text-left px-2 py-1 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 rounded"
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
