import { useHistory } from "react-router";
import { useEffect } from "react";
import { goToLogin } from "../router/coordinator";

const useProtectedPage = () => {
    const history = useHistory ()
    useEffect (() => {
        const token = localStorage.getItem('token')
        if (!token) {
            goToLogin(history)
        }
    }, [history])

}

export default useProtectedPage