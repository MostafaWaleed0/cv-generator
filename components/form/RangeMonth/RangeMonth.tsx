import { HandleChangeType } from 'lib/types';
import { CustomDate } from 'components/form';

interface Props extends HandleChangeType {
  startTime: string;
  firstLabel: string;
  lastLabel: string;
  [x: string]: any;
}

const RangeMonth: React.FC<Props> = ({
  startTime,
  handleChange,
  firstLabel,
  lastLabel,
  ...props
}) => (
  <>
    <CustomDate
      id="start_time"
      label={firstLabel}
      handleChange={handleChange}
      dateFormat="MMMM yyyy"
      showMonthYearPicker
      showFullMonthYearPicker
      {...props}
    />
    <div className={startTime?.length ? '' : 'pointer-events-none select-none'}>
      <CustomDate
        id="end_time"
        label={lastLabel}
        handleChange={handleChange}
        dateFormat="MMMM yyyy"
        showMonthYearPicker
        showFullMonthYearPicker
        {...props}
      />
    </div>
  </>
);

export default RangeMonth;
