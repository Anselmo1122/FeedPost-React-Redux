import React from 'react'
import { addReaction } from './postsSlice'
import { useDispatch } from 'react-redux'
import '../../styles/reactionButtons.css'

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀'
}

export const ReactionButtons = ({ post }) => {

  const dispatch = useDispatch()

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button 
        key={name} 
        type="button" 
        className="reaction-button"
        onClick={() =>
          dispatch(addReaction({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    )
  })

  return <div className='reaction-button__container'>{reactionButtons}</div>
}