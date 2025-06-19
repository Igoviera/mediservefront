type Props = {
  label: string;
  onClick?: () => void;
};

export const Button = ({ label, onClick}: Props) => {
  return (
    <button
      onClick={onClick}
      className='w-[8rem] h-full bg-[#0D407780] text-[#FFFFFF] border-none rounded-full p-2'
    >
      {label}
    </button>
  );
};
