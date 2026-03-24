function CityInfo({ showDataCity }) {
  return (
    <div>
      <ul className="flex w-screen m-auto bg-slate-300 mt-10 p-5 rounded-xl md:w-[768px]">
        <li>
          <div>
            Cidade: <strong>{showDataCity.cityName}</strong>
          </div>
          <div>
            Temperatura: <strong>{showDataCity.cityTemperature}°C</strong>
          </div>
          <div>
            Clima: <strong>{showDataCity.cityClimate}</strong>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default CityInfo;
