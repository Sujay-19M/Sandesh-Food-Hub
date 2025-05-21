
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
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
    <div className="bg-background py-8 md:py-12">
      <Container>
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
            Get In Touch
          </h1>
          <p className="mt-3 md:mt-4 max-w-lg md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-foreground/70">
            We&apos;d love to hear from you! Visit us or contact us for reservations and inquiries.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
          <Card className="shadow-lg bg-card border-border">
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="text-xl md:text-2xl text-primary flex items-center gap-2">
                <MapPin className="h-5 w-5 md:h-6 md:w-6 text-accent" /> Our Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-4 p-4 md:p-6 text-sm md:text-base">
              <address className="text-foreground/80 not-italic">
                <p>{restaurantDetails.addressLine1}</p>
                <p>{restaurantDetails.addressLine2}</p>
              </address>
              <p className="text-foreground/80">
                <strong>Email:</strong> <a href={`mailto:${restaurantDetails.email}`} className="text-accent hover:text-secondary">{restaurantDetails.email}</a>
              </p>
              <div className="mt-4 md:mt-6 space-y-2 md:space-y-3">
                <Button asChild size="default" className="w-full bg-accent hover:bg-secondary text-accent-foreground hover:text-secondary-foreground text-sm md:text-base py-2.5 md:py-3">
                  <a href={`tel:${restaurantDetails.phone}`}>
                    <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Call Us Now
                  </a>
                </Button>
                <Button asChild size="default" variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground text-sm md:text-base py-2.5 md:py-3">
                  <a href={`https://wa.me/${restaurantDetails.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg overflow-hidden bg-card border-border">
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="text-xl md:text-2xl text-primary">Find Us on Map</CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <div className="aspect-video bg-muted/20 rounded-md flex items-center justify-center">
                 <Image 
                    src="https://placehold.co/600x400.png" 
                    alt="Restaurant location map placeholder" 
                    width={600} 
                    height={400} 
                    className="rounded-md object-cover w-full h-full"
                    data-ai-hint="map location"
                  />
              </div>
               <p className="text-xs md:text-sm text-muted-foreground mt-2 text-center">Map functionality coming soon. Find us at the address above.</p>
            </CardContent>
          </Card>
        </div>
        
        <section className="mt-12 md:mt-16 text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-primary mb-2 md:mb-3">Opening Hours</h2>
            <p className="text-sm md:text-base text-foreground/80">Monday - Sunday: 11:00 AM - 11:00 PM</p>
            <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">(Kitchen closes at 10:30 PM)</p>
        </section>

      </Container>
    </div>
  );
}
