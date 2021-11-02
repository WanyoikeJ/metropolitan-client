export default function ({ app, redirect, route }) {
    if (!app.$auth.loggedIn) {
        return redirect({
            name: 'auth-signin-admin'
        })
    }else if (app.$auth.loggedIn && !app.$auth.user.data.role) {
        return redirect({
            name: 'auth-signin-admin'
        })
    }
}