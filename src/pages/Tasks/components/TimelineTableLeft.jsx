const TimelineTableLeft = (props) => {
  return (
    <div className="divide-y divide-gray-300 border border-gray-300">
    <div className="w-40 head" style={{ height: `${props.colHeight * 2}rem` }}>
      {props.displayBy}
    </div>
    {props.data.map((item, i) => (
      <div
        className="col"
        style={{ height: `${props.colHeight * item.tasks.length}rem` }}
        key={i}
      >
        {item.name}
      </div>
    ))}
  </div>
);
};
export default TimelineTableLeft;
