import React from 'react'

export default ({data, filterText, addFavorite}) => {

        const namesList = data
            .filter(person => {
                // remove names that do not match current filter text
                return person.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
            })
            .map(person => {
            return (
                <li
                    key={person.id}
                    className={person.sex}
                    onClick={() => addFavorite(person.id)}
                >
                    {person.name}
                </li>
            )
        })

        return (
            <div>
                <ul>
                    {namesList}
                </ul>
            </div>

        );
}