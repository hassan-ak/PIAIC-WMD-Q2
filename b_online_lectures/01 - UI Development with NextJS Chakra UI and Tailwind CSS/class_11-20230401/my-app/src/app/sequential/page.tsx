import React from 'react';

type Book = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};

async function getFiction() {
  const response = await fetch(
    'https://simple-books-api.glitch.me/books?type=fiction',
    {
      cache: 'no-store',
    }
  );
  const data = response.json();
  return data;
}

async function getNonfiction() {
  const response = await fetch(
    'https://simple-books-api.glitch.me/books?type=non-fiction',
    {
      cache: 'no-store',
    }
  );
  const data = response.json();
  return data;
}

export default async function Sequential() {
  const fictionBooks = await getFiction();
  const nonfictionBooks = await getNonfiction();

  return (
    <div>
      <h1 className='text-lg font-medium'>Fiction Books</h1>
      <ul className='ml-5'>
        {fictionBooks.map((book: Book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>

      <h1 className='text-lg font-medium'>Non-Fiction Books</h1>
      <ul className='ml-5'>
        {nonfictionBooks.map((book: Book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
}
