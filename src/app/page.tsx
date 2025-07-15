'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Clock, 
  TrendingUp, 
  Shield, 
  Phone, 
  FileText, 
  Calendar,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Target
} from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="Axomations Logo" 
                width={180} 
                height={40}
                className="h-auto"
              />
            </div>
            <div className="flex items-center">
              <Link href="/contact" className="btn-secondary flex items-center justify-center">
                Book free audit call
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-navy to-navy/90 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Automate Your Business.<br />
            <span className="text-sky-blue">Reclaim Your Time.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Axomations builds smart, tailor-made automations that save time, reduce error, and grow your business.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="btn-secondary text-lg flex items-center justify-center">
              Book free audit call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Stop Drowning in Manual Tasks
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              Your business is losing time and money on repetitive tasks that could be automated
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Time Drain</h3>
              <p className="text-cool-gray">
                Hours wasted on repetitive tasks that could be automated, preventing you from focusing on growth.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Human Error</h3>
              <p className="text-cool-gray">
                Manual processes lead to mistakes, missed opportunities, and inconsistent customer experiences.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Scaling Issues</h3>
              <p className="text-cool-gray">
                Unable to grow efficiently because every new client means more manual work and overhead.
              </p>
            </div>
          </div>

          <div className="bg-sky-blue/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-navy mb-4">
              Axomations Creates Custom Solutions
            </h3>
            <p className="text-lg text-cool-gray max-w-4xl mx-auto">
              We analyze your unique business processes and build intelligent automations that seamlessly integrate 
              with your existing tools. Our solutions eliminate manual work, reduce errors by 95%, and free up 
              20+ hours per week so you can focus on what matters most—growing your business.
            </p>
          </div>
        </div>
      </section>

      {/* Automation Examples */}
      <section className="section-padding bg-off-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Real Automations That Drive Results
            </h2>
            <p className="text-xl text-cool-gray">
              See how our custom automations transform businesses like yours
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-16 h-16 bg-soft-green/20 rounded-full flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-soft-green" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">
                Missed Call → Instant WhatsApp Response
              </h3>
              <p className="text-cool-gray mb-4">
                Never lose a lead again. When someone calls but doesn't reach you, they instantly receive 
                a personalized WhatsApp message with your availability and booking link.
              </p>
              <div className="flex items-center text-soft-green font-semibold">
                <CheckCircle className="w-4 h-4 mr-2" />
                98% lead capture rate
              </div>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-sky-blue/20 rounded-full flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-sky-blue" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">
                Smart Invoice Automation
              </h3>
              <p className="text-cool-gray mb-4">
                Automatically generate and send invoices when projects are completed, with payment reminders 
                and follow-ups. Integrates with your CRM and accounting software.
              </p>
              <div className="flex items-center text-soft-green font-semibold">
                <CheckCircle className="w-4 h-4 mr-2" />
                45% faster payments
              </div>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">
                Intelligent Appointment Reminders
              </h3>
              <p className="text-cool-gray mb-4">
                Reduce no-shows with smart reminders sent via email, SMS, and WhatsApp. Includes 
                easy rescheduling options and preparation instructions.
              </p>
              <div className="flex items-center text-soft-green font-semibold">
                <CheckCircle className="w-4 h-4 mr-2" />
                80% reduction in no-shows
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Trusted by Growing Businesses
            </h2>
            <p className="text-xl text-cool-gray">
              See what our clients say about their automation journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-cool-gray mb-6 italic">
                "Axomations saved us 25 hours per week on client follow-ups. Our response time went from 
                hours to minutes, and our conversion rate increased by 40%. Best investment we've made!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">JS</span>
                </div>
                <div>
                  <div className="font-semibold text-navy">John Smith</div>
                  <div className="text-cool-gray text-sm">CEO, TechStart Solutions</div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-cool-gray mb-6 italic">
                "The automation they built for our booking system eliminated double-bookings completely 
                and reduced our admin work by 60%. Our customers love the seamless experience."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">MR</span>
                </div>
                <div>
                  <div className="font-semibold text-navy">Maria Rodriguez</div>
                  <div className="text-cool-gray text-sm">Owner, Wellness Clinic</div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-cool-gray mb-6 italic">
                "We went from manually processing 50 orders daily to handling 500+ automatically. 
                The ROI was immediate—we recovered our investment in the first month."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">DL</span>
                </div>
                <div>
                  <div className="font-semibold text-navy">David Lee</div>
                  <div className="text-cool-gray text-sm">Founder, E-commerce Plus</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="border-t border-gray-200 pt-12">
            <div className="text-center mb-8">
              <p className="text-cool-gray font-semibold">Trusted by 50+ businesses across industries</p>
            </div>
            <div className="flex justify-center items-center space-x-8 text-cool-gray">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>50+ Clients</span>
              </div>
              <div className="flex items-center">
                <Target className="w-5 h-5 mr-2" />
                <span>95% Success Rate</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>500+ Hours Saved Monthly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-r from-navy to-navy/90 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Book a free 30-minute audit call and discover exactly how automation 
            can save you time and grow your revenue.
          </p>
          <div className="space-y-4 flex flex-col items-center">
            <Link href="/contact" className="btn-secondary text-lg flex items-center justify-center">
              Book free audit call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <p className="text-sm text-gray-300">
              No commitment • 30-minute audit call • Custom automation plan included
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="ml-2 text-xl font-bold text-navy">Axomations</span>
            </div>
            <div className="text-cool-gray text-sm">
              © 2024 Axomations. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 