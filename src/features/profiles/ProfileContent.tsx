import React from 'react'
import {Tab} from 'semantic-ui-react'
import ProfilePhoto from './ProfilePhoto';
import { Profile } from '../../app/models/profile';
import ProfileAbout from './ProfileAbout';
import ProfileFollowing from './ProfileFollowing';
import { useStore } from '../../app/stores/store';

interface Props{
    profile: Profile;
}

export default function ProfileContent({profile}: Props){

    const{profileStore} = useStore();

    const panes =[
        {menuItem: 'About', render:() => <ProfileAbout />},
        {menuItem: 'Photos', render:() => <ProfilePhoto profile={profile}/>},
        {menuItem: 'Events', render:() => <Tab.Pane>Events Content</Tab.Pane>},
        {menuItem: 'Followers', render:() => <ProfileFollowing />},
        {menuItem: 'Following', render:() => <ProfileFollowing />},
    ];
    return(
        <Tab 
        menu={{fluid: true, vertical: true}}
        menuPosition='right'
        panes={panes}
        onTabChange={(_, data) => profileStore.setActiveTab(data.activeIndex as number)}
        />
    )
    
}