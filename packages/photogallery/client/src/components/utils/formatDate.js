const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const formatDate = (dateString) => {
  const date = dateString.split('-');
  const year = date[0];
  const monthIndex = parseInt(date[1]) - 1;
  const month = months[monthIndex];
  const day = date[2];
  return `${month} ${day}, ${year}`;
};

export default formatDate;
