import React from "react";
import {Field, reduxForm} from "redux-form";
// type formDataType = {
//     login: string,
//     password: string,
//     rememberMe: boolean
// }
const Login = () => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
       <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
export default Login

const LoginForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} component={"input"} name="login"/>
            </div>
            <div>
                <Field placeholder={"Password"} component={"input"} name="password"/>
            </div>
            <div>
                <Field type={"checkbox"} component={"input"} name="rememberMe"/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>

}
const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)