import { useEffect, useState } from "react";
import "./App.css";
import React from "react";

const JokeGenerator = () => {
  const [joke, setJoke] = useState({ setup: "", delivery: "" });
  const [answer, setAnswer] = useState(false);

  const fetchRandomJoke = async () => {
    const responce = await fetch("https://v2.jokeapi.dev/joke/Any");
    const joke = await responce.json();
    setJoke({
      setup: joke.setup,
      delivery: joke.delivery,
    });
    setAnswer(false);
  };

  useEffect(() => {
    fetchRandomJoke();
  }, []);

  return (
    <div className="containerMain">
      <div className="container">
        <h1 className="topic">Random Jokes</h1>
        <h5>{joke.setup}</h5>
        <h5>{answer ? joke.delivery : ""}</h5>
        <div className="btnContainer">
          <button className="btn" onClick={fetchRandomJoke}>
            Joke Question
          </button>
          <button className="btn" onClick={() => setAnswer(true)}>
            See Answer
          </button>
        </div>
      </div>
    </div>
  );
};

export default JokeGenerator;
