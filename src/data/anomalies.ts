import { CognitiveAnomaly } from '../types';

export const anomaliesData: CognitiveAnomaly[] = [
  {
    id: 'von-neumann',
    name: 'John von Neumann',
    era: '1903 – 1957',
    achievementSummary: 'Father of modern game theory, developer of the Von Neumann Architecture in computing, contributor to the Manhattan Project, and pioneer of quantum mechanics rigors.',
    cognitivePhenomena: 'Possessed a near-instantaneous photographic memory, paired with computational speeds that exceeded the earliest electronic units (like ENIAC). He could read a page of a directory or book and recite it verbatim decades later. At social gatherings, his mind solved advanced partial differential equations in seconds, rendering other world-class physicists feeling cognitively inferior.',
    biologicalHypothesis: 'Highly optimized hyper-connectivity between the prefrontal cortex and parietal association areas, combined with an exceptionally high expression profile of neurotrophic factors (like BDNF and NGF) that facilitated instantaneous synaptogenesis and long-term memory preservation.',
    quote: '“I think John von Neumann’s mind was a different species. He could analyze everything instantly, faster than any machine, with absolute precision.” — Edward Teller'
  },
  {
    id: 'tesla',
    name: 'Nikola Tesla',
    era: '1856 – 1943',
    achievementSummary: 'Inventor of the alternating current (AC) electricity system, wireless power transmission concepts, induction motors, and early radio telemetry.',
    cognitivePhenomena: 'Experienced severe, involuntary luminous flashes in his visual field, accompanied by incredibly sharp three-dimensional projections of complex electromagnetic devices. He did not use blue-prints; he built, modified, and ran stress-tests on machines entirely in his head, tracking dimensions down to a fraction of a millimeter and observing wear and tear over "months of running time" in his imagination.',
    biologicalHypothesis: 'Rare atypical synesthesia where abstract mental concepts and spatial engineering models mapped directly onto the primary visual cortex (V1). This was likely combined with high central cholinergic tone and selective Default Mode Network suppression, allowing mental concepts to achieve concrete, photorealistic rendering.',
    quote: '“My method is different. I do not rush into constructive work. When I get an idea, I start at once building it up in my imagination... I run it and track wear. It is absolutely immaterial to me whether I run my turbine in thought or test it in my shop.” — Nikola Tesla'
  },
  {
    id: 'ramanujan',
    name: 'Srinivasa Ramanujan',
    era: '1887 – 1920',
    achievementSummary: 'Self-taught Indian mathematician, compiler of nearly 3,900 independent mathematical identities, equations, and highly advanced partitions without standard proofs.',
    cognitivePhenomena: 'Had virtually zero formal training in higher mathematics, yet derived equations that were decades ahead of his time (often proving true long after his death). He claimed his insights did not come from logical deduction, but were placed directly on his tongue as full visual formulas in his dreams by his family deity, Goddess Namagiri of Namakkal.',
    biologicalHypothesis: 'Massive, unconscious background processing in the mathematical processing hubs of the brain (the intraparietal sulcus and bilateral prefrontal networks), bypassing the conscious Default Mode Network. This allowed highly complex analytical structures to bubble up to consciousness fully formed as intuitive visual insights.',
    quote: '“An equation for me has no meaning unless it expresses a thought of God.” — Srinivasa Ramanujan'
  }
];

export interface BioMechanism {
  id: string;
  name: string;
  scientificTerm: string;
  concept: string;
  howMdtMimics: string;
  realWorldPeptides: string[];
}

export const bioMechanisms: BioMechanism[] = [
  {
    id: 'critical-period',
    name: 'Critical Period Window (Re-opening)',
    scientificTerm: 'High Synaptogenic Plasticity',
    concept: 'In early childhood, the brain exists in a "critical period"—a hyper-plastic window where language, vision, and core schemas are absorbed effortlessly because synaptic connections are incredibly flexible and easily formed. In adulthood, molecular brakes (like perineuronal nets) lock these connection structures to stabilize identity, severely slowing down rapid learning.',
    howMdtMimics: 'MDT-48 selectively dismantles these perineuronal brakes, re-opening the critical period window at will. This allows an adult with mature cognitive networks to absorb language, memory, and patterns instantly.',
    realWorldPeptides: ['Dihexa', 'Cerebrolysin']
  },
  {
    id: 'dmn-suppression',
    name: 'Default Mode Network (DMN) Selective Silencing',
    scientificTerm: 'Decreased Self-Referential Gating',
    concept: 'The DMN acts as the brain\'s "executive manager" or analytical filter, enforcing cognitive biases, maintaining our constant sense of self, and suppressing long-range connection patterns to avoid processing overload. True entheogens suppress the DMN, causing extreme creativity but often dissolving the self (tripping).',
    howMdtMimics: 'MDT-48 selectively dampens the self-referential DMN loops, allowing long-range brain region cross-talk and massive associative processing, while maintaining the frontoparietal control network (keeping the user fully grounded, functional, and active in the real world).',
    realWorldPeptides: ['Semax', 'Ibogaine (Noribogaine Active)']
  },
  {
    id: 'synaptogenesis',
    name: 'Accelerated Synaptogenesis & BDNF Upregulation',
    scientificTerm: 'Dendritic Spine Proliferation',
    concept: 'BDNF (Brain-Derived Neurotrophic Factor) is the "fertilizer" of the brain, promoting the growth, maintenance, and connection of neurons. Accelerating synaptogenesis means dendritic spines grow, connect, and lock in new memories within minutes of exposure, rather than weeks of repetitive practice.',
    howMdtMimics: 'Upregulates synaptic connections at an unprecedented electrochemical level, accelerating nerve signal relay and establishing immediate physical memory engrams.',
    realWorldPeptides: ['Dihexa', 'Semax', 'Cerebrolysin']
  }
];
