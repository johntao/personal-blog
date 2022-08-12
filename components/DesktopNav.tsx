import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import ThemeSwitch from './ThemeSwitch'
import Link from './Link'
import { useState, useEffect } from 'react'

const throttle = (callback, limit: number) => {
  let timeoutHandler = null;
  return () => {
    if (timeoutHandler == null) {
      timeoutHandler = setTimeout(() => {
        callback();
        timeoutHandler = null;
      }, limit);
    }
  };
};

const DesktopNav = ({ onToggleNav }) => {
  const [ isScrollDown, setIsScrollDown ] = useState(false)
  useEffect(() => {
    let lastScrollPosition = window.pageYOffset;
    const handleScroll = () => { 
      let currentScrollPosition = Math.max(window.pageYOffset, 0);
      if (currentScrollPosition > lastScrollPosition)
        setIsScrollDown(true)
      else
        setIsScrollDown(false)
      lastScrollPosition = currentScrollPosition;
    }
    window.addEventListener('scroll', throttle(handleScroll, 250))
    return () => {
      window.removeEventListener('scroll', throttle(handleScroll, 250))
    }
  }, [])

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-40 border-b border-gray-200 bg-opacity-30 py-2 backdrop-blur-lg backdrop-filter dark:border-gray-700 animated ${
        isScrollDown ? 'slideOutDown' : 'slideInUp'
      }`}
      >
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            {/* <div className="mr-3">
              <Logo />
            </div> */}
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
        <div className="flex items-center text-base leading-5">
          <div className="hidden sm:block">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="rounded py-1 px-2 font-medium text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <ThemeSwitch />
          <button
            className="ml-2 mr-1 h-8 w-8 rounded sm:hidden"
            type="button"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-gray-900 dark:text-gray-100"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default DesktopNav
