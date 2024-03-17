export default function ScheduleList() {
  const rowClassName = "bg-gray-400/10";
  const rowHeaderClassName = "font-semibold";
  return (
    <div>
      <h2 className="text-2xl xl:text-2xl font-bold">Friday Schedule</h2>
      <table className="table-auto w-full text-md rounded border border-slate-500 rounded-xl mb-12">
        <thead className="bg-detourPrimaryBlue/10 text-left">
          <tr>
            <th>Event</th>
            <th>Location</th>
            <th>Start Time</th>
          </tr>
        </thead>
        <tbody className="">
          <tr>
            <td className={`${rowHeaderClassName}`}>Dinner</td>
            <td>Simmons A</td>
            <td>5:30 PM</td>
          </tr>
          <tr className={`${rowClassName}`}>
            <td className={`${rowHeaderClassName}`}>Instructor Performance</td>
            <td>Studio Theater</td>
            <td>7:30 PM</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl xl:text-2xl font-bold">Saturday Schedule</h2>
      <table className="table-auto w-full text-md rounded border border-slate-500 rounded-xl">
        <thead className="bg-detourPrimaryBlue/10 text-left">
          <tr>
            <th>Event</th>
            <th>Location</th>
            <th>Instructor</th>
            <th>Start Time</th>
          </tr>
        </thead>
        <tbody className="">
          <tr>
            <td className={`${rowHeaderClassName}`}>
              Scenework the Chicago Way
            </td>
            <td>Danforth Conference</td>
            <td>Jonathan Pitts</td>
            <td>9 AM</td>
          </tr>
          <tr className={`${rowClassName}`}>
            <td className={`${rowHeaderClassName}`}>Poetic Improvisation</td>
            <td>Dowd</td>
            <td>Shaun Landry</td>
            <td>9 AM</td>
          </tr>
          <tr>
            <td className={`${rowHeaderClassName}`}>Musical Improvisation</td>
            <td>Simmons A</td>
            <td>David Charles</td>
            <td>9 AM</td>
          </tr>
          <tr className={`${rowClassName}`}>
            <td className={`${rowHeaderClassName}`}>Character through Voice</td>
            <td>Simmons B</td>
            <td>Fred Brown</td>
            <td>9 AM</td>
          </tr>
          <tr>
            <td className={`${rowHeaderClassName}`}>Taking Care of the Now</td>
            <td>Danforth Conference</td>
            <td>Jonathan Pitts</td>
            <td>1 PM</td>
          </tr>
          <tr className={`${rowClassName}`}>
            <td className={`${rowHeaderClassName}`}>Improv for Your Life</td>
            <td>Dowd</td>
            <td>Shaun Landry</td>
            <td>1 PM</td>
          </tr>
          <tr>
            <td className={`${rowHeaderClassName}`}>
              Short Form Improvisation
            </td>
            <td>Simmons A</td>
            <td>David Charles</td>
            <td>1 PM</td>
          </tr>
          <tr className={`${rowClassName}`}>
            <td className={`${rowHeaderClassName}`}>
              Physicality and Environment
            </td>
            <td>Simmons B</td>
            <td>Fred Brown</td>
            <td>1 PM</td>
          </tr>
          <tr>
            <td className={`${rowHeaderClassName}`}>University Showcase</td>
            <td>TBD</td>
            <td></td>
            <td>4:30 PM</td>
          </tr>
          <tr className={`${rowClassName}`}>
            <td className={`${rowHeaderClassName}`}>Performer Showcase</td>
            <td>Simmons A</td>
            <td></td>
            <td>7:30 PM</td>
          </tr>
          <tr>
            <td className={`${rowHeaderClassName}`}>Improv Jam</td>
            <td>Simmons A</td>
            <td></td>
            <td>9 PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
