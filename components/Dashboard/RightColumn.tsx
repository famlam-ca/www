import { ScrollArea } from "@/components/ui/scroll-area";

import Logs from "./RightColumn/Logs";
import Configs from "./RightColumn/Configs";
import NasActivity from "./RightColumn/NasActivity";

const RightColumn = () => {
  return (
    <div className="mr-6 flex flex-col">
      <ScrollArea className="h-full shadow-Light hover:shadow-none dark:shadow-Dark dark:hover:shadow-none xl:h-[calc(100vh-1.5rem)]">
        <Logs />
        <Configs />
        <NasActivity />
      </ScrollArea>
    </div>
  );
};

export default RightColumn;
