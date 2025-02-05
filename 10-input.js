// In React 19, forwardRef is no longer necessary. Pass ref as a prop instead. 
import { useRef } from 'react';

function SearchButton({ onClick }) {
  return (
    <button onClick={onClick}> Search </button>
  );
}

function SearchInput({ inputRef }) {
  return (
    <input ref={inputRef}/>
  );
}

export default function Page() {
  const inputRef = useRef()

  const handleSearchFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }
  return (
    <>
      <nav>
        <SearchButton onClick={handleSearchFocus} />
      </nav>
      <SearchInput inputRef={inputRef} />
    </>
  );
}