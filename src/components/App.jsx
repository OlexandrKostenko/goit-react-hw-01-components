
import FriendList from "./FriendList/FriendList";
import friends from "../path/friends.json";
import user from "../path/user.json";
import data from "../path/data.json";
import transactions from "../path/transactions.json";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { Box } from "./Box";



export const App = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
      <FriendList friends={friends} />
      <Statistics stats={data} />
      <TransactionHistory items={transactions} />
  </Box>
  );
};
