export default (props) => {
  return (
    <div className="p-4 border rounded-lg bg-main-800 border-main-border">
      {props.children}
    </div>
  );
};
