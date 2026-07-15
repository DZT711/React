function Item({name,isChecked}) {
  return (
    <li className="item">
      {name} {isChecked && "✅" }
    </li>
  );
}
export default function Todos() {
//   const todos = [
//     {name: "Learn React", isChecked: true},
//     {name: "Learn React Router", isChecked: false},
//     {name: "Learn React Query", isChecked: false},
//   ];
    return (
      <section>
        <h2>Activities</h2>
        <ul>
          {/* {todos.map((todo) => (
            <Item key={todo.name} name={todo.name} isChecked={todo.isChecked} />
          ))} */}
            <Item name="Learn React" isChecked={true} />
            <Item name="Learn React Router" isChecked={false} />
            <Item name="Learn React Query" isChecked={false} />
        </ul>
      </section>
    );
}