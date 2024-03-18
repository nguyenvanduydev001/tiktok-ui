import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from '~/components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SuggestedAccounts() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7329335153426169858.jpeg?lk3s=a5d48078&x-expires=1710925200&x-signature=taQfMtVXpEb5%2BJK%2BPm06Eo3m71U%3D"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>nguyenvanduy</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nguyễn Văn Duy</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default SuggestedAccounts;
