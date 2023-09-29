import {
  HiOutlineArrowUpTray,
  HiOutlineArrowDownTray,
  HiOutlinePlusSmall,
} from "react-icons/hi2";

const NasActivity = () => {
  return (
    <div className="mt-8">
      <h2 className="mb-3 text-dark dark:text-light">TrueNAS Activity</h2>
      <div className="recent-upload mb-3 flex items-center gap-4 rounded-radius3 bg-light px-cardPadding py-6 shadow-Light hover:shadow-none dark:bg-backgroundVariant dark:shadow-Dark dark:hover:shadow-none">
        <span className="rounded-full p-2">
          <HiOutlineArrowUpTray size={24} />
        </span>
        <div>
          <h3 className="text-dark dark:text-light">Upload 1</h3>
          <small className="text-muted">File Name</small>
        </div>
      </div>
      <div className="recent-upload mb-3 flex items-center gap-4 rounded-radius3 bg-light px-cardPadding py-6 shadow-Light hover:shadow-none dark:bg-backgroundVariant dark:shadow-Dark dark:hover:shadow-none">
        <span className="rounded-full p-2">
          <HiOutlineArrowUpTray size={24} />
        </span>
        <div>
          <h3 className="text-dark dark:text-light">Upload 2</h3>
          <small className="text-muted">File Name</small>
        </div>
      </div>
      <div className="recent-download mb-3 flex items-center gap-4 rounded-radius3 bg-light px-cardPadding py-6 shadow-Light hover:shadow-none dark:bg-backgroundVariant dark:shadow-Dark dark:hover:shadow-none">
        <span className="rounded-full p-2">
          <HiOutlineArrowDownTray size={24} />
        </span>
        <div>
          <h3 className="text-dark dark:text-light">Download</h3>
          <small className="text-muted">File Name</small>
        </div>
      </div>
      <div className="group/uploadHover mb-3 flex items-center justify-center gap-4 rounded-radius3 border-2 border-dashed border-primary bg-transparent px-cardPadding py-6 text-dark shadow-Light hover:cursor-pointer hover:bg-uploadFile hover:shadow-none dark:text-light dark:shadow-Dark dark:hover:shadow-none">
        <div className="flex items-center gap-3 group-hover/uploadHover:opacity-75">
          <HiOutlinePlusSmall size={24} />
          <h3 className="font-semibold text-dark dark:text-light">
            Upload File
          </h3>
        </div>
      </div>
    </div>
  );
};

export default NasActivity;
