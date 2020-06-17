import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get("repositories").then((response) => {
      setRepositories(response.data);
    });
  }, []);

  async function handleAddRepository() {
    const response = await api.post("repositories", {
      title: `Desafio ${Date.now()} `,
      url: "http://github.com/rafaelsanzio/gostack-reactjs",
      techs: ["ReactJS", "Concepts"],
    });

    const repository = response.data;

    setRepositories([...repositories, repository]);
  }

  async function handleRemoveRepository(id) {
    await api.delete(`repositories/${id}`);

    const leftRepositories = repositories.filter(
      (repository) => repository.id !== id
    );

    setRepositories(leftRepositories);
  }

  async function handleLikeRepository(id) {
    const matchRepositoryIndex = repositories.findIndex(
      (repo) => repo.id === id
    );

    if (matchRepositoryIndex >= 0) {
      const response = await api.post(`repositories/${id}/like`);
      const updatedRepository = response.data;
      const updatedRepositoryList = [...repositories];

      updatedRepositoryList[matchRepositoryIndex] = updatedRepository;

      setRepositories(updatedRepositoryList);
    }
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map((repository) => (
          <li key={repository.id}>
            {repository.title}

            <button onClick={() => handleLikeRepository(repository.id)}>
              {repository.likes} ❤️
            </button>
            <button onClick={() => handleRemoveRepository(repository.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
