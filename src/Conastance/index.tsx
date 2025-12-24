import { ArrowDownToLine, ArrowUpFromLine, Globe, Send, Shield, Zap,Mail, Phone, MapPin, } from "lucide-react";

export const features = [
  {
    icon: Send,
    title: "Send Money",
    description: "Transfer funds instantly to anyone, anywhere in the world with zero hassle.",
  },
  {
    icon: ArrowDownToLine,
    title: "Easy Deposits",
    description: "Add money to your wallet securely using multiple payment methods.",
  },
  {
    icon: ArrowUpFromLine,
    title: "Quick Withdrawals",
    description: "Cash out to your bank account in minutes, not days.",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Your money is protected with enterprise-level encryption.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Transactions complete in seconds, not hours.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Available in 150+ countries with 50+ currencies.",
  },
];


export const stats = [
    { value: "10M+", label: "Active Users" },
    { value: "$5B+", label: "Transactions" },
    { value: "150+", label: "Countries" },
    { value: "99.9%", label: "Uptime" },
  ];

  export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Freelancer",
    content: "PayFlow made it so easy to receive payments from international clients. The fees are minimal and transfers are instant!",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Small Business Owner",
    content: "I've tried many payment solutions, but PayFlow is by far the most reliable. My team loves the simple interface.",
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Digital Nomad",
    content: "Managing money across multiple countries used to be a nightmare. PayFlow changed everything for me.",
    avatar: "ER",
  },
];

export const faqCategories = [
  {
    title: "Getting Started",
    questions: [
      {
        q: "How do I create a PayFlow account?",
        a: "Creating a PayFlow account is simple. Download our app or visit our website, click 'Sign Up', enter your email or phone number, verify your identity, and you're ready to go. The entire process takes less than 2 minutes.",
      },
      {
        q: "Is PayFlow free to use?",
        a: "Yes, creating an account and using basic features is completely free. We only charge small fees for certain transactions like international transfers or instant withdrawals. All fees are clearly displayed before you confirm any transaction.",
      },
      {
        q: "What documents do I need to verify my account?",
        a: "For basic accounts, you only need to verify your email and phone number. For higher limits and additional features, we may ask for a government-issued ID and proof of address. This helps us keep your account secure.",
      },
    ],
  },
  {
    title: "Sending Money",
    questions: [
      {
        q: "How do I send money to someone?",
        a: "To send money, open the app, tap 'Send', enter the recipient's email, phone number, or wallet address, enter the amount, and confirm. The money arrives instantly for PayFlow-to-PayFlow transfers.",
      },
      {
        q: "What are the transfer limits?",
        a: "Basic accounts can send up to $2,500 per day and $10,000 per month. Verified accounts have higher limits of up to $25,000 per day. Business accounts have custom limits based on your needs.",
      },
      {
        q: "Can I send money internationally?",
        a: "Yes! PayFlow supports transfers to 150+ countries. International transfers typically complete within minutes, and you can see the exchange rate and fees before confirming your transfer.",
      },
    ],
  },
  {
    title: "Deposits & Withdrawals",
    questions: [
      {
        q: "How do I add money to my wallet?",
        a: "You can add money via bank transfer, debit card, credit card, or from another PayFlow user. Go to 'Add Money' in the app, choose your method, enter the amount, and follow the prompts.",
      },
      {
        q: "How long do withdrawals take?",
        a: "Instant withdrawals arrive in minutes (small fee applies). Standard withdrawals are free and typically complete within 1-2 business days depending on your bank.",
      },
      {
        q: "Are there any deposit fees?",
        a: "Bank transfers and debit card deposits are free. Credit card deposits have a 2.9% fee. All fees are clearly shown before you confirm any transaction.",
      },
    ],
  },
  {
    title: "Security",
    questions: [
      {
        q: "Is my money safe with PayFlow?",
        a: "Absolutely. We use bank-grade 256-bit SSL encryption, and your funds are held in FDIC-insured partner banks. We also offer 2FA, biometric login, and real-time fraud monitoring.",
      },
      {
        q: "What happens if I lose my phone?",
        a: "If you lose your phone, log in from another device and immediately lock your account. You can also contact our 24/7 support to freeze your account. Your money remains safe and accessible once you regain access.",
      },
      {
        q: "How do I enable two-factor authentication?",
        a: "Go to Settings > Security > Two-Factor Authentication and toggle it on. You can choose between SMS codes or an authenticator app for the second factor.",
      },
    ],
  },
  {
    title: "Account & Support",
    questions: [
      {
        q: "How do I contact customer support?",
        a: "You can reach us via in-app chat, email at support@payflow.com, or call +1 (555) 123-4567. Our team is available 24/7 to assist you with any issues.",
      },
      {
        q: "Can I have multiple accounts?",
        a: "Each person can have one personal account. However, you can also create a separate business account linked to your personal account for managing business finances.",
      },
      {
        q: "How do I close my account?",
        a: "To close your account, first withdraw all funds, then go to Settings > Account > Close Account. Note that this action is permanent and your transaction history will be deleted after 90 days.",
      },
    ],
  },
];


export  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "support@payflow.com",
      description: "We reply within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Financial District",
      description: "San Francisco, CA 94111",
    },
  ];


  export const Role ={
    admin:"admin",
    agent:"agent",
    user:"user"
  }