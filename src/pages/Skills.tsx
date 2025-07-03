
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Calculator, 
  TrendingUp, 
  FileText, 
  Database, 
  Users, 
  MessageSquare, 
  Clock, 
  Target,
  BarChart3,
  DollarSign,
  PieChart,
  Briefcase
} from "lucide-react";
import Navigation from "@/components/Navigation";

const Skills = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const technicalSkills = [
    { name: "Accounting", level: 95, icon: Calculator },
    { name: "Financial Analysis", level: 90, icon: TrendingUp },
    { name: "Documentation", level: 92, icon: FileText },
    { name: "Data Management", level: 88, icon: Database },
    { name: "Financial Reporting", level: 85, icon: BarChart3 },
    { name: "Budget Planning", level: 87, icon: DollarSign },
    { name: "Cost Analysis", level: 83, icon: PieChart },
    { name: "Compliance", level: 90, icon: Briefcase },
  ];

  const softSkills = [
    { name: "Customer Handling", level: 95, icon: Users },
    { name: "Communication", level: 90, icon: MessageSquare },
    { name: "Time Management", level: 88, icon: Clock },
    { name: "Problem Solving", level: 92, icon: Target },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white dark:from-black dark:via-gray-900 dark:to-black transition-all duration-500">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                My <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text">Skills</span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                A comprehensive overview of my technical expertise and soft skills developed 
                through years of experience in finance and customer management.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Technical Skills</h2>
                <div className="space-y-6">
                  {technicalSkills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <Card 
                        key={skill.name} 
                        className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-blue-500/30 hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
                        style={{
                          animationDelay: `${index * 0.1}s`,
                          animation: `fadeInUp 0.6s ease-out forwards`
                        }}
                      >
                        <CardHeader className="pb-2">
                          <CardTitle className="flex items-center text-gray-900 dark:text-white">
                            <IconComponent className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                            {skill.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                              <span className="text-sm font-medium text-gray-900 dark:text-white">{skill.level}%</span>
                            </div>
                            <Progress 
                              value={skill.level} 
                              className="h-2 bg-gray-200 dark:bg-gray-700"
                              style={{
                                animation: `progressFill 1s ease-out ${index * 0.1}s forwards`
                              }}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Soft Skills</h2>
                <div className="space-y-6">
                  {softSkills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <Card 
                        key={skill.name} 
                        className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-blue-500/30 hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
                        style={{
                          animationDelay: `${(index + technicalSkills.length) * 0.1}s`,
                          animation: `fadeInUp 0.6s ease-out forwards`
                        }}
                      >
                        <CardHeader className="pb-2">
                          <CardTitle className="flex items-center text-gray-900 dark:text-white">
                            <IconComponent className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                            {skill.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                              <span className="text-sm font-medium text-gray-900 dark:text-white">{skill.level}%</span>
                            </div>
                            <Progress 
                              value={skill.level} 
                              className="h-2 bg-gray-200 dark:bg-gray-700"
                              style={{
                                animation: `progressFill 1s ease-out ${(index + technicalSkills.length) * 0.1}s forwards`
                              }}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progressFill {
          from {
            width: 0%;
          }
          to {
            width: var(--progress-value);
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;
