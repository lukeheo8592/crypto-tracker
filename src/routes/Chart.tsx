import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
interface ChartProps {
  coinId: string;
}
function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  const btn = document.getElementById("themeMode");
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: "Price",
              data: data?.map((price) => ({
                x: price.time_close,
                y: [price.open, price.high, price.low, price.close],
              })),
            },
          ]}
          options={{
            theme: {
              mode: btn?.innerText === "LIGHT MODE" ? "light" : "dark",
            },
            chart: {
              type: "candlestick",
              height: 900,
              background: "transparent",
              foreColor: btn?.innerText === "LIGHT MODE" ? "black" : "white",
              animations: {
                enabled: true,
                easing: "easeinout",
                speed: 800,
                animateGradually: {
                  enabled: true,
                  delay: 150,
                },
                dynamicAnimation: {
                  enabled: true,
                  speed: 350,
                },
              },
            },
            xaxis: {
              type: "datetime",
            },
            yaxis: {
              show: false,
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;