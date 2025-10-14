import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef } from "react";
import { StyledInput } from "../../styles/Input.styled";

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <StyledInput onClick={onClick} ref={ref} value={value} />
));

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      customInput={<CustomInput />}
      dateFormat="dd.MM.yyyy"
    />
  );
};

export default Calendar;
