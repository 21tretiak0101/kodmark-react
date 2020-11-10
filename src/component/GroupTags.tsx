import React, { useState} from 'react'
import { ITodo } from '../interfaces'
 
interface TodosProps {
    todos: ITodo[]
}

export const GroupTags: React.FC<TodosProps> = ({ todos }) => {
    const [change, setChange] = useState<string>('Группировать')
    const [checked, setChecked] = useState<Boolean>(false)
    



    const groupTag = (event: React.MouseEvent) => {

        if (change === 'Группировать') {
            setChange('Разгруппировать')
            return !checked
 
        } else {
            setChange('Группировать')
            setChecked(true)
            return todos
        }
    }

    return <>
        <input
            type="button"
            onClick={groupTag}
            value={change}
        />
    </>
}