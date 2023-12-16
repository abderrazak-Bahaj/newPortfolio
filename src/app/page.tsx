import Image from 'next/image'
import { ContactAction, ExperienceAndEducation, Hero, Services } from '@/sections'

export default function Home() {
  return (
    <main >
      <Hero/>
      <Services/>
      <ContactAction/>
      <ExperienceAndEducation/>
    </main>
  )
}
