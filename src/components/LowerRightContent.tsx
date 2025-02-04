const LowerRightContent = () => {
  return (
    <>
      <div className="flex flex-col relative left-[13%] p-2 w-[43%]">
        <div className=" bg-neutral-700 p-4 rounded-lg ">
          <div className="flex gap-4">
            <div className="bg-slate-200 rounded-full w-[45px] h-[40px]"></div>
            <div className="border border-neutral-500 w-full rounded-full">
              <input
                className="p-3 h-[40px] font-medium text-sm w-full rounded-full bg-neutral-600 text-white placeholder:text-slate-200  "
                type="text"
                placeholder="What's on your mind?"
              />
            </div>
          </div>
          <div className="border-b border-slate-400 w-full my-3"></div>
          <div className="flex text-white text-sm font-bold justify-evenly">
            <div>Live video</div>
            <div>Photo/video</div>
            <div>Life event</div>
          </div>
        </div>
        <div className="my-2">
          <div className=" bg-neutral-700 p-4 rounded-lg ">
            <div className="flex justify-between items-center gap-4 text-white font-medium">
              <div className="">Posts</div>
              <div className="flex gap-2">
                <button className="bg-neutral-600 w-[65px] h-[30px] rounded-lg text-sm">
                  Filters
                </button>
                <button className="bg-neutral-600 w-[100px] rounded-lg text-sm">
                  Manage Posts
                </button>
              </div>
            </div>
            <div className="border-b border-slate-400 w-full my-3"></div>
            <div className="flex text-white text-sm font-bold justify-around">
              <div>List view</div>
              <div>Grid view</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 grid-rows-12">
          <div className=" bg-neutral-700 rounded-lg col-span-12 row-span-12">
            <div className="p-4">
              <div className="text-white font-light text-sm">
                Album <span className="font-bold">All creatures great and small
                </span>
              </div>
              <div className="flex py-2 gap-2 text-white">
                <div className="bg-slate-300 w-[40px] h-[40px] rounded-full"></div>
                <div className="">
                  <div className="text-sm font-bold">
                    James Darrel Bautista{" "}
                    <span className="font-light">added a new photo</span>
                  </div>
                  <div className="font-light text-xs">22 February 2024</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-300 h-[450px] flex justify-center items-center">Image here</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LowerRightContent;
