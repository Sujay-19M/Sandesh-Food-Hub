import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact Us | Veggie Delights',
  description: 'Get in touch with Veggie Delights. Find our address, phone number, and send us a message. We look forward to hearing from you!',
};

const restaurantDetails = {
  addressLine1: '123 Green Leaf Lane',
  addressLine2: 'Herbal City, Flavortown 456001',
  phone: '+911234567890', // Replace with actual phone
  whatsapp: '911234567890', // Replace with actual WhatsApp number (no +)
  email: 'info@veggiedelights.example.com', // Replace with actual email
};

export default function ContactPage() {
  return (
    <div className="bg-background py-12">
      <Container>
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            We&apos;d love to hear from you! Visit us or contact us for reservations and inquiries.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <MapPin className="h-6 w-6 text-accent" /> Our Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <address className="text-foreground/80 not-italic">
                <p>{restaurantDetails.addressLine1}</p>
                <p>{restaurantDetails.addressLine2}</p>
              </address>
              <p className="text-foreground/80">
                <strong>Email:</strong> <a href={`mailto:${restaurantDetails.email}`} className="text-accent hover:underline">{restaurantDetails.email}</a>
              </p>
              <div className="mt-6 space-y-3">
                <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href={`tel:${restaurantDetails.phone}`}>
                    <Phone className="mr-2 h-5 w-5" /> Call Us Now
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-500/10">
                  <a href={`https://wa.me/${restaurantDetails.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Find Us on Map</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Placeholder for map. You can embed a Google Map iframe here. */}
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                 <Image 
                    src="https://placehold.co/600x400.png" 
                    alt="Restaurant location map placeholder" 
                    width={600} 
                    height={400} 
                    className="rounded-md object-cover"
                    data-ai-hint="map location"
                  />
              </div>
               <p className="text-sm text-muted-foreground mt-2 text-center">Map functionality coming soon. Find us at the address above.</p>
            </CardContent>
          </Card>
        </div>
        
        <section className="mt-16 text-center">
            <h2 className="text-2xl font-semibold text-primary mb-3">Opening Hours</h2>
            <p className="text-foreground/80">Monday - Sunday: 11:00 AM - 11:00 PM</p>
            <p className="text-sm text-muted-foreground mt-2">(Kitchen closes at 10:30 PM)</p>
        </section>

      </Container>
    </div>
  );
}
