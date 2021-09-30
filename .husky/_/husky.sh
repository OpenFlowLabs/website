#!/bin/sh
if [ -z "$husky_skip_init" ]; then
  debug () {
    if [ "$HUSKY_DEBUG" = "1" ]; then
      echo "husky (debug) - $1"
    fi
  }

  branch_name=$(git rev-parse --abbrev-ref HEAD)
  branch_prefix=${branch_name%/*}
  readonly hook_name="$(basename "$0")"
  debug "starting $hook_name..."

  if [ "$branch_name" = "no-husky" ]; then
      # This case has too much potential to be irritating to only
      # be shown when $HUSKY_DEBUG = "1", hence `printf`.
      printf "Branch name is exactly \"no-husky\", but \"no-husky\" is "
      printf "only allowed as a prefix. \e[35mAborting\e[0m.\n"
      exit 1
  fi

  if [ "$branch_prefix" = "no-husky" ]; then
    debug "Branch name starts with no-husky/, skipping hook"
    export HUSKY=0
  fi

  if [ "$HUSKY" = "0" ]; then
    debug "HUSKY env variable is set to 0, skipping hook"
    exit 0
  fi

  if [ -f ~/.huskyrc ]; then
    debug "sourcing ~/.huskyrc"
    . ~/.huskyrc
  fi

  export readonly husky_skip_init=1
  sh -e "$0" "$@"
  exitCode="$?"

  if [ $exitCode != 0 ]; then
    echo "husky - $hook_name hook exited with code $exitCode (error)"
  fi

  exit $exitCode
fi
