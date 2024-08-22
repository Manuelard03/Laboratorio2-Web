export const questions = [
    {
      id: 1,
      question: "¿Cuál es tu género literario favorito?",
      type: "radio",
      options: [
        { text: "Ciencia Ficción", genre: "Ciencia Ficción", image: "/src/assets/img/snowglobe.jfif" },
        { text: "Romance", genre: "Romance", image: "/src/assets/img/Poestoo.jfif" },
        { text: "Misterio", genre: "Misterio", image: "/src/assets/img/descarga.jfif" },
        { text: "Fantasía", genre: "Fantasía", image: "/src/assets/img/agatha.jfif" }
      ]
    },
    {
      id: 2,
      question: "¿Qué tipo de historia te atrae más?",
      type: "checkbox",
      options: [
        { text: "Aventura épica", genre: "Fantasía", image: "/images/adventure.jpg" },
        { text: "Drama personal", genre: "Romance", image: "/images/drama.jpg" },
        { text: "Misterio detectivesco", genre: "Misterio", image: "/images/detective.jpg" }
      ]
    },
    {
      id: 3,
      question: "¿Qué prefieres en una historia?",
      type: "radio",
      options: [
        { text: "Narración en primera persona", genre: "Ciencia Ficción", image: "/src/assets/img/descarga111.jfif" },
        { text: "Trama no lineal", genre: "Misterio", image: "/src/assets/img/Dylan Glynn.jfif" },
        { text: "Narrador omnisciente", genre: "Fantasía", image: "/src/assets/img/Art exhibition.jfif" }
      ]
    },
    {
      id: 4,
      question: "¿Cómo te sientes hoy?",
      type: "checkbox",
      options: [
        { text: "Inspirado", genre: "Romance", image: "/src/assets/img/descarga3333.jfif" },
        { text: "Melancólico", genre: "Misterio", image: "/src/assets/img/descarga (3).jfif" },
        { text: "Buscando emoción", genre: "Fantasía", image: "/src/assets/img/descarga212.jfif" },
        { text: "Necesito desconectar", genre: "Ciencia Ficción", image: "/src/assets/img/girl-book.jfif" }
      ]
    },
    {
      id: 5,
      question: "¿Cuántas páginas te gustaría que tuviera el libro?",
      type: "range",
      options: [
        { min: 100, max: 1000, step: 100 }
      ]
    },
    {
      id: 6,
      question: "¿Prefieres libros modernos o clásicos?",
      type: "radio",
      options: [
        { text: "Modernos", genre: "Ciencia Ficción", image: "/src/assets/img/descarga21.jfif" },
        { text: "Clásicos", genre: "Romance", image: "/src/assets/img/descarga (2).jfif" },
        { text: "No importa", genre: "Fantasía", image: "/src/assets/img/descarga32.jfif" }
      ]
    },
    {
      id: 7,
      question: "¿Qué tan importante es la crítica literaria para ti?",
      type: "radio",
      options: [
        { text: "Muy importante", genre: "Misterio", image: "src/assets/img/descarga(12.jfif" },
        { text: "Algo importante", genre: "Romance", image: "src/assets/img/descarga(12.jfif" },
        { text: "No importante", genre: "Ciencia Ficción", image: "src/assets/img/307db05b-057e-4456-9bbc-7848d8197ad4.jfif" }
      ]
    }
  ];  