"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Menu, X, Check, ArrowRight, BarChart3, Cog, TrendingUp, Shield, Users, Award, Phone, Mail, MapPin, Star, Warehouse, Truck, Factory, ShoppingCart, Zap, Target, Clock, DollarSign, Package } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';

const InventoryManagementWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [animatedNumbers, setAnimatedNumbers] = useState({
    companies: 0,
    costReduction: 0,
    satisfaction: 0,
    support: 0
  });

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
            
            // Animate numbers when statistics section is visible
            if (id === 'statistics') {
              animateNumbers();
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const animateNumbers = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedNumbers({
        companies: Math.floor(500 * progress),
        costReduction: Math.floor(30 * progress),
        satisfaction: Math.floor(95 * progress),
        support: 24 // Keep as 24/7
      });
      
      if (currentStep >= steps) {
        clearInterval(interval);
        setAnimatedNumbers({
          companies: 500,
          costReduction: 30,
          satisfaction: 95,
          support: 24
        });
      }
    }, stepDuration);
  };

  const services = [
    {
      icon: <BarChart3 className="h-10 w-10 text-blue-600" />,
      title: "Inventory Control",
      description: "Real-time inventory tracking, automated reorder points, and comprehensive stock management solutions.",
      features: ["Real-time tracking", "Automated alerts", "Multi-location support", "Barcode integration"],
      bgColor: "from-blue-50 to-blue-100",
      delay: 0.1
    },
    {
      icon: <Cog className="h-10 w-10 text-green-600" />,
      title: "Process Digitalization",
      description: "Transform manual processes into streamlined digital workflows that increase efficiency and reduce errors.",
      features: ["Workflow automation", "Digital documentation", "Mobile accessibility", "Integration ready"],
      bgColor: "from-green-50 to-green-100",
      delay: 0.2
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-purple-600" />,
      title: "Process Improvement",
      description: "Analyze and optimize your operations with data-driven insights and lean manufacturing principles.",
      features: ["Performance analytics", "Bottleneck identification", "Cost optimization", "KPI dashboards"],
      bgColor: "from-purple-50 to-purple-100",
      delay: 0.3
    }
  ];

  const benefits = [
    { icon: Shield, title: "Reduce Costs", description: "Cut inventory carrying costs by up to 30%", color: "text-green-600", bgColor: "bg-green-100", delay: 0.1 },
    { icon: TrendingUp, title: "Increase Efficiency", description: "Streamline operations and boost productivity", color: "text-blue-600", bgColor: "bg-blue-100", delay: 0.2 },
    { icon: Users, title: "Better Visibility", description: "Real-time insights across all locations", color: "text-purple-600", bgColor: "bg-purple-100", delay: 0.3 },
    { icon: Award, title: "Compliance Ready", description: "Meet industry standards and regulations", color: "text-orange-600", bgColor: "bg-orange-100", delay: 0.4 }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "TechManufacturing Ltd",
      role: "Operations Director",
      content: "Their inventory management solution reduced our stock-outs by 95% and improved our cash flow significantly.",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "David Chen",
      company: "RetailMax Group",
      role: "Supply Chain Manager",
      content: "The digitalization of our processes has been transformational. We've seen 40% improvement in operational efficiency.",
      rating: 5,
      avatar: "DC"
    },
    {
      name: "Emma Thompson",
      company: "Precision Components",
      role: "CEO",
      content: "Outstanding support and implementation. The ROI was evident within the first quarter of deployment.",
      rating: 5,
      avatar: "ET"
    }
  ];

  const industries = [
    { name: "Manufacturing", icon: <Factory className="h-8 w-8" />, color: "from-blue-500 to-blue-600", delay: 0.1 },
    { name: "Retail & E-commerce", icon: <ShoppingCart className="h-8 w-8" />, color: "from-green-500 to-green-600", delay: 0.2 },
    { name: "Automotive", icon: <Truck className="h-8 w-8" />, color: "from-gray-500 to-gray-600", delay: 0.3 },
    { name: "Electronics", icon: <Cog className="h-8 w-8" />, color: "from-purple-500 to-purple-600", delay: 0.4 },
    { name: "Food & Beverage", icon: <Warehouse className="h-8 w-8" />, color: "from-orange-500 to-orange-600", delay: 0.5 },
    { name: "Pharmaceuticals", icon: <Shield className="h-8 w-8" />, color: "from-red-500 to-red-600", delay: 0.6 },
    { name: "Textiles", icon: <TrendingUp className="h-8 w-8" />, color: "from-pink-500 to-pink-600", delay: 0.7 },
    { name: "Aerospace", icon: <Award className="h-8 w-8" />, color: "from-indigo-500 to-indigo-600", delay: 0.8 }
  ];

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "500+", label: "Companies Served", color: "text-blue-400" },
    { icon: <DollarSign className="h-6 w-6" />, value: "30%", label: "Average Cost Reduction", color: "text-green-400" },
    { icon: <Target className="h-6 w-6" />, value: "95%", label: "Client Satisfaction", color: "text-purple-400" },
    { icon: <Clock className="h-6 w-6" />, value: "24/7", label: "Support Available", color: "text-orange-400" }
  ];

  const getIconGradient = (color: string) => {
    switch (color) {
      case "text-blue-400":
        return "from-blue-500 to-blue-600";
      case "text-green-400":
        return "from-green-500 to-green-600";
      case "text-purple-400":
        return "from-purple-500 to-purple-600";
      case "text-orange-400":
        return "from-orange-500 to-orange-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const getStatDescription = (label: string) => {
    switch (label) {
      case "Companies Served":
        return "Serving businesses across manufacturing, retail, and more.";
      case "Average Cost Reduction":
        return "Achieve significant cost savings through optimized inventory management.";
      case "Client Satisfaction":
        return "High satisfaction rate from our global clientele.";
      case "Support Available":
        return "24/7 technical support and assistance available.";
      default:
        return "Learn more about our solutions.";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-md border-b border-slate-700/50 z-50 shadow-xl"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-white"
              >
                <span className="text-blue-400">Inventory</span>
                <span className="text-white">Pro</span>
              </motion.div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                <motion.a 
                  whileHover={{ y: -2 }}
                  href="#services" 
                  className={`relative px-4 py-3 text-sm font-medium transition-all duration-300 group ${
                    activeSection === 'services' ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Services
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                    activeSection === 'services' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                </motion.a>
                <motion.a 
                  whileHover={{ y: -2 }}
                  href="#solutions" 
                  className={`relative px-4 py-3 text-sm font-medium transition-all duration-300 group ${
                    activeSection === 'solutions' ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Solutions
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                    activeSection === 'solutions' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                </motion.a>
                <motion.a 
                  whileHover={{ y: -2 }}
                  href="#about" 
                  className={`relative px-4 py-3 text-sm font-medium transition-all duration-300 group ${
                    activeSection === 'about' ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  About
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                    activeSection === 'about' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                </motion.a>
                <div className="ml-6">
                                  <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" suppressHydrationWarning>
                  <a href="#contact">Get Started</a>
                </Button>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:bg-white/10"
                suppressHydrationWarning
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50 shadow-xl"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#services" className="block px-3 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300">Services</a>
                <a href="#solutions" className="block px-3 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300">Solutions</a>
                <a href="#about" className="block px-3 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300">About</a>
                <Button asChild className="w-full mx-3 mt-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0" suppressHydrationWarning>
                  <a href="#contact">Get Started</a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 hero-gradient hero-pattern relative overflow-hidden">
        {/* Professional Team Working Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        ></div>
        
        {/* Video Background (fallback) */}
        <video 
          autoPlay 
          muted 
          loop 
          className="hero-video-bg"
          poster="data:image/svg+xml,%3Csvg width='1920' height='1080' viewBox='0 0 1920 1080' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1920' height='1080' fill='%231e293b'/%3E%3C/svg%3E"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        
        {/* Enhanced overlay with realistic elements */}
        <div className="hero-overlay"></div>
        
        {/* Floating inventory elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-16 h-16 bg-blue-500/20 rounded-lg backdrop-blur-sm border border-blue-400/30"
          >
            <div className="p-2 text-blue-300 text-xs font-mono">SKU-001</div>
          </motion.div>
          
          <motion.div
            animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-40 left-1/4 w-12 h-12 bg-green-500/20 rounded-lg backdrop-blur-sm border border-green-400/30"
          >
            <div className="p-2 text-green-300 text-xs font-mono">SKU-002</div>
          </motion.div>
          
          <motion.div
            animate={{ y: [-15, 15, -15], rotate: [0, 3, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute bottom-40 right-1/3 w-14 h-14 bg-purple-500/20 rounded-lg backdrop-blur-sm border border-purple-400/30"
          >
            <div className="p-2 text-purple-300 text-xs font-mono">SKU-003</div>
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-6 relative"
              >
                {/* Animated glow */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="w-full h-full rounded-full bg-blue-400/30 blur-2xl animate-pulse-glow"></div>
                </div>
                {/* Glass badge with floating animation */}
                <motion.div 
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative z-10 px-6 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/40 shadow-lg flex items-center gap-2 font-semibold text-white text-base"
                  style={{ fontWeight: 600 }}
                  suppressHydrationWarning
                >
                  <Award className="h-5 w-5 mr-2 text-yellow-400 drop-shadow-lg" />
                  Trusted by 500+ Companies
                </motion.div>
              </motion.div>
              <motion.h1 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Revolutionize Your
                <span className="text-blue-300 block drop-shadow-lg">Inventory Management</span>
              </motion.h1>
              <motion.p 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl text-gray-200 mb-8 leading-relaxed drop-shadow-md"
              >
                Streamline operations, reduce costs, and boost efficiency with our comprehensive inventory control and digitalization solutions designed for small and mid-size manufacturers and retailers.
              </motion.p>
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" className="shadow-elevated hover:shadow-professional bg-white text-blue-600 hover:bg-gray-100" suppressHydrationWarning>
                  Get Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="glass" size="lg" className="border-2 border-white/50 text-white hover:bg-white/20" suppressHydrationWarning>
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="glass-professional p-8 rounded-2xl shadow-dark"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-3 h-3 bg-green-400 rounded-full"
                      ></motion.div>
                      <span className="text-sm text-white font-medium">Inventory Status: Optimal</span>
                    </div>
                    <div className="text-2xl font-bold text-green-400">98.2%</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="p-4 bg-white/20 rounded-lg backdrop-blur-sm border border-white/10"
                    >
                      <div className="text-2xl font-bold text-white">1,247</div>
                      <div className="text-xs text-gray-200 font-medium">Items Tracked</div>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="p-4 bg-white/20 rounded-lg backdrop-blur-sm border border-white/10"
                    >
                      <div className="text-2xl font-bold text-white">15%</div>
                      <div className="text-xs text-gray-200 font-medium">Cost Reduction</div>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="p-4 bg-white/20 rounded-lg backdrop-blur-sm border border-white/10"
                    >
                      <div className="text-2xl font-bold text-white">24/7</div>
                      <div className="text-xs text-gray-200 font-medium">Monitoring</div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="relative">
        <Separator className="bg-gradient-to-r from-transparent via-slate-300 to-transparent h-px" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent h-px animate-pulse"></div>
      </div>

      {/* Common Inventory Challenges */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-slate-100 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <Badge variant="destructive" className="bg-red-100 text-red-700 border-red-200 px-4 py-2 text-sm font-medium">
                <Shield className="h-4 w-4 mr-2" />
                Industry Challenges
              </Badge>
            </motion.div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Are You Struggling with These Inventory Issues?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Most manufacturing and retail businesses face these common challenges that impact their bottom line
            </p>
          </motion.div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Clock className="h-8 w-8 text-red-500" />,
                title: "Stockouts & Overstock",
                description: "Losing sales due to out-of-stock items while carrying excess inventory costs",
                impact: "30% revenue loss",
                color: "from-red-50 to-red-100"
              },
              {
                icon: <DollarSign className="h-8 w-8 text-orange-500" />,
                title: "High Carrying Costs",
                description: "Excessive inventory tying up capital and increasing storage costs",
                impact: "25% capital tied up",
                color: "from-orange-50 to-orange-100"
              },
              {
                icon: <Users className="h-8 w-8 text-yellow-500" />,
                title: "Manual Processes",
                description: "Time-consuming manual tracking leading to errors and inefficiencies",
                impact: "40% time wasted",
                color: "from-yellow-50 to-yellow-100"
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-blue-500" />,
                title: "Poor Visibility",
                description: "Lack of real-time insights across multiple locations and channels",
                impact: "50% blind spots",
                color: "from-blue-50 to-blue-100"
              },
              {
                icon: <Target className="h-8 w-8 text-purple-500" />,
                title: "Forecasting Errors",
                description: "Inaccurate demand predictions causing supply chain disruptions",
                impact: "35% forecast errors",
                color: "from-purple-50 to-purple-100"
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-green-500" />,
                title: "Growth Limitations",
                description: "Unable to scale operations efficiently due to inventory constraints",
                impact: "Limited expansion",
                color: "from-green-50 to-green-100"
              }
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className={`h-full bg-gradient-to-br ${problem.color} border-0 shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-white rounded-lg shadow-sm mr-4">
                        {problem.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{problem.title}</h3>
                        <div className="text-sm font-medium text-red-600">{problem.impact}</div>
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed">{problem.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Solution Preview */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-blue-100 rounded-full mr-4">
                    <Zap className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Ready to Solve These Challenges?</h3>
                </div>
                <p className="text-lg text-slate-700 mb-6 max-w-2xl mx-auto">
                  Our comprehensive inventory management solutions address every one of these pain points with proven strategies and cutting-edge technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" suppressHydrationWarning>
                    See Our Solutions
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50" suppressHydrationWarning>
                    Download Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative overflow-hidden">
        {/* Realistic Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        ></div>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        {/* Floating background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-16 h-16 bg-blue-500/10 rounded-full backdrop-blur-sm border border-blue-400/20"
          ></motion.div>
          
          <motion.div
            animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-40 right-20 w-12 h-12 bg-green-500/10 rounded-full backdrop-blur-sm border border-green-400/20"
          ></motion.div>
          
          <motion.div
            animate={{ y: [-15, 15, -15], rotate: [0, 3, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute bottom-20 left-1/4 w-20 h-20 bg-purple-500/10 rounded-full backdrop-blur-sm border border-purple-400/20"
          ></motion.div>
          
          <motion.div
            animate={{ y: [15, -15, 15], rotate: [0, -3, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 6 }}
            className="absolute bottom-40 right-1/3 w-14 h-14 bg-orange-500/10 rounded-full backdrop-blur-sm border border-orange-400/20"
          ></motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Solutions for Your Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide end-to-end inventory management and process digitalization services tailored for manufacturing and retail companies.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: service.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="hover-lift"
              >
                <Card className={`h-full relative bg-white/60 backdrop-blur-md border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:border-blue-400 rounded-2xl overflow-hidden`}>
                  {/* Colored accent bar */}
                  <div className={`absolute left-0 top-0 h-full w-2 bg-gradient-to-b ${service.bgColor} rounded-l-2xl group-hover:w-3 transition-all duration-300`}></div>
                  <CardHeader>
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.bgColor} rounded-xl mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                      {service.icon}
                    </div>
                    <CardTitle className="text-professional-dark">{service.title}</CardTitle>
                    <CardDescription className="text-professional-light">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-professional-light">
                          <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 hover:shadow-lg transition-all duration-300 border-0 cursor-pointer">
                      <span className="relative z-10 flex items-center justify-center">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-professional-dark mb-4">
              Why Choose InventoryPro?
            </h2>
            <p className="text-xl text-professional-light">
              Proven results that drive business growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: benefit.delay }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${benefit.bgColor} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-10 w-10 ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-professional-dark mb-2">{benefit.title}</h3>
                  <p className="text-professional-light">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="statistics" className="py-20 relative overflow-hidden">
        {/* Realistic Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        ></div>
        
        {/* Professional overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
        
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <Badge variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/20 px-6 py-3 text-sm font-medium">
                <Award className="h-5 w-5 mr-2" />
                Industry Recognition
              </Badge>
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Real results from real businesses across manufacturing and retail sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Users className="h-8 w-8" />, value: animatedNumbers.companies + "+", label: "Companies Served", color: "text-blue-400", bgColor: "from-blue-500 to-blue-600" },
              { icon: <DollarSign className="h-8 w-8" />, value: animatedNumbers.costReduction + "%", label: "Average Cost Reduction", color: "text-green-400", bgColor: "from-green-500 to-green-600" },
              { icon: <Target className="h-8 w-8" />, value: animatedNumbers.satisfaction + "%", label: "Client Satisfaction", color: "text-purple-400", bgColor: "from-purple-500 to-purple-600" },
              { icon: <Clock className="h-8 w-8" />, value: "24/7", label: "Support Available", color: "text-orange-400", bgColor: "from-orange-500 to-orange-600" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="relative">
                  {/* Professional card with enhanced design */}
                  <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center border border-white/20 hover:border-white/40 transition-all duration-300 shadow-2xl hover:shadow-3xl">
                    {/* Enhanced icon with professional styling */}
                    <motion.div 
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 relative overflow-hidden shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Gradient background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} rounded-full`}></div>
                      
                      {/* Shimmer overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                      
                      {/* Icon */}
                      <div className="relative z-10 text-white">
                        {stat.icon}
                      </div>
                    </motion.div>
                    
                    {/* Animated number with enhanced typography */}
                    <motion.div 
                      className="text-5xl lg:text-6xl font-bold text-white mb-3 font-mono tracking-tight"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {stat.value}
                    </motion.div>
                    
                    {/* Enhanced label */}
                    <div className="text-gray-200 font-semibold text-lg tracking-wide mb-2">
                      {stat.label}
                    </div>
                    
                    {/* Professional description */}
                    <div className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {getStatDescription(stat.label)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <span className="text-white font-medium">Join 500+ companies optimizing their operations</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="solutions" className="py-20 professional-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300">
              Specialized solutions for diverse sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: industry.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="hover-lift"
              >
                <Card className="text-center bg-white shadow-dark hover:shadow-elevated">
                  <CardContent className="p-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${industry.color} text-white rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {industry.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-professional-dark">{industry.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card variant="glass" className="text-center shadow-elevated">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                {mounted && (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTestimonial}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <blockquote className="text-xl text-white mb-6 italic leading-relaxed font-medium">
                        "{testimonials[activeTestimonial].content}"
                      </blockquote>
                      <div className="flex items-center justify-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {testimonials[activeTestimonial].avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-white">{testimonials[activeTestimonial].name}</div>
                          <div className="text-blue-200 font-medium">{testimonials[activeTestimonial].role}</div>
                          <div className="text-gray-300 text-sm">{testimonials[activeTestimonial].company}</div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {mounted && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center mt-8 space-x-2"
            >
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-white' : 'bg-white/50'
                  }`}
                  suppressHydrationWarning
                />
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 dark-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with a free consultation and discover how we can optimize your inventory management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-elevated hover:shadow-professional">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="glass" size="lg" className="border-2 border-white/50 text-white hover:bg-white/20">
                Download Case Study
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-professional-dark mb-6">Get In Touch</h2>
              <p className="text-professional-light mb-8">
                Ready to optimize your inventory management? Contact our experts for a personalized consultation.
              </p>
              
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:shadow-soft transition-shadow border border-gray-200"
                >
                  <Phone className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-semibold text-professional-dark">Phone</div>
                    <div className="text-professional-light">+1 (555) 123-4567</div>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:shadow-soft transition-shadow border border-gray-200"
                >
                  <Mail className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-semibold text-professional-dark">Email</div>
                    <div className="text-professional-light">info@inventoryPro.com</div>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:shadow-soft transition-shadow border border-gray-200"
                >
                  <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-semibold text-professional-dark">Office</div>
                    <div className="text-professional-light">123 Business Ave, Suite 100<br />City, State 12345</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-professional">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-professional-dark mb-2">First Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white" 
                          suppressHydrationWarning
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-professional-dark mb-2">Last Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white" 
                          suppressHydrationWarning
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-professional-dark mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white" 
                        suppressHydrationWarning
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-professional-dark mb-2">Company</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white" 
                        suppressHydrationWarning
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-professional-dark mb-2">Message</label>
                      <textarea 
                        rows={4} 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white" 
                        suppressHydrationWarning
                      />
                    </div>
                    <Button className="w-full">
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 overflow-hidden">
        {/* Simple Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                  <Package className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">INVENTORY PRO</h3>
                  <p className="text-gray-300 text-sm font-medium">SUPPLY CHAIN MANAGEMENT</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Professional inventory management solutions for small and mid-size manufacturing and retail companies. 
                Optimize your supply chain, reduce costs, and improve service levels.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300">
                  <Mail className="h-4 w-4 mr-3 text-blue-400" />
                  <span className="text-sm">info@inventorypro.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="h-4 w-4 mr-3 text-blue-400" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-4 w-4 mr-3 text-blue-400" />
                  <span className="text-sm">123 Business Center, Suite 100, New York, NY 10001</span>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-700 pb-2">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Features</a></li>
                <li><a href="#benefits" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Benefits</a></li>
                <li><a href="#industries" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Industries</a></li>
                <li><a href="#challenges" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Challenges</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-700 pb-2">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Inventory Tracking</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Demand Forecasting</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Supply Chain Optimization</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Analytics & Reporting</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Warehouse Management</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                <p>&copy; 2024 Inventory Pro. All rights reserved. | Registered in USA 12345678</p>
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
                <span className="text-gray-600">|</span>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Sitemap</a>
                <span className="text-gray-600">|</span>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InventoryManagementWebsite;