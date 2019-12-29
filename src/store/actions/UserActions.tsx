import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ISetUserData, UserTypes, IUser, ILogIn, ILoginUser } from "store/actions/UserTypes";

export const SetUserData: ActionCreator<ThunkAction<
    Promise<any>,
    IUser,
    null,
    ISetUserData
>> = (FirstName: string, LastName: string, Email: string) => {
    return async (dispatch: Dispatch) => {
        const user = {FirstName: FirstName, LastName: LastName, Email: Email} as IUser;
        dispatch({
            type: UserTypes.ADD_USER_DATA,
            payload: user
        });
    };
};

export const LoginUser: ActionCreator< ThunkAction< 
    Promise<any>, 
    ILoginUser, 
    null, 
    ILogIn 
>> = (login: string, password: string ) => {
    return async (dispatch: Dispatch) => {
        if(login === "user" && password === "qwe123") {
            const loginData = {Login: login, UserType: "user"} as ILoginUser;
            dispatch({
                type: UserTypes.LOGIN,
                payload: loginData
            });
            localStorage.setItem("token", `${login}`);
        }

        if(login === "admin" && password === "zaqwsx") {
            const loginData = {Login: login, UserType: "admin"} as ILoginUser;
            dispatch({
                type: UserTypes.LOGIN,
                payload: loginData
            });
            localStorage.setItem("token", `${login}`);
        }
    }
}


