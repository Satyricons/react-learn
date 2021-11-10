import React from "react";
import userscss from "../users/users.module.css";
import preloader from "../users/img/loading.gif";

const Preloader = () => <div>
	<img alt="" className={userscss.preloader} src={preloader} />
</div>



export default Preloader;
