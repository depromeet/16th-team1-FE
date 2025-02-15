import { useState } from 'react';

export const useToggle = () => {
  const [open, setOpen] = useState(false);

  return [open, setOpen] as const;
};
