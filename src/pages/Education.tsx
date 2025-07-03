
import { Link } from "react-router-dom";
import { ArrowLeft, GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Education = () => {
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
              <Link to="/education" className="text-purple-400">Education</Link>
              <Link to="/contact" className="text-white hover:text-purple-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
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
                Education
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Academic foundation that supports my professional expertise in finance management
            </p>
          </div>

          <div className="space-y-8 animate-scale-in">
            {/* Main Education Card */}
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:scale-105 transition-transform">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-white mb-2">Bachelor's Degree</h2>
                  <h3 className="text-xl text-purple-400 font-semibold mb-4">Prerana College</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Completed my graduation from Prerana College, building a strong academic foundation 
                    that has been instrumental in my professional journey as a Finance Manager. 
                    The comprehensive curriculum provided me with essential knowledge in business, 
                    finance, and management principles.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-5 h-5 mr-2 text-purple-400" />
                      <span>Maharashtra, India</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Award className="w-5 h-5 mr-2 text-purple-400" />
                      <span>Successfully Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Additional Qualifications */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold text-white mb-4">Professional Development</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <p className="text-gray-300">Financial Management Certification</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <p className="text-gray-300">Advanced Accounting Practices</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <p className="text-gray-300">Database Management Training</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <p className="text-gray-300">Customer Relations Workshop</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold text-white mb-4">Key Skills Acquired</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                    <p className="text-gray-300">Financial Analysis & Reporting</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                    <p className="text-gray-300">Business Communication</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                    <p className="text-gray-300">Data Management Systems</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                    <p className="text-gray-300">Leadership & Team Management</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Academic Excellence */}
            <Card className="p-8 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm border-white/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Academic Excellence</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  My educational journey at Prerana College provided me with the theoretical knowledge 
                  and practical skills that I've successfully applied throughout my 7-year career at 
                  Pyramid Group of Companies.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-purple-400">2016</h4>
                    <p className="text-gray-300">Graduation Year</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-purple-400">7+</h4>
                    <p className="text-gray-300">Years Applied</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-purple-400">100%</h4>
                    <p className="text-gray-300">Knowledge Applied</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Apply My Knowledge?</h3>
            <p className="text-gray-300 mb-6">Let's connect and discuss opportunities</p>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Education;
