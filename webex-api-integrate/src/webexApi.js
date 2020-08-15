import { init as initWebex } from 'webex';


// Initialize the SDK and make it available to the window
const webex = (window.webex = initWebex({
  credentials: {
    access_token: 'NDlkYmU5NDgtYzRjMi00NmU5LWJkNDEtMjg5NDMxY2NmMjllMGUwZGMxODUtZGZk_PF84_consumer'
  }
}));


export default webex;