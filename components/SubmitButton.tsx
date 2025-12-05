'use client';

import clsx from 'clsx';
import { Button } from './ui/button';
import { useFormStatus } from 'react-dom';
import LoadingSpinner from './LoadingSpinner';

const SubmitButton = ({ className }: { className?: string }) => {
  const { pending } = useFormStatus();
  return (
    <Button className={clsx('', className)}>
      {pending ? <LoadingSpinner /> : 'Submit'}
    </Button>
  );
};

export default SubmitButton;
