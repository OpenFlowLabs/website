#!/bin/bash

# Supports an nvm based workflow by setting up yarn by taking
# a detour via npm to install yarn.

NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
# Should yield "nvm is a function"
NVM_COMMAND_TYPE_INFO=$(type nvm | head -n1)
# In case `type` produces non-English output, checking
# for `nvm` should still work to detect nvm-availability, even
# though it's a bit clunky.
[ ! "${NVM_COMMAND_TYPE_INFO%%" "*}" == "nvm" ] && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" &&
nvm use &&
nvm install &&
npm install yarn &&
npx yarn install &&
rm package-lock.json