import FacebookLogo from '../assests/facebook.png';
import InstaLogo from '../assests/instagram.png';
import TwitterLogo from '../assests/twitter.png';
import TwitchLogo from '../assests/twitch.png';
import YoutubeLogo from '../assests/youtube.png';

export const SOCIAL_ICONS_MAPPING = {
    facebook: {
        key: 'facebook',
        url: FacebookLogo,
        link: 'https://www.facebook.com'
    },
    instagram: {
        key: 'instagram',
        url: InstaLogo,
        link: 'https://www.instagram.com'
    },
    twitter: {
        key: 'twitter',
        url: TwitterLogo,
        link: 'https://www.twitter.com'
    },
    twitch: {
        key: 'twitch',
        url: TwitchLogo,
        link: 'https://www.twitch.com'
    },
    youtube: {
        key: 'youtube',
        url: YoutubeLogo,
        link: 'https://www.youtube.com'
    }
};

export const SOCIAL_ICONS = ['facebook', 'instagram', 'twitter', 'twitch', 'youtube'];

export const NAVIGATIONS = ['Privacy Policy', 'Contact Us', 'Cookie preferences', 'Corporate Information', 'Privacy Policy', 'Contact Us', 'Cookie preferences', 'Corporate Information']