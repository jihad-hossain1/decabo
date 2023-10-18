import React, { useState } from 'react';
import { Input, Button } from "@material-tailwind/react";


const CoupneApply = () => {
    const [coupon, setcoupon] = useState("");
    const onChange = ({ target }) => setcoupon(target.value);
    return (
        <div>
            <div className="relative flex w-full max-w-[24rem] mt-3">
      <Input
        type="text"
        label="Enter Coupon"
        value={coupon}
        onChange={onChange}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color={coupon ? "teal" : "blue-gray"}
        disabled={!coupon}
        className="!absolute right-1 top-1 rounded-sm"
      >
        Apply
      </Button>
    </div>
        </div>
    );
};

export default CoupneApply;

 
