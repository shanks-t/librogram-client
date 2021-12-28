import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { ProgressBar } from '../../readingGoal/ProgressBar';
import { getReadingGoals } from '../../readingGoal/ReadingGoalManager';
import Modal from '../modal/Modal';

const ModalOne = ({ closeFn = () => null, open = false }) => {

  const [ goals, setGoals ] = useState([])
    const history = useHistory()

    const goalsFetch = () => {
        getReadingGoals(). then(data => setGoals(data))
    }
    
    useEffect(() => {
        goalsFetch()
    }, []);

    useEffect(() => {
        console.log('goals', goals)
    }, [goals]);

  return (
    <Modal open={open}>
      <div className="modal--mask">
        <div className="modal-window">
          <header className="modal--header">
            <h2>Reading Goals</h2>
          </header>
          <div className="modal--body">
          <ul>
        {
                goals.map(goal => {
                    return <>
                    <li key={`goal--${goal.id}`} className="goal">
                        <Link to={`goals/edit/${goal.id}`}>{goal.id}</Link>
                    </li>
                    {goal.number_of_pages ? (<li>number of pages:{goal.number_of_pages}</li>) : null}
                    {goal.number_of_books ? (<li>number of books:{goal.number_of_books}</li>) : null}
                    <li>start date:{goal.start_date}</li>
                    <li>end date:{goal.end_date}</li>
                    <div className='progress'>
                    <ProgressBar completed={goal.status} /> 
                    </div>
                    </>
            })
        }
        </ul>
          </div>
          <footer className="modal--footer">
            <button type="button" onClick={closeFn}>
              Close
            </button>
          </footer>
        </div>
      </div>
    </Modal>
  );
};

export default ModalOne;

