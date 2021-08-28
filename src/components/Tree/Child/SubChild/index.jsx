const SubChild = (props) => {
  const {
    user: { id, firstName, lastName },
  } = props;
  return (
    <div>
      {id}
      <br />
      {firstName}
      <br />
      {lastName}
      <br />
    </div>
  );
};

export default SubChild;
