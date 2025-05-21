
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: 'About Us | Sandesh Food Hub',
  description: 'Learn more about Sandesh Food Hub, our mission, values, and the team behind our delicious vegetarian cuisine.',
};

export default function AboutUsPage() {
  return (
    <Container className="py-8 md:py-12 min-h-[calc(100vh-theme(spacing.16)-theme(spacing.20)-1px)]"> 
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-6 md:mb-8">
          About Sandesh Food Hub
        </h1>
        <div className="max-w-2xl md:max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-foreground/80 space-y-4 md:space-y-6">
          <p>
            Welcome to Sandesh Food Hub, where culinary passion meets the art of pure vegetarian cooking. 
            Our journey began with a simple idea: to create a haven for food lovers seeking authentic, 
            flavorful, and wholesome vegetarian dishes prepared with the freshest, locally-sourced ingredients.
          </p>
          <p>
            At Sandesh Food Hub, we believe that food is an experience that should delight all senses. 
            Our chefs meticulously craft each dish, blending traditional recipes with modern culinary techniques 
            to bring you a diverse menu that caters to every palate. From tantalizing appetizers to hearty main courses 
            and decadent desserts, every item on our menu is a testament to our commitment to quality and taste.
          </p>
          <p>
            Our mission extends beyond just serving great food. We aim to create a warm and inviting atmosphere 
            where families and friends can gather, share moments, and enjoy a memorable dining experience. 
            Sustainability and community are at the heart of what we do, and we continuously strive to 
            make a positive impact.
          </p>
          <p>
            Thank you for choosing Sandesh Food Hub. We look forward to serving you!
          </p>
        </div>
      </div>
    </Container>
  );
}
