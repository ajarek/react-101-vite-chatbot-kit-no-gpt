// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'Lawina';

import DogPicture from '../components/DogPicture'

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#05d69e',
      
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;