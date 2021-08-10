import React from 'react';
import Profile from '../componets/task01/ProfileComponent';
import Statistics from './task02/Statistics';
import TransactionHistory from './task04/TransactionHistory';
import FriendList from './task03/FriendList';

import user from '../user.json';
import statisticalData from '../statistical-data.json';
import transactions from '../transactions.json';
import friends from '../friends.json';

const App = () => (
  <div>
    <Profile {...user} />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
