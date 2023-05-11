function Profile() {
  return <img src='https://i.imgur.com/MK3eW3As.jpg' alt='Katherine Johnson' />;
}

const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink',
  },
};

function Item({ name, isPacked }: { name: any; isPacked: any }) {
  return (
    <li className='item'>
      {name} {isPacked && '✔'}
    </li>
  );
}

let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function Gallery() {
  return (
    <div>
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
      <section>
        <div style={person.theme}>
          <h1>{person.name}&lsquo;s Todos</h1>
          <img
            className='avatar'
            src='https://i.imgur.com/7vQD0fPs.jpg'
            alt='Gregorio Y. Zara'
          />
          <ul>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
          </ul>
        </div>
      </section>
      <section>
        <h1>Sally Ride&lsquo;s Packing List</h1>
        <ul>
          <Item isPacked={true} name='Space suit' />
          <Item isPacked={true} name='Helmet with a golden leaf' />
          <Item isPacked={false} name='Photo of Tam' />
        </ul>
      </section>
      <>
        <Cup />
        <Cup />
        <Cup />
      </>
    </div>
  );
}
