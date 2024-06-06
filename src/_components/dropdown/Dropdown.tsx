export const Dropdown = () => {
  return (
    <div className="text-white p-4">
      <div className="bg-red-500">
        <button className="font-bold cursor-pointer">Question</button>
        <div className="transition-max-height duration-300 ease-in-out overflow-hidden max-h-0">
          <p className="mt-2">Answer</p>
        </div>
      </div>
    </div>
  );
};
