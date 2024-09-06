/**
 * Redirect the user to the login page if they are not logged in
 */
export default function ({ store, redirect }) {
  if (!Boolean(store.state.user.id)) {
    return redirect('/login')
  }
}
