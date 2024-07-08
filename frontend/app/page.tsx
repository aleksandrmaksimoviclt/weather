import CurrentWeather from "components/CurrentWeather";
import Location from "components/Location";
import WeeklyForecast from "components/WeeklyForecast";
import LastUpdated from "components/LastUpdated";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center w-full">
      <CurrentWeather />
      <Location />
      <LastUpdated />
      <WeeklyForecast />
    </main>
  );
};

export default Home;
