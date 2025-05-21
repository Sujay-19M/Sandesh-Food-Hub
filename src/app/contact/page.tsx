import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact Us | Sandesh Food Hub',
  description: 'Get in touch with Sandesh Food Hub. Find our address, phone number, and send us a message. We look forward to hearing from you!',
};

const restaurantDetails = {
  addressLine1: '123 Green Leaf Lane',
  addressLine2: 'Herbal City, Flavortown 456001',
  phone: '+911234567890', 
  whatsapp: '911234567890',
  email: 'info@sandeshfoodhub.example.com', 
};

export default function ContactPage() {
  return (
    <div className="bg-background py-12"> {/* Beige background */}
      <Container>
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl"> {/* Green heading */}
            Get In Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70"> {/* Dark brown text */}
            We&apos;d love to hear from you! Visit us or contact us for reservations and inquiries.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="shadow-lg bg-card border-border"> {/* Card styles */}
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2"> {/* Green title */}
                <MapPin className="h-6 w-6 text-accent" /> Our Location {/* Orange icon */}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <address className="text-foreground/80 not-italic"> {/* Dark brown text */}
                <p>{restaurantDetails.addressLine1}</p>
                <p>{restaurantDetails.addressLine2}</p>
              </address>
              <p className="text-foreground/80"> {/* Dark brown text */}
                <strong>Email:</strong> <a href={`mailto:${restaurantDetails.email}`} className="text-accent hover:text-secondary">{restaurantDetails.email}</a> {/* Orange link, Mint hover */}
              </p>
              <div className="mt-6 space-y-3">
                <Button asChild size="lg" className="w-full bg-accent hover:bg-secondary text-accent-foreground hover:text-secondary-foreground"> {/* Orange button, Mint hover */}
                  <a href={`tel:${restaurantDetails.phone}`}>
                    <Phone className="mr-2 h-5 w-5" /> Call Us Now
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground"> {/* Green outline button */}
                  <a href={`https://wa.me/${restaurantDetails.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg overflow-hidden bg-card border-border"> {/* Card styles */}
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Find Us on Map</CardTitle> {/* Green title */}
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted/20 rounded-md flex items-center justify-center"> {/* Lighter muted for map placeholder */}
                 <Image 
                    src="https://placehold.co/600x400.png" 
                    alt="Restaurant location map placeholder" 
                    width={600} 
                    height={400} 
                    className="rounded-md object-cover"
                    data-ai-hint="map location"
                  />
              </div>
               <p className="text-sm text-muted-foreground mt-2 text-center">Map functionality coming soon. Find us at the address above.</p> {/* This muted-foreground is on dark brown, should be light */}
            </CardContent>
          </Card>
        </div>
        
        <section className="mt-16 text-center">
            <h2 className="text-2xl font-semibold text-primary mb-3">Opening Hours</h2> {/* Green heading */}
            <p className="text-foreground/80">Monday - Sunday: 11:00 AM - 11:00 PM</p> {/* Dark brown text */}
            <p className="text-sm text-muted-foreground mt-2">(Kitchen closes at 10:30 PM)</p> {/* Muted (dark brown) text on beige bg */}
        </section>

      </Container>
    </div>
  );
}
