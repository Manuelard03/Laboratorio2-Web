import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QuizStart.css';
import Input from '../../components/Input/Input.jsx';
import Button from '../../components/Button/Button.jsx';
import Card from '../../components/Card/Card.jsx';
import Image from '../../components/Image/Image.jsx';

const QuizStart = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleStartQuiz = () => {
    if (validateEmail(email)) {
      navigate('/quiz/1');
    } else {
      alert('Por favor, ingresa un correo electrónico válido');
    }
  };

  return (
    <Card className="quiz-start">
      <h1 className='title'>¿Cuál será mi próxima lectura?</h1>
      <Image src="\src\assets\img\book.jfif" alt="Pregunta imagen" className="image-small" />
      <p>Este quiz está diseñado para ayudarte a encontrar el libro ideal basado en tus gustos y preferencias. A través de una serie de preguntas divertidas y reveladoras, encontrarás un libro que te atrapará desde la primera página.</p>
      <Input 
        type="email" 
        placeholder="Ingresa tu correo electrónico" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={handleStartQuiz}>Comenzar Quiz</Button>
    </Card>
  );
};

export default QuizStart;
