import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);
  return (
    <center>
      <p className="fs-5 mb-4" style={{ color: "white" }}>
        Counter Current Value:{counter}
      </p>
    </center>
  );
};

export default DisplayCounter;
