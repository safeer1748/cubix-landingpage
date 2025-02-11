import { CheckCircle2, Circle } from "lucide-react";

const milestones = [
  {
    phase: "Phase 1",
    title: "Foundation",
    description: "Launch of core blockchain infrastructure and basic smart contract functionality",
    date: "Q1 2024",
    completed: true,
  },
  {
    phase: "Phase 2",
    title: "Expansion",
    description: "Integration of advanced smart contracts and cross-chain capabilities",
    date: "Q2 2024",
    completed: true,
  },
  {
    phase: "Phase 3",
    title: "Scaling",
    description: "Implementation of layer 2 scaling solutions and improved transaction throughput",
    date: "Q3 2024",
    completed: false,
  },
  {
    phase: "Phase 4",
    title: "Enterprise Solutions",
    description: "Launch of enterprise-grade features and industry-specific solutions",
    date: "Q4 2024",
    completed: false,
  },
  {
    phase: "Phase 5",
    title: "Global Adoption",
    description: "Expansion of ecosystem and strategic partnerships",
    date: "Q1 2025",
    completed: false,
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Roadmap</h2>
          <p className="text-muted-foreground text-lg text-center">
            Follow our journey as we build the future of blockchain technology.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-8">
          {milestones.map((milestone, index) => (
            <div key={milestone.phase} className="relative pl-8 pb-8 last:pb-0">
              {index !== milestones.length - 1 && (
                <div className="absolute left-[11px] top-3 h-full w-px bg-border" />
              )}
              <div className="flex gap-4">
                <div className="absolute left-0 top-1">
                  {milestone.completed ? (
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  ) : (
                    <Circle className="h-6 w-6 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                    <h3 className="text-xl font-semibold">{milestone.phase}</h3>
                    <div className="text-sm text-muted-foreground px-2 py-1 bg-muted rounded w-fit">
                      {milestone.date}
                    </div>
                  </div>
                  <h4 className="font-medium mb-2">{milestone.title}</h4>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 