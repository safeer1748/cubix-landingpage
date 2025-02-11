import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    bio: "Blockchain pioneer with 15+ years in fintech",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    bio: "Former lead developer at Ethereum Foundation",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Research",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=elena",
    bio: "PhD in Cryptography from MIT",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    bio: "Smart contract and DeFi expert",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
];

export function Team() {
  return (
    <section id="team" className="py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground text-lg">
          The brilliant minds behind Cubix&apos;s innovative blockchain solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-lg bg-card"
            >
              <div className="aspect-square relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex gap-4">
                  <a
                    href={member.social.twitter}
                    className="text-muted-foreground hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-muted-foreground hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.github}
                    className="text-muted-foreground hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 