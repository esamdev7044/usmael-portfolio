import { ChannelTiles } from "@/components/channel-tiles";
import { ContactForm } from "@/components/contact-form";
import { EmailTile } from "@/components/email-tile";
import { Reveal } from "@/components/reveal";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <div className="grid gap-4">
      <Reveal>
        <EmailTile email={profile.email} />
      </Reveal>
      <Reveal delay={0.05}>
        <ChannelTiles />
      </Reveal>
      <Reveal delay={0.1}>
        <ContactForm />
      </Reveal>
    </div>
  );
}