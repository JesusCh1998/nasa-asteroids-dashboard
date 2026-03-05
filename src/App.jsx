import { useEffect, useState } from "react";
import { fetchAsteroids } from "./services/nasaApi";
import { transformAsteroidData } from "./utils/transformAsteroidData";
import { getHazardousStats } from "./utils/hazardousAsteroidsData";

import AsteroidsChart from "./components/charts/AsteroidsChart";
import HazardousChart from "./components/charts/HazardousChart";
import DateFilter from "./components/filters/DateFilter";
import MetricCard from "./components/dashboard/MetricCard";
import { calculateMetrics } from "./utils/dashboardMetrics";

function App() {

  const [data, setData] = useState([]);
  const [hazardData, setHazardData] = useState([]);

  const [metrics, setMetrics] = useState({
    total: 0,
    hazardous: 0,
    safe: 0
  });

  const [loading, setLoading] = useState(false);

  const loadData = async (startDate, endDate) => {

    try {

      setLoading(true);

      const result = await fetchAsteroids(startDate, endDate);

      const formatted = transformAsteroidData(result);
      const hazardStats = getHazardousStats(result);
      const metricsData = calculateMetrics(result);

      setMetrics(metricsData);
      setData(formatted);
      setHazardData(hazardStats);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {
    loadData("2024-01-01", "2024-01-07");
  }, []);

  return (

    <div style={{ padding: 40 }}>

      <h1>NASA Asteroids Dashboard</h1>

      <DateFilter onFilter={loadData} />

      {loading && <p>Cargando datos de API NASA ...</p>}

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 20,
        marginBottom: 30
      }}>

        <MetricCard
          title="Total de Asteroides"
          value={metrics.total}
        />

        <MetricCard
          title="Peligrosos"
          value={metrics.hazardous}
        />

        <MetricCard
          title="No Peligrosos"
          value={metrics.safe}
        />

      </div>

      <AsteroidsChart data={data} />

      <HazardousChart data={hazardData} />

    </div>

  );

}

export default App;