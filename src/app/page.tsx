import HeroSection from './components/HeroSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import FinalSection from './components/FinalSection'
import BackToTop from './components/BackToTop'
import Gear from './components/Gear'

export default function Home() {
  return (
    <main>
       <div className="[@media(min-width:1150px)]:hidden fixed inset-0 bg-dark text-white flex flex-col items-center justify-center z-[1000] p-6">
        <h1 className="text-3xl font-bold mb-4 text-gold">Site Not Available on Smaller Screens Yet</h1>
        <p className="text-center text-lg">
          Still working on views for smaller screens. Please visit from a laptop or desktop!
        </p>
      </div>
      <div className="hidden [@media(min-width:1150px)]:block">
        <Gear />
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <FinalSection />
        <BackToTop />
      </div>
    </main>
  )
}