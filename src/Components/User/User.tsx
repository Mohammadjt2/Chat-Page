import { useState } from 'react'
import "./User.css";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import Discussion from "../../Discussion";
import My from '../My/My';
import zIndex from '@mui/material/styles/zIndex';


function User() {
    const [users] = useState(Discussion)
    const [boolean, setBoolean] = useState<boolean>()

    // {user.user.avatar ? user.user.avatar : user.user.name }

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <div className='user'>
                        {(user.user.avatar) ? <img className='user-avatar' src={user.user.avatar} alt="" /> : <span className='user-avatar'>{(user.user.name).split(/[a-z \s]/)}</span>}
                        <div>
                            <div className='user-profile'>
                                <span className='user-name'>{user.user.name}</span>
                                <span className='user-time'>{new Date(user.date).toLocaleTimeString()}</span>
                            </div>
                            <div>
                                <p>{user.text}</p>
                                <div className='user-like-reply'>
                                    <div className={`user-like ${user.iLikedIt ? "like" : ""}`} onClick={() => {
                                        if (!user.iLikedIt) {
                                            user.likes += 1
                                            user.iLikedIt = true
                                        } else if (user.iLikedIt) {
                                            user.likes -= 1
                                            user.iLikedIt = false
                                        }
                                        setBoolean(!boolean)
                                    }}>
                                        <ThumbUpOutlinedIcon />
                                        <span>{user.likes}</span>
                                    </div>
                                    <p>Reply</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='reply'>
                        {user.replies.map((reply) => (
                            <div className='user-reply' key={reply.id}>
                                {(reply.user.avatar) ? <img className='user-avatar' src={reply.user.avatar} alt="" /> : <span className='user-avatar'>{(reply.user.name).split(/[a-z \s]/)}</span>}
                                <div>
                                    <div className='user-profile'>
                                        <span className='user-name'>{reply.user.name}</span>
                                        <span className='user-time'>{new Date(reply.date).toLocaleTimeString()}</span>
                                    </div>
                                    <div>
                                        <p>{reply.text}</p>
                                        <div className='user-like-reply'>
                                            <div className={`user-like ${reply.iLikedIt ? "like" : ""}`} onClick={() => {
                                                if (!reply.iLikedIt) {
                                                    reply.likes += 1
                                                    reply.iLikedIt = true
                                                } else if (reply.iLikedIt) {
                                                    reply.likes -= 1
                                                    reply.iLikedIt = false
                                                }
                                                setBoolean(!boolean)
                                            }}>
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