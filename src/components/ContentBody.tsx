const ContentBody = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-neutral-700 h-screen">
        <div className="bg-indigo-800 relative w-[75%] h-[430px] rounded-b-md">
          <div className="overflow-visible w-[160px] h-[160px] bg-slate-400 rounded-full absolute top-[90%] left-10 border-4 border-neutral-700"></div>
          <div className="absolute top-[100%] left-[19%]">
            <div className="flex flex-col gap-2 text-4xl font-bold text-slate-200 ">
              James Darrel Bautista
              <div className="text-sm font-md">736 friends</div>
              <div className="flex relative">
                <div className="w-[30px] h-[30px] border border-stone-800 relative left-0 bg-green-400 rounded-full "></div>
                <div className="w-[30px] h-[30px] border border-stone-800 relative left-[-10px] bg-pink-400 rounded-full"></div>
                <div className="w-[30px] h-[30px] border border-stone-800 relative left-[-20px] bg-amber-400 rounded-full"></div>
                <div className="w-[30px] h-[30px] border border-stone-800 relative left-[-30px] bg-teal-400 rounded-full"></div>
                <div className="w-[30px] h-[30px] border border-stone-800 relative left-[-40px] bg-blue-400 rounded-full"></div>
                <div className="w-[30px] h-[30px] border border-stone-800 relative left-[-50px] bg-rose-400 rounded-full"></div>
                <div className="w-[30px] h-[30px] border border-stone-800 relative left-[-60px] bg-emerald-400 rounded-full"></div>
                <div className="w-[30px] h-[30px] border border-stone-800 relative left-[-70px] bg-orange-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[75%] justify-end items-center p-10 mr-2 gap-2">
          <button className=" bg-blue-600 px-4 py-2 text-white font-medium rounded-lg">
            Add to Story
          </button>
          <button className=" bg-stone-600 px-4 py-2 text-white font-medium rounded-lg">
            Edit Profile
          </button>
          <button className="w-[45px] h-[40px] bg-stone-600 px-4 py-2 text-white font-bold rounded-lg">
            
          </button>
        </div>
      </div>
    </>
  );
};

export default ContentBody;
