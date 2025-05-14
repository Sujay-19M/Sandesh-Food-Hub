import { Container } from './Container';
import { Leaf } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <Container className="py-8 text-center text-sm text-muted-foreground">
        <div className="flex flex-col items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <p>&copy; {currentYear} Sandesh Food Hub. All rights reserved.</p>
          <p>Experience the joy of pure vegetarian cuisine.</p>
        </div>
      </Container>
    </footer>
  );
}
