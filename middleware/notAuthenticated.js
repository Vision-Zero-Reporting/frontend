/**
 * Redirect the user to the dashboard login page if they are logged in
 */
export default function ({ store, redirect }) {
  if (Boolean(store.state.user.id)) {
    return redirect('/dashboard')
  }
}
