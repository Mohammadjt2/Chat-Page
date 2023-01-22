import React from 'react'
import "./User.css";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import Discussion from "../../Discussion";
import My from '../My/My';


function User() {
    const users = Discussion

    return (
        <div>
            {users.map((user) => (
                <div>
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
                                    <div className={`user-like ${user.iLikedIt ? "like" : ""}`} onClick={() => { }}>
                                        <ThumbUpOutlinedIcon />
                                        <span>{user.likes}</span>
                                    </div>
                                    <a href="#">Reply</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='reply'>
                        {user.replies.map((reply) => (
                            <div className='user-reply' key={reply.id}>
                                <img className='user-avatar' src={reply.user.avatar} alt="avatar" />
                                <div>
                                    <div className='user-profile'>
                                        <span className='user-name'>{reply.user.name}</span>
                                        <span className='user-time'>{new Date(reply.date).toLocaleTimeString()}</span>
                                    </div>
                                    <div>
                                        <p>{reply.text}</p>
                                        <div className='user-like-reply'>
                                            <div className={`user-like ${reply.iLikedIt ? "like" : ""}`} onClick={() => { }}>
                                                <ThumbUpOutlinedIcon />
                                                <span>{reply.likes}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {(user.replies.length) ? <div className='my-padding'><My /></div> : ""}
                </div>
            ))}
        </div>
    )
}

export default User