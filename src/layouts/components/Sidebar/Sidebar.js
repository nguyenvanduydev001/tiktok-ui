import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
    Friends,
    FriendsActive,
    Explore,
    ExploreActive,
    ProfileIcon,
    ProfileIconActive,
} from '~/components/Icons';
import config from '~/config';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="Friends"
                    to={config.routes.friends}
                    icon={<Friends />}
                    activeIcon={<FriendsActive />}
                />
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<Explore />}
                    activeIcon={<ExploreActive />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
                <MenuItem
                    title="Profile"
                    to={config.routes.user}
                    icon={<ProfileIcon />}
                    activeIcon={<ProfileIconActive />}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
