
import Image from 'next/image';
import type { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  dataAiHint?: string;
}

export function FeatureCard({ title, description, icon, imageSrc, imageAlt, dataAiHint }: FeatureCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col bg-card text-card-foreground border-border hover:border-secondary">
      {imageSrc && imageAlt && (
        <div className="relative h-40 sm:h-48 w-full">
          <Image 
            src={imageSrc} 
            alt={imageAlt} 
            layout="fill" 
            objectFit="cover" 
            data-ai-hint={dataAiHint}
          />
        </div>
      )}
      <CardHeader className="flex flex-row items-center gap-2 md:gap-3 pb-1 md:pb-2 pt-4 md:pt-6 px-4 md:px-6">
        {icon && <div className="text-primary">{icon}</div>}
        <CardTitle className="text-lg md:text-xl font-semibold text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow px-4 md:px-6 pb-4 md:pb-6 pt-1 md:pt-0">
        <CardDescription className="text-xs sm:text-sm text-foreground/80">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
