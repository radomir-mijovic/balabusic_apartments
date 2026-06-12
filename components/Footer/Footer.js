import React from "react";
import { FooterStyled } from "./FooterStyled";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const google_map_location =
    "https://www.google.com/maps/place/Apartments+Balabusic/@42.2887965,18.846914,17z/data=!4m12!1m6!3m5!1s0x134dd5cb7cfd2a9d:0xba3acf5469ad1a69!2sApartments+Balabusic!8m2!3d42.2887943!4d18.8481074!3m4!1s0x134dd5cb7cfd2a9d:0xba3acf5469ad1a69!8m2!3d42.2887943!4d18.8481074";

  return (
    <FooterStyled>
      <div className="section-info">
        <div className="about">
          <h3 className="section__h3">About</h3>
          <p className="section__p">
            Welcome to Balabusic apartments, where comfort is everything.
            Beautiful room presentations, straightforward booking & reservation
            options, & a whole lot more awaits here.
          </p>
        </div>
        <div className="contact">
          <h3 className="section__h3">Contact</h3>
          <p className="section__p">Address: Velji Vinogradi bb, Budva</p>
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="tel:+382 69 620 216"
          >
            <p className="section__p">Phone: +382 69 620 216</p>
          </a>
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="mailto: apartmanibalabusic@gmail.com"
          >
            <p className="section__p">Email: apartmanibalabusic@gmail.com</p>
          </a>
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="section__p">Instagram</p>
          </a>
           <a
            style={{ textDecoration: "none", color: "black" }}
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="section__p">LinkedIn</p>
          </a>
          <motion.h4
            onClick={() => router.push(google_map_location)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="show-on-map"
          >
            SHOW ON MAP +
          </motion.h4>
        </div>
        <div className="payment">
          <h3 className="section__h3">Payment methods</h3>
          <p className="section__p">
            Pay any way you choose, we support all payment options.
          </p>
        </div>

        <div className="map">
            <h3 className="section__h3">Location</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2951.5186947012844!2d18.846914!3d42.2887965!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134dd5cb7cfd2a9d%3A0xba3acf5469ad1a69!2sApartments%20Balabusic!5e0!3m2!1sen!2srs!4v1781296624916!5m2!1sen!2srs"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: "12px" }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
          </div>
      </div>
      <div className="rights">Apartmani Balabusic. All rights reserved.</div>
    </FooterStyled>
  );
};

export default Footer;
