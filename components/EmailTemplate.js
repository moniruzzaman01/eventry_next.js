export default function EmailTemplate({ user, eventName }) {
  return (
    <div className=" bg-slate-100 border rounded-lg p-5 mb-2 capitalize">
      <h2 className=" text-2xl text-slate-800">{`Congratulaiton ${
        user?.name || "null"
      },`}</h2>
      <p className="text-slate-500">{`you have successfully registered on the event named ${
        eventName || "null"
      }. Please bring this email and necessary documents.`}</p>
      <p className="text-slate-500">Hope you will enjoy the event.</p>
      <div className=" mt-5">
        <p className="text-slate-500">Event management team</p>
        <p className="text-slate-500">{new Date().toDateString()}</p>
      </div>
    </div>
  );
}
