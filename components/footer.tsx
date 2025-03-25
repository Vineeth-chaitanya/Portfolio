import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-12 bg-muted/30">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="text-xl font-bold">
            DataAnalyst<span className="text-primary">.io</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            Transforming data into actionable insights and compelling visualizations that drive business decisions.
          </p>
          <div className="mt-4 flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium">Quick Links</h3>
          <nav className="mt-4 flex flex-col space-y-2">
            <Link href="#about" className="text-sm text-muted-foreground hover:text-primary">
              About
            </Link>
            <Link href="#experience" className="text-sm text-muted-foreground hover:text-primary">
              Experience
            </Link>
            <Link href="#projects" className="text-sm text-muted-foreground hover:text-primary">
              Projects
            </Link>
            <Link href="#skills" className="text-sm text-muted-foreground hover:text-primary">
              Skills
            </Link>
            <Link href="#certifications" className="text-sm text-muted-foreground hover:text-primary">
              Certifications
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>

        <div>
          <h3 className="text-sm font-medium">Resources</h3>
          <nav className="mt-4 flex flex-col space-y-2">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Blog
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Case Studies
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Data Visualization Tips
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Analytics Resources
            </Link>
          </nav>
        </div>

        <div>
          <h3 className="text-sm font-medium">Legal</h3>
          <nav className="mt-4 flex flex-col space-y-2">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Cookie Policy
            </Link>
          </nav>
        </div>
      </div>

      <div className="container mt-8 border-t pt-8">
        <p className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} DataAnalyst.io. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

