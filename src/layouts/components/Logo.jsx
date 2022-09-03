const Logo = (props) => {
  return (
    <div className="flex items-center px-3 h-16">
      <div className="w-8 text-center">
        <img src="/logomark.png" alt="GoKudos" className="h-12" />
      </div>
      {props.aside && (
        <div>
          <img src="/logotype.png" alt="GoKudos" className="h-12" />
        </div>
      )}
    </div>
  );
};
export default Logo;
