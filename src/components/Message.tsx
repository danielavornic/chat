import { PropsWithChildren } from 'react';
import cn from 'classnames';

interface MessageProps {
  isMine?: boolean;
  isLast?: boolean;
}

export const Message = ({
  children,
  isLast,
  isMine,
}: PropsWithChildren<MessageProps>) => {
  return (
    <div className={cn('flex', isMine ? 'flex-row-reverse ' : 'flex-row ')}>
      <div
        className={cn(
          'flex max-w-[50%] py-3 px-5 text-base rounded-2xl tooltip tooltip-secondary select-none',
          isMine
            ? 'bg-primary text-white text-right tooltip-left'
            : 'bg-gray-200 text-left tooltip-right',
          isLast ? 'mb-4' : 'mb-8',
        )}
        data-tip="Sent by Daniela at 10:00 PM"
      >
        {children}
      </div>
    </div>
  );
};
