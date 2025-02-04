const LowerLeftContent = () => {
  return (
    <>
      <div className="bg-neutral-700 relative top-5 left-50 w-[30%] rounded-lg">
        <div className="flex flex-col gap-4 p-4 text-white">
          <div className="text-xl font-bold ">Intro</div>
          <div className="self-center text-center">
            inactive @facebook
            <br />
            do not add ^^
          </div>
          <button className="bg-neutral-500 p-1 my-1 rounded-md font-medium text-sm">
            Edit Bio
          </button>
          <div className="flex items-center relative gap-2">
            <a
              href="https://www.flaticon.com/free-icons/school"
              title="school icons"
            >
              <img
                className="w-[25px] h-[25px] relative top-1"
                src="src\assets\graduation-hat.png"
                alt=""
              />
            </a>
            <div className="text-sm">Studied at MSU IIT</div>
          </div>
          <div className="flex items-center relative gap-2">
            <a
              href="https://www.flaticon.com/free-icons/school"
              title="school icons"
            >
              <img
                className="w-[25px] h-[25px] relative top-1"
                src="src\assets\graduation-hat.png"
                alt=""
              />
            </a>
            <div className="text-sm">
              Went to Corpus Christi Parochial School of Iligan (CCPSI)
            </div>
          </div>
          <div className="flex items-center relative gap-2">
            <a
              href="https://www.flaticon.com/free-icons/school"
              title="school icons"
            >
              <img
                className="w-[25px] h-[25px] relative top-1"
                src="src\assets\graduation-hat.png"
                alt=""
              />
            </a>
            <div className="text-sm">
              Lives in <strong>Iligan City</strong>
            </div>
          </div>
          <div className="flex items-center relative gap-2">
            <a
              href="https://www.flaticon.com/free-icons/school"
              title="school icons"
            >
              <img
                className="w-[25px] h-[25px] relative top-1"
                src="src\assets\graduation-hat.png"
                alt=""
              />
            </a>
            <div className="text-sm">
              From <strong>Iligan City</strong>
            </div>
          </div>
          <div className="flex items-center relative gap-2">
            <a
              href="https://www.flaticon.com/free-icons/school"
              title="school icons"
            >
              <img
                className="w-[25px] h-[25px] relative top-1"
                src="src\assets\graduation-hat.png"
                alt=""
              />
            </a>
            <div className="text-sm font-medium">P3ndleton</div>
          </div>
          <div className="flex items-center relative gap-2">
            <a
              href="https://www.flaticon.com/free-icons/school"
              title="school icons"
            >
              <img
                className="w-[25px] h-[25px] relative top-1"
                src="src\assets\graduation-hat.png"
                alt=""
              />
            </a>
            <div className="text-sm font-medium">jamesdarrelbautista</div>
          </div>
          <button className="bg-neutral-500 p-1 my-2 rounded-md font-medium text-sm">
            Edit details
          </button>
          <div className="flex gap-2">
            <div className="bg-indigo-400 w-[35%] h-[210px] rounded-md"></div>
            <div className="bg-indigo-400 w-[35%] h-[210px] rounded-md"></div>
            <div className="bg-indigo-400 w-[35%] h-[210px] rounded-md"></div>
          </div>
          <button className="bg-neutral-500 p-1 rounded-md font-medium text-sm">
            Edit featured
          </button>
        </div>
      </div>
    </>
  );
};

export default LowerLeftContent;
