import {
  Shield,
  Zap,
  BarChart3,
  Globe,
  Lock,
  Users,
} from "lucide-react";

const features = [
  {
    name: "Secure by Design",
    description:
      "Built with state-of-the-art cryptography and security protocols to ensure your assets are protected.",
    icon: Shield,
  },
  {
    name: "Lightning Fast",
    description:
      "High-performance blockchain architecture capable of processing thousands of transactions per second.",
    icon: Zap,
  },
  {
    name: "Analytics & Insights",
    description:
      "Comprehensive analytics dashboard to monitor your blockchain activities in real-time.",
    icon: BarChart3,
  },
  {
    name: "Global Network",
    description:
      "Connect with a worldwide network of nodes and participants in our decentralized ecosystem.",
    icon: Globe,
  },
  {
    name: "Smart Contracts",
    description:
      "Deploy and execute secure smart contracts with our advanced contract management system.",
    icon: Lock,
  },
  {
    name: "Community Driven",
    description:
      "Join a thriving community of developers, investors, and blockchain enthusiasts.",
    icon: Users,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground text-lg">
            Discover the cutting-edge features that make Cubix the leading blockchain platform for enterprises and developers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 