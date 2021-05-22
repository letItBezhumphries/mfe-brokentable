import _ from 'lodash';

const getTabFilterOptions = (photos) => {
  const filteredPhotos = ['All'];
  photos.forEach((photo) => filteredPhotos.push(photo.subjectType));
  return _.uniq(filteredPhotos);
};

export default getTabFilterOptions;
