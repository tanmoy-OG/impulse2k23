import MailTo from "./MailTo";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <div
      className="h-fit m-0 w-full bg-black/50"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="flex justify-around w-full flex-col sm:flex-row gap-4 pt-10 pl-10 pr-10 sm:pl-16 sm:pr-16 xl:pl-28 xl:pr-28">
        <div className="basis-1/3">
          <h1
            className="pb-4 text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-wide  font-serif uppercase flex  justify-center sm:justify-start"
            id="venue"
          >
            venue
          </h1>
          <div className="flex flex-col gap-4 pb-4 items-center text-base sm:items-start sm:text-left">
            <iframe
              className="h-32 w-2/3 sm:w-44 md:h-44 md:w-60 lg:w-72 xl:w-80 2xl:w-96 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5603.423119488341!2d88.38228609294792!3d22.608739187232796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d503e06cb7b%3A0xf01fd00a505fde18!2sMohit%20Moitra%20Mancha!5e0!3m2!1sen!2sin!4v1688751883858!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-2">
                <MdLocationPin className="text-2xl text-fuchsia-500" />
                <div className="flex flex-col text-left">
                  <p className="flex flex-wrap">
                    Raja Manindra Rd, Tala, Paikpara,
                  </p>
                  <p className="flex flex-wrap">
                    (near Belgachia Metro st.), Kolkata, 700037
                  </p>
                  <p className="flex flex-wrap">West Bengal, India</p>
                  <MailTo
                    label="bitimpulse2023@gmail.com"
                    mailto="mailto:bitimpulse2023@gmail.com"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-spacing-1 border-white/20 sm:border-none sm:m-0"></div>
        <div className="basis-1/3 pt-4 sm:pt-0">
          <h1
            className="pb-4 text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-wide font-serif whitespace-nowrap uppercase flex justify-center sm:justify-end sm:text-right"
            id="contactUs"
          >
            contact us
          </h1>
          <div className="flex flex-col gap-3 sm:items-end sm:text-right">
            <p>
              Prof. Kuntala Das (Convenor)
              <MailTo
                label="kuntala.das@bitcollege.in"
                mailto="mailto:kuntala.das@bitcollege.in"
              />
            </p>
            <p>
              Dr. Madhusudhan Debnath (Coordinator)
              <MailTo
                label="debnathmphys123@gmail.com"
                mailto="mailto:debnathmphys123@gmail.com"
              />
            </p>
            <p>
              Shreyan Dey (GS) :{" "}
              <a
                className="text-fuchsia-500 hover:text-rose-500 whitespace-nowrap transition-all duration-300"
                href="tel:90739 99922"
              >
                90739 99922
              </a>
              <MailTo
                label="shrayan02@gmail.com"
                mailto="mailto:shrayan02@gmail.com"
              />
            </p>
            <p>
              Pratim Sen Sharma (CS) :{" "}
              <a
                className="text-fuchsia-500 hover:text-rose-500 whitespace-nowrap transition-all duration-300"
                href="tel:74395 06293"
              >
                74395 06293
              </a>
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <a href="https://www.facebook.com/Impulse2020" target="_blank">
                <FiFacebook className="text-3xl hover:text-rose-500 transition-all duration-300" />
              </a>
              <a href="https://instagram.com/bit_impulse2023" target="_blank">
                <FiInstagram className="text-3xl hover:text-rose-500 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-violet-500/30 py-2 text-violet-300 tracking-wide mt-6">
        <h1 className="text-lg p-1">
          {" "}
          Made with &#10084; by{" "}
          <a
            href="https://www.linkedin.com/in/tanmoy-choudhury/"
            target="_blank"
            className="hover:text-rose-500 whitespace-nowrap transition-all duration-300"
          >
            Tanmoy Choudhury
          </a>{" "}
          &{" "}
          <a
            href="https://www.linkedin.com/in/priyankar-sarkar/"
            target="_blank"
            className="hover:text-rose-500 whitespace-nowrap transition-all duration-300"
          >
            Priyankar Sarkar
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
