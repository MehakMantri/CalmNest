import React, { useEffect , useState} from 'react'
import {process} from 'dotenv'
import { MdDateRange } from 'react-icons/md';

const Articles = () => {
  // const apikey = process.env.ARTICLE_API_KEY
  // useEffect(()=>{

  //   const fetchArticles = async () => {
  //       try {
  //       const response = await fetch(
  //         `https://newsapi.org/v2/everything?q=mental%20health&sortBy=publishedAt&apiKey=3c9efa5d9f694c74b57bb8697c1c3300`
  //       );
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch articles');
  //       }
  //       const data = await response.json();
  //       // return data.articles;
  //       console.log(data);
  //       } catch (error) {
  //         console.error(error);
  //         // return [];
  //       }
  //   };
  //   fetchArticles();
  
  // })
  const [entryText, setEntryText] = useState('');
  const [entries, setEntries] = useState([]);

  // Function to save entries to local storage (simulated persistence)
  const saveEntry = () => {
    if (entryText) {
      const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
      const newEntry = { date, entry: entryText };
      setEntries([...entries, newEntry]);
      setEntryText(''); // Clear entry field after saving
      localStorage.setItem('entries', JSON.stringify(entries));
    }
  };

  const deleteEntry = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1); // Remove the entry at the specified index
    setEntries(updatedEntries);
    localStorage.setItem('entries', JSON.stringify(updatedEntries));
  };

  // Function to display saved entries
  const displayEntries = () => {
    const savedEntries = localStorage.getItem('entries');
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  };
  useEffect(() => {
    displayEntries();
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-8 overflow-auto">
      <h1 className="text-3xl font-bold mb-8">My Journal</h1>
      <div id="journal-entry" className="flex flex-col space-y-4">
        <textarea
          id="entry-text"
          rows="10"
          placeholder="How are you feeling today..."
          value={entryText}
          onChange={(e) => setEntryText(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button onClick={saveEntry} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-sm">
          Save Entry
        </button>
      </div>
      <div id="entries-list" className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Past Entries</h2>
        {entries.map((entry, index) => (
          <div key={index} className="entry border rounded-md p-4 shadow-sm mb-4">
            <div>

            <h3 className='flex items-center gap-2'><MdDateRange/><span>{entry.date}</span></h3>
            <p className="text-gray-700">{entry.entry}</p>
            </div>
            <button
              onClick={() => deleteEntry(index)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md shadow-sm"
            >
              Delete
            </button>
          </div>
          
        ))}
      </div>
    </div>
  )
}

export default Articles