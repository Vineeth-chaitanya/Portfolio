import { Award, Calendar, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CertificationsSection() {
  const certifications = [
    {
      id: 1,
      name: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      date: "2022",
      description:
        "Comprehensive data analytics program covering data cleaning, analysis, visualization, and R programming.",
      link: "#",
    },
    {
      id: 2,
      name: "Microsoft Certified: Data Analyst Associate",
      issuer: "Microsoft",
      date: "2021",
      description:
        "Certification validating skills in preparing, modeling, visualizing data, and deploying Power BI solutions.",
      link: "#",
    },
    {
      id: 3,
      name: "Tableau Desktop Specialist",
      issuer: "Tableau",
      date: "2020",
      description:
        "Certification demonstrating proficiency in connecting to data, creating visualizations, and designing dashboards.",
      link: "#",
    },
    {
      id: 4,
      name: "Machine Learning Specialization",
      issuer: "Stanford University (Coursera)",
      date: "2019",
      description: "Specialization covering machine learning algorithms, best practices, and Python implementation.",
      link: "#",
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-center">
          <span className="text-primary">Certifications</span> & Education
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Professional certifications and educational qualifications that have enhanced my data analysis expertise.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <Card key={cert.id} className="group hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Award className="h-6 w-6 text-primary mb-2" />
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {cert.date}
                  </div>
                </div>
                <CardTitle className="text-lg">{cert.name}</CardTitle>
                <CardDescription>{cert.issuer}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </CardContent>
              <CardFooter>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary flex items-center hover:underline"
                >
                  View Certificate
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-6">Education</h3>
          <Card>
            <CardHeader>
              <CardTitle>Masters of Science in Information Systems</CardTitle>
              <CardDescription>University of Maryland Baltimore County, 2023-2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Specialized in statistical modeling and machine learning applications. Graduated with honors and
                completed a thesis on predictive analytics in healthcare outcomes.
              </p>
              <div className="mt-4">
                <h4 className="font-medium mb-2">Key Coursework:</h4>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1 list-disc pl-5">
                  <li>Advanced Database Systems</li>
                  <li>Machine Learning Algorithms</li>
                  <li>Data Visualization Techniques</li>
                  <li>Big Data Technologies</li>
                  <li>Predictive Modeling</li>
                  <li>Data Mining</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Bachelor of Science in Electrical and Electronics Engineering</CardTitle>
              <CardDescription>Jewaharlal Nehru Technological University, 2018-2022</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Developed expertise in signal processing, control systems, circuit design and mathematical modeling, with a focus on problem-solving and system optimization.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

