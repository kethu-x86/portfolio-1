import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
    const handleScroll = (e, href) => {
        e.preventDefault()
        const lenis = window.__lenis
        if (lenis) {
            lenis.scrollTo(href, { offset: -80, duration: 1.2 })
        } else {
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
        >
            {/* Background glow orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-green-500/5 blur-3xl pointer-events-none" />

            <motion.div
                className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Eyebrow label */}
                <motion.div variants={itemVariants}>
                    <span className="inline-block px-4 py-1.5 text-xs font-mono text-blue-400 border border-blue-500/30 rounded-full bg-blue-500/5 tracking-widest uppercase">
                        Available for opportunities
                    </span>
                </motion.div>

                {/* Main heading */}
                <motion.h1
                    variants={itemVariants}
                    className="text-6xl md:text-8xl font-poppins font-extrabold leading-none tracking-tight"
                >
                    <span className="gradient-text">DEEPAK P V</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-[#A1A1A1] max-w-xl leading-relaxed font-light"
                >
                    I build{' '}
                    <span className="text-white font-medium">scalable</span> and{' '}
                    <span className="text-white font-medium">efficient</span> web systems.
                    <br />
                    <span className="text-sm text-[#666] mt-1 block font-mono">Code • Muscle • Meaning</span>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mt-2">
                    <motion.a
                        href="#projects"
                        onClick={(e) => handleScroll(e, '#projects')}
                        id="hero-view-work"
                        className="relative px-8 py-3 rounded-full font-semibold text-sm text-white overflow-hidden group"
                        style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <span className="relative z-10">View Work</span>
                        <motion.span
                            className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                    </motion.a>

                    <motion.a
                        href="#contact"
                        onClick={(e) => handleScroll(e, '#contact')}
                        id="hero-contact"
                        className="px-8 py-3 rounded-full font-semibold text-sm text-white border border-white/15 hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Contact Me
                    </motion.a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    variants={itemVariants}
                    className="mt-12 flex flex-col items-center gap-2 text-[#A1A1A1] cursor-pointer"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    onClick={(e) => handleScroll(e, '#about')}
                >
                    <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    )
}
