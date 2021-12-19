app = new ChatBox('Propstube')
if (localStorage.getItem('name') == null) {
  app.home()
}
else {
  app.chat()
}