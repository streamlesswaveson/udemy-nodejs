# `node inspect` or `nodemon inspect`
```
$ node inspect app.js read --title='dinner'
< Debugger listening on ws://127.0.0.1:9229/cf446e1f-1c40-4ade-af70-13f90f504308
< For help, see: https://nodejs.org/en/docs/inspector
< Debugger attached.
Break on start in app.js:1
> 1 (function (exports, require, module, __filename, __dirname) { console.log('starting app...');
  2 
  3 const fs = require('fs');
debug> c
< starting app...
< starting notes.js
< Note Found
break in notes.js:59
 57 
 58 var logNote = (note) => {
>59     debugger
 60     console.log('----');
 61     console.log(`Title: ${note.title}`)
debug> repl
Press Ctrl + C to leave debug repl
> note
{ title: 'dinner', body: 'cheeseburger' }
> note.title = 'breakfast'
'breakfast'
debug> c
< ----
< Title: breakfast
< Body: cheeseburger
< Waiting for the debugger to disconnect...
debug> 
(To exit, press ^C again or type .exit)
debug> 
```
