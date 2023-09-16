import CountdownTimer from "../../components/time/Countdown";

export default function () {
  return (
    <div>
      <div className="max-w-3xl mx-auto">
        <div className="h-[20vh] w-12" />
        <div className="text-center">
          <h1 className="text-7xl font-bold">Detour</h1>
          <p className="text-3xl text-gray-500">
            We're bringing the best of improv to Pittsburgh.
          </p>
        </div>
        <CountdownTimer />
      </div>
    </div>
  );
}
