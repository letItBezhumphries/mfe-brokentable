function formatMenuItems(menu) {
  // remove whitespaces and unnecessary characters from menu
  const formattedMenuString = menu.replace(/[,;:\-'"]+/g, '').split(/\s+/).join(' ');

  const getRandomPrice = (num) => {
    return '$' + Math.floor(Math.random() * Math.floor(num)).toString() + '.00';
  };

  // remove any items that are not long enough
  const menuItems = formattedMenuString.split(/[.?]/).filter((item) => item.length >= 5);

  const newMenu = menuItems.map((item) => ({
    name: item.split(' ').slice(0, 3).join(' ').trim(),
    description: item.trim(),
    price: getRandomPrice(60)
  }));

  return newMenu;
}

export default formatMenuItems;
