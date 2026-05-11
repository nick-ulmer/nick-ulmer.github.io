import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import F1Icon from '@/components/F1Icon';
import DiscordIcon from '@/components/DiscordIcon';

const contacts = [
    {
        icon: <EmailIcon />,
        label: 'Email',
        display: 'nball1000@gmail.com',
        href: 'mailto:nball1000@gmail.com',
    },
    {
        icon: <LinkedInIcon />,
        label: 'LinkedIn',
        display: 'linkedin.com/in/nicholas-ball-ulmer',
        href: 'https://linkedin.com/in/nicholas-ball-ulmer',
    },
    {
        icon: <GitHubIcon />,
        label: 'GitHub',
        display: 'github.com/nick-ulmer',
        href: 'https://github.com/nick-ulmer',
    },
    {
        icon: <F1Icon />,
        label: 'Website',
        display: 'f1forhelp.dev',
        href: 'https://f1forhelp.dev',
    },
    {
        icon: <DiscordIcon />,
        label: 'Discord',
        display: 'f1forhelp@Discord',
        href: 'https://discord.com/users/131261035674992651',
    }
];

export default contacts;