
function generateUsers(total, hasRating=false) {
  /*
  Return an array of user objects.
  user: {
    id: uuid
    username: 
  }
  */
  return [...Array(total + 1).keys()].splice(1).map(num => {
    return {id: num, username: `user-${num}`}
  })
}

export { generateUsers };
