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
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        return () => lenis.destroy()
    }, [])

    return (
        <div className="bg-[#0A0A0A] min-h-screen text-white font-inter overflow-x-hidden">
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
