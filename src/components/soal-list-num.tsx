import React from "react";
interface Props {
  isSelected?: string;
  isActive?: boolean;
  number: string;
  onClick?: () => void;
}
export const SoalListNum: React.FC<Props> = ({
  isSelected = false,
  isActive = false,
  onClick,
  number,
}) => {
  const selected = "bg-blue-500 text-white";
  const active = "border-blue-500 text-blue-500";

  return (
    <div
      onClick={onClick}
      className={`rounded-md p-1 border ${
        isSelected ? selected : "bg-white"
      }  ${
        isActive && active
      } flex justify-center items-center relative aspect-square group cursor-pointer`}>
      <h2 className='font-bold text-base'>{number}</h2>
      {selected && (
        <span className='absolute top-1 right-1.5 font-mono font-bold text-xs'>
          {isSelected}
        </span>
      )}
    </div>
  );
};
