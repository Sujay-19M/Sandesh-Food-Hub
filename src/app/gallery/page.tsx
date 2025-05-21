
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery | Sandesh Food Hub',
  description: 'Explore the vibrant ambiance and delicious dishes of Sandesh Food Hub through our gallery.',
};

const galleryImages = {
  food: [
    { src: 'https://placehold.co/600x400.png', alt: 'Delicious Paneer Tikka', dataAiHint: 'paneer tikka presentation' },
    { src: 'https://placehold.co/600x400.png', alt: 'Aromatic Vegetable Biryani', dataAiHint: 'vegetable biryani bowl' },
    { src: 'https://placehold.co/600x400.png', alt: 'Creamy Dal Makhani', dataAiHint: 'dal makhani closeup' },
    { src: 'https://placehold.co/600x400.png', alt: 'Refreshing Mocktail', dataAiHint: 'colorful mocktail' },
     { src: 'https://placehold.co/600x400.png', alt: 'South Indian Platter', dataAiHint: 'south indian food' },
    { src: 'https://placehold.co/600x400.png', alt: 'Fresh Pizza Slice', dataAiHint: 'pizza slice' },
  ],
  ambiance: [
    { src: 'https://placehold.co/600x400.png', alt: 'Restaurant interior view', dataAiHint: 'restaurant interior elegant' },
    { src: 'https://placehold.co/600x400.png', alt: 'Cozy seating area', dataAiHint: 'restaurant seating cozy' },
    { src: 'https://placehold.co/600x400.png', alt: 'Exterior view of Sandesh Food Hub', dataAiHint: 'restaurant facade modern' },
    { src: 'https://placehold.co/600x400.png', alt: 'Restaurant decor detail', dataAiHint: 'restaurant decor natural' },
     { src: 'https://placehold.co/600x400.png', alt: 'Family dining area', dataAiHint: 'family dining restaurant' },
    { src: 'https://placehold.co/600x400.png', alt: 'Bar area or drinks counter', dataAiHint: 'restaurant bar' },
  ]
};

export default function GalleryPage() {
  return (
    <Container className="py-8 md:py-12">
      <header className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
          Our Gallery
        </h1>
        <p className="mt-3 md:mt-4 max-w-lg md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-foreground/70">
          A glimpse into the heart of Sandesh Food Hub – our food, our ambiance, our passion.
        </p>
      </header>

      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 md:mb-8 text-center md:text-left">Delicious Dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.food.map((image, index) => (
            <div key={`food-${index}`} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 aspect-video">
              <Image 
                src={image.src} 
                alt={image.alt} 
                width={600} 
                height={400} 
                className="w-full h-full object-cover"
                data-ai-hint={image.dataAiHint} 
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 md:mb-8 text-center md:text-left">Warm Ambiance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.ambiance.map((image, index) => (
            <div key={`ambiance-${index}`} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 aspect-video">
              <Image 
                src={image.src} 
                alt={image.alt} 
                width={600} 
                height={400} 
                className="w-full h-full object-cover"
                data-ai-hint={image.dataAiHint}
              />
            </div>
          ))}
        </div>
      </section>
       <p className="text-center text-muted-foreground mt-8 md:mt-12 text-xs sm:text-sm">
          Note: Images are for representation purposes. Actual presentation may vary. More images coming soon!
       </p>
    </Container>
  );
}
