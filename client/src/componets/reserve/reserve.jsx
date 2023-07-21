import React from 'react'

const Reserve = ({setOpen, hotelId}) => {
  return (
     <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        </div>
        </div>
  );
};

export default Reserve