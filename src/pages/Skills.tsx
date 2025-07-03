
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Calculator, Database, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const technicalSkills = [
    { name: "Accounting & Financial Planning", level: 95, icon: Calculator },
    { name: "Database Management", level: 90, icon: Database },
    { name: "Documentation & Registry", level: 88, icon: Award },
    { name: "Financial Analysis", level: 92, icon: TrendingUp },
  ];

  const softSkills = [
    { name: "Time Management", level: 95, icon: Clock },
    { name: "Customer Handling", level: 90, icon: Users },
    { name: "Team Leadership", level: 85, icon: Users },
    { name: "Problem Solving", level: 90, icon: Award },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Rahul Aachre</h1>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-white hover:text-purple-400 transition-colors">Home</Link>
              <Link to="/about" className="text-white hover:text-purple-400 transition-colors">About</Link>
              <Link to="/skills" className="text-purple-400">Skills</Link>
              <Link to="/education" className="text-white hover:text-purple-400 transition-colors">Education</Link>
              <Link to="/contact" className="text-white hover:text-purple-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <Button variant="ghost" className="text-white hover:text-purple-400 mb-8">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold text-white mb-6">
              My
              <span className="block text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                Skills
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and soft skills 
              developed through 7+ years in finance management
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="space-y-8 animate-scale-in">
              <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  Technical Skills
                </h2>
                <div className="space-y-6">
                  {technicalSkills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <IconComponent className="w-6 h-6 text-purple-400" />
                            <span className="text-white font-semibold">{skill.name}</span>
                          </div>
                          <span className="text-purple-400 font-bold">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-3" />
                      </div>
                    );
                  })}
                </div>
              </Card>

              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Core Competencies</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Financial Reporting", "Budget Planning", "Risk Assessment", "Compliance", "Data Analysis", "Process Optimization"].map((competency, index) => (
                    <div key={index} className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-3 text-center">
                      <span className="text-white text-sm font-medium">{competency}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Soft Skills */}
            <div className="space-y-8 animate-scale-in">
              <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  Soft Skills
                </h2>
                <div className="space-y-6">
                  {softSkills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <IconComponent className="w-6 h-6 text-pink-400" />
                            <span className="text-white font-semibold">{skill.name}</span>
                          </div>
                          <span className="text-pink-400 font-bold">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-3" />
                      </div>
                    );
                  })}
                </div>
              </Card>

              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Professional Achievements</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <p className="text-gray-300">Successfully managed financial operations for 7+ years</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <p className="text-gray-300">Improved customer satisfaction through effective handling</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <p className="text-gray-300">Streamlined documentation and registry processes</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <p className="text-gray-300">Maintained excellent time management across projects</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Impressed by My Skills?</h3>
            <p className="text-gray-300 mb-6">Let's discuss how I can bring value to your organization</p>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Skills;
