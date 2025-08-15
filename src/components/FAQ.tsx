import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ScrollAnimation } from './ScrollAnimation';


const faqs = [
  {
    question: "Can I test an email before starting my campaigns?",
    answer: "Absolutely! Our platform includes a comprehensive testing suite where you can preview personalized emails, A/B test different variations, and analyze performance metrics before launching full campaigns. You can send test emails to yourself or a small group to ensure quality and effectiveness."
  },
  {
    question: "How do you ensure that the personalized emails don't come across as generic or automated?",
    answer: "Our AI analyzes over 50+ data points per prospect including recent company news, social media activity, job changes, and industry trends. Each email is crafted with unique insights and conversational language that feels genuinely human. We also rotate templates and writing styles to maintain authenticity."
  },
  {
    question: "How many emails can the system send out for me each day?",
    answer: "Our system can send 200-500 emails per day per connected mailbox, depending on your account age and reputation. We automatically manage sending limits, warm-up sequences, and optimal timing to maintain high deliverability rates while maximizing your outreach volume."
  },
  {
    question: "How do you avoid ending up in spam?",
    answer: "We use advanced deliverability techniques including domain warming, SPF/DKIM/DMARC setup, IP reputation management, and content optimization. Our AI monitors spam trigger words and phrases, maintains proper sending ratios, and uses human-like sending patterns to ensure your emails reach the inbox."
  },
  {
    question: "How accurate is the automated prospect research?",
    answer: "Our prospect research achieves 95%+ accuracy by combining multiple data sources including LinkedIn, company websites, news articles, and proprietary databases. We verify contact information in real-time and continuously update prospect profiles to ensure you're working with the most current and accurate data."
  },
  {
    question: "Does it integrate directly with my mailbox?",
    answer: "Yes! We integrate seamlessly with Gmail, Outlook, and other major email providers. The integration is secure, maintains your existing email setup, and allows you to manage all conversations from your familiar email interface while our AI handles the heavy lifting behind the scenes."
  },
  {
    question: "When a prospect replies, what happens next?",
    answer: "All replies are automatically forwarded to your inbox with intelligent categorization (positive, negative, out-of-office, etc.). Our AI can also suggest follow-up responses and automatically handle common scenarios like meeting scheduling, while ensuring you never miss an important conversation."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollAnimation animation="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about our <span className="font-semibold text-gray-900 underline-animation">AI-powered lead generation</span> system
            </p>
          </div>
        </ScrollAnimation>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollAnimation key={index} animation="slideUp" delay={index * 50}>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden stable-container">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-300 stable-animation hover:scale-[1.01] transform"
                  style={{ transform: 'translateZ(0)' }}
                >
                  <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 rotate-180" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300" />
                  )}
                </button>
                
                <div className={`transition-all duration-500 ease-in-out stable-animation ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};