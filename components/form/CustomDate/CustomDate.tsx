import FormLabel from 'components/form/FormLabel';
import { HandleChangeType } from 'lib/types';
import React, { memo, useState } from 'react';
import DatePicker from 'react-datepicker';

interface Props extends HandleChangeType {
  label: string;
  id: string;
  options?: Intl.DateTimeFormatOptions;
  value: string;
  [x: string]: any;
}

const CustomDate: React.FC<Props> = ({ id, label, handleChange, value, options, ...props }) => {
  const [startDate, setStartDate] = useState(new Date('2021/01/01'));
  const [current, setCurrent] = useState(false);

  const handleDatePicker = (date: Date, e: any) => {
    setStartDate(date);
    handleChange(e, date.toLocaleDateString('en', options), id);
    setCurrent(false);
  };

  const handleCheckbox = () => {
    const present = 'Present';
    const time = current ? startDate.toLocaleDateString('en', options) : present;

    handleChange({ target: { name: 'end_time', value: time } }, time, id);
    setCurrent((x) => !x);
  };

  return (
    <div>
      <FormLabel id={id} label={label} />
      <DatePicker
        selected={startDate}
        id={id}
        name={id}
        onChange={handleDatePicker}
        minDate={new Date(1970)}
        maxDate={new Date()}
        className={`mt-1 py-2 border-b-2 border-base-500 w-full outline-none text-base-900 focus:border-base-900 ${
          value?.length ? '' : 'opacity-50'
        }`}
        value={value}
        placeholderText="2022"
        {...props}
      >
        {id === 'end_time' ? (
          <div className="flex justify-center items-center gap-2 text-xl bg-base-100 w-full py-5">
            <input
              checked={current}
              type="checkbox"
              id="current"
              aria-label="Currently"
              className="accent-pink-500 w-4 h-4"
              onChange={handleCheckbox}
            />
            <span>Currently</span>
          </div>
        ) : null}
      </DatePicker>
    </div>
  );
};

export default memo(CustomDate);
