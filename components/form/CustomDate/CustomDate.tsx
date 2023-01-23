import FormLabel from 'components/form/FormLabel';
import { HandleChangeType } from 'lib/types';
import React, { memo, useState } from 'react';
import DatePicker from 'react-datepicker';

interface Props extends HandleChangeType {
  [x: string]: any;
  label: string;
  id: string;
}

const CustomDate: React.FC<Props> = ({ id, label, handleChange, options, ...props }) => {
  const [startDate, setStartDate] = useState(new Date('2021/01/01'));
  const [result, setResult] = useState(false);

  const onChange = (date: Date, e: any) => {
    setStartDate(date);
    handleChange(e, new Date(date || '').toLocaleDateString('en', options), id);
    setResult(true);
  };

  return (
    <div>
      <FormLabel id={id} label={label} />
      <DatePicker
        selected={startDate}
        id={id}
        name={id}
        onChange={onChange}
        minDate={new Date(1970)}
        maxDate={new Date()}
        className={`mt-1 py-2 border-b-2 border-base-500 w-full outline-none focus:border-base-900 ${
          result ? '' : 'opacity-50'
        }`}
        {...props}
      />
    </div>
  );
};

export default memo(CustomDate);
