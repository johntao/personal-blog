import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = ({ isMobileNavVisible, onToggleNav }) => {

  return (
    <div
      className={`sm:hidden fixed w-full h-screen inset-0 bg-gray-200 dark:bg-gray-800 opacity-95 z-50 transition-transform transform ease-in-out duration-300 ${
        isMobileNavVisible ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button
        type="button"
        className="fixed w-8 h-8 right-4 top-4 cursor-auto focus:outline-none"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-gray-900 dark:text-gray-100"
        >
          {isMobileNavVisible ? (
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </button>
      <nav className="fixed mt-8 h-full">
        {headerNavLinks.map((link) => (
          <div key={link.title} className="px-12 py-4">
            <Link
              href={link.href}
              className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
              onClick={onToggleNav}
            >
              {link.title}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  )
}

export default MobileNav