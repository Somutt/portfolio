type HobbyType = {
  emoji: string;
  label: string;
  description: string;
};

type InfoType = {
  bio: string;
  proficiencies: string[];
  hobbies: HobbyType[];
};

export const info: InfoType = {
  bio: "Hi, I'm Samuel! I'm a Front-End developer with experience in React and Next, using JavaScript and TypeScript. Majoring in Systems and Digital Media at the Federal University of Ceará (UFC - Fortaleza/BR). Have a passion for games, animations, comics and coffe.",
  proficiencies: [
    'JavaScript',
    'TypeScript',
    'React',
    'NextJS',
    'Git',
    'Github',
    'HTML5',
    'CSS3',
    'SQL',
    'Postgres',
    'Strapi',
    'Unity3D',
    'Godot',
    'Agile',
  ],
  hobbies: [
    {
      emoji: '🎮',
      label: 'video game controller emoji',
      description: 'video games',
    },
    {
      emoji: '🎥',
      label: 'cinema professional video camera',
      description: 'movies',
    },
    {
      emoji: '📖',
      label: 'open book emoji',
      description: 'reading',
    },
    {
      emoji: '🈂️',
      label: 'SA Katakana emoji',
      description: 'languages',
    },
  ],
};
