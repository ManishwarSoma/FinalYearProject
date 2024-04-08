import React, { useState } from 'react';
import {v4 as uuidV4} from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const [roomId, setRoomId]= useState('');
  const [username, setUsername]= useState('');
  const createNewRoom = (e) =>{
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success('New room id is generated');
  };


  const joinRoom = () => {
    if(!roomId || !username){
      toast.error("Room Id or Username is not given");
      return;
    }
    navigate('/editor/${roomId}' , {
      state: {
        username,
      },
    });

  };

  const handleInputEnter = (e) => {
    if (e.code === 'Enter'){
      joinRoom();
    }
  }

  return (
    <div className='homePageWrapper'>
      <div className='formWrapper'>
        <img></img>
        <h4 className='mainLable'> Paste invitation Room id </h4>
        <div className='inputGroup'>
          <input type='text' className='inputbox' placeholder='ROOM ID' onChange={(e) => setRoomId(e.target.value)} value={roomId} onKeyUp={handleInputEnter}/>
          <input type='text' className='inputbox' placeholder='USERNAME' onChange={(e) => setUsername(e.target.value)} value={username} onKeyUp={handleInputEnter}/>
          <button className='btn joinBtn' onClick={joinRoom}>Join</button>
          <span className='createInfo'>
            If you dont have an invitation to create &nbsp;
            <a onClick={createNewRoom} href='' className='createNewBtn'>new room</a>
          </span>

        </div>

      </div>
    </div>
  )
}

export default Home

