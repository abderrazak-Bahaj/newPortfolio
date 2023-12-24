import Image from 'next/image'
import { ContactAction, ExperienceAndEducation, Hero, Services,LatestBlog,LatestProject} from '@/sections'
export default function Home() {
  return (
    <main >
      <Hero/>
      <Services/>
      <LatestBlog/>
      <ContactAction/>
      <ExperienceAndEducation/>
      <LatestProject/>
      
    </main>
  )
}
