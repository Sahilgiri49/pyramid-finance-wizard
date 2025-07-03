
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MapPin, Send, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailMe = () => {
    const subject = encodeURIComponent("Portfolio Inquiry");
    const body = encodeURIComponent("Hi Rahul,\n\nI visited your portfolio and would like to discuss potential opportunities.\n\nBest regards,");
    window.open(`mailto:rahulaachre787@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 transition-all duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/20 dark:bg-black/20 backdrop-blur-md border-b border-blue-500/20 dark:border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Rahul Aachre</h1>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                <Link to="/" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-purple-400 transition-colors">Home</Link>
                <Link to="/about" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-purple-400 transition-colors">About</Link>
                <Link to="/skills" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-purple-400 transition-colors">Skills</Link>
                <Link to="/education" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-purple-400 transition-colors">Education</Link>
                <Link to="/contact" className="text-blue-600 dark:text-purple-400">Contact</Link>
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
          <Button variant="ghost" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-purple-400 mb-8">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get In
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text">
                Touch
              </span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to discuss finance management opportunities? Let's connect and explore 
              how I can contribute to your organization's success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-scale-in">
              <Card className="p-8 bg-white/60 dark:bg-white/10 backdrop-blur-sm border-blue-500/30 dark:border-white/20">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-purple-600 dark:to-pink-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 dark:text-white font-semibold">Email</h3>
                      <p className="text-gray-700 dark:text-gray-300">rahulaachre787@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-purple-600 dark:to-pink-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 dark:text-white font-semibold">Location</h3>
                      <p className="text-gray-700 dark:text-gray-300">Nagpur, Maharashtra, India</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-purple-600 dark:to-pink-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 dark:text-white font-semibold">Available</h3>
                      <p className="text-gray-700 dark:text-gray-300">Mon - Fri, 9AM - 6PM IST</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/60 dark:bg-white/10 backdrop-blur-sm border-blue-500/30 dark:border-white/20">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Professional Summary</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Finance Manager with 7+ years at Pyramid Group of Companies, specializing in:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {["Financial Planning", "Customer Relations", "Data Management", "Time Management", "Accounting", "Documentation"].map((skill, index) => (
                    <div key={index} className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 dark:from-purple-600/20 dark:to-pink-600/20 rounded-lg p-2 text-center">
                      <span className="text-gray-900 dark:text-white text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-scale-in">
              <Card className="p-8 bg-white/60 dark:bg-white/10 backdrop-blur-sm border-blue-500/30 dark:border-white/20">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-900 dark:text-white font-semibold mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/60 dark:bg-white/10 border-blue-500/30 dark:border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-900 dark:text-white font-semibold mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/60 dark:bg-white/10 border-blue-500/30 dark:border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-900 dark:text-white font-semibold mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-white/60 dark:bg-white/10 border-blue-500/30 dark:border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-purple-600 dark:to-pink-600 hover:from-blue-700 hover:to-cyan-700 dark:hover:from-purple-700 dark:hover:to-pink-700"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center animate-fade-in">
            <Card className="p-8 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 dark:from-purple-600/10 dark:to-pink-600/10 backdrop-blur-sm border-blue-500/30 dark:border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Work Together?</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities in finance management, 
                consulting projects, or collaboration opportunities. Let's connect and 
                explore how we can work together.
              </p>
              <div className="flex justify-center space-x-4">
                <Button 
                  onClick={handleEmailMe}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-purple-600 dark:to-pink-600 hover:from-blue-700 hover:to-cyan-700 dark:hover:from-purple-700 dark:hover:to-pink-700"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-400 dark:hover:text-white">
                  Download Resume
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
