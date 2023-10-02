import { Button } from "@/components/ui/button";
import Putty from "@/public/images/putty.png";
import WinSCP from "@/public/images/WinSCP.png";
import Image from "next/image";

const Configs = () => {
  return (
    <div className="mt-8">
      <h2 className="mb-3 text-dark dark:text-light">Configs</h2>
      <div className="group/imgWrapper mb-3 flex flex-col items-center justify-center gap-4 rounded-radius3 bg-light p-cardPadding text-center shadow-Light hover:shadow-none dark:bg-backgroundVariant dark:shadow-Dark dark:hover:shadow-none">
        <a href="src/assets/configs/23-08-15-Putty.reg" download>
          <div className="inline-block overflow-hidden rounded-radius3 align-middle transition-all duration-200 ease-in-out">
            <Image
              className="max-w-maxImg rounded-radius3 shadow-Light group-hover/imgWrapper:scale-75 dark:shadow-Dark"
              alt="Putty"
              src={Putty}
            />
          </div>
          <div>
            <h3 className="mb-4 text-dark dark:text-light">Putty</h3>
            <Button variant="secondary">Download</Button>
          </div>
        </a>
      </div>
      <div className="group/imgWrapper mb-3 flex flex-col items-center justify-center gap-4 rounded-radius3 bg-light p-cardPadding text-center shadow-Light hover:shadow-none dark:bg-backgroundVariant dark:shadow-Dark dark:hover:shadow-none">
        <a href="src/assets/configs/23-08-15-WinSCP.ini" download>
          <div className="inline-block overflow-hidden rounded-radius3 align-middle transition-all duration-200 ease-in-out">
            <Image
              className="max-w-maxImg rounded-radius3 shadow-Light group-hover/imgWrapper:scale-75 dark:shadow-Dark"
              alt="WinSCP"
              src={WinSCP}
            />
          </div>
          <div>
            <h3 className="mb-4 text-dark dark:text-light">WinSCP</h3>
            <Button variant="secondary">Download</Button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Configs;
