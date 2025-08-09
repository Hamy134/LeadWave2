import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Mail, User, Building } from 'lucide-react';

const emailExamples = [
  {
    id: 1,
    recipient: "Laura Mitchell",
    company: "Mitchell Manufacturing",
    role: "Operations Director",
    subject: "Quick idea for improving cash flow",
    preview: "Hi Laura, noticed your recent post about delayed supplier payments...",
    content: `Hi Laura,

I saw your post last week about supplier payment delays pushing back production at Mitchell Manufacturing. That kind of disruption is tough, especially with your recent launch of the new Oak Ridge facility.

We recently helped a similar manufacturer in Dayton, Ohio free up 20 percent more working capital. They did this by adjusting payment terms with key suppliers and revising quarterly tax planning strategies.

One client was able to advance a $275,000 equipment purchase without increasing their credit line, which freed up cash for unexpected maintenance.

Would you be open to a 15-minute call next week? I’d love to explore if these approaches might ease cash flow pressures for you too.

Best,  
Ethan`,
    personalization: ["Recent LinkedIn post", "Oak Ridge facility", "Local company example"]
  },
  {
    id: 2,
    recipient: "Sophie Allen",
    company: "Allen & Gray Interiors",
    role: "Creative Director",
    subject: "Loved your new showroom launch",
    preview: "Hi Sophie, saw the photos from your new showroom opening last week...",
    content: `Hi Sophie,

I loved seeing the photos from your Allen & Gray showroom opening in Richmond last Tuesday. The way you combined natural textures with bold jewel tones really stood out.

We’ve been working with interior design studios in Melbourne’s south-east to connect them directly with developers and architects who are prioritising sustainable and boutique design.

For example, one client recently booked eight developer meetings over six weeks — all from messages tailored to recent projects those developers completed.

Given the surge in demand for sustainable commercial spaces, I thought a personalised outreach campaign might open up new partnerships for Allen & Gray this quarter without adding more to your already busy schedule.

Can I send you a couple of example messages?

Cheers,  
Marcus`,
    personalization: ["Showroom launch date", "Richmond location", "Local developer network"]
  },
  {
    id: 3,
    recipient: "David Harper",
    company: "Harper & Co Real Estate",
    role: "Managing Director",
    subject: "Re: Finding more off-market sellers",
    preview: "Hi David, noticed you’ve been posting about rising demand in Bayside...",
    content: `Hi David,

I saw your recent posts about the rising buyer demand in Bayside, especially around Hampton and Sandringham. Properties are selling before they even reach major listing sites.

We help agencies like Harper & Co identify off-market sellers by reaching out to homeowners showing early signs like recent refinancing, council permits for extensions, or landscaping projects.

One client booked 12 off-market valuation appointments in just three weeks by sending highly personalised messages reflecting each homeowner’s situation.

With your focus on premium properties in competitive suburbs, a tailored approach could help you secure more exclusive listings before other agents even hear about them.

Would you be open to a quick call to discuss how this could work?

Best,  
Samantha`,
    personalization: ["Bayside suburbs", "Recent market trends", "Personalized seller signals"]
  },
  {
    id: 4,
    recipient: "Olivia Bennett",
    company: "Bennett Recruitment",
    role: "Founder",
    subject: "Quick win for filling niche tech roles",
    preview: "Hi Olivia, saw your post about the shortage of data engineers...",
    content: `Hi Olivia,

I read your LinkedIn post about the shortage of data engineers and how candidates often don’t stick past probation. It’s a widespread issue in fintech and SaaS, especially for startups scaling fast like VelocityTech.

We’ve helped agencies like Bennett Recruitment win more retained contracts by identifying and engaging hiring managers before they post roles publicly.

A fintech client recently filled three critical retained roles in under 30 days through proactive, hyper-personalised outreach referencing their tech stack and recent product launches.

For specialised roles, timing is key — being the first recruiter to connect can make all the difference.

Can I share a couple of example campaigns that worked well for similar agencies?

Best,  
Tom`,
    personalization: ["LinkedIn hiring post", "VelocityTech client", "Fintech recruiting"]
  },
  {
    id: 5,
    recipient: "Rachel King",
    company: "King’s Legal Advisory",
    role: "Senior Partner",
    subject: "Your recent case win",
    preview: "Hi Rachel, congratulations on that commercial litigation win last month...",
    content: `Hi Rachel,

Congrats on your recent commercial litigation win involving Westfield Construction. I read the coverage in Business Law Weekly — impressive work for a boutique firm.

We help firms like King’s Legal Advisory win more high-value retainers by connecting them with CFOs and legal heads in sectors prone to disputes you specialise in.

One client secured eight new retainers in six weeks by sending a series of messages tailored to decision-makers in the construction and manufacturing sectors.

With your momentum, it could be a great time to reach more corporate clients who’d benefit from your expertise.

Would you be open to a brief call to explore this?

Best,  
Daniel`,
    personalization: ["Recent litigation win", "Business Law Weekly", "Construction sector targeting"]
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