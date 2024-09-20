import React from 'react';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation'; 
import styles from '../styles/CustomButton.module.css'; 

interface CustomButtonProps {
  buttonText: string;
  onClick: (e: React.FormEvent) => void;
  navigateTo?: string; 
}

const CustomButton: React.FC<CustomButtonProps> = ({ buttonText, onClick, navigateTo }) => {
  const router = useRouter();

  const handleClick = (e: React.FormEvent) => {
    if (navigateTo) {
      router.push(navigateTo); 
    } else if (onClick) {
      onClick(e);
    }
  };

  return (
    <Button
      onClick={handleClick}
      className={styles.ctaButton}
      display="inline-block"
    >
      {buttonText}
    </Button>
  );
};

export default CustomButton;
