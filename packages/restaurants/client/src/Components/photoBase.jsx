/* eslint-disable linebreak-style */
import React, { useRef, useEffect } from "react";
import { mountPhotoGallery } from "photogallery/PhotoGallery";

export default() => {
  const ref = useRef(null);

  useEffect(() => {
    mountPhotoGallery(ref.current);
  }, []);

  return <div ref={ref} id="photos"></div>
};