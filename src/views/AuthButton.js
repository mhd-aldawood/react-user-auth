
function AuthButton() {
    let history = useHistory();
    let auth = useAuth();

    return (
        <div className="App">
            {check()}
        </div>
    );
    const check = () => {
        return auth.user ? (
            <p>
                Welcome!{" "}
                <button
                    onClick={() => {
                        auth.signout(() => history.push("/"));
                    }}
                >
                    Sign out
                </button>
            </p>
        ) : (
            <p>You are not logged in.</p>
        );
    }

}

export default AuthButton;