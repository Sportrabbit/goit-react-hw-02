import css from "./Feedback.module.css";

export default function Feedback({ feedback, totalFeedback, positiveFeedback }) {
    return (
        <div className={css["feedback-container"]}>
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive: {positiveFeedback} %</p>
        </div>
    );
}