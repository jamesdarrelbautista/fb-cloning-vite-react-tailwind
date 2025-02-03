
const NavHeader = () => {
  return (
    <div className="flex">
      <div className="flex bg-neutral-800 py-1 px-3 gap-3">
        <div className="w-[40px] h-[40px] bg-blue-600 rounded-full"></div>
        <div className="border-1 border-stone-600 rounded-full w-[300px] flex justify-center">
          <input className="w-[300px] rounded-full pl-6 text-slate-300 text-md" type="text" placeholder="Search Facebook"/>
        </div>
      </div>

      <div className="flex bg-neutral-800 pl-20 gap-16 grow justify-center items-center">
        <div className="">Home</div>
        <div className="">Marketplace</div>
        <div className="">Groups</div>
        <div className="">Gaming</div>
      </div>

      <div className="flex grow bg-neutral-800 py-1 justify-end gap-2">
      <div className="w-[40px] h-[40px] bg-slate-400 rounded-full"></div>
      <div className="w-[40px] h-[40px] bg-slate-400 rounded-full"></div>
      <div className="w-[40px] h-[40px] bg-slate-400 rounded-full"></div>
      <div className="w-[40px] h-[40px] bg-slate-700 rounded-full"></div>

      </div>

    

    </div>
  )
}

export default NavHeader