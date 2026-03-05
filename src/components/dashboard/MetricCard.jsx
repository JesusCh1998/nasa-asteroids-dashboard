const MetricCard = ({ title, value }) => {

  return (

    <div style={{
      padding: "20px",
      borderRadius: "10px",
      background: "#f5f5f5",
      textAlign: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>

      <h3>{title}</h3>

      <h2>{value}</h2>

    </div>

  );

};

export default MetricCard;