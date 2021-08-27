import React from 'react';
import RotateLoader from "react-spinners/RotateLoader";
import { css } from "@emotion/react";

const Spinner = () => {

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;

    return <RotateLoader css={override} size={50} />

}

export default Spinner;