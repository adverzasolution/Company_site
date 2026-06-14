export type Blog = {
  title: string;
  date: string;
  category: string;
  img: string;
  desc: string;
  content: {
    intro: string;
    points: string[];
    conclusion: string;
  };
};

export const blogData: Record<string, Blog> = {
  "branding-business-growth": {
    title: "How Branding Helps Your Business Grow",
    date: "22 January 2025",
    category: "Branding",
    img: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
    desc: "Branding builds trust, recognition, and long-term customer loyalty.",
    content: {
      intro: "Branding is more than just a logo. It represents your identity.",
      points: [
        "Builds trust",
        "Improves recognition",
        "Differentiates from competitors",
        "Creates emotional connection",
      ],
      conclusion: "Strong branding helps businesses grow faster.",
    },
  },

  "top-uiux-trends": {
    title: "Top 5 UI/UX Trends You Must Know",
    date: "15 January 2025",
    category: "Design",
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766",
    desc: "Modern UI/UX is all about simplicity and usability.",
    content: {
      intro: "UI/UX trends keep evolving with technology.",
      points: [
        "Minimal Design",
        "Dark Mode",
        "Micro Interactions",
        "AI Personalization",
      ],
      conclusion: "Good UI/UX improves engagement and conversions.",
    },
  },

  "digital-marketing-2025": {
    title: "Why Digital Marketing Is Important in 2025",
    date: "10 January 2025",
    category: "Marketing",
    img: "https://images.unsplash.com/photo-1557838923-2985c318be48",
    desc: "Digital marketing helps businesses grow online.",
    content: {
      intro: "Digital marketing is essential today.",
      points: [
        "Wider Reach",
        "Cost Effective",
        "Better Targeting",
        "Measurable Results",
      ],
      conclusion: "Without digital marketing, growth is difficult.",
    },
  },

  "ai-changing-web-dev": {
    title: "How AI Is Changing Web Development",
    date: "5 January 2025",
    category: "Technology",
    img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
    desc: "AI is transforming development workflows.",
    content: {
      intro: "AI is revolutionizing web development.",
      points: [
        "Code Automation",
        "Faster Development",
        "Bug Detection",
        "Smart Testing",
      ],
      conclusion: "AI will be core to future development.",
    },
  },
};