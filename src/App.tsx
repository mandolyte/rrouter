import React from 'react';
import {BrowserRouter as Router,Link,Route,Switch,useLocation} from 'react-router-dom';
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
        //return (<div></div>);
      } else if ( fmt === "string" ) {
        download("mytest.txt", mockData.substring(0,3) );
        //return (<div></div>);
      }
    }
  }

  return (
    <div>
      <div>
        <h2>Book Package API</h2>
        <ul>
          <li>
            <Link to="/rrouter?books=gen,exo">Book Package</Link>
          </li>
          <li>
          <Link to="/rrouter?books=gen,exo&format=string">Book Package Total as string</Link>            
          </li>
          <li>
            <Link to="/rrouter?books=1jn,2jn,3jn&format=csv">Book Package Details as CSV</Link>
          </li>
          <li>
            <Link to="/rrouter/download">About</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <BP books={query.get("books")} format={query.get("format")} />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/rrouter/download">
            <About />
          </Route>
          <Route path="/rrouter">
            <Books />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

function Books() {
  return (
    <div>
      <h2>Book Package</h2>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
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
