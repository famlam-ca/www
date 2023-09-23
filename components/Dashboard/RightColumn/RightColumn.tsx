import Header from "./Header";
import Logs from "./Logs";
import Configs from "./Configs";
import NasActivity from "./NasActivity";

const RightColumn = () => {
  return (
    <div className="mb-0 ml-2 mr-0 mt-2">
      <Header />
      <Logs />
      <Configs />
      <NasActivity />
    </div>
  );
};

export default RightColumn;
