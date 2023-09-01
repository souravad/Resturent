import React from 'react'
const LoadComment = ({comments}) => {
    const previewComment=comments.map((c)=>{
        return(
            <div key={c.id}>
            <h5>{c.author}</h5>
            <p>{c.comment}</p>
            <p>{c.date}</p>
        </div>
        );
    })
  return (
    <div>{
        previewComment
    }</div>
  )
}

export default LoadComment