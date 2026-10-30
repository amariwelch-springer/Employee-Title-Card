import { quotes } from './Data/info';
import EmployeeCard from './components/EmployeeCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-5xl w-full text-center mb-10">
        <h1 className="text-3xl font-extrabold text-gray-800">Employee Title Cards</h1>
        <p className="text-sm text-gray-500 mt-1"></p>
      </div>

     
      <div className="w-full max-w-7xl flex flex-col items-center space-y-10">
        {quotes.map((employee, index) => (
          <EmployeeCard key={index} employee={employee} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;