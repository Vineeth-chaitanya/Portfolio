import { Briefcase, Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ExperienceSection() {
  const experiences = [
    {
      id: "exp1",
      company: "Thriving Elements",
      title: "Data Analyst",
      period: "2025 - Present",
      location: "Seattle, WA",
      description: [
        "Analyze and interpret key performance metrics to drive data-driven decision-making and optimize business operations.",
        "Develop interactive dashboards and reports using python, Excel, and BI tools(Tableau, Power BI, Looker) to visualize insights.",
        "Identify trends, inefficiencies, and opportunities by conducting statistical analysis and forecasting business outcomes.",
        "Collaborate with cross-functional teams to align metrics with organizational goals and support strategic decision-making.",
      ],
    },
    {
      id: "exp2",
      company: "Cognizant Technology solutions",
      title: "Junior Data Analyst",
      period: "2022 - 2023",
      location: "Hyderabad, INDIA",
      description: [
        "Developed interactive Power BI dashboards, reducing manual reporting efforts by 60%.",
        "Built Python automation pipelines, cutting data processing time to under 10 minutes and saving 200+ work hours annually.",
        "Optimized SQL queries, enhancing data retrieval speed by 80% for faster business insights.",
        "Partnered with stakeholders to translate complex data insights into actionable strategies, contributing to a 30% improvement in operational efficiency.",
      ],
    },
    {
      id: "exp3",
      company: "Global Analytics Partners",
      title: "Junior Data Analyst",
      period: "2016 - 2018",
      location: "Chicago, IL",
      description: [
        "Performed data cleaning and preprocessing for various client datasets",
        "Assisted in developing SQL queries for database management and reporting",
        "Created visualizations using Python libraries (Matplotlib, Seaborn)",
        "Supported senior analysts in client presentations and documentation",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <Tabs defaultValue="exp1" className="max-w-3xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            {experiences.map((exp) => (
              <TabsTrigger key={exp.id} value={exp.id}>
                {exp.company}
              </TabsTrigger>
            ))}
          </TabsList>

          {experiences.map((exp) => (
            <TabsContent key={exp.id} value={exp.id}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mt-2">
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4 text-primary" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-primary" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-primary" />
                      {exp.location}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 list-disc pl-5">
                    {exp.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

