import React, { useEffect, useRef } from 'react';
import { mountReviewsModule } from 'reviews/ReviewsModule';

export default() => {
  const ref = useRef(null);

  useEffect(() => {
    mountReviewsModule(ref.current);
  }, []);

  return <div ref={ref} id="reviews"></div>
}