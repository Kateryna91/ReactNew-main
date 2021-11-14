import classnames from "classnames";
import PropTypes from "prop-types";

const InputTextField = ({
    field,
    label,
    value,
    error,
    type,
    onChange
}) => {
    console.log("error", error);
    return (
        <div className="mb-3">
           {type!="hidden" && <label htmlFor={field}>{label}</label>}
            
            <input type={type}
                className={classnames("form-control", 
                    { "is-invalid": error },
                    { "is-valid": error==undefined }
                    )}
                id={field}
                name={field}
                value={value}
                onChange={onChange}
                 />
            {!!error && <span className="text-danger">{error}</span>}
        </div>
    );
};

InputTextField.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  InputTextField.defaultProps = {
    type: "text"
  };

export default InputTextField;