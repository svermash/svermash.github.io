// why not just have TheGraph?
// because i wanted multiple graph thats why
// i made this page so that i can add
// multiple graphs like staked and stuff

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
