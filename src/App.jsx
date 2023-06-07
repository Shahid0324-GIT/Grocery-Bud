import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import Items from "./Items";

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const getLocalStorage = () => {
  let list = localStorage.getItem("list");

  if (list) {
    list = JSON.parse(localStorage.getItem("list"));
  } else {
    list = [];
  }
  return list;
};

const App = () => {
  const [items, setItems] = useState(getLocalStorage());

  const addItems = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };

    const newItems = [...items, newItem];

    setItems(newItems);
    setLocalStorage(newItems);

    toast.success("Item added to the list");
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);

    toast.success("Item removed the list");
  };

  const editItems = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };

        return newItem;
      }

      return item;
    });

    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <main>
      <ToastContainer />
      <section className="section-center">
        <Form addItems={addItems} />
        <Items items={items} removeItem={removeItem} editItems={editItems} />
      </section>
    </main>
  );
};

export default App;
