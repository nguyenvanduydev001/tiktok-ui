import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/da02bb136deaab5f2b9952eae0ccf335~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1709812800&x-signature=OcozxObbceqlKFFpJKoN2UMNP%2FU%3D"
                alt="Duy"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van Duy</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvanduy</span>
            </div>
        </div>
    );
}

export default AccountItem;
