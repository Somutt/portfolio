import {
  faInstagram,
  faLinkedin,
  faGithub,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';

type SocialsType = {
  link: string;
  icon: IconDefinition;
  label: string;
};

export const socials: SocialsType[] = [
  {
    link: 'https://www.instagram.com/samuelmral/',
    icon: faInstagram,
    label: 'instagram logo',
  },
  {
    link: 'https://github.com/somutt',
    icon: faGithub,
    label: 'github logo',
  },
  {
    link: 'https://www.linkedin.com/in/samuelmral/',
    icon: faLinkedin,
    label: 'linkedin logo',
  },
];
