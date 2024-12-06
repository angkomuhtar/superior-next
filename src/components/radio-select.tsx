import { CheckCheckIcon } from "lucide-react";
import React from "react";
interface Props {
  data: any;
  selected: string;
  onChange: ((value: string) => void) | undefined;
}

const RadioSelect: React.FC<Props> = ({ data, selected, onChange }) => {
  return (
    <div className='w-full'>
      <h3 className='font-bold text-sm capitalize text-primary-500 mb-4 text-blue-500'>
        Soal Nomor {data.number} - {data.type} ({data.category})
      </h3>
      <p className='mb-6 px-3'>
        <span dangerouslySetInnerHTML={{ __html: data.question }} />
      </p>
      <ul
        className='p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200'
        aria-labelledby='dropdownHelperRadioButton'>
        {data.answers.map((x) => (
          <li key={x.id}>
            <input
              type='radio'
              id={x.id}
              name='hosting'
              value='hosting-small'
              className='hidden peer'
              required
            />
            <label
              htmlFor={x.id}
              className='inline-flex justify-between w-full p-5 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 space-x-4'>
              <h3 className='text-lg font-bold capitalize'>{x.letter}.</h3>
              <div className='w-full font-bold pt-1'>
                <div dangerouslySetInnerHTML={{ __html: x.answer }} />
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RadioSelect;
