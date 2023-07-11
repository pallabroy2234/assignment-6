import PropTypes from "prop-types";

const Header = ({title}) => {
  return (
    <div className='w-full bg-purple-600 py-2'>
      <div className='container'>
        <h2 className='text-center text-white'>{title}</h2>
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
