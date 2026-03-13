import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#fafaf9] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center py-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-primary-50 text-primary-600 border border-primary-100 mb-6">
            Get In Touch
          </span>
          <h1 className="font-display text-4xl font-bold text-[#0f0f1a] sm:text-5xl mb-4">
            Let&apos;s build something great
          </h1>
          <p className="mt-2 max-w-xl mx-auto text-lg text-[#7878a0]">
            Tell us about your business challenge. We&apos;ll share how AI can solve it and what that could mean for your bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="font-display text-2xl font-bold text-[#0f0f1a] mb-8">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-50 border border-primary-100 rounded-xl flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0f0f1a] mb-1">Our Office</h3>
                  <p className="text-sm text-[#7878a0] leading-relaxed">
                    8, Birla Tower<br />
                    25 Barakhamba Road<br />
                    New Delhi, India 110001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-50 border border-primary-100 rounded-xl flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0f0f1a] mb-1">Phone</h3>
                  <p className="text-sm text-[#7878a0]">
                    <a href="tel:+918003075046" className="hover:text-primary-600 transition-colors">+91 80030 75046</a>
                  </p>
                  <p className="text-xs text-[#b0aec8] mt-0.5">Mon to Fri, 9AM to 6PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-50 border border-primary-100 rounded-xl flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0f0f1a] mb-1">Email</h3>
                  <a href="mailto:support@eigur.in" className="text-sm text-primary-600 hover:text-primary-700 transition-colors">
                    support@eigur.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0f0f1a] mb-1">WhatsApp</h3>
                  <a href="https://wa.me/918003075046" target="_blank" rel="noopener noreferrer" className="text-sm text-emerald-600 hover:text-emerald-700 transition-colors">
                    +91 80030 75046
                  </a>
                  <p className="text-xs text-[#b0aec8] mt-0.5">Available 24/7 for urgent queries</p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-10 p-5 rounded-2xl bg-white border border-black/[0.06] shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-4 w-4 text-primary-500" />
                <h3 className="font-display font-bold text-[#0f0f1a] text-sm">Office Hours</h3>
              </div>
              <ul className="space-y-2.5">
                <li className="flex justify-between text-sm">
                  <span className="text-[#4b5068] font-medium">Monday to Friday</span>
                  <span className="text-[#7878a0]">9:00 AM to 6:00 PM IST</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-[#4b5068] font-medium">Saturday</span>
                  <span className="text-[#7878a0]">10:00 AM to 2:00 PM IST</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-[#4b5068] font-medium">Sunday</span>
                  <span className="text-[#b0aec8]">Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl border border-black/[0.06] shadow-sm p-8">
              <h2 className="font-display text-2xl font-bold text-[#0f0f1a] mb-2">Send us a message</h2>
              <p className="text-sm text-[#9896b0] mb-6">We typically respond within 4 business hours.</p>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-semibold text-[#4b5068] uppercase tracking-wide mb-1.5">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-3 py-2.5 rounded-xl border border-[rgba(109,40,217,0.15)] bg-white text-sm text-[#0f0f1a] focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                      placeholder="Rohit"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-semibold text-[#4b5068] uppercase tracking-wide mb-1.5">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-3 py-2.5 rounded-xl border border-[rgba(109,40,217,0.15)] bg-white text-sm text-[#0f0f1a] focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                      placeholder="Sharma"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-semibold text-[#4b5068] uppercase tracking-wide mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-3 py-2.5 rounded-xl border border-[rgba(109,40,217,0.15)] bg-white text-sm text-[#0f0f1a] focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                    placeholder="Acme India Pvt. Ltd."
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[#4b5068] uppercase tracking-wide mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2.5 rounded-xl border border-[rgba(109,40,217,0.15)] bg-white text-sm text-[#0f0f1a] focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-[#4b5068] uppercase tracking-wide mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2.5 rounded-xl border border-[rgba(109,40,217,0.15)] bg-white text-sm text-[#0f0f1a] focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-semibold text-[#4b5068] uppercase tracking-wide mb-1.5">
                    I am interested in
                  </label>
                  <select
                    id="service"
                    className="w-full px-3 py-2.5 rounded-xl border border-[rgba(109,40,217,0.15)] bg-white text-sm text-[#0f0f1a] focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                  >
                    <option>Select a service</option>
                    <option>IT Process Automation</option>
                    <option>Financial AI Solutions</option>
                    <option>Agriculture Intelligence</option>
                    <option>Retail Intelligence</option>
                    <option>Business Automation</option>
                    <option>AI Consulting and Strategy</option>
                    <option>Custom AI Development</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#4b5068] uppercase tracking-wide mb-1.5">
                    Tell us about your challenge
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2.5 rounded-xl border border-[rgba(109,40,217,0.15)] bg-white text-sm text-[#0f0f1a] focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 resize-none"
                    placeholder="What problem are you trying to solve? The more detail, the better we can help."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors shadow-sm"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 pb-16">
          <h2 className="font-display text-2xl font-bold text-[#0f0f1a] text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                question: "How long does it take to implement an AI solution?",
                answer: "Most solutions go live in 4 to 16 weeks depending on scope. We start with a 2-week discovery sprint, then iterate rapidly. You see working software every two weeks."
              },
              {
                question: "Do you offer support after implementation?",
                answer: "Yes. Every project includes a 90-day hypercare period with full monitoring, model retraining, and team training. Long-term support contracts are available."
              },
              {
                question: "Are your solutions customizable for our business?",
                answer: "Entirely. We do not sell off-the-shelf software. Every solution is built on your data, your workflows, and your business context. No shelfware."
              },
              {
                question: "What industries do you specialize in?",
                answer: "IT/SaaS, Finance and BFSI, Agriculture, Retail, Manufacturing, Healthcare, and Logistics. We have delivered over 100 projects across these sectors in India."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-black/[0.06] shadow-sm p-6">
                <h3 className="font-display font-bold text-[#0f0f1a] mb-2">{faq.question}</h3>
                <p className="text-sm text-[#7878a0] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
