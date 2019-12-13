export default function({store, redirect}) {
  if (!store.getters['auth/isAuthentificated']) {
    redirect('/admin/login?message=login')
  }
}