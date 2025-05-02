import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    username: 'richarito',
    name: 'Richard Text Text',
    avatar: 'richard',
    isFollowing: false,
  },
  { username: 'garcia', name: 'Charly Garcia', avatar: 'charly', isFollowing: true },
  { username: 'maryalpepe', name: 'Maria Muchastegui', avatar: 'mary', isFollowing: false },
  {
    username: 'haburguesaone',
    name: 'Ronald McDonald',
    avatar: 'ronald',
    isFollowing: true,
  },
]

export const App = () => {
  const formatUsername = username => `@${username}`

  return (
    <section className='app'>
      {users.map(({ username, name, avatar, isFollowing }) => (
        <TwitterFollowCard
          key={username}
          formatUsername={formatUsername}
          initialIsFollowing={isFollowing}
          username={username}
          avatar={avatar}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  )
}
