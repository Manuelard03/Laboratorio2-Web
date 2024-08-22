import React, { useEffect, useState } from 'react';
import { books } from '../../data/books';
import Card from '../../components/Card/Card.jsx';
import './QuizResult.css';

const QuizResult = ({ answers }) => {
  const [recommendedBook, setRecommendedBook] = useState(null);

  useEffect(() => {
    const genreScores = {};
    Object.keys(answers).forEach(questionId => {
      const selectedOption = answers[questionId];
      console.log('Procesando respuesta:', selectedOption);

      const genre = selectedOption.genre;
      if (genre) {
        if (genreScores[genre]) {
          genreScores[genre] += 1;
        } else {
          genreScores[genre] = 1;
        }
      } else {
        console.warn(`La opción seleccionada en la pregunta ${questionId} no tiene un género asociado.`);
      }
    });

    console.log('Puntuaciones por género:', genreScores);

    if (Object.keys(genreScores).length === 0) {
      console.error('No se pudieron determinar géneros a partir de las respuestas.');
      return;
    }

    const topGenre = Object.keys(genreScores).reduce((a, b) => genreScores[a] > genreScores[b] ? a : b, null);
    console.log('Género con mayor puntuación:', topGenre);

    const recommended = books.find(book => book.genre === topGenre);
    setRecommendedBook(recommended);
  }, [answers]);

  if (!recommendedBook) return <div className="quiz-result">Cargando...</div>;

  return (
    <div className="quiz-result">
      <Card>
        <h2>¡Tu libro recomendado es!</h2>
        <h3>{recommendedBook.title} - {recommendedBook.author}</h3>
        <p>{recommendedBook.description}</p>
        <img src={recommendedBook.image} alt={recommendedBook.title} />
        <a href={`https://www.google.com/search?q=${recommendedBook.title}+${recommendedBook.author}`} target="_blank" rel="noopener noreferrer">
          Más información sobre el libro
        </a>
      </Card>
    </div>
  );
};

export default QuizResult;
