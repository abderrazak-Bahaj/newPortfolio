import Image from 'next/image'
import { ContactAction, ExperienceAndEducation, Hero, Services } from '@/sections'
import {Card} from '@/components'
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
