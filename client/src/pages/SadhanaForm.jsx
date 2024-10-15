import React, { useState } from "react";
import sadhanaForm from "../assets/sadhanaForm.png";
import axios from "axios";
import { useSelector } from "react-redux";

const options = {
  "Chanting on beads": ["0", "1-4 Rounds", "5-8 Rounds", "9-12 Rounds", "13-16 Rounds", "17-25 Rounds", "26 Rounds Above"],
  "Hearing Time": ["0", "1-16 min", "15-19 min", "20-39 min", "30-40 min", "41-60 min", "61 min above"],
  "Reading Time": ["0", "1-16 min", "15-19 min", "20-39 min", "30-40 min", "41-60 min", "61 min above"],
  "Sleeping time previous day": ["After 11:30 pm", "11:14 - 11:30 pm", "10:46 - 11:15 pm", "10:15 - 10:45 pm", "10:00 - 10:15 pm", "Before 9:45 pm"],
  "Japa completion Time": ["Less than 70 min", "70-89 min", "90-100 min", "100-110 min", "110-120 min"],
  "Wake up time today": ["After 6 am", "5:15 - 6:00 am", "5:15 - 5:00 am", "4:45 - 5:15 am", "4:30 - 4:45 am", "4:15 - 4:45 am", "Before 4:15 am"],
  "Reporting Sadhna daily": ["4 days after", "3 days after", "2 days after", "1 day after", "Yes on the same day"],
  "Attendance Morning class": ["Absent", "Present"],
  "Attendance Evening class": ["Absent", "Present"],
  "Any sewa Given by Sewa Authority": ["Less than 4 min", "5-9 min", "10-19 min", "20-29 min", "30-60 min"],
  "Book distributed today": ["No book", "1 book", "2-5 books", "More than 6 books"],
  "Temple collection": ["No", "Yes"],
  "Did you perform Deep Daan": ["No", "Yes"],
  "Did you read Damodarastakam": ["No", "Yes"],
  "Did you read Gopi geet": ["No", "Yes"],
  "Did you read Jagannathastakam": ["No", "Yes"],
  "Did you read Nandanastakam": ["No", "Yes"],
  "Did you read Chaurashtakam": ["No", "Yes"],
  "Did you read BG chapter 15": ["No", "Yes"],
  "Did you do Tulsi seva": ["No", "Yes"],
  "Any Unnotice Seva": ["No", "Yes"],
  "Any austerity": ["No", "Yes"],
};

const pointsMapping = {
  "Chanting on beads": { 0: 0, "1-4 Rounds": 4, "5-8 Rounds": 6, "9-12 Rounds": 8, "13-16 Rounds": 10, "17-25 Rounds": 12, "26 Rounds Above": 15 },
  "Hearing Time": { 0: 0, "1-16 min": 4, "15-19 min": 6, "20-39 min": 8, "30-40 min": 10, "41-60 min": 12, "61 min above": 15 },
  "Reading Time": { 0: 0, "1-16 min": 4, "15-19 min": 6, "20-39 min": 8, "30-40 min": 10, "41-60 min": 12, "61 min above": 15 },
  "Sleeping time previous day": { "After 11:30 pm": 0, "11:14 - 11:30 pm": 4, "10:46 - 11:15 pm": 6, "10:15 - 10:45 pm": 8, "10:00 - 10:15 pm": 10, "Before 9:45 pm": 15 },
  "Japa completion Time": { "Less than 70 min": 0, "70-89 min": 4, "90-100 min": 6, "100-110 min": 8, "110-120 min": 10 },
  "Wake up time today": { "After 6 am": 0, "5:15 - 6:00 am": 4, "5:15 - 5:00 am": 6, "4:45 - 5:15 am": 8, "4:30 - 4:45 am": 10, "4:15 - 4:45 am": 12, "Before 4:15 am": 15 },
  "Reporting Sadhna daily": { "4 days after": 0, "3 days after": 4, "2 days after": 6, "1 day after": 8, "Yes on the same day": 10 },
  "Attendance Morning class": { Absent: 0, Present: 10 },
  "Attendance Evening class": { Absent: 0, Present: 10 },
  "Any sewa Given by Sewa Authority": { "Less than 4 min": 0, "5-9 min": 4, "10-19 min": 6, "20-29 min": 8, "30-60 min": 10 },
  "Book distributed today": { "No book": 0, "1 book": 10, "2-5 books": 12, "More than 6 books": 15 },
  "Temple collection": { No: 0, Yes: 0 },
  "Did you perform Deep Daan": { No: 0, Yes: 0 },
  "Did you read Damodarastakam": { No: 0, Yes: 0 },
  "Did you read Gopi geet": { No: 0, Yes: 0 },
  "Did you read Jagannathastakam": { No: 0, Yes: 0 },
  "Did you read Nandanastakam": { No: 0, Yes: 0 },
  "Did you read Chaurashtakam": { No: 0, Yes: 0 },
  "Did you read BG chapter 15": { No: 0, Yes: 0 },
  "Did you do Tulsi seva": { No: 0, Yes: 0 },
  "Any Unnotice Seva": { No: 0, Yes: 0 },
  "Any austerity": { No: 0, Yes: 0 },
};

export default function SadhanaForm() {
  const [selectedOptions, setSelectedOptions] = useState({});
  const { currentUser } = useSelector((state) => state.user) || {};
  const [points, setPoints] = useState(0);

  const handleSelection = (category, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [category]: option,
    }));
  };

  const handleSubmit = async () => {
    let totalPoints = 0;

    Object.keys(selectedOptions).forEach((category) => {
      const option = selectedOptions[category];
      totalPoints += pointsMapping[category][option] || 0;
    });

    setPoints(totalPoints);
    const formData = { chooseOption: selectedOptions, points: totalPoints + (currentUser?.points || 0) };

    try {
      const res = await axios.post("https://sadhana-h2ch.onrender.com/api/sadhana", formData, {
        headers: { Authorization: currentUser?.token },
      });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="overflow-x-hidden">
      <div className="hidden md:grid grid-cols-2 gap-4 mt-4 mx-4">
        <div>
          <img src={sadhanaForm} className="w-full max-w-lg" alt="Home" />
        </div>
        <div className="flex items-center">
          <p className="text-gray-600 font-normal text-2xl md:text-4xl lg:text-6xl leading-snug tracking-tight mt-8 md:mt-0 ml-0 md:ml-10">
            Deeper your Sadhana,
            <br /> lesser you are affected
            <br /> by the world
          </p>
        </div>
      </div>

      <div className="w-full md:mx-20 mx-4">
        {Object.keys(options).map((category) => (
          <div key={category} className="mb-6">
            <h3 className="text-lg font-semibold mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {options[category].map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelection(category, option)}
                  className={`px-2 py-1 border rounded ${
                    selectedOptions[category] === option ? "bg-[#008080]" : "bg-[#FFEDCC]"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
        <div className="w-full flex justify-center">
          <button
            onClick={handleSubmit}
            className="rounded-lg md:px-5 md:py-3 px-3 py-2 bg-[#008080] text-white font-bold mt-5 text-lg md:text-xl"
          >
            Submit
          </button>
        </div>
      </div>

      <div className="md:hidden h-[150px]"></div>
    </div>
  );
}
