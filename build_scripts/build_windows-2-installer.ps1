# $env:path should contain a path to editbin.exe and signtool.exe

$ErrorActionPreference = "Stop"

mkdir build_scripts\win_build

git status
git submodule

if (-not (Test-Path env:BTCGREEN_INSTALLER_VERSION)) {
  $env:BTCGREEN_INSTALLER_VERSION = '0.0.0'
  Write-Output "WARNING: No environment variable BTCGREEN_INSTALLER_VERSION set. Using 0.0.0"
}
Write-Output "BTCgreen Version is: $env:BTCGREEN_INSTALLER_VERSION"
Write-Output "   ---"

Write-Output "   ---"
Write-Output "Use pyinstaller to create btcgreen .exe's"
Write-Output "   ---"
$SPEC_FILE = (python -c 'import btcgreen; print(btcgreen.PYINSTALLER_SPEC_PATH)') -join "`n"
pyinstaller --log-level INFO $SPEC_FILE

Write-Output "   ---"
Write-Output "Copy btcgreen executables to btcgreen-blockchain-gui\"
Write-Output "   ---"
Copy-Item "dist\daemon" -Destination "..\btcgreen-blockchain-gui\packages\gui\" -Recurse

Write-Output "   ---"
Write-Output "Setup npm packager"
Write-Output "   ---"
Set-Location -Path ".\npm_windows" -PassThru
npm install
$Env:Path = $(npm bin) + ";" + $Env:Path

Set-Location -Path "..\..\" -PassThru
If ($env:HAS_SECRET) {
    $env:CSC_LINK = Join-Path "." "win_code_sign_cert.p12" -Resolve
}

Write-Output "   ---"
Write-Output "Prepare Electron packager"
Write-Output "   ---"
$Env:NODE_OPTIONS = "--max-old-space-size=3000"

# Change to the GUI directory
Set-Location -Path "btcgreen-blockchain-gui\packages\gui" -PassThru

Write-Output "   ---"
Write-Output "Increase the stack for btcgreen command for (btcgreen plots create) chiapos limitations"
# editbin.exe needs to be in the path
editbin.exe /STACK:8000000 daemon\btcgreen.exe
Write-Output "   ---"

$packageVersion = "$env:BTCGREEN_INSTALLER_VERSION"
$packageName = "BTCgreen-$packageVersion"

Write-Output "packageName is $packageName"

Write-Output "   ---"
Write-Output "fix version in package.json"
choco install jq
cp package.json package.json.orig
jq --arg VER "$env:BTCGREEN_INSTALLER_VERSION" '.version=$VER' package.json > temp.json
rm package.json
mv temp.json package.json
Write-Output "   ---"

Write-Output "   ---"
Write-Output "electron-builder"
electron-builder build --win --x64 --config.productName="BTCgreen"
Get-ChildItem dist\win-unpacked\resources
Write-Output "   ---"

If ($env:HAS_SECRET) {
   Write-Output "   ---"
   Write-Output "Verify signature"
   Write-Output "   ---"
   signtool.exe verify /v /pa .\dist\BTCgreenSetup-$packageVersion.exe
   }   Else    {
   Write-Output "Skipping verify signatures - no authorization to install certificates"
}

Write-Output "   ---"
Write-Output "Moving final installers to expected location"
Write-Output "   ---"
Copy-Item ".\dist\win-unpacked" -Destination "$env:GITHUB_WORKSPACE\btcgreen-blockchain-gui\BTCgreen-win32-x64" -Recurse
mkdir "$env:GITHUB_WORKSPACE\btcgreen-blockchain-gui\release-builds\windows-installer" -ea 0
Copy-Item ".\dist\BTCgreenSetup-$packageVersion.exe" -Destination "$env:GITHUB_WORKSPACE\btcgreen-blockchain-gui\release-builds\windows-installer"

Write-Output "   ---"
Write-Output "Windows Installer complete"
Write-Output "   ---"
