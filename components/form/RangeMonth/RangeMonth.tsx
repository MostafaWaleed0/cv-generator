import { HandleChangeType } from 'lib/types';
import { CustomDate } from 'components/form';

interface Props extends HandleChangeType {
  startTime: string;
  endTime: string;
  firstLabel: string;
  lastLabel: string;
  firstPlaceholderText?: string;
  lastPlaceholderText?: string;
  [x: string]: any;
}

const RangeMonth: React.FC<Props> = ({
  startTime,
  endTime,
  handleChange,
  firstLabel,
  lastLabel,
  firstPlaceholderText,
  lastPlaceholderText,
  ...props
}) => {
  return (
    <>
      <CustomDate
        id="start_time"
        label={firstLabel}
        handleChange={handleChange}
        dateFormat="MMMM yyyy"
        showMonthYearPicker
        showFullMonthYearPicker
        value={startTime}
        placeholderText={firstPlaceholderText ?? 'January 2021'}
        {...props}
      />
      <div className={startTime.length ? '' : 'pointer-events-none select-none'}>
        <CustomDate
          id="end_time"
          label={lastLabel}
          handleChange={handleChange}
          dateFormat="MMMM yyyy"
          showMonthYearPicker
          showFullMonthYearPicker
          value={endTime}
          placeholderText={lastPlaceholderText ?? 'December 2021'}
          {...props}
        />
      </div>
    </>
  );
};

export default RangeMonth;
