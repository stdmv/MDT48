import { NovelEvent, MDTComparisonItem } from '../types';

export const novelEvents: NovelEvent[] = [
  {
    year: '1953 (Oct 23)',
    title: 'The Greenwich Village Initiation',
    location: 'Sutton\'s Apartment, Greenwich Village, NYC',
    character: 'Ned Sweeney & Matt Drake',
    description: 'Copywriter Ned Sweeney and his boss Matt Drake visit Mike Sutton, a federal narcotics agent. Sutton secretly doses Ned\'s drink with MDT-48 (75 mcg) and Matt\'s with LSD-25 (50 mcg). This starts the split-trajectory of the two substances.',
    keyDetails: [
      'Matt Drake experiences extreme sensory terror and runs into traffic, dying under a car.',
      'Ned Sweeney experiences supreme clarity, perfect recall, and a total lack of social anxiety.'
    ]
  },
  {
    year: '1953 (Oct 24)',
    title: 'The Waldorf & Robert Moses Encounter',
    location: 'Waldorf Astoria Hotel, New York City',
    character: 'Ned Sweeney',
    description: 'Stumbling through a hyper-saturated Manhattan, Ned wanders into the Waldorf Astoria. On MDT-48, he identifies and corners the legendary master builder Robert Moses. Armed with instant geographical data, he lectures Moses on urban gridlock and warns him the Dodgers will flee Brooklyn.',
    keyDetails: [
      'Recalls complex regional planning reports on the fly.',
      'Uncannily predicts the massive post-war migration patterns.'
    ]
  },
  {
    year: '1953 (Oct 25)',
    title: 'Marilyn, Brando, & The Green Room',
    location: 'Private Suite, Midtown Manhattan',
    character: 'Ned Sweeney',
    description: 'In a heightened state of social charm, Ned gains access to a high-profile party. He ends up in a hotel suite debating McCarthyism, nuclear politics, and media with Marlon Brando and Marilyn Monroe, speaking with a magnetic brilliance.',
    keyDetails: [
      'Instantly reads Brando\'s deep-seated aesthetic insecurities.',
      'Calms Monroe with simple, poetic descriptions of chemical peace.'
    ]
  },
  {
    year: '1953 (Nov)',
    title: 'The Double-Mirror Theft',
    location: 'Sutton\'s Apartment, New York City',
    character: 'Ned Sweeney',
    description: 'Realizing Sutton intentionally drugged them, Ned sneaks back into Sutton\'s apartment under the pretext of retrieving a lost pen. He discovers a secret door leading to a two-way mirror, clinical observation cameras, and a chest with a remaining vial of MDT-48, which he steals.',
    keyDetails: [
      'Lies to Sutton at Matt Drake\'s funeral about breaking the vial.',
      'Begins micro-dosing the drug using a safety pin.'
    ]
  },
  {
    year: '1953 (Dec)',
    title: 'Tom Monroe in Georgetown',
    location: 'Washington D.C. & Georgetown',
    character: 'Ned Sweeney (Tom Monroe)',
    description: 'As his domestic life as Ned Sweeney dissolves due to his erratic genius and disappearing acts, he steals a neighbor\'s car and drives to D.C. He reinvents himself as "Tom Monroe," a brilliant, multi-lingual socialite who meets Lyndon B. Johnson and Joe McCarthy.',
    keyDetails: [
      'Masters card-counting to win money at blackjack in underground clubs.',
      'Identifies Lyndon B. Johnson as a "different biological species of power".'
    ]
  },
  {
    year: '1954 (April)',
    title: 'The 14th Floor Fall',
    location: 'Midtown Manhattan Hotel',
    character: 'Ned Sweeney',
    description: 'Ned Sweeney\'s body is found on the sidewalk after falling from a 14th-floor hotel room. The death is ruled an apparent suicide due to mental instability, devastating his wife Laura and son Tommy, and leaving a dark cloud of generational trauma.',
    keyDetails: [
      'All experimental records and the remaining MDT-48 are lost.',
      'Decades later, Clay Proctor admits: "Ned Sweeney didn\'t kill himself."'
    ]
  },
  {
    year: 'Present Day (A)',
    title: 'The Book Launch Bomb',
    location: 'Manhattan Bookstore & Bar',
    character: 'Ray Sweeney & Clay Proctor',
    description: 'Ray Sweeney, a 33-year-old opposition researcher, is introduced to the 92-year-old political titan Clay Proctor (former Secretary of Defense and CEO of Eiben-Chemcorp). Proctor drops a bombshell: "I knew your grandfather. Ned Sweeney didn\'t kill himself."',
    keyDetails: [
      'Triggered by Ray\'s connection to Congresswoman Stephanie Proctor.',
      'Ray begins a deep-dive investigation into cold-war military experiments.'
    ]
  },
  {
    year: 'Present Day (B)',
    title: 'The MK-Ultra Connection',
    location: 'Park Row Research Offices, NYC',
    character: 'Ray Sweeney & Jerry Cronin',
    description: 'Ray and his lead researcher Jerry dig into Clay Proctor\'s past. They discover his involvement with MK-Ultra, the CIA\'s secret mind-control program. They uncover files on Dr. Raoul Fursten, who designed chemical modification programs in the 1960s.',
    keyDetails: [
      'Discovers Eiben-Chemcorp sat on the drug MDT-48 for decades.',
      'Uncovers references to previous subjects (Eddie Spinola, Vernon Gant).'
    ]
  },
  {
    year: 'Present Day (C)',
    title: 'The Steam Room Confession',
    location: 'The Hudson Baths, 39th Street, NYC',
    character: 'Ray Sweeney & Clay Proctor',
    description: 'Ray tracks Clay Proctor to his weekly steam room visits. In the misty private vault, Proctor reveals everything: MDT-48 is real. It is an entheogen extracted from an Amazonian fungus in 1912. Eiben-Chemcorp suppressed it because true intelligence makes populations ungovernable.',
    keyDetails: [
      'Proctor admits using MDT-48 recently at age 90 to reverse his Alzheimer\'s.',
      'Proctor reveals Eiben-Chemcorp keeps him under micro-sensor monitoring.'
    ]
  }
];

