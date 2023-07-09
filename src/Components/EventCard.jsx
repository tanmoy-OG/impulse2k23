const EventCard = (props) => {
  return (
    <label for={props.for} id={props.id}>
      <div class="card">
        <div class="image">
          <img src={props.img} alt="" />
        </div>
        <div class="infos">
          <span class="name">{props.title}</span>
          <span class="lorem">
            {props.about}
          </span>
        </div>
      </div>
    </label>
  );
};

export default EventCard;
