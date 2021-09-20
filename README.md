# YouTubeSpeeder
In recent years YouTube introduced some great options for controlling playback speed... but it's not perfect yet.

* the `shift + .` / `shift + ,` incrementation of 25% is not exact enough and can't be customized.
* After modifying the playback speed YouTube does not show you the adjusted runtime of the video.

## Features

Whenever the playback speed of a video is altered, the adjusted duration and the actual time elapsed are displayed next to the regular duration display:

![example](./example.png)

The script provides the following additional shortcuts:
* `Shift + Arrow Up`: Increase playback speed
* `Shift + Arrow Down`: Decrease playback speed
* `Alt + Shift + Arrow Up`: Increase change interval by 0.05
* `Alt + Shift + Arrow Down`: Decrease change interval by 0.05

## Installing 
This userscript is tested with TamperMonkey.
Install it from [GreasyFork]() or copy the contents of  `yt-speed.js` into TamperMonkey yourself.

## Bugs
* If the playback rate has been set via the script, selecting "Normal" from the playback speed menu will **not** reset the rate back to 1.
* Setting the playback speed via the "Custom" option while the speed is modified by the script does nothing.