import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dp) => dp.value);
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dp) => (
        <ChartBar
          value={dp.value}
          maxValue={totalMax}
          label={dp.label}
          key={dp.label}
        />
      ))}
    </div>
  );
};

export default Chart;
