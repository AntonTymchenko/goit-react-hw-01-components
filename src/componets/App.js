import React from 'react';
import Profile from '../componets/task01/ProfileComponent';
import Statistics from './task02/Statistics';
import TransactionHistory from './task04/TransactionHistory';
import FriendList from './task03/FriendList';
import Container from './Container/Conatiner';

import user from '../user.json';
import statisticalData from '../statistical-data.json';
import transactions from '../transactions.json';
import friends from '../friends.json';

const App = () => (
  <div>
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Container>
    <Container>
      <Statistics title="Upload stats" stats={statisticalData} />
    </Container>
    <Container>
      <FriendList friends={friends} />
    </Container>
    <Container>
      <TransactionHistory items={transactions} />
    </Container>
  </div>
);

export default App;
