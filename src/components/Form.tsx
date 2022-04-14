import { useState } from "react";

const Form = () => {
  const [inputValues, setInputValues] = useState({
    nick: "",
    subMonths: 0,
    avatar: "",
    description: "",
  });
  const handleSubmit = () => {};

  const handleChanges = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValues({
      ...inputValues,
      [evt.target.name]: evt.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChanges}
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="nick"
          required
        />
        <input
          onChange={handleChanges}
          value={inputValues.subMonths}
          type="number"
          name="subMonths"
          placeholder="subMonths"
        />
        <input
          onChange={handleChanges}
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
        />
        <textarea
          onChange={handleChanges}
          value={inputValues.description}
          name="description"
          placeholder="description"
        />
        <button type="submit">Save new Sub</button>
      </form>
    </div>
  );
};

export default Form;
