import CurrentWeather from "@/common/components/CurrentWeather";
import Location from "@/common/components/Location";
import WeeklyForecast from "@/common/components/WeeklyForecast";
import LastUpdated from "@/common/components/LastUpdated";

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
