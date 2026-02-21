import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const bullets = [
    { icon: '💻', text: 'Computer Science student with a hands-on approach to learning and building.' },
    { icon: '💪', text: 'Fitness enthusiast driven by discipline, consistency, and continuous improvement.' },
    { icon: '🎯', text: 'Values clarity, growth, and purposeful living — in code and in life.' },
]

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="about" ref={ref} className="section-padding">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3 mb-12"
                >
                    <span className="text-xs font-mono text-[#A1A1A1] tracking-widest uppercase">02 —</span>
                    <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white">About</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Avatar */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="flex justify-center"
                    >
                        <div className="relative">
                            {/* Outer glow ring */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 blur-xl opacity-30 scale-110" />
                            {/* Avatar circle */}
                            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full glass flex items-center justify-center gradient-border overflow-hidden">
                                <div
                                    className="absolute inset-0 rounded-full"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(139,92,246,0.15) 50%, rgba(16,185,129,0.15) 100%)',
                                    }}
                                />
                                <span className="text-8xl select-none relative z-10">⚡</span>
                            </div>
                            {/* Floating badges */}
                            <motion.div
                                animate={{ y: [-4, 4, -4] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -top-3 -right-3 glass px-3 py-1.5 rounded-full text-xs font-mono text-blue-400 border border-blue-500/20"
                            >
                                CS Student
                            </motion.div>
                            <motion.div
                                animate={{ y: [4, -4, 4] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -bottom-3 -left-3 glass px-3 py-1.5 rounded-full text-xs font-mono text-green-400 border border-green-500/20"
                            >
                                Builder
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
                        className="space-y-6"
                    >
                        <p className="text-[#A1A1A1] text-lg leading-relaxed">
                            Hey — I'm <span className="text-white font-semibold">Deepak P V</span>, a CS undergrad
                            from Kannur, Kerala. I'm obsessed with building things that matter —
                            whether it's a mobile app, a backend system, or a clean UI.
                        </p>

                        <div className="space-y-4 mt-4">
                            {bullets.map(({ icon, text }, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                                    className="flex items-start gap-4 glass rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors"
                                >
                                    <span className="text-2xl flex-shrink-0">{icon}</span>
                                    <p className="text-[#A1A1A1] text-sm leading-relaxed">{text}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.7 }}
                            className="flex flex-wrap gap-3 pt-2"
                        >
                            {['Kannur, Kerala', 'Open to Work', 'CS Student'].map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs px-3 py-1 rounded-full border border-white/10 text-[#A1A1A1] font-mono"
                                >
                                    {tag}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
