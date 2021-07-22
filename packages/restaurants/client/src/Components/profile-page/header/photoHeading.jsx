/* eslint-disable linebreak-style */
import React, { useRef, useEffect } from "react";
import { mountPhotoBanner } from "photogallery/PhotoBanner";

export default() => {

  const ref = useRef(null);

  useEffect(() => {
    mountPhotoBanner(ref.current);
  }, []);

  return <div ref={ref}></div>
};



