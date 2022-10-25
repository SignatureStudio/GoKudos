const TimelineTableLeft = (props) => {
  let rows = []
  props.data.map((item, i) => {
    let obj = {
      name: item.name,
      len: item.tasks.length
    }

    item.tasks.map(task => {
      obj.len += task.children.length
    })
    rows.push(obj)
  })

  return (
    <div className="divide-y divide-gray-300 border border-gray-300">
    <div className="w-40 head" style={{ height: `${props.colHeight * 2}rem` }}>
      {props.displayBy}
    </div>
    {rows.map((item, i) => (
      <div
        className="col"
        style={{ height: `${props.colHeight * item.len}rem` }}
        key={i}
      >
        {item.name}
      </div>
    ))}
  </div>
);
};
export default TimelineTableLeft;
