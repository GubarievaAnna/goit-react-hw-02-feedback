import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <button
        type="button"
        className={`${s.button} ${s.accentGood}`}
        onClick={() => onLeaveFeedback('good')}
      >
        good
      </button>
      <button
        type="button"
        className={`${s.button} ${s.accentNeutral}`}
        onClick={() => onLeaveFeedback('neutral')}
      >
        neutral
      </button>
      <button
        type="button"
        className={`${s.button} ${s.accentBad}`}
        onClick={() => onLeaveFeedback('bad')}
      >
        bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
