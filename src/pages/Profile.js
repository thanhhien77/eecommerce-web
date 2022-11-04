
import {useNavigate} from 'react-router-dom'

function Profile() {
    let navigate = useNavigate()
    return (
        <div>
            <h1>Here is Profile page</h1>
            <button style={{color: 'red'}} onClick={()=>navigate('/about')}
            >Click to about</button>
        </div>
    )
}

export default Profile;
