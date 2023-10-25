type LinksType = {
  name: string;
  type?: string;
  to: string;
  active: string;
};

export const links: LinksType[] = [
  {
    name: 'home',
    to: '/',
    active: 'home',
  },
  {
    name: 'about me',
    to: '/about',
    active: 'about',
  },
  {
    name: 'Sm',
    type: 'initials',
    to: '/',
    active: 'home',
  },
  {
    name: 'portfolio',
    to: '/portfolio',
    active: 'portfolio',
  },
];
