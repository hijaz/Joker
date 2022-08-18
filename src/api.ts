import axios from "axios";

const random_joke_url = "https://karljoke.herokuapp.com/jokes/random";

const fetchJoke = async () => {
  const { data } = await axios(random_joke_url);
  return data;
};

export { fetchJoke };
