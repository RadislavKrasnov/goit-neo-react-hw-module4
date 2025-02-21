import { useState } from 'react';
import { toast } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSublit = e => {
    e.preventDefault();

    if (input.trim() === '') {
      toast.error('Please enter a search term');
      return;
    }

    onSubmit(input);
  };

  return (
    <header>
      <form onSubmit={handleSublit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
