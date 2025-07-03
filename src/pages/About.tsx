
import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, Award, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Rahul Aachre</h1>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-white hover:text-purple-400 transition-colors">Home</Link>
              <Link to="/about" className="text-purple-400">About</Link>
              <Link to="/skills" className="text-white hover:text-purple-400 transition-colors">Skills</Link>
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

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h1 className="text-5xl font-bold text-white mb-6">
                  About
                  <span className="block text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                    Rahul Aachre
                  </span>
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I am a dedicated Finance Manager with 7 years of comprehensive experience at 
                  Pyramid Group of Companies. Based in Nagpur, Maharashtra, I specialize in 
                  financial management, accounting, and data administration with a strong focus 
                  on customer relations and business growth.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">My Expertise</h3>
                <div className="grid grid-cols-1 gap-4">
                  <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:scale-105 transition-transform">
                    <div className="flex items-start space-x-4">
                      <Briefcase className="w-8 h-8 text-purple-400 mt-1" />
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">Financial Management</h4>
                        <p className="text-gray-300">
                          Expert in accounting, budgeting, and financial planning with 7+ years 
                          of hands-on experience in corporate finance.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:scale-105 transition-transform">
                    <div className="flex items-start space-x-4">
                      <Users className="w-8 h-8 text-purple-400 mt-1" />
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">Customer Relations</h4>
                        <p className="text-gray-300">
                          Skilled in customer handling, guidance, and building long-term 
                          business relationships for sustainable growth.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:scale-105 transition-transform">
                    <div className="flex items-start space-x-4">
                      <Target className="w-8 h-8 text-purple-400 mt-1" />
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">Data Management</h4>
                        <p className="text-gray-300">
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
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                    alt="Rahul Aachre - Professional"
                    className="relative w-full h-full object-cover rounded-2xl border-4 border-white/20 shadow-2xl"
                  />
                </div>
              </div>

              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Experience:</span>
                    <span className="text-white font-semibold">7+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Company:</span>
                    <span className="text-white font-semibold">Pyramid Group</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Location:</span>
                    <span className="text-white font-semibold">Nagpur, Maharashtra</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Specialization:</span>
                    <span className="text-white font-semibold">Finance Management</span>
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
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h3>
            <p className="text-gray-300 mb-6">Let's discuss how I can contribute to your financial success</p>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
