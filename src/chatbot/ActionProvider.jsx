import React from 'react'

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.')

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }))
  }

  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: 'dogPicture',
      }
    )

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }))
  }
  const handleAny = () => {
    const botMessage = createChatBotMessage(
      'For now, I only know the word "hello" and "dog" .'
    )
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }))
  }
  
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleDog,
            handleAny,
          },
        })
      })}
    </div>
  )
}

export default ActionProvider
