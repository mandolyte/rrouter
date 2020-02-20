import React from 'react';
import {BrowserRouter as Router,Link,useLocation} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <QueryApi />
    </Router>
  );
}


// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function QueryApi() {
  let query = useQuery();

  return (
    <div>
      <div>
        <h2>Book Package API</h2>
        <ul>
          <li>
            <Link to="/book-package-app?books=gen,exo">Book Package</Link>
          </li>
          <li>
            <Link to="/book-package-app?books=mat,mar&format=text">Book Package Total as string</Link>
          </li>
          <li>
            <Link to="/book-package-app?books=1jn,2jn,3jn&format=csv">Book Package Details as CSV</Link>
          </li>
        </ul>

        <BP books={query.get("books")} format={query.get("format")} />
      </div>
    </div>
  );
}

function BP({ books, format }: {books: string|null; format: string|null; }) {
  return (
    <div>
      {books ? (
        <h3>
          The value of <code>books</code> in the query string is &quot;{books}&quot;<br/>
          The value of <code>format</code> in the query string is &quot;{format}&quot;
        </h3>
      ) : (
        <h3>There are no books in the query string</h3>
      )}
    </div>
  );
}

export default App;
