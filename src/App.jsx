import Container from "./components/Container/Container";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import user from "./data/user.json";
import data from "./data/data.json"
import friends from "./data/friends.json"
import transactions from "./data/transactions.json"

 const App = () => {
  return (
    <Container>
      <ProfilePage><Profile data={user} />
      <FriendList friends={friends} />
      </ProfilePage>
      <Statistics title="Upload stats" stats={data} />
      <TransactionHistory items={transactions}/>
    </Container>
  );
};

export default App;
