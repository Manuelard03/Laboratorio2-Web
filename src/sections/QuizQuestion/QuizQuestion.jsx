import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RadioGroup from '../../components/RadioGroup/RadioGroup.jsx';
import CheckboxGroup from '../../components/CheckboxGroup/CheckboxGroup.jsx';
import RangeInput from '../../components/RangeInput/RangeInput.jsx';
import Button from '../../components/Button/Button.jsx';
import ProgressBar from '../../components/ProgressBar/ProgressBar.jsx';
import Card from '../../components/Card/Card.jsx';
import { questions } from '../../data/questions';
import './QuizQuestion.css';

const QuizQuestion = ({ answers, setAnswers }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const questionIndex = parseInt(id) - 1;
  const question = questions[questionIndex];

  const [selectedOption, setSelectedOption] = useState(() => {
    if (question.type === 'checkbox') return Array.isArray(answers[id]) ? answers[id] : [];
    if (question.type === 'range') return answers[id] || 100;
    return answers[id] || '';
  });

  useEffect(() => {
    if (question.type === 'checkbox') {
      setSelectedOption(Array.isArray(answers[id]) ? answers[id] : []);
    } else if (question.type === 'range') {
      setSelectedOption(answers[id] || 100);
    } else {
      setSelectedOption(answers[id] || '');
    }
  }, [id, answers, question.type]);

  const handleNext = () => {
    if (selectedOption && (question.type !== 'checkbox' || selectedOption.length > 0)) {
      setAnswers(prev => ({ ...prev, [id]: selectedOption }));
      if (questionIndex < questions.length - 1) {
        navigate(`/quiz/${question.id + 1}`);
      } else {
        navigate('/result');
      }
    } else {
      alert('Por favor, selecciona una opción');
    }
  };

  const handleBack = () => {
    if (questionIndex > 0) {
      navigate(`/quiz/${question.id - 1}`);
    } else {
      navigate('/');
    }
  };

  return (
    <Card className="quiz-question">
      <h2>{question.question}</h2>

      {question.type === 'radio' && (
        <RadioGroup 
          options={question.options} 
          selectedOption={selectedOption} 
          onChange={(option) => setSelectedOption(option)} 
        />
      )}

      {question.type === 'checkbox' && (
        <CheckboxGroup 
          options={question.options} 
          selectedOptions={selectedOption} 
          onChange={setSelectedOption} 
        />
      )}

      {question.type === 'range' && (
        <RangeInput 
          option={question.options[0]} 
          selectedValue={selectedOption} 
          onChange={setSelectedOption} 
        />
      )}

      <div className="navigation-buttons">
        <Button onClick={handleBack}>Atrás</Button>
        <Button onClick={handleNext}>Siguiente</Button>
      </div>
      <ProgressBar step={question.id} totalSteps={questions.length} />
    </Card>
  );
};

export default QuizQuestion;
