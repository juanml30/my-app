import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

interface SubProps {
  nick: string;
  subMonths: number;
  avatar: string;
  description?: string;
}

const INITIAL_STATE = [
  {
    nick: "dapelu",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?img=10",
    description: "Moderador a veces",
  },
  {
    nick: "juan",
    subMonths: 2,
    avatar: "https://i.pravatar.cc/150?img=17",
  },
];

function App() {
  const [subs, setSubs] = useState<Array<SubProps>>([]);
  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);
  return (
    <div className="App">
      <h1>Juani subs</h1>
      <List subs={subs} />
      <Form />
    </div>
  );
}

export default App;