export const mdt48Lsd25Comparison: MDTComparisonItem[] = [
  {
    property: 'Chemical Class',
    mdt48: { value: 'Atypical Entheogen (Plant-derived)', description: 'Extracted from the Amazonian Bawari Tree fungus (1912); fully synthesized by Swiss chemists in 1932.' },
    lsd25: { value: 'Ergoline Psychedelic (Semi-synthetic)', description: 'Synthesized from Ergot fungus precursors (Claviceps purpurea) by Albert Hofmann in 1938.' }
  },
  {
    property: 'Cognitive Impact',
    mdt48: { value: 'Maximal Integrated Intelligence', description: 'Enhances cognitive parameters without dissolving the ego or causing hallucinations. Retains full logic, memory, and agency.' },
    lsd25: { value: 'Ego Dissolution & Hallucinations', description: 'Forces high degrees of sensory synesthesia, psychological boundary loss, and dramatic auditory/visual hallucinations.' }
  },
  {
    property: 'Social Functionality',
    mdt48: { value: 'Supreme Social Magnetism', description: 'Abolishes social friction. Users read micro-expressions, speak languages flawlessly, and hold deep charisma.' },
    lsd25: { value: 'Social Disconnection / Introspective', description: 'Renders the user largely incapable of normal societal tasks (e.g. paying taxes, speaking in meetings) during the acute peak.' }
  },
  {
    property: 'Military Evaluation',
    mdt48: { value: '"Disappointing" / Shelved', description: 'Evaluated by Sidney Gottlieb\'s agents in MK-Ultra as yielding "no apparent hallucinatory weaponization", leading to its suppression.' },
    lsd25: { value: 'Tested / Deployed as Weapon', description: 'Heavily tested as an interrogation tool, chemical destabilizer, and mind-control agent because it shatters cognitive focus.' }
  },
  {
    property: 'Existential Toxicity',
    mdt48: { value: 'Extreme Personal Dissolution', description: 'Ordinary life feels completely flat and small. The user is existentially addicted to returning to the "limitless" state, abandoning structures.' },
    lsd25: { value: 'Psychological Splintering', description: 'Can trigger latent schizophrenia, heavy anxiety (bad trips), or visual flashbacks, but has virtually zero chemical addictive properties.' }
  }
];
