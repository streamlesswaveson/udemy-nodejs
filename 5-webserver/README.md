# Heroku

## Logging in
```
brew install heroku/brew/heroku
heroku --help
heroku login
```

## Adding ssh keys
```
heroku keys:add
heroku keys
ssh -v git@heroku.com
```

## Creating remote project

```
heroku create
```

## Binding github to heroku
```
git push heroku # use if 1:1 correlation between github project and target
heroku git:remote -a udemy-nodejs # i.e. github project
heroku git:remote -a <heroku-app-id> # whatever heroku provided

```
## Deploying

```
git subtree push --prefix 5-webserver heroku master
```

