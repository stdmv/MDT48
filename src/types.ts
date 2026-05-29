export interface Entheogen {
  id: string;
  name: string;
  botanicalName: string;
  family: string;
  activeCompounds: string[];
  class: 'Psychedelic' | 'Dissociative' | 'Deliriant' | 'Atypical' | 'Oneirogen' | 'Empathogen';
  region: string;
  history: string;
  nativeUsage: string;
  pharmacology: string;
  toxicityLevel: 'Low' | 'Moderate' | 'High' | 'Extreme';
  legality: string;
  iconName: string;
}

export interface Peptide {
  id: string;
  name: string;
  type: 'Peptide' | 'Ampakine' | 'Nootropic' | 'Synthetic Pro-Drug' | 'Neurotrophic Factor';
  origin: string;
  primaryIndication: string;
  mechanismOfAction: string;
  potencyMetric: string;
  status: string;
  efficacyRating: number; // 1-10
  safetyRating: number; // 1-10
  sensoryDistortion: number; // 1-10
  description: string;
}

export interface CognitiveAnomaly {
  id: string;
  name: string;
  era: string;
  achievementSummary: string;
  cognitivePhenomena: string;
  biologicalHypothesis: string;
  quote: string;
  imageUrl?: string;
}

export interface NovelEvent {
  year: string;
  title: string;
  location: string;
  character: string;
  description: string;
  keyDetails: string[];
}

export interface MDTComparisonItem {
  property: string;
  mdt48: {
    value: string;
    description: string;
  };
  lsd25: {
    value: string;
    description: string;
  };
}
