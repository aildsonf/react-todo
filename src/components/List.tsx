import React, { useRef, useState } from "react";
import "./List.css";

export default function List() {
  const [element, setElement] = useState<string>("");
  const [list, setList] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(): void {
    setElement(inputRef.current!.value);
  }

  function handleSubmit(event: React.FormEvent<EventTarget>): void {
    event.preventDefault();
    setList([...list, element]);
    setElement("");
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="input">Input: </label>
        <input
          id="input"
          type="text"
          value={element}
          ref={inputRef}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>

      <ul>
        {list.map((l, index) => (
          <li key={index}>
            <input type="checkbox" />
            <label>{l}</label>
          </li>
        ))}
      </ul>
    </section>
  );
}
