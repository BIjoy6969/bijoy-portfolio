export function ProjectVisual({ slug }: { slug: string }) {
  if (slug === "rentnest") {
    return (
      <div className="proj-image-container">
        <img
          src="/projects/rentnest/overview.png"
          alt="RentNest Platform Interface Overview — Rental Marketplace & Booking"
          className="proj-real-img"
          loading="lazy"
        />
      </div>
    );
  }
  if (slug === "travelmate") {
    return (
      <div className="proj-image-container">
        <img
          src="/projects/travelmate/overview.png"
          alt="TravelMate Trip Planner Interface Overview — Flights, Weather, Maps & Itinerary"
          className="proj-real-img"
          loading="lazy"
        />
      </div>
    );
  }
  if (slug === "3d-survival-shooter") {
    return (
      <div className="proj-image-container">
        <img
          src="/projects/survival-shooter/overview.png"
          alt="3D Survival Shooter Real-Time OpenGL Game Engine Overview"
          className="proj-real-img"
          loading="lazy"
        />
      </div>
    );
  }
  return null;
}
