import React, { useState } from 'react'
import "./User.css";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import Discussion from "../../Discussion";


function User() {
    const [users, setUsers] = useState(Discussion)
    const [like, setLike] = useState<string>("")
    const [likes, setLikes] = useState<number>()
    const [iLikedIt, setILikedIt] = useState<boolean>()

    console.log(users);
    

    return (
        <>
            {users.map((user) => (
                <div className='user' key={user.id}>
                    <img className='user-avatar' src={user.user.avatar} alt="avatar" />
                    <div>
                        <div className='user-profile'>
                            <span className='user-name'>{user.user.name}</span>
                            <span className='user-time'>{new Date(user.date).toLocaleTimeString()}</span>
                        </div>
                        <div>
                            <p>{user.text}</p>
                            <div className='user-like-reply'>
                                <div className={`user-like ${user.iLikedIt ? "like" : ""}`} onClick={() => {

                                }}>
                                    <ThumbUpOutlinedIcon />
                                    <span>{user.likes}</span>
                                </div>
                                <a href="#">Reply</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default User