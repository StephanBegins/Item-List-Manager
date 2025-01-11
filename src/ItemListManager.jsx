import React, { useState } from 'react';

const ItemListManager = () => {
  // State to store the input value and list of items
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  // Function to handle the button click event
  const addItem = () => {
    if (inputText.trim()) { // Only add if the input is not empty
      setItems([...items, inputText]);
      setInputText(''); // Clear the input field
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.header}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png"
            alt="HackerRank Logo"
            style={styles.logo}
          />
          <h1 style={styles.heading}>Item List Manager</h1>
        </div>
        
        <div style={styles.inputContainer}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)} // Update input text state on change
            placeholder="Enter item"
            style={styles.input}
          />
          <button onClick={addItem} style={styles.button}>
            Add Item
          </button>
        </div>
        
        <ul style={styles.list}>
          {items.length === 0 ? (
            <li>No items added yet.</li> // Display a message when the list is empty
          ) : (
            items.map((item, index) => (
              <li key={index}>{item}</li> // Display each item in the list
            ))
          )}
        </ul>

        <div style={styles.footer}>
          <p>Done by: <a href="mailto:stephan1217at@gmail.com" style={styles.emailLink}>stephan1217at@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f9f9f9',
  },
  content: {
    width: '500px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    textAlign: 'center',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  logo: {
    width: '40px',
    height: '40px',
    marginRight: '10px',
  },
  heading: {
    color: 'darkgreen',
    fontSize: '1.5rem',
    margin: 0,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    maxWidth: '300px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
  },
  list: {
    marginTop: '20px',
    textAlign: 'left',
  },
  footer: {
    marginTop: '20px',
    paddingTop: '10px',
    borderTop: '1px solid #ccc',
    fontSize: '0.9rem',
    color: '#555',
  },
  emailLink: {
    color: 'darkgreen',
    textDecoration: 'none',
  },
};

export default ItemListManager;
