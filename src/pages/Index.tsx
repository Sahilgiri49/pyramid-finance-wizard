
import { Link } from "react-router-dom";
import { ArrowRight, Download, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
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
              <Link to="/skills" className="text-white hover:text-purple-400 transition-colors">Skills</Link>
              <Link to="/education" className="text-white hover:text-purple-400 transition-colors">Education</Link>
              <Link to="/contact" className="text-white hover:text-purple-400 transition-colors">Contact</Link>
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
                <h2 className="text-6xl font-bold text-white mb-4 animate-scale-in">
                  Finance
                  <span className="block text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                    Manager
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-lg">
                  Experienced Finance Professional with 7+ years at Pyramid Group of Companies
                </p>
              </div>
              
              <div className="flex space-x-4">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Link to="/contact" className="flex items-center">
                    Get In Touch <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                  <Download className="mr-2 w-4 h-4" />
                  Download CV
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8">
                <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20 text-center hover:scale-105 transition-transform">
                  <h3 className="text-2xl font-bold text-white">7+</h3>
                  <p className="text-gray-300">Years Experience</p>
                </Card>
                <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20 text-center hover:scale-105 transition-transform">
                  <h3 className="text-2xl font-bold text-white">100+</h3>
                  <p className="text-gray-300">Projects Completed</p>
                </Card>
                <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20 text-center hover:scale-105 transition-transform">
                  <h3 className="text-2xl font-bold text-white">95%</h3>
                  <p className="text-gray-300">Client Satisfaction</p>
                </Card>
              </div>
            </div>

            <div className="relative">
              <div className="w-80 h-80 mx-auto relative animate-scale-in">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Rahul Aachre"
                  className="relative w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl hover:scale-105 transition-transform duration-300"
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
            <h3 className="text-3xl font-bold text-white mb-8">About Me</h3>
            <p className="text-lg text-gray-300 mb-8">
              A dedicated Finance Manager from Nagpur, Maharashtra, with expertise in accounting, 
              data management, and financial documentation. I bring strong customer handling skills 
              and technical proficiency to drive business growth at Pyramid Group of Companies.
            </p>
            <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-2 text-purple-400" />
                rahulaachre787@gmail.com
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-2 text-purple-400" />
                Nagpur, Maharashtra
              </div>
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
