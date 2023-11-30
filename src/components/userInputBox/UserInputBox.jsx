export const UserInputBox = () => (
  <div className="border border-neutral-300 bg-gray-800 rounded w-full p-3 flex">
    <div className="focus:outline-none focus:shadow-outline w-full max-w-full pe-3" contentEditable></div>
    <div className="flex items-center">
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded text-sm">Send</button>
    </div>
  </div>
);
