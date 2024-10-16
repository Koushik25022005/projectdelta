import { LandingContent } from "@/components/landingcontent"
import { LandingHero } from "@/components/landinghero"
import { LandingNavbar } from "@/components/landingnavbar"


const LandingPage = () => {
  return (
    <>
     <div className='h-full'>
      <LandingNavbar/>
      <LandingHero/>
   </div>
   <footer>
    <LandingContent/>
   </footer>
    </>
  
   
  )
}

export default LandingPage
