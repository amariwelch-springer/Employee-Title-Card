const EmployeeCard = ({ employee, index }) => {
  const { name, title, bio } = employee;

  //Maria Rodriguez
  if (index === 0) {
    return (
      <div className="w-full max-w-md bg-stone-100 rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-cyan-600 p-6 text-cyan-200 text-center">
          <p className="text-sm md:text-base font-medium leading-relaxed">
            {bio}
          </p>
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-cyan-700">{name}</h3>
          <p className="text-sm text-stone-500 mt-1">{title}</p>
        </div>
      </div>
    );
  }


//Theodore Carter Junior 
  if (index === 1) {
    return (
      <div className="w-full max-w-2xl bg-white rounded-r-full shadow-md overflow-hidden border border-slate-300 flex items-stretch">
        
        <div className="w-6/12 bg-blue-500 p-8 text-white flex flex-col justify-between h-60">
          
          <h3 className="text-3xl md:text-4xl font-normal leading-tight tracking-tight">{name}</h3>
          
          
          <div className="mt-4">
            <p className="text-lg md:text-xl text-stone-300 font-normal leading-snug">{title}</p>
          </div>
        </div>

        <div className="w-5/12 p-8 flex items-center bg-white h-60">
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            {bio}
          </p>
        </div>
      </div>
    );
  }





//Chloe Lee 
  if (index === 2) {
    return (
      <div className="w-full max-w-xl relative pt-6 pb-6">
        
       
        <div className="bg-rose-400 text-white py-6 px-8 pl-36 rounded-lg shadow-md text-left">
          <p className="text-base md:text-lg font-normal leading-relaxed">
            {bio}
          </p>
        </div>

        
        <div className="absolute left-0 top-28 w-56 bg-rose-200 border-2 border-rose-400 p-5 rounded-lg shadow-md text-left z-10">
          <h3 className="text-xl font-bold text-rose-700 leading-tight">{name}</h3>
          <p className="text-sm text-rose-600 mt-1 font-medium">{title}</p>
        </div>

      </div>
    );
  }


  return null;
};

export default EmployeeCard;