import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.08,           // smoothness factor (0–1, lower = smoother)
            wheelMultiplier: 1,
            touchMultiplier: 1.5,
            infinite: false,
        })

        // Expose lenis globally so Navbar can use lenis.scrollTo()
        window.__lenis = lenis

        let rafId
        function raf(time) {
            lenis.raf(time)
            rafId = requestAnimationFrame(raf)
        }
        rafId = requestAnimationFrame(raf)

        return () => {
            cancelAnimationFrame(rafId)
            lenis.destroy()
            window.__lenis = null
        }
    }, [])

    return (
        <div className="bg-[#0A0A0A] min-h-screen text-white overflow-x-hidden">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}
