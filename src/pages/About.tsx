
import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, Award, Target, Users, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";

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
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/20 dark:bg-black/20 backdrop-blur-md border-b border-blue-500/20 dark:border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Rahul Achre</h1>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                <Link to="/" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">Home</Link>
                <Link to="/about" className="text-blue-600 dark:text-blue-400">About</Link>
                <Link to="/skills" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">Skills</Link>
                <Link to="/education" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">Education</Link>
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
        <div className="container mx-auto max-w-6xl">
          <Button variant="ghost" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 mb-8">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  About
                  <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]">
                    Rahul Achre
                  </span>
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I am a dedicated Finance Manager with 7 years of comprehensive experience at 
                  Pyramid Group of Companies. Based in Nagpur, Maharashtra, I specialize in 
                  financial management, accounting, and data administration with a strong focus 
                  on customer relations and business growth.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">My Expertise</h3>
                <div className="grid grid-cols-1 gap-4">
                  <Card className="p-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-blue-500/30 dark:border-white/20 hover:scale-105 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                    <div className="flex items-start space-x-4">
                      <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400 mt-1 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Financial Management</h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          Expert in accounting, budgeting, and financial planning with 7+ years 
                          of hands-on experience in corporate finance.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-blue-500/30 dark:border-white/20 hover:scale-105 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                    <div className="flex items-start space-x-4">
                      <Users className="w-8 h-8 text-blue-600 dark:text-blue-400 mt-1 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Customer Relations</h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          Skilled in customer handling, guidance, and building long-term 
                          business relationships for sustainable growth.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-blue-500/30 dark:border-white/20 hover:scale-105 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                    <div className="flex items-start space-x-4">
                      <Target className="w-8 h-8 text-blue-600 dark:text-blue-400 mt-1 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Data Management</h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          Proficient in database management, documentation, and registry 
                          systems for efficient business operations.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            <div className="space-y-8 animate-scale-in">
              <div className="relative">
                <div className="w-full h-96 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 rounded-2xl blur-xl opacity-30 animate-pulse shadow-[0_0_60px_rgba(59,130,246,0.6)]"></div>
                  <img 
                    src="/lovable-uploads/e5b00213-99b9-4b57-8c71-b5fcd8e8ee5a.png"
                    alt="Rahul Achre - Professional"
                    className="relative w-full h-full object-cover rounded-2xl border-4 border-blue-500/40 dark:border-white/20 shadow-2xl shadow-[0_0_40px_rgba(59,130,246,0.4)]"
                  />
                </div>
              </div>

              <Card className="p-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-blue-500/30 dark:border-white/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Experience:</span>
                    <span className="text-gray-900 dark:text-white font-semibold">7+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Company:</span>
                    <span className="text-gray-900 dark:text-white font-semibold">Pyramid Group</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Location:</span>
                    <span className="text-gray-900 dark:text-white font-semibold">Nagpur, Maharashtra</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Specialization:</span>
                    <span className="text-gray-900 dark:text-white font-semibold">Finance Management</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Footer */}
      <footer className="py-12 px-6 border-t border-blue-500/20 dark:border-white/10">
        <div className="container mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Ready to Work Together?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">Let's discuss how I can contribute to your financial success</p>
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
