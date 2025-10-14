import { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import { Form, DateFieldWrapper } from "./TaskForm.styled";
import "react-datepicker/dist/react-datepicker.css";
import { StyledInput } from "../styles/Input.styled";
import { Button } from "../styles/Button.styled";

const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
  <StyledInput
    onClick={onClick}
    ref={ref}
    value={value}
    readOnly
    placeholder="Choise a date"
  />
));

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAddTask(task, date);
    setTask("");
    setDate(null);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="Enter a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <DateFieldWrapper>
        <DatePicker
          selected={date}
          onChange={(d) => setDate(d)}
          customInput={<CustomDateInput />}
          dateFormat="dd.MM.yyyy"
        />
      </DateFieldWrapper>
      <Button type="submit">Add Task</Button>
    </Form>
  );
};

export default TaskForm;
