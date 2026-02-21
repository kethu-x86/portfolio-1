import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/projects'

const colorStyles = {
    blue: {
        icon: 'text-blue-400',
        glow: 'hover:shadow-blue-500/20',
        border: 'hover:border-blue-500/30',
        badge: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
        headerBg: 'from-blue-500/15 to-blue-500/5',
    },
    purple: {
        icon: 'text-purple-400',
        glow: 'hover:shadow-purple-500/20',
        border: 'hover:border-purple-500/30',
        badge: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
        headerBg: 'from-purple-500/15 to-purple-500/5',
    },
    green: {
        icon: 'text-green-400',
        glow: 'hover:shadow-green-500/20',
        border: 'hover:border-green-500/30',
        badge: 'bg-green-500/10 text-green-300 border-green-500/20',
        headerBg: 'from-green-500/15 to-green-500/5',
    },
}

export default function Skills() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="skills" ref={ref} className="section-padding">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3 mb-12"
                >
                    <span className="text-xs font-mono text-[#A1A1A1] tracking-widest uppercase">04 —</span>
                    <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white">Technology</h2>
                </motion.div>

                {/* Skill Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {skills.map((skill, i) => {
                        const styles = colorStyles[skill.color]
                        return (
                            <motion.div
                                key={skill.id}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
                                whileHover={{ scale: 1.03, y: -4 }}
                                className={`glass rounded-2xl overflow-hidden border border-white/5 ${styles.border} transition-all duration-300 hover:shadow-lg ${styles.glow} group`}
                            >
                                {/* Card header */}
                                <div className={`bg-gradient-to-br ${styles.headerBg} p-6 border-b border-white/5`}>
                                    <div className="flex items-center gap-3">
                                        <span className={`text-3xl ${styles.icon}`}>{skill.icon}</span>
                                        <h3 className="font-poppins font-bold text-white text-sm leading-tight">
                                            {skill.category}
                                        </h3>
                                    </div>
                                </div>

                                {/* Skill tags */}
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2">
                                        {skill.items.map((item) => (
                                            <motion.span
                                                key={item}
                                                whileHover={{ scale: 1.08 }}
                                                className={`text-xs px-3 py-1.5 rounded-full border font-mono cursor-default ${styles.badge}`}
                                            >
                                                {item}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Bottom note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                    className="text-center text-[#555] text-xs font-mono mt-10 tracking-wide"
                >
                    Always learning. Always building.
                </motion.p>
            </div>
        </section>
    )
}
