import {useState} from 'react';
import './App.css';
import {withDateTime} from './Hoc/withDateTime'

function DateTime(props) {
  return (
      <p className="date">{props.date}</p>
  )
}

function Video(props) {
  const DateTimePretty = withDateTime(DateTime, props.date);
  return (
      <div className="video">
        <iframe title="video" src={props.url} allow="autoplay; encrypted-media" />
        <DateTimePretty/>
      </div>
  )
}

function VideoList(props) {
  return props.list.map(item => <Video key={item.url} url={item.url} date={item.date} />);
}

export default function App() {
  const [list] = useState([
    {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2021-08-13 13:24:00'
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2021-08-03 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2021-02-03 23:16:00'
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-03 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-01 16:17:00'
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-12-02 05:24:00'
    },
  ]);

  return (
      <VideoList list={list} />
  );
}
