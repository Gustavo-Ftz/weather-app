import Input from "./form/Input";
import Button from "./form/Button";
import CityInfo from "./CityInfo";
import { useState } from "react";

function Main() {
  const [userCity, setUserCity] = useState("");
  const [showDataCity, setShowDataCity] = useState({});

  const findClimate = async () => {
    const apiKey = "Your API KEY";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${apiKey}&units=metric&lang=pt_br`;

    if (userCity.trim() === "") {
      alert("Digite o nome de uma cidade!");
    } else {
      try {
        const answer = await fetch(url);

        if (!answer.ok) {
          throw new Error(`${answer.status}`);
        }
        const data = await answer.json();
        console.log(data);

        const dataCityObj = {
          id: data.weather[0].id,
          cityName: data.name,
          cityTemperature: data.main.temp,
          cityClimate: data.weather[0].description,
        };

        setShowDataCity(dataCityObj);
      } catch (error) {
        alert(`Algo deu errado! ${error}`);
      }
    }
  };

  return (
    <main className="flex flex-1 justify-center mt-10 text-sm md:text-xl">
      <div>
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center">
          <Input
            type="text"
            id="city"
            placeholder="Digite a cidade"
            text="Nome da cidade:"
            value={userCity}
            onChange={(e) => setUserCity(e.target.value)}
          />
          <Button text="Buscar" onClick={findClimate} />
        </div>
        <CityInfo showDataCity={showDataCity} />
      </div>
    </main>
  );
}

export default Main;
