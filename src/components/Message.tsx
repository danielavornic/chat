import cn from 'classnames';

interface MessageProps {
  isMine: boolean;
  isLast: boolean;
  message: string;
  nickname: string;
  time: string;
}

export const Message = ({
  isLast,
  isMine,
  message,
  time,
  nickname,
}: MessageProps) => {
  return (
    <div
      className={cn(
        'flex',
        isMine
          ? 'flex-row-reverse text-right float-right'
          : 'flex-row float-left text-left',
        isLast ? 'mb-2' : 'mb-4',
      )}
    >
      <div className="max-w-[50%]">
        <div
          className={cn(
            'flex py-3 px-5 text-base rounded-2xl mb-1 tooltip tooltip-secondary select-none',
            isMine
              ? 'bg-primary text-white text-right tooltip-left'
              : 'bg-gray-200 text-left tooltip-right',
          )}
          data-tip={time}
        >
          {message}
        </div>
        <p className="text-sm">{nickname}</p>
      </div>
    </div>
  );
};
