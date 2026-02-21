import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const EMAIL = 'thedeepakpv10@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/deepak-pv-519681298'
const GITHUB = 'https://github.com/thedeepakpv'
const INSTAGRAM = 'https://www.instagram.com/thedeepakpv'

export default function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [copied, setCopied] = useState(false)

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL)
            setCopied(true)
            setTimeout(() => setCopied(false), 2500)
        } catch {
            window.location.href = `mailto:${EMAIL}`
        }
    }

    return (
        <section id="contact" ref={ref} className="section-padding">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3 mb-12"
                >
                    <span className="text-xs font-mono text-[#A1A1A1] tracking-widest uppercase">05 —</span>
                    <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white">Connect</h2>
                </motion.div>

                <div className="max-w-2xl">
                    {/* Large CTA heading */}
                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-poppins font-extrabold text-white leading-none mb-6"
                    >
                        Let's{' '}
                        <span className="gradient-text">Talk</span>
                    </motion.h3>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-[#A1A1A1] text-base leading-relaxed mb-10 max-w-md"
                    >
                        Ready to collaborate on the next breakthrough? Whether it's groundbreaking
                        technology, innovative solutions, or world-changing projects — let's build
                        the future together.
                    </motion.p>

                    {/* Email button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mb-8"
                    >
                        <motion.button
                            id="copy-email-btn"
                            onClick={copyEmail}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="group relative flex items-center gap-3 glass rounded-2xl px-6 py-4 border border-white/10 hover:border-white/25 transition-all duration-300 w-full md:w-auto"
                        >
                            <span className="text-2xl">📧</span>
                            <div className="text-left">
                                <p className="text-xs text-[#666] font-mono mb-0.5">Email</p>
                                <p className="text-white font-mono text-sm">{EMAIL}</p>
                            </div>
                            <AnimatePresence mode="wait">
                                {copied ? (
                                    <motion.span
                                        key="copied"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        className="ml-auto text-xs text-green-400 font-mono border border-green-500/20 px-2.5 py-1 rounded-full bg-green-500/10"
                                    >
                                        ✓ Copied!
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="copy"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="ml-auto text-xs text-[#666] font-mono border border-white/10 px-2.5 py-1 rounded-full group-hover:text-white group-hover:border-white/20 transition-colors"
                                    >
                                        Copy
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex items-center gap-4"
                    >
                        <span className="text-xs text-[#555] font-mono tracking-wide uppercase">Or find me on</span>
                        <div className="flex gap-3">
                            {/* LinkedIn */}
                            <motion.a
                                href={LINKEDIN}
                                target="_blank"
                                rel="noopener noreferrer"
                                id="contact-linkedin"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="glass w-11 h-11 rounded-xl flex items-center justify-center border border-white/10 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                                style={{ color: '#0077B5' }}
                                title="LinkedIn"
                            >
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </motion.a>

                            {/* GitHub */}
                            <motion.a
                                href={GITHUB}
                                target="_blank"
                                rel="noopener noreferrer"
                                id="contact-github"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="glass w-11 h-11 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/40 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 text-white"
                                title="GitHub"
                            >
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                </svg>
                            </motion.a>

                            {/* Instagram */}
                            <motion.a
                                href={INSTAGRAM}
                                target="_blank"
                                rel="noopener noreferrer"
                                id="contact-instagram"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="glass w-11 h-11 rounded-xl flex items-center justify-center border border-white/10 hover:border-pink-500/40 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
                                style={{ color: '#E1306C' }}
                                title="Instagram"
                            >
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Location */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.55 }}
                        className="mt-8 text-xs text-[#555] font-mono flex items-center gap-2"
                    >
                        <span>📍</span> Kannur, Kerala, India
                    </motion.p>
                </div>
            </div>
        </section>
    )
}
