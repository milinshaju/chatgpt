export const ChatBox = ({name,msg}) => (
  <div className="flex pb-8">
    <div>
      <div className="rounded-full p-4 bg-slate-300"></div>
    </div>
    <div className="ps-5">
      <p>
        <b>{name}</b>
      </p>
      <p className="pt-1">
        {msg}
      </p>
    </div>
  </div>
);
