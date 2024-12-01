import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Talkio",
  description = "Talkio is a platform for people to connect with each other and share their thoughts and ideas.",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
