import { BarChart2, Database, LineChart, PieChart, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function SkillsSection() {
  const technicalSkills = [
    { name: "Data Analysis", level: 95 },
    { name: "Data Visualization", level: 90 },
    { name: "Statistical Modeling", level: 85 },
    { name: "Machine Learning", level: 80 },
    { name: "SQL & Database Management", level: 90 },
    { name: "Python Programming", level: 85 },
    { name: "R Programming", level: 80 },
    { name: "Excel & Power BI", level: 95 },
  ]

  const toolsAndTechnologies = [
    { name: "Python", icon: <LineChart className="h-8 w-8 text-primary" /> },
    { name: "R", icon: <BarChart2 className="h-8 w-8 text-primary" /> },
    { name: "SQL", icon: <Database className="h-8 w-8 text-primary" /> },
    { name: "Tableau", icon: <PieChart className="h-8 w-8 text-primary" /> },
    { name: "Power BI", icon: <TrendingUp className="h-8 w-8 text-primary" /> },
    { name: "Excel", icon: <BarChart2 className="h-8 w-8 text-primary" /> },
    { name: "Pandas", icon: <Database className="h-8 w-8 text-primary" /> },
    { name: "Scikit-learn", icon: <LineChart className="h-8 w-8 text-primary" /> },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Technical Proficiency</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Tools & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {toolsAndTechnologies.map((tool, index) => (
                <Card key={index} className="border-none shadow-none bg-muted/50">
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                    {tool.icon}
                    <h4 className="mt-3 font-medium">{tool.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Additional Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Card className="bg-muted/50 border-none shadow-none">
                  <CardContent className="p-3">A/B Testing</CardContent>
                </Card>
                <Card className="bg-muted/50 border-none shadow-none">
                  <CardContent className="p-3">ETL Processes</CardContent>
                </Card>
                <Card className="bg-muted/50 border-none shadow-none">
                  <CardContent className="p-3">Data Cleaning</CardContent>
                </Card>
                <Card className="bg-muted/50 border-none shadow-none">
                  <CardContent className="p-3">Regression Analysis</CardContent>
                </Card>
                <Card className="bg-muted/50 border-none shadow-none">
                  <CardContent className="p-3">Time Series Analysis</CardContent>
                </Card>
                <Card className="bg-muted/50 border-none shadow-none">
                  <CardContent className="p-3">Dashboard Design</CardContent>
                </Card>
                <Card className="bg-muted/50 border-none shadow-none">
                  <CardContent className="p-3">Data Storytelling</CardContent>
                </Card>
                <Card className="bg-muted/50 border-none shadow-none">
                  <CardContent className="p-3">Predictive Modeling</CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

