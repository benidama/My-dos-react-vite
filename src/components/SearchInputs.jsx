import PropTypes from "prop-types";

const SearchInputs = ({ placeholder, Icon }) => {
  return (
    <div className="relative flex items-center">
      {Icon && (
        <Icon size={20} className="absolute flex left-2 text-gray-400" />
      )}
      <input
        type="text"
        className="bg-white rounded-md p-2 md:p-4 w-80 md:w-60 outline-none text-sm pl-7 md:pl-8"
        placeholder={placeholder}
      />
    </div>
  );
};

SearchInputs.propTypes = {
  placeholder: PropTypes.string.isRequired,
  Icon: PropTypes.elementType,
};

export default SearchInputs;
