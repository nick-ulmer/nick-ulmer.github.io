import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

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
        icon: <LanguageIcon />,
        label: 'Website',
        display: 'f1forhelp.dev',
        href: 'https://f1forhelp.dev',
    },
    {
        icon: <LanguageIcon />,
        label: 'Discord',
        display: 'f1forhelp@Discord',
        href: 'https://discord.com/users/131261035674992651',
    }
];

export default contacts;