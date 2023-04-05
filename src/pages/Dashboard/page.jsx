const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      <div className="bg-white px-2 py-4">
        <h1>Demo Pages</h1>

        <ul className="list-disc px-8 py-4 text-lg">
        <li>
            <a href="/login">Log In</a>
          </li>
          <li>
            <a href="/tasks">Cases</a>
          </li>
          <li>
            <a href="/settings">Settings</a>
          </li>
        </ul>
      </div>
      <div className="bg-white px-2 py-4">
        <h1>Structure</h1>

        <ul className="list-disc pl-8 py-4 text-lg">
          <li>
            Areas
            <ul className="list-disc pl-4">
              <li>
                Patients
                <ul className="list-disc pl-4">
                  <li>
                    Cases
                    <ul className="list-disc pl-4">
                      <li>
                        Episodes
                        <div className="mt-4 mb-2 text-sm uppercase tracking-wide text-gray-400 font-bold">
                          Attributes
                        </div>
                        <ul className="list-disc pl-4">
                          <li>Tasks</li>
                          <li>Checklist</li>
                          <li>Medical Documents</li>
                          <li>Dialogue</li>
                          <li>Clinician</li>
                          <li>Date</li>
                          <li>Time Tracking</li>
                          <li>Priority</li>
                          <li>Budget</li>
                          <li>Targeted Hours</li>
                          <li>Reminder</li>
                          <li>Recurrence</li>
                          <li>Tags</li>
                          <li>Concierge</li>
                          <li>Actual Date</li>
                          <li>Actual Cost</li>
                          <li>Effort</li>
                          <li>Custom Columns (Text)</li>
                          <li>Custom Columns (Number)</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
