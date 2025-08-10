"use client"

import {
  BellIcon,
  LifeBuoyIcon,
  Link2Icon,
  ShieldCheckIcon,
} from "lucide-react";
import {
  Accordion09,
  Accordion09Content,
  Accordion09Header,
  Accordion09Item,
  Accordion09Trigger,
} from '@/components/ui/shadcn-io/accordion-09';

const items = [
  {
    id: "1",
    icon: Link2Icon,
    title: "Connected accounts",
    subtitle: "Manage your linked social and work accounts",
    content:
      "Connect your accounts from Google, GitHub, or Microsoft to enable single sign-on and streamline your workflow. Connected accounts can be used for quick login and importing your preferences across platforms. You can revoke access to any connected account at any time.",
  },
  {
    id: "2",
    icon: BellIcon,
    title: "Notifications",
    subtitle: "Customize your notification preferences",
    content:
      "Choose which updates you want to receive. You can get notifications for: security alerts, billing updates, newsletter and product announcements, usage reports, and scheduled maintenance. Notifications can be delivered via email, SMS, or push notifications on your devices.",
  },
  {
    id: "3",
    icon: ShieldCheckIcon,
    title: "2-step verification",
    subtitle: "Add an extra layer of security to your account",
    content:
      "Protect your account with two-factor authentication. You can use authenticator apps like Google Authenticator or Authy, receive SMS codes, or use security keys like YubiKey. We recommend using an authenticator app for the most secure experience.",
  },
  {
    id: "4",
    icon: LifeBuoyIcon,
    title: "Contact support",
    subtitle: "We're here to help 24/7",
    content:
      "Our support team is available around the clock to assist you. For billing inquiries, technical issues, or general questions, you can reach us through live chat, email at support@shadcn.io, or schedule a call with our technical team. Premium support is available for enterprise customers.",
  },
];

export default function FAQSection() {
  return (
    <div className="flex justify-center">
      <Accordion09 type="single" collapsible className="w-full max-w-2xl" defaultValue="3">
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