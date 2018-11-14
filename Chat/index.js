import { DrawerNavigator } from 'react-navigation';
import PostReview from "./PostReview.js";
import CommentsSuggestions from './CommentsSuggestions.js';


const ChatRoute = DrawerNavigator({
  //Home: { screen: HomePage },
  PostReviewChat: { screen: PostReview},
  CommentsSuggestions: {screen: CommentsSuggestions},
    ///Profile: { screen: ProfileScreen },
});

export default ChatRoute;