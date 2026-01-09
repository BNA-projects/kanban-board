import { useMemo, useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import { Form, DateFieldWrapper } from "./TaskForm.styled";
import "react-datepicker/dist/react-datepicker.css";
import { StyledInput } from "../styles/Input.styled";
import { Button } from "../styles/Button.styled";
import { WEEK_DAYS } from "../const";

const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
  <StyledInput
    onClick={onClick}
    ref={ref}
    value={value}
    readOnly
    placeholder="Choose a date"
  />
));

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  const [weekday, setWeekday] = useState("");
  const [date, setDate] = useState(null);
  const [topic, setTopic] = useState("");

  const WEEKDAY_IDS = useMemo(() => WEEK_DAYS.map((d) => d.id), []);

  const formatDate = (d) => {
    if (!d) return null;
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    const normalizedWeekday = weekday.trim().toLowerCase();
    if (!WEEKDAY_IDS.includes(normalizedWeekday)) {
      alert(`Weekday must be one of: ${WEEKDAY_IDS.join(" ")}`);
      return;
    }

    const formattedDate = formatDate(date);

    console.log("ADD:", task, formattedDate, topic, normalizedWeekday, );
    onAddTask(task, formattedDate, topic, normalizedWeekday);
    setTask("");
    setDate(null);
    setTopic("");
    setWeekday("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="Enter a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <StyledInput
        type="text"
        placeholder="Enter a day of a week...( Example : mon)"
        value={weekday}
        maxLength={3}
        onChange={(e) => setWeekday(e.target.value.toLowerCase())}
      />

      <DateFieldWrapper>
        <DatePicker
          selected={date}
          onChange={(d) => setDate(d)}
          customInput={<CustomDateInput />}
          dateFormat="dd.MM.yyyy"
        />
      </DateFieldWrapper>

      <StyledInput
        type="text"
        placeholder="Enter a new topic..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <Button type="submit">Add Task</Button>
    </Form>
  );
};

export default TaskForm;
