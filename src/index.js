import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const BookImg=()=>{
  return <img src='https://m.media-amazon.com/images/I/71ki8f20R7S._AC_UL320_.jpg' alt='' style={{width:'100px', height:'150px'}}/>
}

const Review=()=>{
  return <div>
      Review: ⭐⭐⭐⭐
  </div>
}

const Author=()=>{
  return <div>
      <h5 style={{color:'green', letterSpacing:'4px', margin:'6px 2px'}}>Author: J K Rawling</h5>
  </div>
}

const About=()=>{
  return <div style={{marginTop:'0px', display:'block', width:'30vw'}}>
      <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Integer vulputate risus id erat tempor, eget convallis augue vehicula. 
        Suspendisse lacinia posuere luctus.</p>
  </div>
}

const Book=()=>{
  return <section>
    <BookImg />
    <Review />
    <Author />
    <About />
  </section>
}

const Booklist=()=>{
  return <section className='booklist'> 
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
  </section>
}
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Booklist />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
