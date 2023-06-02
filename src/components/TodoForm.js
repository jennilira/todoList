import React, { useState, useEffect, useRef } from 'react';

//e.target.value is the value property of some DOM element, in this case that means the text entered in the search input.

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
//props = esse elemento sabe
// ?= true 
  const inputRef = useRef(null);
  //useRef(null) ,para redenrizar se estiver null

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input

 // ex :  Math.floor(Math.random() * 100)) returns a random integer between 0 and 99 (both included):

      //The Math.random() mutltiplicar essas coisas 
      //method will return a floating-point number between 0 and 1 (exclusive)
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;

