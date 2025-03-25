"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Data Analyst & Visualization Expert"

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.15),transparent_50%)]" />
      <div className="container flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Hello, I'm <span className="text-primary">Vineeth Adapa</span>
        </h1>
        <div className="h-12 mt-4">
          <p className="text-xl md:text-2xl text-muted-foreground">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Transforming complex data into clear, actionable insights and visually compelling narratives that drive informed business decisions and unlock meaningful opportunities.
        </p>
        <div className="mt-8 flex gap-4">
          <Button asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#projects">View Projects</a>
          </Button>
        </div>
        <div className="mt-12 flex gap-6">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/Vineeth-chaitanya" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/vineeth-chaitanya-1914101b5/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          {/* <Button variant="ghost" size="icon" asChild>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </Button> */}
        </div>
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </a>
      </div>
    </section>
  )
}

