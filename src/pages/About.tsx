import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";

const About = () => {
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
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-8">
                <div>
                  <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                    About <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text">Rahul Achre</span>
                  </h1>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    A dedicated Finance Manager with over 7 years of experience at Pyramid Group of Companies. 
                    I specialize in financial documentation, accounting processes, and data management while 
                    maintaining strong customer relationships.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <Calendar className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                      <span>7+ Years Experience</span>
                    </div>
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <MapPin className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                      <span>Nagpur, Maharashtra</span>
                    </div>
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <Briefcase className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                      <span>Finance Manager</span>
                    </div>
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <GraduationCap className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                      <span>Professional Finance</span>
                    </div>
                  </div>
                </div>
                
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300">
                  <Link to="/contact" className="flex items-center">
                    Get In Touch <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 rounded-full blur-xl opacity-40 animate-pulse shadow-[0_0_60px_rgba(59,130,246,0.6)]"></div>
                  <img 
                    src="/lovable-uploads/e5b00213-99b9-4b57-8c71-b5fcd8e8ee5a.png"
                    alt="Rahul Achre"
                    className="relative w-full h-full object-cover rounded-full border-4 border-blue-400/40 shadow-2xl hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(59,130,246,0.4)]"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              <Card className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-blue-500/30 hover:scale-105 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white flex items-center">
                    <Briefcase className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                    Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">
                    Over 7 years of dedicated service at Pyramid Group of Companies, 
                    handling diverse financial responsibilities and client relationships.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-blue-500/30 hover:scale-105 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white flex items-center">
                    <GraduationCap className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                    Expertise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">
                    Specialized in accounting, financial documentation, data management, 
                    and maintaining strong customer relationships.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-blue-500/30 hover:scale-105 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">
                    Based in Nagpur, Maharashtra, bringing local market knowledge 
                    and cultural understanding to business operations.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">My Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Integrity</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Maintaining the highest standards of honesty and transparency in all financial dealings.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Excellence</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Continuously striving for perfection in financial management and customer service.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Innovation</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Embracing new technologies and methodologies to improve financial processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
