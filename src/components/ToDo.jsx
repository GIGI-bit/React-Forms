const ToDo = ({ id, title, removeTodo }) => {
  return (
    <div style={{ display: "flex" }}>
      <p>Id - {id}</p>
      <p>{title}</p>
      <button onClick={() => removeTodo(id)}>Remove</button>
    </div>
  );
};

export default ToDo;
