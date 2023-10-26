type BioType = {
  emoji: string;
  emojiDescription: string;
  description: string;
  link?: string;
};

export const bio: BioType[] = [
  {
    emoji: '🏖️',
    emojiDescription: 'Beach emoji with parasol',
    description: 'Based in Fortaleza - CE, Brazil',
  },
  {
    emoji: '🎓',
    emojiDescription: 'Mortarboard emoji',
    description: 'SMD - Universidade Federal do Ceará',
  },
  {
    emoji: '👾',
    emojiDescription: 'Pixelated purple enemy emoji',
    description: 'Games enthusiast',
  },
  {
    emoji: '📧',
    emojiDescription: 'E-mail emoji',
    description: "Let's get in touch!",
    link: 'mailto:samuelmalves1@gmail.com',
  },
];
