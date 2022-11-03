import React from "react";

function Article({title,preview,minutes,date="January 1, 1970"}){
    const emoji = minutes<=30 ? 
    "☕️".repeat(Math.ceil(minutes / 5)) 
    : "🍱".repeat(Math.ceil(minutes/10))
       
    return(
        <article>
            <h3>{title}</h3>
            <small>{date} * {emoji}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article