import React from 'react';
import Profile from './Profile/Profile';
import user from './Profile/user';
import Statistics from './Statistic/Statistics';
import statisticalData from './Statistic/statistical-data';
import FriendsList from './FriendsList/FriendList';
import friends from './FriendsList/friends';
import TransactionHistory from './Transaction/TransactionHistory';
import transactions from './Transaction/transactions';

const App = () => (
  <div>
  <Profile user={user}/>
  <Statistics title="File upload" stats={statisticalData}/>
  <FriendsList friends={friends} />
  <TransactionHistory items={transactions} />
  </div>
);

export default App;