import css from "./MessageError.module.css";

export default function MessageError() {
  return (
    <>
      <p className={css.errorText}>
        Failed to load contacts, please try again later...
      </p>
    </>
  );
}