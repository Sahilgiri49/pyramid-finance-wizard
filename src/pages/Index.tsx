
import { Link } from "react-router-dom";
import { ArrowRight, Download, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-blue-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white drop-shadow-lg">Rahul Aachre</h1>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-white hover:text-blue-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">Home</Link>
              <Link to="/about" className="text-white hover:text-blue-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">About</Link>
              <Link to="/skills" className="text-white hover:text-blue-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">Skills</Link>
              <Link to="/education" className="text-white hover:text-blue-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">Education</Link>
              <Link to="/contact" className="text-white hover:text-blue-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-6xl font-bold text-white mb-4 animate-scale-in drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  Finance
                  <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]">
                    Manager
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-lg">
                  Experienced Finance Professional with 7+ years at Pyramid Group of Companies
                </p>
              </div>
              
              <div className="flex space-x-4">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300">
                  <Link to="/contact" className="flex items-center">
                    Get In Touch <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300">
                  <Download className="mr-2 w-4 h-4" />
                  Download CV
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8">
                <Card className="p-4 bg-gray-900/60 backdrop-blur-sm border-blue-500/30 text-center hover:scale-105 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                  <h3 className="text-2xl font-bold text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">7+</h3>
                  <p className="text-gray-300">Years Experience</p>
                </Card>
                <Card className="p-4 bg-gray-900/60 backdrop-blur-sm border-blue-500/30 text-center hover:scale-105 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                  <h3 className="text-2xl font-bold text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">100+</h3>
                  <p className="text-gray-300">Projects Completed</p>
                </Card>
                <Card className="p-4 bg-gray-900/60 backdrop-blur-sm border-blue-500/30 text-center hover:scale-105 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                  <h3 className="text-2xl font-bold text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">95%</h3>
                  <p className="text-gray-300">Client Satisfaction</p>
                </Card>
              </div>
            </div>

            <div className="relative">
              <div className="w-80 h-80 mx-auto relative animate-scale-in">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-xl opacity-40 animate-pulse shadow-[0_0_60px_rgba(59,130,246,0.6)]"></div>
                <img 
                  src="/lovable-uploads/47bebd86-b56b-4812-8eac-c70475d8c8e1.png"
                  alt="Rahul Aachre"
                  className="relative w-full h-full object-cover rounded-full border-4 border-blue-400/40 shadow-2xl hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(59,130,246,0.4)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-8 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">About Me</h3>
            <p className="text-lg text-gray-300 mb-8">
              A dedicated Finance Manager from Nagpur, Maharashtra, with expertise in accounting, 
              data management, and financial documentation. I bring strong customer handling skills 
              and technical proficiency to drive business growth at Pyramid Group of Companies.
            </p>
            <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300">
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="py-12 px-6 border-t border-blue-500/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-2 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                rahulaachre787@gmail.com
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-2 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                Nagpur, Maharashtra
              </div>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300">
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
