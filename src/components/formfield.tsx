import React from "react";
import { FormControl, FormLabel, Input, Textarea, FormErrorMessage } from "@chakra-ui/react";

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  isTextArea?: boolean;
  name: string; 
}

const FormField: React.FC<FormFieldProps> = ({ label, value, onChange, error, isTextArea, name }) => {
  return (
    <FormControl isInvalid={!!error} mb={4}>
      <FormLabel>{label}</FormLabel>
      {isTextArea ? (
        <Textarea
          name={name}
          value={value}
          onChange={onChange}
          borderColor="gray.600"  
          focusBorderColor="#2C3B90"  
          _hover={{ borderColor: "gray.700" }} 
          placeholder={`Enter your ${label.toLowerCase()}`} 
          resize="none" 
        />
      ) : (
        <Input
          name={name}
          value={value}
          onChange={onChange}
          borderColor="gray.400" 
          focusBorderColor="#2C3B90" 
          _hover={{ borderColor: "gray.700" }} 
          placeholder={`Enter your ${label.toLowerCase()}`}
        />
      )}
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default FormField;
