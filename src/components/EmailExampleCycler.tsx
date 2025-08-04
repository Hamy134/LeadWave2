import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Mail, User, Building } from 'lucide-react';

const emailExamples = [
  {
    id: 1,
    recipient: "Sarah Chen",
    company: "TechFlow Inc",
    role: "VP of Sales",
    subject: "Quick question about your SDR hiring",
    preview: "Hi Sarah, saw your LinkedIn post about scaling your sales team...",
    content: `Hi Sarah,

Saw your LinkedIn post about scaling your sales team from 5 to 15 reps this quarter.

We've helped similar SaaS companies like yours reduce SDR ramp time by 60% through hyper-personalized outreach that actually converts.

Quick question: What's your biggest challenge with getting new SDRs to quota faster?

Worth a 15-min chat?

Best,
Alex`,
    personalization: ["Recent LinkedIn activity", "Team scaling goals", "Industry context"]
  },
  {
    id: 2,
    recipient: "Marcus Rodriguez",
    company: "DataSync Solutions", 
    role: "Founder & CEO",
    subject: "Congrats on the Series A - scaling question",
    preview: "Hi Marcus, congrats on closing your Series A last month...",
    content: `Hi Marcus,

Congrats on closing your Series A last month! Exciting times ahead for DataSync.

I noticed you're planning to 3x your sales team based on your recent TechCrunch interview. 

We just helped a Series A company in the data space go from 12% to 34% email response rates using AI-powered personalization at scale.

Their biggest win? Cutting prospect research time from 30 minutes to 30 seconds per lead.

Mind if I share their exact playbook with you?

Best,
Alex`,
    personalization: ["Recent funding news", "Growth plans", "Industry benchmarks"]
  },
  {
    id: 3,
    recipient: "Emily Watson",
    company: "CloudFirst",
    role: "Director of Marketing",
    subject: "Your 'death of cold email' article",
    preview: "Hi Emily, loved your recent article about the death of generic cold emails...",
    content: `Hi Emily,

Loved your recent article about the death of generic cold emails. You're spot on about personalization being the game-changer.

Curious: what if you could automate that level of personalization?

We're helping B2B teams maintain authentic, personalized outreach while scaling 10x faster using AI research and content generation.

CloudFirst's current email strategy looks solid, but I'd love to show you how companies like yours are achieving 40%+ response rates.

15-minute demo this week?

Best,
Alex`,
    personalization: ["Recent content", "Current strategy analysis", "Relevant metrics"]
  },
  {
    id: 4,
    recipient: "David Kim",
    company: "NextGen Logistics",
    role: "Head of Business Development",
    subject: "Re: Automating lead qualification",
    preview: "Hi David, noticed you're hiring for a Lead Qualification Specialist...",
    content: `Hi David,

Noticed you're hiring for a Lead Qualification Specialist on your careers page.

What if I told you we could automate 80% of that qualification process while maintaining the personal touch your prospects expect?

NextGen's expansion into the European market (congrats btw!) probably means more leads to qualify across different time zones.

We've helped logistics companies like yours qualify 3x more leads with the same team size.

Worth exploring how this could accelerate your European launch?

Best,
Alex`,
    personalization: ["Current hiring", "Market expansion", "Industry-specific benefits"]
  },
  {
    id: 5,
    recipient: "Lisa Thompson",
    company: "InnovateCRM",
    role: "Chief Revenue Officer",
    subject: "Your Q4 revenue acceleration strategy",
    preview: "Hi Lisa, with Q4 being make-or-break for SaaS companies...",
    content: `Hi Lisa,

With Q4 being make-or-break for SaaS companies, I imagine you're laser-focused on pipeline acceleration right now.

Saw InnovateCRM hit 150% of Q3 targets (impressive!) and curious about your strategy for maintaining that momentum.

We're helping CROs like yourself add 40% more qualified meetings to their pipeline without increasing headcount.

Our secret? AI that researches prospects better than most humans and crafts emails that actually get responses.

Quick call this week to share how we helped a similar CRM company add $2M to their Q4 pipeline?

Best,
Alex`,
    personalization: ["Quarterly performance", "Industry timing", "Revenue goals"]
  }
];

export const EmailExampleCycler = () => {
  const [currentEmailIndex, setCurrentEmailIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentEmail = emailExamples[currentEmailIndex];

  const handleGenerateExample = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentEmailIndex((prev) => (prev + 1) % emailExamples.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="w-full max-w-lg">
      <div className="glass-card rounded-2xl p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-primary" />
            <span className="font-semibold text-sm text-muted-foreground">AI-Generated Email</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-success rounded-full animate-glow-pulse" />
            <span className="text-xs text-success font-medium">Live</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentEmail.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="space-y-4"
          >
            {/* Recipient Info */}
            <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 text-muted-foreground" />
                <div>
                  <div className="font-semibold text-sm">{currentEmail.recipient}</div>
                  <div className="text-xs text-muted-foreground">{currentEmail.role}</div>
                </div>
              </div>
              <div className="flex items-center space-x-1 ml-auto">
                <Building className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{currentEmail.company}</span>
              </div>
            </div>

            {/* Email Content */}
            <div className="space-y-3">
              <div>
                <div className="text-xs text-muted-foreground mb-1">Subject:</div>
                <div className="font-semibold text-sm">{currentEmail.subject}</div>
              </div>
              
              <div>
                <div className="text-xs text-muted-foreground mb-2">Message:</div>
                <div className="text-sm leading-relaxed text-foreground/90 whitespace-pre-line">
                  {currentEmail.content}
                </div>
              </div>
            </div>

            {/* Personalization Tags */}
            <div className="space-y-2">
              <div className="text-xs text-muted-foreground">AI Personalization:</div>
              <div className="flex flex-wrap gap-2">
                {currentEmail.personalization.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center space-x-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Generate Button */}
        <button
          onClick={handleGenerateExample}
          disabled={isAnimating}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <motion.div
            className="flex items-center justify-center space-x-2"
            whileTap={{ scale: 0.98 }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Generate Email Example</span>
          </motion.div>
        </button>
      </div>
    </div>
  );
};