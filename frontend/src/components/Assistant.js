import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AssistantContext } from './AssistantContext';

function Assistant() {
  const { assistantState, setAssistantState } = useContext(AssistantContext);
  const [model, setModel] = useState('');
  const [name, setName] = useState('');

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCreateAssistant = async () => {
    try {
      const response = await axios.post('/api/assistants/create', { model, name });
      // Update the Assistant context with the new assistant's information
      setAssistantState({ ...assistantState, currentAssistantId: response.data.id });
      // Call additional logic if needed
    } catch (error) {
      console.error('Error creating assistant:', error);
    }
  };

  return (
    <div className='assistant'>
      <div>
        <label>Model:</label>
        <input type="text" value={model} onChange={handleModelChange} placeholder="Enter model ID" />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} placeholder="Enter assistant name" />
      </div>
      <button onClick={handleCreateAssistant}>Create Assistant</button>
    </div>
  );
}

export default Assistant;
