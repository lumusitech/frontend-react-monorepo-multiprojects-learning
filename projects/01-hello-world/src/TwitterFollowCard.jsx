import { useState } from 'react'
import './TwitterFollowCard.css'

export const TwitterFollowCard = ({
  children,
  formatUsername,
  initialIsFollowing = false,
  avatar,
  username = 'unknown',
}) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'tw-follow-card-button following' : 'tw-follow-card-button'

  return (
    <article className='tw-follow-card'>
      <header className='tw-follow-card-header'>
        <img className='tw-follow-card-avatar' src={`https://unavatar.io/${avatar}`} alt='avatar' />

        <div className='tw-follow-card-info'>
          <strong>{children}</strong>
          <span className='tw-follow-card-info-username'>{formatUsername(username)}</span>
        </div>
      </header>

      <aside className='tw-follow-card-aside'>
        <button onClick={() => setIsFollowing(!isFollowing)} className={buttonClassName}>
          <span className='tw-follow-card-text'>{text}</span>
          <span className='tw-follow-card-stop-following'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
