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
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col bg-card text-card-foreground border-border hover:border-secondary"> {/* Card with mint green hover border */}
      {imageSrc && imageAlt && (
        <div className="relative h-48 w-full">
          <Image 
            src={imageSrc} 
            alt={imageAlt} 
            layout="fill" 
            objectFit="cover" 
            data-ai-hint={dataAiHint}
          />
        </div>
      )}
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        {icon && <div className="text-primary">{icon}</div>} {/* Icon uses primary green */}
        <CardTitle className="text-xl font-semibold text-primary">{title}</CardTitle> {/* Title uses primary green */}
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-foreground/80">{description}</CardDescription> {/* Description uses dark brown */}
      </CardContent>
    </Card>
  );
}
