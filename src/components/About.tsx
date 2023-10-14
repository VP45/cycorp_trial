import React from "react";
import Vabout from "./Vabout";
import Teams from "./Teams";

const About = () => {
  return (
    <div className="flex flex-col place-items-center justify-between text-center text-white mt-5">
      <p className="font-semibold">
        <span className="text-red-600">C.Y. CORP LLP</span> is a strategic partnership conceived with a common aim to
        provide consolidated & integrated Liaison (City & Suburb), <br/> Design &
        Advisory Services for Building Construction Projects in Mumbai Metropolitan Region.
      </p>
      <p className="font-semibold p-2">
      Co-founded by <span className="text-red-600">Milind Changani, Yomesh Rao and Jasleen Changani</span>, who are the leading professionals <br />in the field of architectural design and liaison for redevelopment and development across Mumbai.
      </p>
      <p className="font-semibold p-2">
      With over <span className="text-red-600">250 ongoing projects</span>, We are a One Stop consultancy firm comprising of Architects, Engineers, Valuers, Lawyers,<br /> Project management Consultants and other specialists with a singular focus on real estate design & development.
      </p>
      <p className="font-semibold p-2">
      We constantly <span className="text-red-600">strive towards excellence</span> and <span className="text-red-600">welcome feedback</span> from our clients to help improve our services.
      </p>
      <p className="font-semibold p-2 text-2xl">
      We believe in utmost <span className="text-red-600">Integrity & Transparency.</span>
      </p>
      <p className="font-semibold p-2 text-2xl">
      </p>

    </div>
  );
};

export default About;
