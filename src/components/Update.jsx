import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../redux/reducer';

function Update() {

    const { id } = useParams();
    const users = useSelector((state) => state.users);

    const existingUser = users.filter((person) => person.id == id);
    const { name, email, profession } = existingUser[0];

    const [uname, setUName] = useState(name);
    const [uemail, setUEmail] = useState(email);
    const [uprofession, setUProfession] = useState(profession);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();

        dispatch(updateUser({
            id: id,
            name: uname,
            email: uemail,
            profession: uprofession,
        }));

        navigate('/');
    };

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3>Update User</h3>
            <form onSubmit={handleUpdate}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" className='form-control' placeholder='Enter Name'
                     value={uname} onChange={(e) => setUName(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" className='form-control' placeholder='Enter Email'
                     value={uemail} onChange={(e) => setUEmail(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="profession">Profession: </label>
                    <input type="text" name='profession' className='form-control' placeholder='Enter Profession'
                     value={uprofession} onChange={(e) => setUProfession(e.target.value)}/>
                </div>
                <br />
                <button className='btn btn-primary'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Update;