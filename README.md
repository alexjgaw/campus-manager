<img src="../img/aca-logo-header.png" width="400" />

# Campus Manager

[![CircleCI](https://circleci.com/gh/AustinCodingAcademy/campus-manager/tree/master.svg?style=svg)](https://circleci.com/gh/AustinCodingAcademy/campus-manager/tree/master)

[![Heroku](https://heroku-badge.herokuapp.com/?app=aca-campus)](http://aca-campus.herokuapp.com)

## Development
You first need to setup your environment.

### Machine Dependencies
1. Download and install [Node.js](https://nodejs.org/en/) (at least version 7.2.1)

2.
  * Mac OSX
    1. Install [Homebrew](http://brew.sh/)
    1. Install MongoDB `brew install mongodb`
    1. Create MongoDB data directory `sudo mkdir -p /data/db`
    1. Correct permissions `sudo chmod -R 0755 /data/db && sudo chown $USER /data/db`
    1. Start MongoDB `mongod`
      * Leave this running or just close the terminal window while running
      * You'll have to do this step every time you restart your computer
  * Windows
    1. Install [Chocolatey](https://chocolatey.org/install)
    1. Install MongoDB `choco install mongodb`
    1. Create MongoDB data directory `mkdir /data/db`
    1. Start MongoDB `mongod.exe`
      * Leave this running or just close the terminal window while running
      * You'll have to do this step every time you restart your computer

### App Dependencies
After forking, cloning, and navigating into repository:

1. Install dependencies `npm install`
1. Duplicate `.env.example` and name it `.env`
1. Leave `npm run gulp` running in one terminal session
1. navigate to `http://localhost:3000/register` to create a user

## Testing

1. Download [Google Chrome](https://www.google.com/chrome/browser/desktop/index.html)
1. Install Java JDK
  * Mac OSX `brew cask install java`
  * Windows `choco install jdk7`
1. Run `npm test`
