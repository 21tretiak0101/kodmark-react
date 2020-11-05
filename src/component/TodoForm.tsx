import React, { useState } from 'react'

interface TodoFormProp {
    onAdd(title:string): void
}

export const TodoForm: React.FC<TodoFormProp> = props => {
const [tag, setTag] = useState<string>('')

const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTag(event.target.value)
}
const clickHandler = (event: React.MouseEvent) => {
    if (tag === '') {
        console.error('Error!!!')
    } else {
        fetch(`https://api.giphy.com/v1/gifs/random?api_key=gTJAO48YcpmrADUyo4opy4ES4g7iDBxx&tag=${tag}`)
        .then(res => res.json())
        .then(res => console.dir(res))
        // .then(res => props.onAdd(res.data.image_original_url))
    }
}

    return(
        
        <div className="input-field">
            <input
            onChange={changeHandler} 
            value={tag} 
            type="text" 
            id="title"/>
            {/* <label htmlFor="title" className="active">{tag}</label> */}
            <button
            onClick={clickHandler}
            >
            Загрузить
            </button>
        </div>
    )
}