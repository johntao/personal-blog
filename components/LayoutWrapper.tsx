import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'
import { ReactNode, useState } from 'react'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  const [isMobileNavVisible, setNavShow] = useState(false)
  const onToggleNav = () => setNavShow((status) => !status)

  return (
    <>
      <MobileNav isMobileNavVisible={isMobileNavVisible} onToggleNav={onToggleNav} />
      <DesktopNav onToggleNav={onToggleNav} />
      <SectionContainer>
        <div className="flex flex-col justify-between">
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
