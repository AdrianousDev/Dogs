import { useEffect } from "react";

const Head = (props) => {
    useEffect(() => {
        document.title = props.title + " | Dogs";
        document
            .querySelector("meta[name='description']")
            .setAttribute("content", props.desciption || "");
    }, [props]);

    return <></>;
};

export default Head;
