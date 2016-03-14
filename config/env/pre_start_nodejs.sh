#!/bin/bash
export NODE_ENV=production

# If there is a grunt file, run $ grunt prod
if [ -f "${OPENSHIFT_REPO_DIR}"/Gruntfile.js ]; then
    (cd "${OPENSHIFT_REPO_DIR}"; node_modules/grunt-cli/bin/grunt prod)
fi
