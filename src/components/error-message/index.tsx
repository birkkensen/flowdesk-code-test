import { type ComponentPropsWithRef } from 'react';

interface Props extends ComponentPropsWithRef<'div'> {
  description?: string;
}

export const ErrorMessage: React.FC<Props> = ({
  description = 'Something went wrong - try reloading the page',
  ...props
}) => {
  return (
    <div {...props}>
      <span className="mr-2 text-slate-200">{description}</span>
    </div>
  );
};
