export default function ({ store, redirect }) {
  if (store.state.isLoggedIn === false) {
    return redirect('/')
  }
}
