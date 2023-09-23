import Image from "next/image";

import Placeholder from "@/public/images/placeholder.png";

const Logs = () => {
  return (
    <div className="mt-4">
      <h2 className="mb-3 text-dark dark:text-light">Logs</h2>
      <div className="bg:light shadow-Light dark:shadow-Dark rounded-cardRadius p-cardPadding text-dark hover:shadow-none dark:bg-backgroundVariant dark:text-light dark:hover:shadow-none">
        <div className="grid-cols-logs mb-4 grid gap-4">
          <div className="h-11 w-11 overflow-hidden rounded-full">
            <Image src={Placeholder} alt="Placeholder" />
          </div>
          <div>
            <p>
              <b>Robina Bank</b> did something to mcserver2
            </p>
            <small className="text-muted">2 Minutes Ago</small>
          </div>
        </div>
        <div className="grid-cols-logs mb-4 grid gap-4">
          <div className="h-11 w-11 overflow-hidden rounded-full">
            <Image src={Placeholder} alt="Placeholder" />
          </div>
          <div>
            <p>
              <b>Joema Ma</b> did something to TrueNAS
            </p>
            <small className="text-muted">2 Minutes Ago</small>
          </div>
        </div>
        <div className="grid-cols-logs mb-0 grid gap-4">
          <div className="h-11 w-11 overflow-hidden rounded-full">
            <Image src={Placeholder} alt="Placeholder" />
          </div>
          <div>
            <p>
              <b>Yuri Dopted</b> did something to MailSRV
            </p>
            <small className="text-muted">2 Minutes Ago</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logs;
