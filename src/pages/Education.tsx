
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Briefcase } from "lucide-react";
import Navigation from "@/components/Navigation";

const Education = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white dark:from-black dark:via-gray-900 dark:to-black transition-all duration-500">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                Education & <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text">Certifications</span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                My educational background and professional development journey in finance and management.
              </p>
            </div>

            <div className="space-y-8">
              <Card className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-blue-500/30 hover:scale-105 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-900 dark:text-white">
                    <GraduationCap className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                    Professional Finance Degree
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <Calendar className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                      <span>2015 - 2017</span>
                    </div>
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <MapPin className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                      <span>Nagpur, Maharashtra</span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Comprehensive education in financial management, accounting principles, and business administration. 
                    Specialized in corporate finance and financial analysis methodologies.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-blue-500/30 hover:scale-105 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-900 dark:text-white">
                    <Briefcase className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                    Professional Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <Calendar className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                      <span>2017 - Present</span>
                    </div>
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <MapPin className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                      <span>Pyramid Group of Companies</span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    7+ years of hands-on experience in finance management, accounting, and customer relations 
                    at Pyramid Group of Companies. Gained expertise in financial documentation and data management.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-blue-500/30 hover:scale-105 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                  <CardHeader>
                    <CardTitle className="flex items-center text-gray-900 dark:text-white">
                      <Award className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                      Certifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Financial Management Certification</li>
                      <li>• Accounting Standards Certification</li>
                      <li>• Data Management Certification</li>
                      <li>• Customer Service Excellence</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-blue-500/30 hover:scale-105 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                  <CardHeader>
                    <CardTitle className="flex items-center text-gray-900 dark:text-white">
                      <BookOpen className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                      Continuous Learning
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Advanced Excel for Finance</li>
                      <li>• Digital Finance Tools</li>
                      <li>• Customer Relationship Management</li>
                      <li>• Financial Compliance Updates</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
