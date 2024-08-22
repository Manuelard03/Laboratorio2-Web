import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizStart from './sections/QuizStart/QuizStart.jsx';
import QuizQuestion from './sections/QuizQuestion/QuizQuestion.jsx';
import QuizResult from './sections/QuizResult/QuizResult.jsx';

function App() {
  const [answers, setAnswers] = useState({});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuizStart />} />
        <Route path="/quiz/:id" element={<QuizQuestion answers={answers} setAnswers={setAnswers} />} />
        <Route path="/result" element={<QuizResult answers={answers} />} /> 
      </Routes>
    </Router>
  );
}

export default App;

