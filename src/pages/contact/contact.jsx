import "./contact.css"

import React from "react";

export const Contact = () => {
  return (
  <div>
  <h1>Contact Page</h1>
  <h2>Number: <a href="tel+01289620"> 01289620</a></h2>
  <h2>Addres: <a href="#">123 Main St, Los Angeles, CA 90012, USA.</a></h2>
  <div className="maps__google">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d236129.77823968622!2d-2.2409975315361317!3d53.493602254196574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1726124560898!5m2!1sen!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
  </div>
</div>

  );
};
