!include "nsDialogs.nsh"

; Add our customizations to the finish page
!macro customFinishPage
XPStyle on

Var DetectDlg
Var FinishDlg
Var BTCgreenSquirrelInstallLocation
Var BTCgreenSquirrelInstallVersion
Var BTCgreenSquirrelUninstaller
Var CheckboxUninstall
Var UninstallBTCgreenSquirrelInstall
Var BackButton
Var NextButton

Page custom detectOldBTCgreenVersion detectOldBTCgreenVersionPageLeave
Page custom finish finishLeave

; Add a page offering to uninstall an older build installed into the btcgreen-blockchain dir
Function detectOldBTCgreenVersion
  ; Check the registry for old btcgreen-blockchain installer keys
  ReadRegStr $BTCgreenSquirrelInstallLocation HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\btcgreen-blockchain" "InstallLocation"
  ReadRegStr $BTCgreenSquirrelInstallVersion HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\btcgreen-blockchain" "DisplayVersion"
  ReadRegStr $BTCgreenSquirrelUninstaller HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\btcgreen-blockchain" "QuietUninstallString"

  StrCpy $UninstallBTCgreenSquirrelInstall ${BST_UNCHECKED} ; Initialize to unchecked so that a silent install skips uninstalling

  ; If registry keys aren't found, skip (Abort) this page and move forward
  ${If} BTCgreenSquirrelInstallVersion == error
  ${OrIf} BTCgreenSquirrelInstallLocation == error
  ${OrIf} $BTCgreenSquirrelUninstaller == error
  ${OrIf} $BTCgreenSquirrelInstallVersion == ""
  ${OrIf} $BTCgreenSquirrelInstallLocation == ""
  ${OrIf} $BTCgreenSquirrelUninstaller == ""
  ${OrIf} ${Silent}
    Abort
  ${EndIf}

  ; Check the uninstall checkbox by default
  StrCpy $UninstallBTCgreenSquirrelInstall ${BST_CHECKED}

  ; Magic create dialog incantation
  nsDialogs::Create 1018
  Pop $DetectDlg

  ${If} $DetectDlg == error
    Abort
  ${EndIf}

  !insertmacro MUI_HEADER_TEXT "Uninstall Old Version" "Would you like to uninstall the old version of BTCgreen Blockchain?"

  ${NSD_CreateLabel} 0 35 100% 12u "Found BTCgreen Blockchain $BTCgreenSquirrelInstallVersion installed in an old location:"
  ${NSD_CreateLabel} 12 57 100% 12u "$BTCgreenSquirrelInstallLocation"

  ${NSD_CreateCheckBox} 12 81 100% 12u "Uninstall BTCgreen Blockchain $BTCgreenSquirrelInstallVersion"
  Pop $CheckboxUninstall
  ${NSD_SetState} $CheckboxUninstall $UninstallBTCgreenSquirrelInstall
  ${NSD_OnClick} $CheckboxUninstall SetUninstall

  nsDialogs::Show

FunctionEnd

Function SetUninstall
  ; Set UninstallBTCgreenSquirrelInstall accordingly
  ${NSD_GetState} $CheckboxUninstall $UninstallBTCgreenSquirrelInstall
FunctionEnd

Function detectOldBTCgreenVersionPageLeave
  ${If} $UninstallBTCgreenSquirrelInstall == 1
    ; This could be improved... Experiments with adding an indeterminate progress bar (PBM_SETMARQUEE)
    ; were unsatisfactory.
    ExecWait $BTCgreenSquirrelUninstaller ; Blocks until complete (doesn't take long though)
  ${EndIf}
FunctionEnd

Function finish

  ; Magic create dialog incantation
  nsDialogs::Create 1018
  Pop $FinishDlg

  ${If} $FinishDlg == error
    Abort
  ${EndIf}

  GetDlgItem $NextButton $HWNDPARENT 1 ; 1 = Next button
  GetDlgItem $BackButton $HWNDPARENT 3 ; 3 = Back button

  ${NSD_CreateLabel} 0 35 100% 12u "BTCgreen has been installed successfully!"
  EnableWindow $BackButton 0 ; Disable the Back button
  SendMessage $NextButton ${WM_SETTEXT} 0 "STR:Let's Farm!" ; Button title is "Close" by default. Update it here.

  nsDialogs::Show

FunctionEnd

; Copied from electron-builder NSIS templates
Function StartApp
  ${if} ${isUpdated}
    StrCpy $1 "--updated"
  ${else}
    StrCpy $1 ""
  ${endif}
  ${StdUtils.ExecShellAsUser} $0 "$launchLink" "open" "$1"
FunctionEnd

Function finishLeave
  ; Launch the app at exit
  Call StartApp
FunctionEnd

; Section
; SectionEnd
!macroend
