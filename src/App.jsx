import { useEffect, useState } from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import SearchComponent from './components/SearchComponent'
import FilmCardComponent from './components/FilmCardComponent'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://raw.githubusercontent.com/lomsadze123/movie-api/refs/heads/main/data.json");
        setData(response.data);
      }
      catch (error) {
        console.log(error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="p-5 flex gap-9 max-[850px]:flex-col max-[850px]:gap-1">
      <HeaderComponent />
      <div className="flex flex-col flex-1 w-full">
        <SearchComponent />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 mt-6">
          {data.map((film) => (
            <FilmCardComponent key={film.title} film={film}/>
          ))}  
        </div>
      </div>
    </div>
  )
}

export default App
