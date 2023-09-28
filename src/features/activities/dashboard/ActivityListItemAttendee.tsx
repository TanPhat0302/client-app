import { observer } from 'mobx-react-lite';
import React from 'react';
import { List, Image} from 'semantic-ui-react';
import { Profile } from '../../../app/models/profile';
import { Link } from 'react-router-dom';

interface Props{
    attendees: Profile[];
}

export default observer(function ActivityListItemAttendee({attendees}: Props){
    return(
        <List horizontal>
        {attendees.map(attendees =>(
            <List.Item key={attendees.username} as={Link} to={`/profiles/${attendees.username}`}>
            <Image size ='mini' circular src={attendees.image || '/assets/user.png'}/>
        </List.Item>
        ))}
        </List>
    )

})