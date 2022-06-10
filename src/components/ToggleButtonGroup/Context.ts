import { useContext, createContext } from 'react';

export interface ChangeProps {
  selectedValue: string;
}

export type ChangeHandler = ({ selectedValue }: ChangeProps) => void;

export const ToggleButtonGroupContext = createContext<
  { selectedValue: string; onChange: ChangeHandler } | undefined
>(undefined);

export const useToggleButtonContext = () => {
  const context = useContext(ToggleButtonGroupContext);
  if (context === undefined) {
    throw new Error(
      'useToggleButtonContext must be used within a ToggleButtonGroupContext',
    );
  }

  return context;
};
