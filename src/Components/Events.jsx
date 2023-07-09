import Band from "../assets/band1.jpg";
import EventCard from "./EventCard";

const Events = () => {
  return (
    <div className="">
      <div class="container">
        <input type="radio" name="slider" class="d-none" id="s1" checked />
        <input type="radio" name="slider" class="d-none" id="s2" />
        <input type="radio" name="slider" class="d-none" id="s3" />
        <input type="radio" name="slider" class="d-none" id="s4" />
        <input type="radio" name="slider" class="d-none" id="s5" />
        <div class="cards">
          <EventCard
            img={Band}
            title="picture 1"
            about="about picture 1"
            for="s1"
            id="slide1"
          />
          <EventCard
            img={Band}
            title="picture 2"
            about="about picture 2"
            for="s2"
            id="slide2"
          />
          <EventCard
            img={Band}
            title="picture 3"
            about="about picture 3"
            for="s3"
            id="slide3"
          />
          <EventCard
            img={Band}
            title="picture 4"
            about="about picture 4"
            for="s4"
            id="slide4"
          />
          <EventCard
            img={Band}
            title="picture 5"
            about="about picture 5"
            for="s5"
            id="slide5"
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
