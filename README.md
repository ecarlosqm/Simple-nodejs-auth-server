# Simple Nodejs auth server

I build this simple server to practice technologies and some concepts like DDD and TDD. It is not intended to be used in production.

If you want to try it.

```bash
npm run serve
```

## Signin
POST: localhost:3000/signin/[userId]
```json
{
	"username": "[user]",
	"password": "[password]"
}
```

## Login
POST: localhost:3000/login
```json
{
	"username": "[user]",
	"password": "[password]"
}
```

## Logout
GET: localhost:3000/logout


### TODO
- [x] Build entities.
- [ ] Add aplication sevices.
  - [ ] Add user.
    - [ ] Check if the user exist.
  - [x] Add authenticate.
  - [x] Add password has.
- [x] Add controller.
  - [x] Add express.
  - [x] Add passport.
  - [x] Add login controller.
  - [x] Add signin controller.
  - [x] Add logout controller
 - [ ] Add tests.
 - [ ] Add dependency injection.
