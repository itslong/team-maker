
function generateUsers(total, hasRating=false) {
  /*
  Return an array of user objects.
  user: {
    id: uuid
    username: 
  }
  */
  let users = [];
  while(total > 0) {
    let user = {
      id: total,
      username: 'user-' + total.toString()
    };
    users.push(user);
    total--;
  }
  return users;
}

export {
  generateUsers
};
