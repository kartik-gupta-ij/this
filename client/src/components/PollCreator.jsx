import React, { useState } from 'react';

const PollCreator = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([{ text: '', votes: 0 }]);
  const [submittedPoll, setSubmittedPoll] = useState(null);
  const [voted, setVoted] = useState(false);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index].text = value;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, { text: '', votes: 0 }]);
  };

  const removeOption = (index) => {
    if (options.length > 1) {
      const newOptions = options.filter((_, i) => i !== index);
      setOptions(newOptions);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedPoll({ question, options });
    // Reset the form
    setQuestion('');
    setOptions([{ text: '', votes: 0 }]);
  };

  const handleVote = (index) => {
    if (voted) return; // Prevent voting more than once

    const newOptions = [...submittedPoll.options];
    newOptions[index].votes += 1;
    setSubmittedPoll({ ...submittedPoll, options: newOptions });
    setVoted(true);
  };

  return (
    <div className="poll-creator">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Poll Question:</label>
          <input
            type="text"
            value={question}
            onChange={handleQuestionChange}
            placeholder="Enter your question here"
            required
          />
        </div>
        <div>
          <label>Options:</label>
          {options.map((option, index) => (
            <div key={index} className="option">
              <input
                type="text"
                value={option.text}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                placeholder={`Option ${index + 1}`}
                required
              />
              <button type="button" onClick={() => removeOption(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={addOption}>
            Add Option
          </button>
        </div>
        <button type="submit">Create Poll</button>
      </form>

      {submittedPoll && (
        <div className="submitted-poll">
          <h2>Poll Question:</h2>
          <p>{submittedPoll.question}</p>
          <h3>Options:</h3>
          <ul>
            {submittedPoll.options.map((option, index) => (
              <li key={index}>
                {option.text} - Votes: {option.votes}
                {!voted && (
                  <button onClick={() => handleVote(index)}>Vote</button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PollCreator;
