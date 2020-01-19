import React, {useState} from 'react';
import { connect } from 'react-redux';

import { SetUserData } from 'store/actions/UserActions';

import Button from "components/Button/Button";
import Input from 'components/Input/Input';


const SetUserComponent: React.FC<any> = (props: any) => {
    const [userName,SetUserName] = useState("");

    const onChangeName = (event: any) => {
        SetUserName(event.target.value);
    };

    const setUserNameAction = () => {
        props.setUser(userName,"Admin","admin@admin.pl");
    }

    return <div>
        <Input type="text" value={userName} onChange={onChangeName} placeholder="Name" />
        <Button text="Click" onClick={setUserNameAction} variant="primary" />
    </div>
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setUser: (FirstName: string, LastName: string, Email: string) => {dispatch(SetUserData(FirstName,LastName,Email))}
    }
}

export default connect(null, mapDispatchToProps)(SetUserComponent);