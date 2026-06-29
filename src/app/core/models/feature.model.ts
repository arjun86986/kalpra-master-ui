/**
 * Feature Model
 */
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  imageAlt?: string;
  order: number;
}

export interface FeatureSection {
  title: string;
  subtitle: string;
  features: Feature[];
}
