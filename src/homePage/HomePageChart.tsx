import TheGraph from "./TheGraph";
// import StackedBarGraph from "./HirayTest1";
// import StackedBarGraph2 from "./HirayTest2";

export default function HomePageCharts() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <TheGraph />
      {/* <StackedBarGraph />
      <StackedBarGraph2 /> */}
    </div>
  );
}
