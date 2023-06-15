import React, { useEffect } from 'react'
import { ELocalStorage } from '../enums';
import { User } from '../../model/User';
import { userSvc } from '../../services/user/user.svc';

type Props = React.PropsWithChildren;

const Layout = ({ children }: Props) => {

    useEffect(() => {
        (() => {
            if (localStorage.getItem(ELocalStorage.USER)) {


                const user = JSON.parse(localStorage.getItem(ELocalStorage.USER) || '') as User;
                console.log('user in layout ', user);

                if (user) {
                  userSvc.setRdxCurrentUser(user)
                } else {
                    userSvc.setRdxCurrentUser(undefined)
                }
            }

        })()

    }, [])

    return (
        <div>
            <main>{children}</main>
        </div>
    )
}

export default Layout
