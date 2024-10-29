import Button from "@components/Button"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"

interface Props {
  children: React.ReactNode
}

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Installation",
    href: "/installation",
  },
  {
    title: "Components",
    href: "/component",
  },
  {
    title: "About",
    href: "/about",
  },
]

const Header = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/15 py-4 md:border-none">
        <div className="absolute inset-0 -z-10 backdrop-blur-md md:hidden"></div>
        <div className="container">
          <div className="relative mx-auto flex max-w-2xl items-center justify-around rounded-xl border-white/15 md:border md:p-2.5 md:backdrop-blur">
            <div className="absolute inset-0 -z-10 hidden backdrop-blur-md md:block"></div>
            <div>
              <div className="inline-flex size-12 items-center justify-center rounded-lg shadow-[0px_0px_12px_#0461D1]">
                <img
                  src="/logo-dtsky.webp"
                  className="size-10"
                  alt="DTSky Logo"
                />
              </div>
            </div>

            {children}

            <div className="flex items-center gap-4">
              <Button text="Get started" href="/installation" />

              <div
                className="relative size-10 md:hidden"
                onClick={() => setIsOpen((curr) => !curr)}
              >
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      "h-0.5 w-5 -translate-y-1 bg-zinc-300 transition-all duration-500",
                      isOpen && "translate-y-0 rotate-45",
                    )}
                  ></div>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      "h-0.5 w-5 translate-y-1 bg-zinc-300 transition-all duration-500",
                      isOpen && "translate-y-0 -rotate-45",
                    )}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed left-0 top-0 z-30 size-full bg-[rgb(2,15,43)]"
          >
            <div className="absolute inset-2 z-0 mt-20 rounded-md bg-[rgb(4,61,135)] md:mt-24">
              <div className="flex h-full items-center justify-center">
                <nav className="flex flex-col items-center gap-12 md:gap-16">
                  {navLinks.map(({ title, href }, index) => (
                    <motion.a
                      key={`${title}-${index}`}
                      href={href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: "linear",
                        delay: 0.25 * index,
                      }}
                    >
                      <span className="font-heading text-4xl font-black text-neutral-300 transition-colors duration-300 hover:text-sky-500">
                        {title}
                      </span>
                    </motion.a>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
