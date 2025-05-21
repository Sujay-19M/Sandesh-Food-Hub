
// This file is machine-generated - edit at your own risk.

'use server';

/**
 * @fileOverview AI-powered tool that automatically generates engaging and SEO-friendly descriptions for menu items.
 *
 * - generateMenuDescription - A function that handles the menu description generation process.
 * - GenerateMenuDescriptionInput - The input type for the generateMenuDescription function.
 * - GenerateMenuDescriptionOutput - The return type for the generateMenuDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMenuDescriptionInputSchema = z.object({
  dishName: z.string().describe('The name of the dish.'),
  ingredients: z.string().describe('A list of the ingredients in the dish.'),
  cuisine: z.string().describe('The cuisine of the dish.'),
  restaurantType: z.string().describe('The type of restaurant, e.g. vegan, seafood, etc.'),
});
export type GenerateMenuDescriptionInput = z.infer<
  typeof GenerateMenuDescriptionInputSchema
>;

const GenerateMenuDescriptionOutputSchema = z.object({
  description: z.string().describe('The generated description of the menu item.'),
});
export type GenerateMenuDescriptionOutput = z.infer<
  typeof GenerateMenuDescriptionOutputSchema
>;

export async function generateMenuDescription(
  input: GenerateMenuDescriptionInput
): Promise<GenerateMenuDescriptionOutput> {
  return generateMenuDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMenuDescriptionPrompt',
  input: {schema: GenerateMenuDescriptionInputSchema},
  output: {schema: GenerateMenuDescriptionOutputSchema},
  prompt: `You are a creative restaurant menu writer specializing in SEO-friendly descriptions.

  Given the following information about a dish, generate an engaging and SEO-friendly description:

  Dish Name: {{{dishName}}}
  Ingredients: {{{ingredients}}}
  Cuisine: {{{cuisine}}}
  Restaurant Type: {{{restaurantType}}}

  Write a description that is no more than 150 characters.
  `,
});

const generateMenuDescriptionFlow = ai.defineFlow(
  {
    name: 'generateMenuDescriptionFlow',
    inputSchema: GenerateMenuDescriptionInputSchema,
    outputSchema: GenerateMenuDescriptionOutputSchema,
  },
  async (input: GenerateMenuDescriptionInput): Promise<GenerateMenuDescriptionOutput> => {
    try {
      const {output} = await prompt(input); // This is where the 429 error originates
      if (output && output.description) {
        return output;
      }
      // This case handles if the AI returns a valid structure but no description text,
      // or if the output itself is null/undefined.
      console.warn(`AI prompt for ${input.dishName} returned an empty or invalid description. Output:`, output);
      return { 
        description: `A delightful ${input.dishName.toLowerCase()} made with fresh, pure vegetarian ingredients (no onion, no garlic).` 
      };
    } catch (error) {
      console.error(`Error in generateMenuDescriptionFlow for ${input.dishName} (e.g. API rate limit):`, error);
      // Return a default description in the expected output format
      return { 
        description: `A delightful ${input.dishName.toLowerCase()} made with fresh, pure vegetarian ingredients (no onion, no garlic).` 
      };
    }
  }
);
