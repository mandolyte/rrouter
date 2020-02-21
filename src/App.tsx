import React from 'react';
import {BrowserRouter as Router,Link,useLocation} from 'react-router-dom';
import Download from '@axetroy/react-download';
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

const mockData = `one,two,three
alpha,beta,gamma
`;

function QueryApi() {
  let query = useQuery();
  let bks   = query.get("books");
  let fmt   = query.get("format");

  if (fmt !== null) {
    if ( bks !== null ) {
      if ( fmt === "csv" ) {
        download("mytest.csv",mockData);
        return (<div></div>);
      } else if ( fmt === "string" ) {
        download("mytest.txt", mockData.substring(0,3) );
        return (<div></div>);
      }
    }
  }

  return (
    <div>
      <div>
        <h2>Book Package API</h2>
        <ul>
          <li>
            <Link to="/book-package-app?books=gen,exo">Book Package</Link>
          </li>
          <li>
          <Link to="/book-package-app/download?books=gen,exo&format=string">Book Package Total as string</Link>            
          </li>
          <li>
            <Link to="/book-package-app/download?books=1jn,2jn,3jn&format=csv">Book Package Details as CSV</Link>
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
        <div>
        <h3>
          The value of <code>books</code> in the query string is &quot;{books}&quot;<br/>
          The value of <code>format</code> in the query string is &quot;{format}&quot;
        </h3>
        <Download file="test.md" content={ (format === 'csv' ? mockData: mockData.substring(0,3)) }>
          <button type="button">Export Data</button>
        </Download>
        {/*download("mytest.txt",mockData)*/}
        </div>
      ) : (
        <h3>There are no books in the query string</h3>
      )}
    </div>
  );
}


function download(filename: string, text: string) {
  let element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Start file download.
//download("hello.txt","This is the content of my file :)");

export default App;
