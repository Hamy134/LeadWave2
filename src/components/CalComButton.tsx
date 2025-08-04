import { useEffect } from 'react';
import { Calendar } from 'lucide-react';

interface CalComButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
}

export const CalComButton = ({ children, className = '', variant = 'primary' }: CalComButtonProps) => {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script if component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const baseClass = `inline-flex items-center justify-center space-x-2 font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] ${className}`;
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary', 
    ghost: 'btn-ghost'
  };

  return (
    <button
      className={`${baseClass} ${variantClasses[variant]}`}
      data-cal-link="hamish-countwave/30min"
      data-cal-config='{"layout":"month_view"}'
    >
      <Calendar className="w-4 h-4" />
      <span>{children}</span>
    </button>
  );
};