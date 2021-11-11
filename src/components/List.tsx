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

  function handleRemoval(index: number): void {
    setList(
      [...list].filter(function (item) {
        return item !== list[index];
      })
    );
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="input">
          <b>Input: </b>
        </label>
        <input
          id="input"
          type="text"
          value={element}
          ref={inputRef}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>

      {list.length > 0 && (
        <ul>
          {list.map((l, index) => (
            <li key={l}>
              <span>
                <input type="checkbox" />
                <label>{l}</label>
              </span>

              <button onClick={(e) => handleRemoval(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
