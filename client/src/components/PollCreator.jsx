import React, { useState } from 'react';

const PollCreator = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([{ text: '', votes: 0 }]);
  const [polls, setPolls] = useState([]);
  const [votedPolls, setVotedPolls] = useState([]);

  const handleQuestionChange = (e) => setQuestion(e.target.value);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index].text = value;
    setOptions(newOptions);
  };

  const addOption = () => setOptions([...options, { text: '', votes: 0 }]);

  const removeOption = (index) => {
    if (options.length > 1) {
      const newOptions = options.filter((_, i) => i !== index);
      setOptions(newOptions);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPoll = {
      id: Date.now(),
      question,
      options
    };
    setPolls([...polls, newPoll]);
    setQuestion('');
    setOptions([{ text: '', votes: 0 }]);
  };

  const voteOnPoll = (pollId, optionIndex) => {
    if (votedPolls.includes(pollId)) return;

    const updatedPolls = polls.map((poll) => {
      if (poll.id === pollId) {
        const updatedOptions = [...poll.options];
        updatedOptions[optionIndex].votes += 1;
        return { ...poll, options: updatedOptions };
      }
      return poll;
    });

    setPolls(updatedPolls);
    setVotedPolls([...votedPolls, pollId]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Create a Poll</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Poll Question:</label>
          <input
            type="text"
            value={question}
            onChange={handleQuestionChange}
            placeholder="Enter your question here"
            required
            className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Options:</label>
          {options.map((option, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={option.text}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                placeholder={`Option ${index + 1}`}
                required
                className="flex-grow px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => removeOption(index)}
                className="ml-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addOption}
            className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
          >
            Add Option
          </button>
        </div>
        
        <button
          type="submit"
          className="bg-green-500 text-white font-bold py-2 px-4 rounded w-full hover:bg-green-600"
        >
          Create Poll
        </button>
      </form>

      <div className="w-full max-w-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">All Polls</h2>
        {polls.map((poll) => (
          <Poll key={poll.id} poll={poll} voted={votedPolls.includes(poll.id)} voteOnPoll={voteOnPoll} />
        ))}
      </div>
    </div>
  );
};

const Poll = ({ poll, voted, voteOnPoll }) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h3 className="text-lg font-bold text-gray-800 mb-2">{poll.question}</h3>
      <ul>
        {poll.options.map((option, index) => (
          <li key={index} className="flex justify-between items-center py-2 border-b">
            <span>{option.text} - Votes: {option.votes}</span>
            {!voted && (
              <button
                onClick={() => voteOnPoll(poll.id, index)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Vote
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PollCreator;
