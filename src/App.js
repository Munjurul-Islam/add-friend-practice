import { useState } from 'react';
import './App.css';
import AddedInfo from './components/addedInfo/AddedInfo';
import Friends from './components/friends/Friends';
import fakeData from './fakeData/fakeData.json';

function App() {
  const [friends, setFriends] = useState(fakeData)

  const [added, setAdded] = useState([])
  const addFriend = (friend) => {
    // console.log('clicked', friend)
    const newAdded = [...added, friend]
    setAdded(newAdded)
  };
  return (
    <div className='container'>
        <div className='left-container'>
          {
            friends.map(friend => <Friends friend={friend} addFriend={addFriend} key={friend.id}></Friends>)
          }
        </div>
        <div className='right-container'>
            <h2>You added {added.length} friends</h2>
            <AddedInfo added={added}></AddedInfo>
        </div>
    </div>
  );
}

export default App;
