import * as Styled from './styles';
import { useEffect, useState } from 'react';
import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';

type BaseProps = {
  children?: React.ReactNode;
};

export const Base = ({ children }: BaseProps) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const detectDarkMode = !!localStorage.getItem('darkMode');

    if (detectDarkMode) {
      setDarkMode(JSON.parse(localStorage.getItem('darkMode')));
    } else {
      localStorage.setItem('darkMode', 'false');
    }
  }, []);

  const toggleDarkMode = () => {
    localStorage.setItem('darkMode', `${!darkMode}`);
    setDarkMode(!darkMode);
  };

  return (
    <Styled.Container>
      <div className={darkMode ? 'dark' : 'light'}>
        <NavBar darkMode={darkMode} handleClick={toggleDarkMode} />
        {children}
        <Footer />
      </div>
    </Styled.Container>
  );
};
