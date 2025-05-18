import { useTransform, motion } from 'framer-motion'

export default function ScrollHeader({ text, colorClass, scrollYProgress }: { text: string, colorClass: string, scrollYProgress: any }) {
    const maxWidth = text.length * 27
    const barWidth = useTransform(scrollYProgress, [0, 1], [0, maxWidth])
    return (
        <div className="absolute top-8 left-8 z-10">
          <motion.div
            className="absolute left-0 top-[50%] bg-primary h-[2.5rem] z-0"
            style={{ width: barWidth }}
          />
          <h2 className={"relative text-5xl font-heading font-bold z-11" + colorClass}>{ text }</h2>
        </div>
    )
}