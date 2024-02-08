import Wrapper from "../assets/wrappers/JobInfo";

const JobInfo = ({ icon, text, isUrl }) => {
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      <span className="text">
        {!isUrl ? (
          text
        ) : (
          <a href={text} target="_blank">
            Link
          </a>
        )}
      </span>
    </Wrapper>
  );
};

export default JobInfo;
