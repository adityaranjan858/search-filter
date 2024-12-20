import { useState } from 'react';
import './App.css';

function App() {
  // Initial array of fruits
  const fruits = ["Apple", "Mango", "Orange", "Banana", "Pineapple", "Watermelon"];
  
  // State for the filtered fruits
  const [searchResults, setSearchResults] = useState(fruits);
  const [searchTerm, setSearchTerm] = useState('');

  const searchHandler = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    if (searchValue === "") {
      // Reset to the full list when the search input is empty
      setSearchResults(fruits);
    } else {
      // Filter the fruits that include the search value
      const filteredValue = fruits.filter(item => 
        item.toLowerCase().includes(searchValue.toLowerCase())
      );
      setSearchResults(filteredValue);
    }
  }

  return (
    <>
      <div className="mb-3">
        <label htmlFor="fruitSearch" className="form-label">Search : </label>
        <input
          type="text"
          className="form-control form-control-sm"
          id="fruitSearch"
          value={searchTerm} // Make the input a controlled component
          onChange={searchHandler}
          size="30"
          placeholder="Type a fruit name"
        />
      </div>

      <ul className='container'>
        {searchResults.length > 0 ? (
          searchResults.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li>No results found.</li> // Message for no matching items
        )}
      </ul>
    </>
  );
}

export default App;
