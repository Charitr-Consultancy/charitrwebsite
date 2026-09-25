import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { contact } from "@/data/site";

export function CTASection({
  title = "Have a technology challenge or a product idea that needs structure?",
  button = "Start a Conversation",
}: {
  title?: string;
  button?: string;
}) {
  return (
    <section className="cta-section cta-photo">
      <Image src="/site-assets/business-meeting-cta.webp" alt="" fill unoptimized sizes="100vw" />
      <div className="container cta-grid">
        <div className="cta-content">
          <p className="eyebrow">Let’s make progress</p>
          <h2>{title}</h2>
          <div className="cta-actions">
            <Link className="button button--amber" href="/contact">{button}<ArrowRight size={18} /></Link>
            <a href={contact.phoneHref}><Phone size={17} />{contact.phone}</a>
            <a href={contact.emailHref}><Mail size={17} />{contact.email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
