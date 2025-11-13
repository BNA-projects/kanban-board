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
    placeholder="Choose a date"
  />
));

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState(null);
  const [topic, setTopic] = useState("");

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

    const formattedDate = formatDate(date);

console.log("ADD:", task, formattedDate, topic);
onAddTask(task, formattedDate, topic);

    setTask("");
    setDate(null);
    setTopic("");
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
