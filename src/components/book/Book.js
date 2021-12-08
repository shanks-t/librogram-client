import React, { useEffect, useState } from 'react';


export const Book = ({ book }) => {


    return (
        <>
            <div className='results'>
                {
                        book?.volumeInfo?.imageLinks?.thumbnail ?
                            <a target='blank' href={book?.volumeInfo?.infoLink}>
                                <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt={book.title} />
                            </a>
                            : <a target='blank' href={book?.volumeInfo?.infoLink}>
                                <h3>{book.volumeInfo.title}</h3>
                            </a>
                    
                }
            </div>
        </>
    );
}
