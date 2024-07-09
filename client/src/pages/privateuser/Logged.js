import challenge from './challenege.svg'
import manage from './Manager.svg'
import invite from './invite.svg'
import logout from './logout.svg'
import star from './star.svg'
import Setting from './Settings.svg'


const menuItems = [
    {
        img: challenge,
        text: "Challenges",
        link:'/form/sadhana'
    },
    {
        img: Setting,
        text: "Privacy settings",
        link:'/profile'
    },
    {
        img: manage,
        text: "Manage your account",
        link:'/profile'
    },
    {
        img: invite,
        text: "Invite your friend",
        link:'#'
    },
    {
        img: star,
        text: "Leaderboard",
        link:"#"
    },
    {
        img: logout,
        text: "Logout",
        link:"#"

    }
];

export default menuItems;
