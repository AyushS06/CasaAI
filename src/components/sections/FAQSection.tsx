"use client"

import {
  HomeIcon,
  BrainIcon,
  ShieldCheckIcon,
  LifeBuoyIcon,
  CreditCardIcon,
  UsersIcon,
  BarChart3Icon,
  ZapIcon,
} from "lucide-react";
import {
  Accordion09,
  Accordion09Content,
  Accordion09Header,
  Accordion09Item,
  Accordion09Trigger,
} from '@/components/ui/shadcn-io/accordion-09/index';

const items = [
  {
    id: "1",
    icon: BrainIcon,
    title: "How does CasaAI's AI system work?",
    subtitle: "Understanding our AI-powered property management",
    content:
      "CasaAI uses advanced artificial intelligence to automate your entire property management workflow. Our AI system, Rio, handles tenant screening, maintenance requests, rent collection, and market analysis. It learns from your preferences and property data to make intelligent decisions, saving you hours of manual work while providing real-time insights and recommendations.",
  },
  {
    id: "2",
    icon: HomeIcon,
    title: "What types of properties can I manage?",
    subtitle: "Comprehensive property management for all types",
    content:
      "CasaAI supports all types of residential and commercial properties including single-family homes, apartments, condos, townhouses, office buildings, retail spaces, and mixed-use properties. Whether you own one property or manage a large portfolio, our platform scales to meet your needs with customizable workflows for different property types.",
  },
  {
    id: "3",
    icon: BarChart3Icon,
    title: "How does the analytics dashboard help me?",
    subtitle: "Real-time insights for better decision making",
    content:
      "Our comprehensive analytics dashboard provides real-time data on rental income, expenses, occupancy rates, market trends, and property performance. Track ROI, compare properties, identify opportunities, and make data-driven decisions. The dashboard automatically generates reports and alerts you to important trends or issues that need attention.",
  },
  {
    id: "4",
    icon: ZapIcon,
    title: "What automated workflows are available?",
    subtitle: "Streamline your property management tasks",
    content:
      "CasaAI automates rent collection, maintenance scheduling, tenant communication, lease renewals, and financial reporting. Set up custom workflows for tenant screening, property inspections, and emergency responses. Our system handles routine tasks while you focus on growing your real estate business and building relationships with tenants.",
  },
  {
    id: "5",
    icon: CreditCardIcon,
    title: "How does pricing work?",
    subtitle: "Transparent pricing for all property managers",
    content:
      "CasaAI offers flexible pricing plans based on the number of properties you manage. We provide a free tier for small portfolios, with premium plans for larger operations. All plans include our AI-powered features, analytics dashboard, and customer support. No hidden fees or setup costs - you only pay for what you need.",
  },
  {
    id: "6",
    icon: UsersIcon,
    title: "Can I manage multiple properties and tenants?",
    subtitle: "Scalable portfolio management",
    content:
      "Yes! CasaAI is designed for multi-property portfolio management. You can manage hundreds of properties and thousands of tenants from a single dashboard. Our platform handles tenant applications, lease management, maintenance requests, and financial tracking across your entire portfolio. Scale your real estate business without the complexity of traditional property management.",
  },
  {
    id: "7",
    icon: ShieldCheckIcon,
    title: "Is my data secure?",
    subtitle: "Enterprise-grade security for your properties",
    content:
      "Absolutely. CasaAI uses bank-level encryption and security protocols to protect your property data, tenant information, and financial records. We're compliant with industry standards and regulations. Your data is backed up securely and you have full control over access permissions. We never share your information with third parties without your explicit consent.",
  },
  {
    id: "8",
    icon: LifeBuoyIcon,
    title: "How do I get support?",
    subtitle: "24/7 support for property managers",
    content:
      "Our dedicated support team is available 24/7 to help you with any questions or issues. Contact us through live chat, email at support@casaai.com, or schedule a call with our property management experts. We also offer comprehensive documentation, video tutorials, and training sessions to help you get the most out of CasaAI.",
  },
];

export default function FAQSection() {
  return (
    <div className="flex justify-center">
      <Accordion09 type="single" collapsible className="w-full max-w-2xl" defaultValue="1">
        {items.map((item) => (
          <Accordion09Item value={item.id} key={item.id}>
            <Accordion09Header>
              <Accordion09Trigger 
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
              />
            </Accordion09Header>
            <Accordion09Content>
              {item.content}
            </Accordion09Content>
          </Accordion09Item>
        ))}
      </Accordion09>
    </div>
  );
} 