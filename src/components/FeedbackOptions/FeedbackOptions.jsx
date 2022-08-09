import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onFeedbackLeave }) => {
  return (
    <ul className={s.list}>
      {options.map(({ title, name }) => {
        return (
          <li key={nanoid()} className={s.item}>
            <button
              type="button"
              className={s[`accent${title}`]}
              onClick={() => onFeedbackLeave(name)}
            >
              {title}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onFeedbackLeave: PropTypes.func.isRequired,
};

export default FeedbackOptions;
