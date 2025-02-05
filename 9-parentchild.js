import { useState, createContext, useContext } from 'react';

const UserContext = createContext()

function ParentComponent() {
  const [name, setName] = useState("Naro");
  const [age, setAge] = useState(12);
 
  return (
    <UserContext.Provider value={{ name, age }}>
      <ChildComponent />
      <GrandchildComponent />
    </UserContext.Provider>
  );
}
function ChildComponent() {
  return (
    <div>
      <UserInfo />
      <GrandchildComponent />
    </div>
  );
}

function GrandchildComponent() {
  return (
    <div>
      <UserInfo />
    </div>
  );
}

function UserInfo() {
  const { name, age } = useContext()
  return (
    <>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </>
  );
}