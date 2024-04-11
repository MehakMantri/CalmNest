import React, { useState, useEffect } from 'react';
import { BsArrow90DegDown, BsArrow90DegLeft, BsArrow90DegRight, BsArrow90DegUp, BsArrowBarRight, BsArrowClockwise, BsArrowDown, BsArrowRight, BsEye, BsFolderSymlink, BsLink, BsPencil, BsPencilFill, BsPerson, BsPersonBadge, BsPersonFill, BsSkipEndCircleFill } from 'react-icons/bs';
import { TbLoadBalancer, TbLoader } from 'react-icons/tb';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          'https://www.googleapis.com/books/v1/volumes?q=mental+health&maxResults=10'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const data = await response.json();
        const updatedBook = data.items.map((books) => {
            return {
                ...books,
                volumeInfo:{
                    ...books.volumeInfo,
                    description: books.volumeInfo.description ? books.volumeInfo.description.slice(0,50)+'...':''
                }
            };
        });
        setBooks(updatedBook);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <div className='flex m-auto items-center'><span className='text-4xl'>Loading...</span></div>;
  if (error) return <div>Error: {error}</div>;
  console.log(books);

  return (
    <div className='overflow-y-auto w-full'>
        <div className='mx-10 text-3xl font-extralight blur-none p-4 my-2 flex flex-row content-center gap-4'>
            <BsArrowRight className=''/><h1 className=''>Some Mostly Recommended Mental Health Books...</h1>
        </div>
      <ul className='flex flex-row flex-wrap justify-around '>
        {books.map((book) => (
          <li key={book.id} className='x-2 my-2 w-2/5 p-4 flex flex-col items-center shadow'>
            <h2 className='font-bold my-3'>{book.volumeInfo.title}</h2>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.id} className='w-1/3 j'/>
            <div className='flex gap-2 items-center my-2'>
            <BsPencil/>
            <p className='text-blue-500'>{book.volumeInfo.authors[0]}</p>
            </div>
            <p className='my-1 font-sans font-thin'>{book.volumeInfo.description}</p>
            <button className='bg-blue-300 px-3 w-38 flex items-center gap-2 text-white rounded my-1'><span><BsEye/></span><span>Read</span></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
