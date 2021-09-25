import bodycss from './body.module.css';
import {BrowserRouter} from "react-router-dom";

const Body = (props) => {
    return (
        <BrowserRouter>
            <div className={bodycss.allhead}>
            BODY
            </div>
        </BrowserRouter>
    );
}

export default Body;