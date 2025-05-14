import Image from 'next/image';
import type { MenuItemType } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Utensils } from 'lucide-react';

interface MenuItemCardProps {
  item: MenuItemType;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <div className="relative h-56 w-full">
        <Image
          src={item.image}
          alt={item.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={item.dataAiHint}
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-semibold text-primary">{item.name}</CardTitle>
          <Badge variant="secondary" className="text-sm bg-accent text-accent-foreground whitespace-nowrap">{item.price}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-foreground/80 leading-relaxed">
          {item.description || 'Delicious and freshly prepared.'}
        </CardDescription>
        {item.ingredients.length > 0 && (
          <p className="mt-2 text-xs text-muted-foreground">
            Ingredients: {item.ingredients.join(', ')}
          </p>
        )}
      </CardContent>
      <CardFooter>
         <Badge variant="outline" className="border-primary/50 text-primary/80">
           <Utensils className="w-3 h-3 mr-1" /> {item.category}
         </Badge>
      </CardFooter>
    </Card>
  );
}
