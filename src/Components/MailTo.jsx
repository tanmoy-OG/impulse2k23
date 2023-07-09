import { Link } from "react-router-dom";

const MailTo = ({ mailto, label }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      <p className="pl-1 text-fuchsia-500 hover:text-rose-500 whitespace-nowrap transition-all duration-300">
        {label}
      </p>
    </Link>
  );
};

export default MailTo;
