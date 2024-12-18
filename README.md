npm run build && npx wbn --dir dist/my-iwa/browser && npx wbn-sign -i out.wbn -k encrypted_key.pem -o docs/signed.0.0.14.swbn

key passphrase: asdfasdf

on mac, get to the iwa's by cmd + space and typing "Chrome Apps"

controlled frames don't work on mac

You need to enable these chrome flags:
"Enable isolated web apps"
"Enable Isolated Web App Developer Mode"
"Enable Controlled Frame"
"getAllScreensMedia API" - only available on chromeos

