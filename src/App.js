import React, { useState } from 'react';
import data from './data';
import List from './List';

const App = () => {
  const [people, setPeople] = useState(data);
  const numberOfPeople = people.length;

  return (
    <main>
      <section className="container">
        <h3> {numberOfPeople} birthday today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button> 
      </section>
    </main>
  )
}

export default App;
