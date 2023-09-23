const NasActivity = () => {
  return (
    <div className="mt-8">
      <h2 className="mb-3 text-dark dark:text-light">TrueNAS Activity</h2>
      <div className="recent-upload mb-3 flex items-center gap-4 rounded-radius3 bg-light px-cardPadding py-6 shadow-Light hover:shadow-none dark:bg-backgroundVariant dark:shadow-Dark dark:hover:shadow-none">
        <span className="material-symbols-rounded rounded-full p-2">
          upload
        </span>
        <div>
          <h3 className="text-dark dark:text-light">Upload 1</h3>
          <small className="text-muted">File Name</small>
        </div>
      </div>
      <div className="recent-upload mb-3 flex items-center gap-4 rounded-radius3 bg-light px-cardPadding py-6 shadow-Light hover:shadow-none dark:bg-backgroundVariant dark:shadow-Dark dark:hover:shadow-none">
        <span className="material-symbols-rounded rounded-full p-2">
          upload
        </span>
        <div>
          <h3 className="text-dark dark:text-light">Upload 2</h3>
          <small className="text-muted">File Name</small>
        </div>
      </div>
      <div className="recent-download mb-3 flex items-center gap-4 rounded-radius3 bg-light px-cardPadding py-6 shadow-Light hover:shadow-none dark:bg-backgroundVariant dark:shadow-Dark dark:hover:shadow-none">
        <span className="material-symbols-rounded rounded-full p-2">
          download
        </span>
        <div>
          <h3 className="text-dark dark:text-light">Download</h3>
          <small className="text-muted">File Name</small>
        </div>
      </div>
      <div className="mb-3 flex items-center justify-center gap-4 rounded-radius3 border-2 border-dashed border-primary bg-transparent px-cardPadding py-6 text-dark shadow-Light hover:cursor-pointer hover:bg-uploadFile hover:shadow-none dark:text-light dark:shadow-Dark dark:hover:shadow-none">
        <div className="flex items-center gap-3">
          <span className="material-symbols-rounded">add</span>
          <h3 className="font-semibold text-dark dark:text-light">
            Upload File
          </h3>
        </div>
      </div>
    </div>
  );
};

export default NasActivity;
