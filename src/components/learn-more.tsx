import "@/styles/learn-more.css";

const LearnMore = ({ title }: { title: string }) => {
  return (
    <button className="learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">{title}</span>
    </button>
  );
};

export default LearnMore;
