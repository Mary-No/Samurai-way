import s from "./UsersContainer.module.css";
import loader from "../../assets/images/loader.svg";
import React from "react";

let Preloader = () => {
return <div className={s.loaderContainer}><img alt="loader" className={s.loader} src={loader}/></div>
}
export default Preloader