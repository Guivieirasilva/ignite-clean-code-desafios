// Nomenclatura de variáveis

const listOfCategorys = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getUserByGithub(req, res) {
  const githubUsername = String(req.query.username)

  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const response = await fetch(`https://api.github.com/users/${githubUsername}`);

  if (response.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUsername}" not found`
    })
  }

  const githubUser = await response.json()

  const followersListSort = listOfCategorys.sort((a, b) =>  b.followers - a.followers); 

  const userCategory = followersListSort.find(list => githubUser.followers > list.followers)

  const result = {
    githubUsername,
    category: userCategory.title
  }

  return result
}

getUserByGithub({ query: {
  username: 'josepholiveira'
}}, {})