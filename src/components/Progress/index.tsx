const Progress = () => {
  return (
    <div
      style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}
    >
      <p style={{color: "#f1f1f1", fontSize: "3rem", margin: "auto"}}>Loading...</p>
    </div>
  );
};

export default Progress;
