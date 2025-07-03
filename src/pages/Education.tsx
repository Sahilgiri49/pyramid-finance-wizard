
import { Link } from "react-router-dom";
import { ArrowLeft, GraduationCap, Calendar, MapPin, Award, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";

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
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/20 dark:bg-black/20 backdrop-blur-md border-b border-blue-500/20 dark:border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Rahul Achre</h1>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                <Link to="/" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">Home</Link>
                <Link to="/about" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">About</Link>
                <Link to="/skills" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">Skills</Link>
                <Link to="/education" className="text-blue-600 dark:text-blue-400">Education</Link>
                <Link to="/contact" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">Contact</Link>
              </div>
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4 text-gray-900 dark:text-white" />
                <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                <Moon className="h-4 w-4 text-gray-900 dark:text-white" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Button variant="ghost" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 mb-8">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              My
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]">
                Education
              </span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Academic foundation that supports my professional expertise in finance management
            </p>
          </div>

          <div className="space-y-8 animate-scale-in">
            {/* Main Education Card */}
            <Card className="p-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-blue-500/30 dark:border-white/20 hover:scale-105 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">Bachelor's Degree</h2>
                  <h3 className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">Prerana College</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Completed my graduation from Prerana College, building a strong academic foundation 
                    that has been instrumental in my professional journey as a Finance Manager. 
                    The comprehensive curriculum provided me with essential knowledge in business, 
                    finance, and management principles.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <MapPin className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                      <span>Maharashtra, India</span>
                    </div>
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <Award className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                      <span>Successfully Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Additional Qualifications */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-blue-500/30 dark:border-white/20 hover:scale-105 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">Professional Development</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-gray-700 dark:text-gray-300">Financial Management Certification</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-gray-700 dark:text-gray-300">Advanced Accounting Practices</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-gray-700 dark:text-gray-300">Database Management Training</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-gray-700 dark:text-gray-300">Customer Relations Workshop</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-blue-500/30 dark:border-white/20 hover:scale-105 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">Key Skills Acquired</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-600 dark:bg-cyan-400 rounded-full mt-2"></div>
                    <p className="text-gray-700 dark:text-gray-300">Financial Analysis & Reporting</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-600 dark:bg-cyan-400 rounded-full mt-2"></div>
                    <p className="text-gray-700 dark:text-gray-300">Business Communication</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-600 dark:bg-cyan-400 rounded-full mt-2"></div>
                    <p className="text-gray-700 dark:text-gray-300">Data Management Systems</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-600 dark:bg-cyan-400 rounded-full mt-2"></div>
                    <p className="text-gray-700 dark:text-gray-300">Leadership & Team Management</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Academic Excellence */}
            <Card className="p-8 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 dark:from-blue-600/10 dark:to-cyan-600/10 backdrop-blur-sm border-blue-500/30 dark:border-white/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Academic Excellence</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                  My educational journey at Prerana College provided me with the theoretical knowledge 
                  and practical skills that I've successfully applied throughout my 7-year career at 
                  Pyramid Group of Companies.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-blue-600 dark:text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">2016</h4>
                    <p className="text-gray-700 dark:text-gray-300">Graduation Year</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-blue-600 dark:text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">7+</h4>
                    <p className="text-gray-700 dark:text-gray-300">Years Applied</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-blue-600 dark:text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">100%</h4>
                    <p className="text-gray-700 dark:text-gray-300">Knowledge Applied</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Footer */}
      <footer className="py-12 px-6 border-t border-blue-500/20 dark:border-white/10">
        <div className="container mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Ready to Apply My Knowledge?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">Let's connect and discuss opportunities</p>
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Education;
