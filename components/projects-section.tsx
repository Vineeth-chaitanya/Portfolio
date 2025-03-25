import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Air Quality Forecasting",
      description:
        "Developed an LSTM-based deep learning model in R to accurately predict Air Quality Index (AQI) using historical pollution and meteorological data, enhancing environmental forecasting and decision-making.",
      image: "/airpollution.jpg",
      tags: ["R", "Time Series Forecasting", "ggplot2", "Shiny"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      id: 2,
      title: "Bond Yield prediction using machine learning",
      description:
        "Developed a machine learning model using Python to forecast US 10-year Treasury bond yields using macroeconomic indicators, leveraging ARIMA, LSTM, and MLP models to improve predictive accuracy by 10% and reduce RMSE by 15%.",
      image: "/bondyeild.jpg",
      tags: ["Python", "Scikit-learn", "TensorFlow/Keras", "Statsmodels"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      id: 3,
      title: "Resume Analyser using SPACY",
      description:
        "Developed an NLP-based resume parsing system using Python and Spacy, achieving 94% precision in extracting key information and enhancing candidate-job matching through automated skill analysis.",
      image: "/resume.jpg",
      tags: ["NLP", "Python", "SpaCy", "Machine Learning"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      id: 4,
      title: "Supply Chain Optimization",
      description:
        "Implemented a machine learning model to optimize supply chain operations, reducing logistics costs by 12% and improving delivery times.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "Scikit-learn", "Optimization", "Power BI"],
      demoLink: "#",
      repoLink: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          A selection of my recent data analysis and visualization projects, showcasing my skills in transforming data
          into actionable insights.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" asChild>
            <a href="https://github.com/Vineeth-chaitanya?tab=repositories" className="flex items-center gap-2">
              View All Projects
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

