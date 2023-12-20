import EnergyData from "components/query/EnergyData";

const QueryPage = () => {
  return (
    <>
      <EnergyData
        route="Electricity" 
        seriesId="ELEC.SALES.CO-RES.A"
        length={25}
      />
      {/* <EnergyData
        title="Natural Gas Consumption"
        seriesId="NG.N3045US2.A"
        length={25}
      />
      <EnergyData title="Crude Oil Prices" seriesId="PET.RWTC.D" length={25} />
      <EnergyData
        title="Renewable Energy Consumption"
        seriesId="TOTAL.RETCBUS.A"
        length={25}
      />
      <EnergyData
        title="Coal Production"
        seriesId="COAL.PRODUCTION.TOTL.A"
        length={25}
      /> */}
    </>
  );
};

export default QueryPage;
