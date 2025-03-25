import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image src="/profile.JPEG" alt="Profile" fill className="object-cover" />
            </div>
          </div>
          <div>
            <p className="text-lg mb-6">
              I'm a passionate data analyst with 2+ years of experience transforming raw data into meaningful insights.
              My expertise lies in statistical analysis, data visualization, and developing predictive models that help
              businesses make informed decisions.
            </p>
            <p className="text-lg mb-6">
              With a background in management information systems, expertise spans financial analytics, healthcare data, and business intelligence.
              I'm particularly interested in machine learning applications and creating interactive dashboards that make data accessible to all stakeholders.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Card className="w-32">
                <CardContent className="p-4 text-center">
                  <p className="text-3xl font-bold text-primary">2+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
              <Card className="w-32">
                <CardContent className="p-4 text-center">
                  <p className="text-3xl font-bold text-primary">20+</p>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8">
              <Button asChild>
                <a href="/Vineeth_Adapa.pdf" download>
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

