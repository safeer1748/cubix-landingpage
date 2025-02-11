import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/0 rounded-2xl" />
            <Image
              src="/blockchain-illustration.svg"
              alt="Blockchain Technology"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">About Cubix</h2>
            <p className="text-lg text-muted-foreground">
              Cubix is a pioneering force in the blockchain industry, dedicated to creating innovative solutions that transform how businesses and individuals interact with digital assets.
            </p>
            <p className="text-lg text-muted-foreground">
              Our mission is to make blockchain technology accessible, secure, and scalable for everyone. We believe in a future where decentralized systems power the world&apos;s financial and technological infrastructure.
            </p>
            <div className="pt-4">
              <Button>
                Learn Our Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 