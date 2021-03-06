import React, { useState } from 'react'
import { ITodo } from '../interfaces'

interface TodosProps {
    todos: ITodo[]
}

export const GroupTags: React.FC<TodosProps> = ({ todos }) => {
    const [change, setChange] = useState<string>('Группировать')
    // const [grouped, setGrouped] = useState()

    
    const groupTag = (event: React.MouseEvent) => {

        if (change === 'Группировать') {
            setChange('Разгруппировать')

            // const grouppedPictureList = todos.reduce((array: any, arg: any) => {
            //     array[arg.tag] = array[arg.tag] || [];
            //     array[arg.tag].push(arg)
            //     return array
            // }, {})
            // setGrouped(grouppedPictureList)
            //     console.log(grouped)
        } else {
            setChange('Группировать')
            console.log(todos)
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