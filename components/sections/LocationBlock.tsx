export function LocationBlock() {
  return (
    <div className="locations">
      {[
        ["DEL · NORTH", "Delhi", "Registered office"],
        ["MAA · SOUTH EAST", "Chennai", "Delivery presence"],
        ["COK · SOUTH WEST", "Kochi", "Delivery presence"],
      ].map(([code, city, label]) => (
        <article className="location" key={city}>
          <span className="code">{code}</span>
          <h3>{city}</h3>
          <p>{label}</p>
        </article>
      ))}
    </div>
  );
}
