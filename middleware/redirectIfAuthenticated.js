export default function ({ app, redirect, route }) {
    if (app.$auth.loggedIn) {
        if (!app.$auth.user.data.role) {
            return redirect({
                name: 'customer-profile'
            })
        }
    }
}
